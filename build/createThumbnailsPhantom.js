//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");

var serialize = require('serialize-javascript');

console.log('Loading metadata...');

var ctx = execfile('metadata/indikatoren.js');
var indikatoren = ctx.indikatoren;

var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

//todo: fix: uncommenting the following line breaks the code
//var highchartsPhantomjs = require('highcharts-phantomjs');
//var scriptPath = highchartsPhantomjs.path + "/lib/highcharts-convert.js"; 

var views = [true, false];
views.forEach(function(view){
    console.log('Starting svg creation for indikatorensetView=' + view);
    indikatoren.forEach(function(indikator){
        if (indikator.kuerzel === 'I.01.5.0003' || indikator.kuerzel === 'I.01.1.0013' || indikator.kuerzel === 'I.01.1.0023'){
            console.log('Rendering svg for chart ' + indikator.kuerzel + ' indikatorensetView=' + view +'...');
            renderToFile(indikator.kuerzel, view, console);
        }
    });
})

console.log('...done!');
     
function renderToFile(kuerzel, indikatorensetView, console){
    /*
    var childArgs = [
    path.join(__dirname, 'phantomjs-script.js'),
    'some other argument (passed to phantomjs script)'
    ]

    console.log("executing the following line:");
    console.log(binPath + " "  + childArgs);
    */
    //childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    // handle results
    //})

    
    /*

    Now on mac invoke this command to create the svg: 
    
    node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs node_modules/highcharts-phantomjs/lib/highcharts-convert.js -infile finalcharts/I.01.5.0003.json -outfile finalcharts/I.01.5.0003.svg
    node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs node_modules/highcharts-phantomjs/lib/highcharts-convert.js -infile finalcharts/I.01.1.0023.json -outfile finalcharts/I.01.1.0023.svg

    todo: invoke command from javascript code, e.g. as done here: https://github.com/Medium/phantomjs
    */
};