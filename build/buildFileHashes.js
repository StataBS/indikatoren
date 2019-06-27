var getChartsHashes = function(globString){
    var fs = require("fs");
    //var fse = require("fs-extra");
    var glob = require("glob");
    var hashFiles = require('hash-files');
    
    var hashes = {};
    /*
    var filePathsToCheck = {
    	chartConfig: 'charts/templates/', 
    	data: 'data/', 
    	'configs/portal': 'configs/portal/', 
    	template: 'charts/templates/'
    };
    */
    //var files = glob.sync("metadata/single/*.json");
    var files = glob.sync(globString);
    files.forEach(function(filepath){
        var fileContents = fs.readFileSync(filepath);
        //strip whitespace from start of file and save file
        var fileContentsStripped = fileContents.slice(fileContents.indexOf('{'));
        fs.writeFileSync(filepath, fileContentsStripped);
        var indikator = JSON.parse(fileContentsStripped);
        if (indikator.visible == undefined || indikator.visible == true) {
            //console.log(filepath + ' is visible, proceeding with adding to hash object...');
            hashes[indikator.id] = {metadata: hashFiles.sync({files: filepath})};
            hashes[indikator.id]['chartConfig'] = hashFiles.sync({files: 'charts/templates/' + (indikator["chart-id"] || indikator.id) + '.js'});
            hashes[indikator.id]['data'] = hashFiles.sync({files: 'data/' + (indikator["data-id"] || indikator.id) + '.tsv'});
            hashes[indikator.id]['configs/portal'] = hashFiles.sync({files: 'configs/portal/' + indikator.id + '.json'});
            hashes[indikator.id]['template'] = hashFiles.sync({files: 'charts/templates/' + indikator.template + '.js'});
        }
        else {
            //console.log(filepath + ' NOT visible, ignoring');
        }
    });  
    return hashes;
};


var saveToJsonFile = function(name, dir, obj, console){
    var fs = require("fs");
    var eol = require("eol");
    //create directory of if nonexistent
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }    
    //write file    
    var jsonFile = JSON.stringify(obj, null, '\t');
    fs.writeFileSync(dir +  name + '.json', eol.auto(jsonFile));
};
    

module.exports = {
    getChartsHashes: getChartsHashes, 
    saveToJsonFile: saveToJsonFile
};
