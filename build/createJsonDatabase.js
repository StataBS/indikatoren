var fs = require("fs");
var glob = require("glob");
var indikatorenInPortal = [];
var allIndikatoren = [];
var kuerzelById = {};
var idByKuerzel = {};
var templatesById = {};

console.log('Searching for json files to add to json databases...');
var files = glob.sync("metadata/single/*.json");
files.forEach(function(filepath){
    var fileContents = fs.readFileSync(filepath);
    //strip whitespace from start of file and save file
    var fileContentsStripped = fileContents.slice(fileContents.indexOf('{'));
    fs.writeFileSync(filepath, fileContentsStripped);
    var indikator = JSON.parse(fileContentsStripped);
    if (indikator.visible == undefined || indikator.visible == true) {
        console.log(filepath + ' is visible, adding to all/indikatoren.json...');
        //clean up: if visible == false, chart will not be included in all/indikatoren.json, thus property not needed anymore. visibleInPortal is calculated later on.
        delete indikator.visibleInPortal;
        delete indikator.visible;
        delete indikator.option;
        
        allIndikatoren.push(indikator);
        /*
        if (indikator.visibleInPortal == undefined || indikator.visibleInPortal == true) {
            //Special case for Umwelt charts: Hide from Portal view //, if no complete text in field erlaeuterungen
            //if (indikator.kennzahlenset == 'Umwelt' && indikator.erlaeuterungen.startsWith('Eine detaillierte Beschreibung des Indikators')){
            if (indikator.kennzahlenset == 'Umwelt'){
                //console.log(filepath + ' is Umwelt Indikator ' + 'with no complete erlaeuterungen' + ', thus hiding in portal view');
                console.log(filepath + ' is Umwelt Indikator ' + ', thus hiding in portal view');
            }
            else {
                console.log(filepath + ' is visibleInPortal, proceeding with adding to portal/indikatoren.json, all/indikatoren.json...');
                indikatorenInPortal.push(indikator);
            }
        }
        else {
            console.log(filepath + ' is NOT visibleInPortal, ignoring for portal/indikatoren.json but adding to all/indikatoren.json');
        } 
        */
        kuerzelById[indikator.id] = indikator.kuerzel;
        idByKuerzel[indikator.kuerzel] = indikator.id.toString();
        templatesById[indikator.id] = indikator.template;
    }
    else {
        console.log(filepath + ' NOT visible, ignoring');
    }
});


//handle visibleInPortal
allIndikatoren.forEach((element, i, arr) => {
	//if (element.id == 6138){
	//is chart member of a print kennzahlenset?
	if (element.kennzahlenset.toLowerCase().includes('print') || element.kennzahlenset == "Umwelt" || element.kennzahlenset == "Test" ) {
		console.log(element.id + ' is in Umwelt, Test or a print kennzahlenset, setting visibleInPortal to false...');
		element.visibleInPortal = false;
	}
	else {
		//does chart have a mother?
		if (!element["parentId"]){
			console.log(element.id + ' does not have a mother, setting visibleInPortal to true...');
			element.visibleInPortal = true;
		}
		else {
			//is mother chart with same template available? 
			if (arr.find(obj => obj.id == element.parentId && obj.template == element.template)){
				console.log(element.id + ' has a mother with an available metadata file AND same template, setting visibleInPortal to false...');
				element.visibleInPortal = false;
			}
			//mother chart must be in an unpublished kennzahlenset, or mother has a different template (this is the case for charts with several types of display, e.g. map and chart)
			else {
				console.log(element.id + " does not have a mother with an available metadata file OR mother's template is different, setting visibleInPortal to true...");
				element.visibleInPortal = true;
			}
		}
	}
	//}
	if (element.visibleInPortal) {
		indikatorenInPortal.push(element);
	}
});



console.log('Saving json databases...');
saveJsAndJsonFiles('indikatoren',   'portal/', indikatorenInPortal, console);
saveJsAndJsonFiles('indikatoren',   'all/',    allIndikatoren, console);
saveJsAndJsonFiles('kuerzelById',   'all/',    kuerzelById, console);
saveJsAndJsonFiles('idByKuerzel',   'all/',    idByKuerzel, console);
saveJsAndJsonFiles('templatesById', 'all/',    templatesById, console);



function saveJsAndJsonFiles(name, dir, obj, console){
	saveToJsFile(name, dir, obj, console);
	saveToJsonFile(name, dir, obj, console);
	
	function saveToJsFile(name, dir, obj, console){
	    var jsFile = "var " +  name + " = " + JSON.stringify(obj, null, '\t') + ";";
	    fs.writeFileSync('metadata/' + dir +  name + '.js', jsFile);
	}
	
	function saveToJsonFile(name, dir, obj, console){
	    var jsonFile = JSON.stringify(obj, null, '\t');
	    fs.writeFileSync('metadata/' + dir +  name + '.json', jsonFile);
	}
}


