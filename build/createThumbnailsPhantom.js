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
var ctx = execfile('metadata/indikatoren.js');
var indikatoren = ctx.indikatoren;

console.log('Starting MultiArgsFile creation...');
var allArgs = [];
//console.log(JSON.stringify(allArgs));
var views = [true, false];
views.forEach(function(view){
    console.log('Creating MultiArgsFile entries for indikatorensetView=' + view);
    indikatoren.forEach(function(indikator){
        //if (indikator.kuerzel === 'I.01.1.0015'){
            console.log('Creating MultiArgsFile entries for chart ' + indikator.kuerzel + ' indikatorensetView=' + view +'...');
            var imagePath = (view) ? 'images/indikatorenset/' : 'images/portal/';
            var configPath = (view) ? 'charts/configs/indikatorenset/' : 'charts/configs/portal/';
            var currentArg = [
                path.join(__dirname, 'highcharts-convert.js'),
                '-infile', path.join(__dirname, '../' + configPath + indikator.kuerzel + '.json'),
                '-outfile', path.join(__dirname, '../' + imagePath + indikator.kuerzel + '.svg')
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


//console.log('...done starting commands, now waiting for execution callbacks...');
     
function renderMultipleImages(console){
    //dummy, not really used anymore, but must exist
    var imagePath = 'images/portal/';
    var configPath = 'charts/configs/portal/';
    
    var childArgs = [
        //path.join(__dirname, '../node_modules/highcharts-phantomjs/lib/highcharts-convert.js'),
        path.join(__dirname, 'highcharts-convert.js'),
        '-infile ' + path.join(__dirname, '../' + configPath + 'I.01.1.0013.json'),
        '-outfile ' + path.join(__dirname, '../' + imagePath + 'I.01.1.0013.svg'),
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