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
console.log('Loading metadata...');
var ctx = execfile('metadata/indikatoren.js');
var indikatoren = ctx.indikatoren;

var views = [true, false];
views.forEach(function(view){
    console.log('Starting creation of chart config for indikatorensetView=' + view);
    indikatoren.forEach(function(indikator){
        console.log('Creating config for chart ' + indikator.kuerzel + ', indikatorensetView=' + view +'...');
        createChartConfig(indikator.kuerzel, view, console);
    });
})

//console.log('...done!');

//todo: get rid of all the jsdom code if not needed 
function createChartConfig(kuerzel, indikatorensetView, console){
    var jsdom = require('jsdom'),
        fs = require('fs');


    // Get the document and window
    var doc = jsdom.jsdom('<!doctype html><html><body><div id="container-' + kuerzel + '"></div></body></html>', { virtualConsole }),
        win = doc.defaultView;

    var virtualConsole = jsdom.createVirtualConsole().sendTo(console);

    // Require Highcharts with the window shim
    var Highcharts = require('highcharts')(win);
    //Error bars need highcharts-more. How to import: http://stackoverflow.com/q/34505816
    require('highcharts/highcharts-more')(Highcharts);
    //var Highcharts_more = require('Highcharts/highcharts-more')(win);
    var Highcharts_data = require('highcharts/modules/data')(Highcharts);
    
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

    for (var i=0; i<indikatoren.length; i++){
        if (indikatoren[i].kuerzel === kuerzel){
            var chartMetaData = indikatoren[i];
            break;
        }
    };

    var csv = (fs.readFileSync('data/' + kuerzel + '.csv', 'utf8'));

    var ctx = execfile('charts/templates/' + kuerzel + '.js', {Highcharts: Highcharts, chartOptions: {}});
    var options = ctx.chartOptions[kuerzel];

    //disable animations and prevent exceptions
    options.chart = (options.chart || {});
    options.chart.forExport = true;

    var templateName = chartMetaData.template;
    var ctx = execfile('charts/templates/' + templateName + '.js', {Highcharts: Highcharts});
    var template = ctx.template;


    var ctx = execfile("assets/js/indikatoren-highcharts.js", { 
        Highcharts: Highcharts, 
        console: console, 
        template: template
    });

    ctx.createChartConfig(csv, options, chartMetaData, indikatorensetView, function(options){
        var stringifiedOptions = serialize(options, {space: 2});
        var filePath = (indikatorensetView) ? 'charts/configs/indikatorenset/' : 'charts/configs/portal/';
        //console.log(stringifiedOptions);
        fs.writeFile(filePath + kuerzel + '.json', stringifiedOptions);
    });
};