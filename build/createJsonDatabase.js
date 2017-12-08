var fs = require("fs");
var glob = require("glob");
var path = require("path");
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
        
	    //retrieve id from filename instead of from file contents
	    var idFromFileName = path.basename(filepath, path.extname(filepath));
        delete indikator.id;
        indikator.id = parseInt(idFromFileName, 10);
        
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
	//is chart member of a print kennzahlenset?
	if (element.kennzahlenset.toLowerCase().includes('print') || element.kennzahlenset == "Umwelt" || element.kennzahlenset == "Test" ) {
		console.log(element.id + ' is in Umwelt, Test or a print kennzahlenset [' + element.kennzahlenset + '], setting visibleInPortal to false...');
		element.visibleInPortal = false;
	}
	else {
		//does chart have a mother?
		if (!element["parentId"]){
			console.log(element.id + ' does not have a parent, setting visibleInPortal to true...');
			element.visibleInPortal = true;
		}
		else {
			//is mother chart available? 
			var mother = arr.find(obj => obj.id == element.parentId);
			if (mother){
				//is mother also in renderLink, so that both need to be displayed?
				if (element.renderLink.indexOf(String(mother.id)) > -1){
					console.log(element.id + ' has a parent which is also defined in renderLink, setting visibleInPortal to true...');
					element.visibleInPortal = true;
				}
				else {
					console.log(element.id + ' has a parent with an available metadata file, setting visibleInPortal to false...');
					element.visibleInPortal = false;
				}
			}
			//mother chart must be in an unpublished kennzahlenset
			else {
				console.log(element.id + ' does not have a parent with an available metadata file, setting visibleInPortal to true...');
				element.visibleInPortal = true;
			}
		}
	}
	if (element.visibleInPortal) {
		indikatorenInPortal.push(element);
	}
});



console.log('Saving json databases...');
saveToJsonFile('indikatoren', 'portal/', indikatorenInPortal, console);
saveToJsonFile('indikatoren', 'all/', allIndikatoren, console);
saveToJsonFile('kuerzelById', 'all/', kuerzelById, console);
saveToJsonFile('idByKuerzel', 'all/',idByKuerzel, console);
saveToJsonFile('templatesById', 'all/',templatesById, console);
saveToJsFile('indikatoren', 'portal/', indikatorenInPortal, console);
saveToJsFile('indikatoren', 'all/', allIndikatoren, console);
saveToJsFile('kuerzelById', 'all/', kuerzelById, console);
saveToJsFile('idByKuerzel', 'all/',idByKuerzel, console);
saveToJsFile('templatesById', 'all/',templatesById, console);

//console.log('...done!');


function saveToJsFile(name, dir, obj, console){
    var jsFile = "var " +  name + " = " + JSON.stringify(obj, null, '\t') + ";";
    fs.writeFile('metadata/' + dir +  name + '.js', jsFile);
}

function saveToJsonFile(name, dir, obj, console){
    var jsonFile = JSON.stringify(obj, null, '\t');
    fs.writeFile('metadata/' + dir +  name + '.json', jsonFile);
}