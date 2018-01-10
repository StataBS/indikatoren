var fs = require("fs");
var glob = require("glob");
var path = require("path");
var indikatorenInPortal = [];
var visibleIndikatoren = [];
var allIndikatoren = {};
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
    //add id and indikatorenset of current indikator to catalog, the rest will be overwritten later on
	allIndikatoren[indikator.id] = {'id': indikator.id, 'visible': '', 'visibleInPortal': '', 'indikatorenset': indikator.kennzahlenset };    
    if (indikator.visible == undefined || indikator.visible == true) {
        console.log(filepath + ' is visible, adding to all/indikatoren.json...');
        //clean up: if visible == false, chart will not be included in all/indikatoren.json, thus property not needed anymore. 
        delete indikator.visible;
        delete indikator.option;
        
	    //retrieve id from filename instead of from file contents
	    var idFromFileName = path.basename(filepath, path.extname(filepath));
        delete indikator.id;
        indikator.id = parseInt(idFromFileName, 10);
        
        visibleIndikatoren.push(indikator);

        kuerzelById[indikator.id] = indikator.kuerzel;
        idByKuerzel[indikator.kuerzel] = indikator.id.toString();
        templatesById[indikator.id] = indikator.template;
        
        //update catalog of all indikatoren with current data
        allIndikatoren[indikator.id]['visible'] = true;
    }
    else {
        console.log(filepath + ' NOT visible, ignoring');
        allIndikatoren[indikator.id].visible = false;
    }
});


//handle visibleInPortal
visibleIndikatoren.forEach((element, i, arr) => {
	//if visibleInPortal == false, we keep it at false on go ahead with the next chart
	if(element.visibleInPortal){
		//is chart member of a print kennzahlenset?
		if ((element.kennzahlenset == "Umwelt" && element.erlaeuterungen.indexOf("Eine detaillierte Beschreibung des Indikators") == 0 ) || element.kennzahlenset == "Test" ) {
			console.log(element.id + ' is in Test or a print kennzahlenset [' + element.kennzahlenset + '], or in Umwelt Kennzahlenset without an expressive field erlaeuterungen [' + element.erlaeuterungen.substring(0, 10) + '...] setting visibleInPortal to false...');
			element.visibleInPortal = false;
		}
		else {
			//does chart have a mother?
			/*
			if (!element["parentId"]){
				console.log(element.id + ' does not have a parent, setting visibleInPortal to true...');
				element.visibleInPortal = true;
			}
			else {
			*/
				//is mother chart available? 
				var mother = arr.find(obj => obj.id == element.parentId);
				if (mother){
					//is mother also in renderLink, so that both need to be displayed?
					if (element.renderLink.indexOf(String(mother.id)) > -1){
						console.log(element.id + ' has a parent which is also defined in renderLink, leaving visibleInPortal at true...');
					}
					else {
						console.log(element.id + ' has a parent with an available metadata file, setting visibleInPortal to false...');
						element.visibleInPortal = false;
					}
				}
				//mother chart must be in an unpublished kennzahlenset
				else {
					console.log(element.id + ' does not have a parent with an available metadata file, leaving visibleInPortal at true...');
				}
			//}q
		}
		if (element.visibleInPortal) {
			indikatorenInPortal.push(element);
		}
	}
	else {
		console.log(element.id + ' has visibleInPortal set to false, ignoring for indikatorenInPortal');
	}
	
	//update catalog of all indikatoren with current data
	allIndikatoren[element.id].visibleInPortal = element.visibleInPortal;
	
});



console.log('Saving json databases...');
saveToJsonFile('indikatoren', 'portal/', indikatorenInPortal, console);
saveToJsonFile('indikatoren', 'all/', visibleIndikatoren, console);
saveToJsonFile('kuerzelById', 'all/', kuerzelById, console);
saveToJsonFile('idByKuerzel', 'all/',idByKuerzel, console);
saveToJsonFile('templatesById', 'all/',templatesById, console);
saveToJsFile('indikatoren', 'portal/', indikatorenInPortal, console);
saveToJsFile('indikatoren', 'all/', visibleIndikatoren, console);
saveToJsFile('kuerzelById', 'all/', kuerzelById, console);
saveToJsFile('idByKuerzel', 'all/',idByKuerzel, console);
saveToJsFile('templatesById', 'all/',templatesById, console);

//create array from object
var all = Object.keys(allIndikatoren).map(function (key) { return allIndikatoren[key]; });
console.log('Writing metadata/all/all/md...');
fs.writeFileSync('metadata/all/all.md', jsonToMarkdownTable(all));

//console.log('...done!');


function saveToJsFile(name, dir, obj, console){
    var jsFile = "var " +  name + " = " + JSON.stringify(obj, null, '\t') + ";";
    fs.writeFileSync('metadata/' + dir +  name + '.js', jsFile);
}

function saveToJsonFile(name, dir, obj, console){
    var jsonFile = JSON.stringify(obj, null, '\t');
    fs.writeFileSync('metadata/' + dir +  name + '.json', jsonFile);
}


// https://gist.github.com/nijikokun/77d4cb6be20c4e740392 
function jsonToMarkdownTable (array, columns) {
  var cols = columns
    ? columns.split(",")
    : Object.keys(array[0]);

  var table = "";

  table += cols.join(" | ");
  table += "\r\n";
  table += cols.map(function () {
    return '---';
  }).join(' | ');
  table += "\r\n";

  array.forEach(function (item) {
    table += Object.keys(item).map(function (key) {
      return String(item[key]);
    }).join(" | ") + "\r\n";
  });

  return table;
}