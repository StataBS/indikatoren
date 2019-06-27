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
//var execfile = require("execfile");

var vm = require("vm");
var fs = require("fs");
var eol = require("eol");

var execute = function(path, context) {
  context = context || {};
  var data = fs.readFileSync(path);
  var result = vm.runInNewContext(data, context, path);
  return {context: context, result: result};
};


var serialize = require('serialize-javascript');
var glob = require("glob");
console.log('Loading wohnviertel shapes...');
var geojson_wohnviertelEPSG2056 = JSON.parse(fs.readFileSync('geojson/wohnviertel_EPSG_2056.json'));
console.log('Loading rhein shape...');
var geojson_rheinEPSG2056 = JSON.parse(fs.readFileSync('geojson/rhein_EPSG_2056.json'));
console.log('Loading scalebar shape...');
var geojson_scalebarEPSG2056 = JSON.parse(fs.readFileSync('geojson/scalebar_EPSG_2056.json'));



//console.log('deleting previous chart configs...');
//var rimraf = require("rimraf");
//rimraf('charts/configs/indikatorenset/*', function(error) {
    //if (error) { throw error; }
    //rimraf('charts/configs/portal/*', function(error) {
        //if (error) { throw error; }

        //var views = [true, false];
        var views = ['portal'/*, 'print'*/];
        views.forEach(function(view){
            console.log('Starting creation of chart config for indikatorensetView=' + view);

            var files = JSON.parse(fs.readFileSync('tmp/chartsToBuild.json'));
            files.forEach(function(id){
                var indikator = JSON.parse(fs.readFileSync('metadata/single/' + id + '.json'));
                //only create json files if indikator is visible and not from kennzahlenset "Umwelt"
                if ((indikator.visible == undefined || indikator.visible) && indikator.kennzahlenset != "Umwelt"){
                    console.log('Creating config for chart ' + indikator.id + ', view=' + view +'...');
                    saveChartConfig(indikator, view, console);
                }
                else {
                    console.log('Chart ' + indikator.id + ' is invisible or in kennzahlenset "Umwelt", ignoring.');
                }
            });
        });
//    });
//});


function isIndikatorensetView(view){
  return ((view == true || view == "indikatorenset") ? true :  false);
}



//todo: get rid of all the jsdom code if not needed 
function saveChartConfig(indikator, view, console){
    var fs = require('fs');
    //from https://github.com/kirjs/react-highcharts/blob/b8e31a26b741f94a13a798ffcc1f1b60e7764676/src/simulateDOM.js 
    var jsdom = require('jsdom');

    var virtualConsole = jsdom.createVirtualConsole().sendTo(console);
    global.document = jsdom.jsdom('<!doctype html><html><body><div id="container-' + indikator.id + '"></div></body></html>', { virtualConsole });
    var win = global.document.defaultView;
    global.window = global;
    for( var i in win ){
        if( i !== 'window' && win.hasOwnProperty(i)){
            global.window[i] = win[i];
        }
    }

    var Highcharts = require('highcharts/highstock');
    //Error bars need highcharts-more. How to import: http://stackoverflow.com/q/34505816
    require('highcharts/highcharts-more')(Highcharts);
    var Highcharts_data = require('highcharts/modules/data')(Highcharts);
    var Highcharts_map = require('highcharts/modules/map')(Highcharts);
    
    //convert rhein shape to geojson, see http://api.highcharts.com/highmaps/Highcharts.geojson
    var rheinDataEPSG2056 = Highcharts.geojson(geojson_rheinEPSG2056, 'map');
    var scalebarDataEPSG2056 = Highcharts.geojson(geojson_scalebarEPSG2056, 'mapline');

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

    try{
        var csv = (fs.readFileSync('data/' + (indikator["data-id"] || indikator.id) + '.tsv', 'utf8'));
        //remove quotes from data
        var dataWithoutQuotes = csv.replace(/"/g, "");
        var result = execute('charts/templates/' + (indikator["chart-id"] || indikator.id) + '.js', {Highcharts: Highcharts, geojson_wohnviertelEPSG2056: geojson_wohnviertelEPSG2056, rheinDataEPSG2056: rheinDataEPSG2056, scalebarDataEPSG2056: scalebarDataEPSG2056, console: console});
        var options = (result.result || {} );
    
        //disable animations and prevent exceptions
        options.chart = (options.chart || {});
        //forExport = true  -- crashes highcharts export server for chart 4741
        //options.chart.forExport = true;
        
        result = execute('charts/templates/' + indikator.template + '.js', {Highcharts: Highcharts, geojson_wohnviertelEPSG2056: geojson_wohnviertelEPSG2056, rheinDataEPSG2056: rheinDataEPSG2056, scalebarDataEPSG2056: scalebarDataEPSG2056,  console: console});
        var template = result.result;
    
        var ctx = execute("assets/js/indikatoren-highcharts.js", {Highcharts: Highcharts, chartOptions: {},  geojson_wohnviertelEPSG2056: geojson_wohnviertelEPSG2056, rheinDataEPSG2056: rheinDataEPSG2056, scalebarDataEPSG2056: scalebarDataEPSG2056, console: console}).context;
        
        ctx.createChartConfig(dataWithoutQuotes, options, template, indikator, view, true, function(options){
            var stringifiedOptions = serialize(options, {space: 2});
            var filePath = 'charts/configs/' + view + '/';
            //var filePath = (isIndikatorensetView(view)) ? 'charts/configs/indikatorenset/' : 'charts/configs/portal/';
            fs.writeFileSync(filePath + indikator.id + '.json', eol.auto(stringifiedOptions));
        });
        
    }
    catch(error){
        console.log('Exception when creating config for ' + indikator.id + ': ' + error);
    }
}
