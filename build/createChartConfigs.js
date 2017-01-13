//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

/**
 * Sample of serverside generation of Highcharts using an extension to jsdom in node.js.
 *
 * Usage: 
 * npm install jsdom
 * npm install highcharts@4.2.6
 * node createThumbnails
 */

//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");
var serialize = require('serialize-javascript');
var glob = require("glob");
console.log('Loading wohnviertel shapes...');
var ctx = execfile('geojson/wohnviertel_reproj_mollweide_simp.js');
var geojson_wohnviertel = ctx.geojson_wohnviertel;


console.log('deleting previous chart configs...');
var rimraf = require("rimraf");
rimraf('charts/configs/indikatorenset/*', function(error) {
    if (error) { throw error; }
    rimraf('charts/configs/portal/*', function(error) {
        if (error) { throw error; }

        var views = [true, false];
        views.forEach(function(view){
            console.log('Starting creation of chart config for indikatorensetView=' + view);
            
            var files = glob.sync("metadata/single/*.js");
            files.forEach(function(filepath){
                var ctx = execfile(filepath);
                var indikator = ctx.indikatoren[0];
                if (indikator.visible == undefined || indikator.visible){
                    console.log('Creating config for chart ' + indikator.id + ', indikatorensetView=' + view +'...');
                    createChartConfig(indikator, view, console);
                }
                else {
                    console.log('Chart ' + indikator.id + ' is invisible, ignoring.');
                }
            });
        });
    });
});




//todo: get rid of all the jsdom code if not needed 
function createChartConfig(indikator, indikatorensetView, console){
    var fs = require('fs');

    //from https://github.com/kirjs/react-highcharts/blob/b8e31a26b741f94a13a798ffcc1f1b60e7764676/src/simulateDOM.js 
    var jsdom = require('jsdom');

    global.document = jsdom.jsdom('<!doctype html><html><body><div id="container-' + indikator.id + '"></div></body></html>', { virtualConsole });
    var virtualConsole = jsdom.createVirtualConsole().sendTo(console);
    var win = global.document.defaultView;
    global.window = global;
    for( var i in win ){
        if( i !== 'window' && win.hasOwnProperty(i)){
            global.window[i] = win[i];
        }
    }

    var Highcharts = require('highcharts');
    //Error bars need highcharts-more. How to import: http://stackoverflow.com/q/34505816
    require('highcharts/highcharts-more')(Highcharts);
    var Highcharts_data = require('highcharts/modules/data')(Highcharts);
    var Highcharts_map = require('highcharts/modules/map')(Highcharts);

    var ctx = execfile('geojson/rhein_reproj_mollweide_simp.js', {Highcharts: Highcharts, console: console});
    var rheinData = ctx.rheinData;
    
    // Disable all animation
    Highcharts.setOptions({
        plotOptions: {
            series: {
                animation: false,
                dataLabels: {
                    defer: false
                }
            }
        },
        lang: {
            decimalPoint: ",",
            thousandsSep: " "
        }  
    });

    var csv = (fs.readFileSync('data/' + indikator.id + '.tsv', 'utf8'));

    ctx = execfile('charts/templates/' + indikator.id + '.js', {Highcharts: Highcharts, chartOptions: {}, geojson_wohnviertel: geojson_wohnviertel, rheinData: rheinData});
    var options = ctx.chartOptions;

    //disable animations and prevent exceptions
    options.chart = (options.chart || {});
    options.chart.forExport = true;

    var templateName = indikator.template;
    ctx = execfile('charts/templates/' + templateName + '.js', {Highcharts: Highcharts});
    var template = ctx.template;


    ctx = execfile("assets/js/indikatoren-highcharts.js", { 
        Highcharts: Highcharts, 
        console: console, 
        template: template
    });

    ctx.createChartConfig(csv, options, indikator, indikatorensetView, false, function(options){
        var stringifiedOptions = serialize(options, {space: 2});
        var filePath = (indikatorensetView) ? 'charts/configs/indikatorenset/' : 'charts/configs/portal/';
        //console.log(stringifiedOptions);
        fs.writeFile(filePath + indikator.id + '.json', stringifiedOptions);
    });
}