var fs = require("fs");
var eol = require("eol");
var glob = require("glob");
var path = require("path");
var indikatorensets = {};
var indikatorensetNames = [];

var files = glob.sync("metadata/single/*.json");
files.forEach(function(filepath){
    var fileContents = fs.readFileSync(filepath);
    var indikator = JSON.parse(fileContents);
    
	//trim all strings in object, see https://codereview.stackexchange.com/a/59543
	deepTrim(indikator);
    function deepTrim(obj) {
	    for (var prop in obj) {
	        var value = obj[prop], type = typeof value;
	        if (value != null && (type == "string" || type == "object") && obj.hasOwnProperty(prop)) {
	            if (type == "object") {
	                deepTrim(obj[prop]);
	            } else {
	                obj[prop] = obj[prop].trim();
	            }
	        }
	    }
	} 
    
    if (indikator.visible == undefined || indikator.visible){
        //if no orderKey defined yet, take kuerzelKunde as orderKey
        if(!indikator.orderKey){
            indikator.orderKey = indikator.kuerzelKunde;
        }
        //console.log('Adding chart ' + indikator.id + ' to Indikatorenset ' + indikator.kennzahlenset + '...');
        //clean up
         delete indikator.visible;
         delete indikator.visibleInPortal;
         delete indikator.option;      
         delete indikator.schlagwort;

	    //retrieve id from filename instead of from file contents
	    var idFromFileName = path.basename(filepath, path.extname(filepath));
        delete indikator.id;
        indikator.id = parseInt(idFromFileName, 10);
        
        //handle missing darstellungsart
        indikator.darstellungsart = (indikator.darstellungsart || (indikator.template.includes("map") ? "Karte kontinuierlich" : "Grafik"));
         
        saveToIndikatorensetJson(indikator.id, indikator, console);
    }
    else {
        //console.log('Chart ' + indikator.id + ' is invisible, ignoring.');
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
            //console.log('Creating file for Indikatorenset ' + setName);
            var fs = require('fs');
            var setJson = "var indikatorensetData = " + JSON.stringify(indikatorensets[indikatorenset], null, '\t') + ";";
            fs.writeFileSync('metadata/sets/' + setName + '.js', eol.auto(setJson));
            
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
    fs.writeFileSync('metadata/sets/' + name + '.js', eol.auto(jsonFile));
}
