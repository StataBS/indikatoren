var fs = require("fs");
var glob = require("glob");
var indikatoren = [];
var indikatorenInSet = [];
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
        console.log(filepath + ' is visible, proceeding with adding...');
        if (indikator.visibleInPortal == undefined || indikator.visibleInPortal == true) {
            console.log(filepath + ' is visibleInPortal, proceeding with adding to portal/indikatoren.json, all/indikatoren.json...');
            indikatoren.push(indikator);
            indikatorenInSet.push(indikator);
        }
        else {
            console.log(filepath + ' is NOT visibleInPortal, ignoring for portal/indikatoren.json but adding to all/indikatoren.json');
            indikatorenInSet.push(indikator);
        } 
        kuerzelById[indikator.id] = indikator.kuerzel;
        idByKuerzel[indikator.kuerzel] = indikator.id.toString();
        templatesById[indikator.id] = indikator.template;
    }
    else {
        console.log(filepath + ' NOT visible, ignoring');
    }
});
console.log('Saving json databases...');
saveToJsonFile('indikatoren', 'portal/', indikatoren, console);
saveToJsonFile('indikatoren', 'all/', indikatorenInSet, console);
saveToJsonFile('kuerzelById', 'all/', kuerzelById, console);
saveToJsonFile('idByKuerzel', 'all/',idByKuerzel, console);
saveToJsonFile('templatesById', 'all/',templatesById, console);
saveToJsFile('indikatoren', 'portal/', indikatoren, console);
saveToJsFile('indikatoren', 'all/', indikatorenInSet, console);
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
