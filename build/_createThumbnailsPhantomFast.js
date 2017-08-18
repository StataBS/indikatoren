//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
//var execute = require("execute");

var vm = require("vm");
var fs = require("fs");
var execute = function(path, context) {
  context = context || {};
  var data = fs.readFileSync(path);
  var result = vm.runInNewContext(data, context, path);
  return {context: context, result: result};
};

var glob = require("glob");
var path = require('path');
var phantomjs = require('phantomjs-prebuilt');
var binPath = phantomjs.path;

console.log('deleting previous chart images...');
var rimraf = require("rimraf");
rimraf.sync('images/indikatorenset/*');
rimraf.sync('images/portal/*');
rimraf.sync('images/print/*');

go();


//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}


function go(){
    console.log('Starting MultiArgsFile creation...');
    var allArgs = [];
    var views = ['indikatorenset', 'portal'/*, 'print'*/];
    views.forEach(function(view){
        console.log('Creating MultiArgsFile entries for view=' + view);
        var files = glob.sync("metadata/single/*.json");
        files.forEach(function(filepath){
            var fileContents = fs.readFileSync(filepath);
            var indikator = JSON.parse(fileContents);
            //for the moment we exclude charts of type mappie todo: fix svg creation of mappie
            var mappie = (fileContents.indexOf('mappie') > 0);
            if ((indikator.visible == undefined || indikator.visible) && !mappie) {                  
                console.log('Creating MultiArgsFile entries for chart ' + indikator.id + ' view=' + view +'...');
                var imagePath = 'images/' + view + '/';
                var configPath = 'charts/configs/' + view + '/';
                //check if the chart is of type map and set 'constr' parameter accordingly 
                var configFile = fs.readFileSync(configPath + indikator.id + '.json', 'utf8');
                var config = deserialize(configFile);
                var constr = config.isStock ? 'StockChart': (config.chart.type === 'map' ? 'Map' : 'Chart');
                //file extension depends on view of chart
                var outputFileExt = (view == "print") ? '.png' : '.svg';
                var scaleParameter = (view == "print") ? '-width' : ' ';
                var scaleArgument = (view == "print") ? ' 2000' : ' ';
                var currentArg = [
                    path.join(__dirname, 'highcharts-convert.js'),
                    '-infile', path.join(__dirname, '../' + configPath + indikator.id + '.json'),
                    '-outfile', path.join(__dirname, '../' + imagePath + indikator.id + outputFileExt),
                    '-constr', constr, 
                    scaleParameter, scaleArgument
                ];
                allArgs.push(currentArg);
            }
            else {
                console.log('Chart ' + indikator.id + ' is invisible, ignoring.');
            }
        });
    });
    var allArgsObj = {allArgs};
    console.log('Saving MultiArgsFile to ' + path.join(__dirname, 'convertArgs.json') + '...');
    fs.writeFileSync(path.join(__dirname, 'convertArgs.json'), JSON.stringify(allArgsObj, null, '\t'));
    console.log('Invoking PhantomJs to render all images...');
    renderMultipleImages(console);
    console.log('Adding svg ViewBox for ie...');
    addSvgViewBox(console);
}


function addSvgViewBox(console){
    var views = ['indikatorenset', 'portal'/*, 'print'*/];
    //var views = [true, false];
    views.forEach(function(view){
        var files = glob.sync("metadata/single/*.json");
        files.forEach(function(filepath){
            var fileContents = fs.readFileSync(filepath);
            var indikator = JSON.parse(fileContents);
            //for the moment we exclude charts of type mappie todo: fix svg creation of mappie
            var mappie = (fileContents.indexOf('mappie') > 0);
            if ((indikator.visible == undefined || indikator.visible) && !mappie) {                  
                var path = 'images/' + view + '/';
                var svg = fs.readFileSync(path + indikator.id + '.svg', 'utf8');
                //replace hardcoded height and width with hardcoded viewBox in order to make pics compatible with IE. 
                var regex = 'width="(.*?)" height="(.*?)">';
                var re = new RegExp (regex);
                var replace = 'viewBox="0 0 $1 $2">';
                var svgWithViewBox = svg.replace(re, replace);            
                fs.writeFileSync(path + indikator.id + '.svg', svgWithViewBox);
            }
        });
    });
}
     
function renderMultipleImages(console){
    //dummy, not really used anymore, but must exist
    var imagePath = 'images/portal/';
    var configPath = 'charts/configs/portal/';
    
    var childArgs = [
        //path.join(__dirname, '../node_modules/highcharts-phantomjs/lib/highcharts-convert.js'),
        path.join(__dirname, 'highcharts-convert.js'),
        '-infile ' + path.join(__dirname, '../' + configPath + '4127.json'),
        '-outfile ' + path.join(__dirname, '../' + imagePath + '4127.svg'),
        '-multi true',
        '-multiArgsFile '+ path.join(__dirname, 'convertArgs.json')
    ];

    var command = binPath + " " + childArgs.join(" ");

    console.log("executing the following command line:");
    console.log(command);
    //todo: start phantom server and send options via http post instead of using new phantom instance every time    
    var child_process = require('child_process');
    var stdout = child_process.execSync(command);
    console.log(stdout.toString());
}