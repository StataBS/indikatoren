//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");
var serialize = require('serialize-javascript');
var fs = require('fs');
console.log('Loading metadata...');
var ctx = execfile('metadata/indikatoren.js');
var indikatoren = ctx.indikatoren;

var views = [true, false];
views.forEach(function(view){
    console.log('Starting svg creation for indikatorensetView=' + view);
    indikatoren.forEach(function(indikator){
        if (indikator.kuerzel === 'I.01.1.0013' && view === true){
            console.log('Rendering svg for chart ' + indikator.kuerzel + ' indikatorensetView=' + view +'...');
            renderToFile(indikator.kuerzel, view, console);
        }
    });
});


// function taken from https://github.com/highcharts/highcharts-export-server/blob/master/phantomjs/highcharts-convert.js 
function mapArguments(argus) {
    var map = {};
    var i;
    var key;
    console.log(argus.length);
    for (i = 0; i < argus.length; i += 1) {
        if (argus[i].charAt(0) === '-') {
            key = argus[i].substr(1, i.length);
            console.log(key);
            if (key === 'infile' || key === 'callback' || key === 'dataoptions' || key === 'globaloptions' || key === 'customcode' || key === 'themeoptions') {
                // get string from file                
                map[key] = fs.readFileSync(argus[i + 1], 'utf8');                    
            } else {
                // assume PhantomJS running in serverMode. Parameter is not a file, but contains content.
                map[key] = argus[i + 1];
            }
        }
    }
    return map;
};


     
function renderToFile(kuerzel, indikatorensetView){
    var path = require('path')
    var phantomjs = require('phantomjs-prebuilt')
    var binPath = phantomjs.path
    var imagePath = (indikatorensetView) ? 'images/indikatorenset/' : 'images/portal/';
    var configPath = (indikatorensetView) ? 'charts/configs/indikatorenset/' : 'charts/configs/portal/';
    
    var childArgs = [
        '-infile','charts/configs/indikatorenset/I.01.1.0013.json',
        '-constr', 'Chart'
    ];
    console.log(childArgs);
    var argsMap = mapArguments(childArgs);
    //console.log(JSON.stringify(argsMap));
    fs.writeFileSync('build/imageCreation/I.01.1.0013.json', JSON.stringify(argsMap));

    var command = 'curl http://127.0.0.1:3005 -H "Content-Type: application/json" -X POST --data-binary "@build/I.01.1.0013.json"';
    var child_process = require('child_process');
    var stdout = child_process.execSync(command);
    console.log(stdout.toString());
    /*
    var command = binPath + " " + childArgs.join(" ");
    console.log("executing the following line:");
    console.log(command);
    console.log("arguments object: ");
    console.log(JSON.stringify(childArgs));
    */
    //todo: start phantom server and send options via http post instaed of using new phantom instance every time
    /*    
    var child_process = require('child_process');
    var stdout = child_process.execSync(command);
    console.log(stdout.toString());
    console.log("Image for " + kuerzel + " rendered.");
    */
};