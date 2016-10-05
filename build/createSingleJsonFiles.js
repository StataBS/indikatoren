//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");

console.log('Loading metadata...');

var ctx = execfile('data/indikatoren.js');
var indikatoren = ctx.indikatoren;
var indikatorensets;
 
indikatoren.forEach(function(indikator){
    console.log('Creating json for chart ' + indikator.kuerzel + '...');
    saveToJsonFile(indikator.kuerzel, indikator, console);
});

console.log('...done!');


function saveToJsonFile(kuerzel, obj, console){
    var fs = require('fs');
    var singleJson = "var indikator = " + JSON.stringify(obj) + ";";
    fs.writeFile('data/' + kuerzel + '.js', singleJson);
};
