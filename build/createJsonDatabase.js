//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");


//use glob: http://stackoverflow.com/a/25580289 
//npm install glob

var glob = require("glob");
var indikatoren = [];
console.log('Searching for json files...');
var files = glob.sync("metadata/single/I*.js");
files.forEach(function(filepath){
    console.log('Adding ' + filepath + ' to json database...');
    var ctx = execfile(filepath);
    var indikator = ctx.indikatoren[0];
    indikatoren.push(indikator);            
});
console.log('Saving json database...');
saveToJsonFile('indikatoren', indikatoren, console);
console.log('...done!');

function saveToJsonFile(name, obj, console){
    var fs = require('fs');
    var jsonFile = "var indikatoren = " + JSON.stringify(obj, null, '\t') + ";";
    fs.writeFile('metadata/' + name + '.js', jsonFile);
};
