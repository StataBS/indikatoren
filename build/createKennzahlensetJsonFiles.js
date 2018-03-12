var fs = require("fs");
var glob = require("glob");
var path = require("path");
var indikatorensets = {};
var indikatorensetNames = [];

var files = glob.sync("metadata/single/*.json");
files.forEach(function(filepath){
    var fileContents = fs.readFileSync(filepath);
    var indikator = JSON.parse(fileContents);
    if (indikator.visible == undefined || indikator.visible){
        //if no orderKey defined yet, take kuerzelKunde as orderKey
        if(!indikator.orderKey){
            indikator.orderKey = indikator.kuerzelKunde;
        }
        console.log('Adding chart ' + indikator.id + ' to Indikatorenset ' + indikator.kennzahlenset + '...');
        //clean up
         delete indikator.visible;
         delete indikator.visibleInPortal;
         delete indikator.option;        

	    //retrieve id from filename instead of from file contents
	    var idFromFileName = path.basename(filepath, path.extname(filepath));
        delete indikator.id;
        indikator.id = parseInt(idFromFileName, 10);
         
        saveToIndikatorensetJson(indikator.id, indikator, console);
    }
    else {
        console.log('Chart ' + indikator.id + ' is invisible or in kennzahlenset "Umwelt", ignoring.');
    }
});
 

console.log('deleting previous kennzahlenset files...');
var rimraf = require("rimraf");
rimraf('metadata/sets/*', function(error) {
    if (error) { throw error; }
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
            fs.writeFileSync('metadata/sets/' + setName + '.js', setJson);
            
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
    var jsonFile = "var " + name + " = " + JSON.stringify(obj, null, '\t') + ";";
    fs.writeFileSync('metadata/sets/' + name + '.js', jsonFile);
}
