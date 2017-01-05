//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");

console.log('Loading metadata...');

var ctx = execfile('metadata/all/indikatoren.js');
var indikatoren = ctx.indikatoren;
var indikatorensets = {};
var indikatorensetNames = [];
 
indikatoren.forEach(function(indikator){
    console.log('Adding chart ' + indikator.id + ' to Indikatorenset ' + indikator.kennzahlenset + '...');
    saveToIndikatorensetJson(indikator.id, indikator, console);
});


console.log('deleting previous kennzahlenset files...');
var rimraf = require("rimraf");
rimraf('metadata/sets/*', function(error) {
    if (error) { throw error; };
    saveIndikatorenSets(indikatorensets);
    
    saveToJsonFile('indikatorensetNames', indikatorensetNames, console);
});


function saveIndikatorenSets(indikatorensets){
    for (var indikatorenset in indikatorensets){
        var setNameJson = JSON.stringify(indikatorenset);
        var setName = setNameJson.replace(/["']/g, "");
        if (indikatorenset != {}){
            console.log('Creating file for Indikatorenset ' + setName);
            var fs = require('fs');
            var setJson = "var indikatorenset = " + JSON.stringify(indikatorensets[indikatorenset], null, '\t') + ";";
            fs.writeFile('metadata/sets/' + setName + '.js', setJson);
            
            indikatorensetNames.push(setName);
        }
    }
}


function saveToIndikatorensetJson(kuerzel, obj, console){
    var set = (obj['kennzahlenset'] || {});
    indikatorensets[set] = indikatorensets[set] || [];
    indikatorensets[set].push(obj);
}


function saveToJsonFile(name, obj, console){
    var fs = require('fs');
    var jsonFile = "var " + name + " = " + JSON.stringify(obj, null, '\t') + ";";
    fs.writeFile('metadata/sets/' + name + '.js', jsonFile);
};
