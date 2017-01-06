//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");
var serialize = require('serialize-javascript');
var fs = require('fs');
var glob = require("glob");
var path = require('path')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

console.log('deleting previous chart configs...');
var rimraf = require("rimraf");
rimraf('images/indikatorenset/*', function(error) {
    if (error) { throw error; }
    rimraf('images/portal/*', function(error) {
        if (error) { throw error; }
        go();
    });
});


//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}


function go(){
    console.log('Starting MultiArgsFile creation...');
    var allArgs = [];
    var views = [true, false];
    views.forEach(function(view){
        console.log('Creating MultiArgsFile entries for indikatorensetView=' + view);
        var files = glob.sync("metadata/single/*.js");
        files.forEach(function(filepath){
            var ctx = execfile(filepath);
            var indikator = ctx.indikatoren[0];
            if (indikator.visible == undefined || indikator.visible){            
                console.log('Creating MultiArgsFile entries for chart ' + indikator.id + ' indikatorensetView=' + view +'...');
                var imagePath = (view) ? 'images/indikatorenset/' : 'images/portal/';
                var configPath = (view) ? 'charts/configs/indikatorenset/' : 'charts/configs/portal/';
                //check if the chart is of type map and set 'constr' parameter accordingly 
                var configFile = fs.readFileSync(configPath + indikator.id + '.json', 'utf8');
                var config = deserialize(configFile);
                var constr = (config.chart.type === 'map') ? 'Map' : 'Chart';
                
                var currentArg = [
                    path.join(__dirname, 'highcharts-convert.js'),
                    '-infile', path.join(__dirname, '../' + configPath + indikator.id + '.json'),
                    '-outfile', path.join(__dirname, '../' + imagePath + indikator.id + '.svg'),
                    '-constr', constr
                ];
                allArgs.push(currentArg);
            }
            else {
                console.log('Chart ' + indikator.id + ' is invisible, ignoring.');
            }
        });
    });
    var allArgsObj = {allArgs};
    console.log('Saving MultiArgsFile to ' + path.join(__dirname, 'convertArgs2.json') + '...');
    fs.writeFileSync(path.join(__dirname, 'convertArgs.json'), JSON.stringify(allArgsObj, null, '\t'));
    console.log('Invoking PhantomJs to render all images...');
    renderMultipleImages(console);
    console.log('Adding svg ViewBox for ie...');
    addSvgViewBox(console);
}


function addSvgViewBox(console){
    var views = [true, false];
    views.forEach(function(view){
        var files = glob.sync("metadata/single/*.js");
        files.forEach(function(filepath){
            var ctx = execfile(filepath);
            var indikator = ctx.indikatoren[0];
            if (indikator.visible == undefined || indikator.visible){            
                var path = (view) ? 'images/indikatorenset/' : 'images/portal/';
                var svg = fs.readFileSync(path + indikator.id + '.svg', 'utf8');
                //replace hardcoded height and width with hardcoded viewBox in order to make pics compatible with IE. 
                var regex = 'width="(.*?)" height="(.*?)">';
                var re = new RegExp (regex);
                var replace = 'viewBox="0 0 $1 $2">';
                var svgWithViewBox = svg.replace(re, replace);            
                fs.writeFile(path + indikator.id + '.svg', svgWithViewBox);
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