//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");
var glob = require("glob");

var indikatorensets = {};
var indikatorensetNames = [];

var files = glob.sync("metadata/single/*.js");
files.forEach(function(filepath){
    var ctx = execfile(filepath);
    var indikator = ctx.indikatoren[0];
    if (indikator.visible == undefined || indikator.visible){
        console.log('Adding chart ' + indikator.id + ' to Indikatorenset ' + indikator.kennzahlenset + '...');
        saveToIndikatorensetJson(indikator.id, indikator, console);
    }
    else {
        console.log('Chart ' + indikator.id + ' is invisible, ignoring.');
    }
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
            var setJson = "var indikatorensetData = " + JSON.stringify(indikatorensets[indikatorenset], null, '\t') + ";";
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
