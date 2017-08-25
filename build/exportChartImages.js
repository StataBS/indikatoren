const exporter = require('highcharts-export-server');
//var execfile = require("execfile");
var fs = require('fs');
var path = require('path');

/*
//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var vm = require("vm");
var execute = function(path, context) {
  context = context || {};
  var data = fs.readFileSync(path);
  var result = vm.runInNewContext(data, context, path);
  return {context: context, result: result};
};
*/

/*
var keysFilePath = path.join(__dirname, '../metadata/all/kuerzelById.json');
var ctx = execute(keysFilePath);
var kuerzelById = ctx.kuerzelById;
*/

var kuerzelById = JSON.parse(fs.readFileSync(path.join(__dirname, '../metadata/all/kuerzelById.json'), 'utf8'));

var chartDetails = [];

console.log('Deleting previous svg files...');
var rimraf = require("rimraf");
rimraf('images/indikatorenset/*', function(error) {
    if (error) { throw error; }
    rimraf('images/portal/*', function(error) {
        if (error) { throw error; }
        go();
    });
});



function go(){
    var views = [true, false];
    views.forEach(function(view){
        console.log('Creating array entries for indikatorensetView=' + view);
        Object.keys(kuerzelById).forEach(function(chartId) {
            chartDetails.push(createPathArray(chartId, view));
        });
    });
    
    exporter.initPool(
        {
            maxWorkers: 1,
            initialWorkers: 1,
            workLimit: 10
        });
    createSvgImages(chartDetails);
}


function createPathArray(chartId, view){
    var imagePath = (view) ? 'images/indikatorenset/' : 'images/portal/';
    var configPath = (view) ? 'charts/configs/indikatorenset/' : 'charts/configs/portal/';
    var infilePath = path.join(__dirname, '../' + configPath + chartId + '.json');
    var outfilePath = path.join(__dirname, '../' + imagePath + chartId + '.svg');
    
    var configFile = fs.readFileSync(infilePath, 'utf8');
    var config = deserialize(configFile);
    //decide if stockchart, map, or chart
    var constr = config.isStock ? 'StockChart': (config.chart.type === 'map' ? 'Map' : 'Chart');
    return {
        config: config, 
        infilePath: infilePath, 
        outfilePath: outfilePath,
        constr: constr
    };
}


//alternatively use looping style used here: https://github.com/highcharts/node-export-server/issues/41 
function createSvgImages(chartDetails){
    if (chartDetails.length > 0){
        var chartEntry = chartDetails.pop();   
        //console.log('Current infile: ' + chart.infile);
        //if (chartEntry.infilePath.indexOf('6009') > 0 ){
            var exportSettings = {
                type: 'svg',
                infile: chartEntry.infilePath,
                constr: chartEntry.constr,
                outfile: chartEntry.outfilePath, 
                //define empty mappie here to satisfy export server, same as in options001.js
                customCode: "function(){Highcharts.seriesType('mappie', 'pie', {}, {});}()", 
                //add proj4 and jQuery to export server's dependencies
                resources: {
                    files: "node_modules/proj4/dist/proj4.js,node_modules/jquery/dist/jquery.min.js"
                }
            };
    
            exporter.export(exportSettings, function (err, res) {
                if (err) {throw err}
                //The export result is now in res.
                //If the output is not PDF or SVG, it will be base64 encoded (res.data).
                //If the output is a PDF or SVG, it will contain a filename (res.filename).
                console.log('File created: ' + res.filename + ', ' + chartDetails.length + ' to go...');
                createSvgImages(chartDetails);
            });
        }
        else {
            console.log('...done!');
            exporter.killPool();
            process.exit();
        }
    //}
}


//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}

