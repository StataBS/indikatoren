//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");
var serialize = require('serialize-javascript');
console.log('Loading metadata...');
var ctx = execfile('metadata/indikatoren.js');
var indikatoren = ctx.indikatoren;

var views = [true, false];
views.forEach(function(view){
    console.log('Starting svg creation for indikatorensetView=' + view);
    indikatoren.forEach(function(indikator){
        console.log('Rendering svg for chart ' + indikator.kuerzel + ' indikatorensetView=' + view +'...');
        renderToFile(indikator.kuerzel, view, console);
    });
})

console.log('...done starting commands, now waiting for execution callbacks...');
     
function renderToFile(kuerzel, indikatorensetView, console){

    var path = require('path')
    var phantomjs = require('phantomjs-prebuilt')
    var binPath = phantomjs.path
    var imagePath = (indikatorensetView) ? 'images/indikatorenset/' : 'images/portal/';
    
    var childArgs = [
        path.join(__dirname, '../node_modules/highcharts-phantomjs/lib/highcharts-convert.js'),
        '-infile ' + path.join(__dirname, '../charts/configs/' + kuerzel + '.json'),
        '-outfile ' + path.join(__dirname, '../' + imagePath + kuerzel + '.svg')
    ]

    var command = binPath + " " + childArgs.join(" ");

    //console.log("executing the following line:");
    //console.log(command);

    var child_process = require('child_process');

    //todo: execute synchronously
    //todo: start phantom server and send options via http post instaed of using new phantom instance every time
    var process = child_process.exec(command, function(err,stdout,stderr) {
        if (err) {
            console.log('Child process exited with error code', err.code);
            console.log(stderr);
            return
        }
        console.log("Image for " + kuerzel + " successfully rendered.");
        //console.log(stdout);
    });
};