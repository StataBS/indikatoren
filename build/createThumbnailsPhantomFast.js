//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");
var serialize = require('serialize-javascript');
var  fs = require('fs');
var path = require('path')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

console.log('Loading metadata...');
var ctx = execfile('metadata/all/indikatoren.js');
var indikatoren = ctx.indikatoren;

//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}

console.log('Starting MultiArgsFile creation...');
var allArgs = [];
//console.log(JSON.stringify(allArgs));
var views = [true, false];
views.forEach(function(view){
    console.log('Creating MultiArgsFile entries for indikatorensetView=' + view);
    indikatoren.forEach(function(indikator){
        //if (indikator.kuerzel === 'I.01.1.0015'){
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
            //console.log(JSON.stringify(currentArg));
            allArgs.push(currentArg);
            //renderToFile(indikator.kuerzel, view, console);
        //}
    });
})
//console.log('allArgs: '); 
//console.log(JSON.stringify(allArgs));
var allArgsObj = {allArgs};
console.log('Saving MultiArgsFile to ' + path.join(__dirname, 'convertArgs2.json') + '...');
fs.writeFileSync(path.join(__dirname, 'convertArgs.json'), JSON.stringify(allArgsObj, null, '\t'));
console.log('Invoking PhantomJs to render all images...');
renderMultipleImages(console);
console.log('Adding svg ViewBox for ie...');
addSvgViewBox(console);
//console.log('...done!')

function addSvgViewBox(console){
    var views = [true, false];
    views.forEach(function(view){
        indikatoren.forEach(function(indikator){                        
            var path = (view) ? 'images/indikatorenset/' : 'images/portal/';
            var svg = fs.readFileSync(path + indikator.id + '.svg', 'utf8');
            //replace hardcoded height and width with hardcoded viewBox in order to make pics compatible with IE. 
            var regex = 'width="(.*?)" height="(.*?)">';
            var re = new RegExp (regex);
            var replace = 'viewBox="0 0 $1 $2">';
            var svgWithViewBox = svg.replace(re, replace);            
            fs.writeFile(path + indikator.id + '.svg', svgWithViewBox);
        });
    });
};
     
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
    ]

    var command = binPath + " " + childArgs.join(" ");

    console.log("executing the following command line:");
    console.log(command);
    /*
    console.log("arguments object: ");
    console.log(JSON.stringify(childArgs));
    */
    //todo: start phantom server and send options via http post instaed of using new phantom instance every time    
    var child_process = require('child_process');
    var stdout = child_process.execSync(command);
    console.log(stdout.toString());
};