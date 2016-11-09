//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");

console.log('Loading metadata...');

var ctx = execfile('metadata/all/indikatoren.js');
var indikatoren = ctx.indikatoren;
var indikatorensets = {};
 
indikatoren.forEach(function(indikator){
    console.log('Adding chart ' + indikator.kuerzel + ' to Indikatorenset ' + indikator.kennzahlenset + '...');
    saveToIndikatorensetJsonFile(indikator.kuerzel, indikator, console);
});

for (var indikatorenset in indikatorensets){
    var setNameJson = JSON.stringify(indikatorenset);
    var setName = setNameJson.replace(/["']/g, "");
    if (indikatorenset != {}){
        console.log('Creating file for Indikatorenset ' + setName);
        var fs = require('fs');
        var setJson = "var indikatorenset = " + JSON.stringify(indikatorensets[indikatorenset], null, '\t') + ";";
        fs.writeFile('metadata/sets/' + setName + '.js', setJson);
    }
};

//console.log('...done!');


function saveToIndikatorensetJsonFile(kuerzel, obj, console){
    var fs = require('fs');
    var set = (obj['kennzahlenset'] || {});
    indikatorensets[set] = indikatorensets[set] || [];
    indikatorensets[set].push(obj);
};