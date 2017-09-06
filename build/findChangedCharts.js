var fs = require("fs");
var buildFileHashes = require('./buildFileHashes.js');

console.log('Searching for json files to add to hashesBeforeBuild.json...');
var hashes = buildFileHashes.getChartsHashes('metadata/single/*.json');

console.log('Saving hash database...');
buildFileHashes.saveToJsonFile('hashesBeforeBuild', 'tmp/', hashes, console);

console.log('Comparing tmp/hashesBeforeBuild.json with metadata/all/hashesAfterBuild.json...');
var jsondiffpatch = require('jsondiffpatch');
var hashesBeforeBuild = hashes;
var hashesAfterBuild = {};
try {
    hashesAfterBuild = JSON.parse(fs.readFileSync('metadata/all/hashesAfterBuild.json'));
}
catch (err){
    console.log('No hash file present, building all charts...');
    //no file present, ignore error and go on
}

var delta = jsondiffpatch.diff(hashesBeforeBuild, hashesAfterBuild);
//only get the chart id from the diff file. Any changes in any of the hashes means the chart needs to be rebuilt
//todo: handle deleted charts
var chartsToBuild = Object.keys(delta || {});
console.log('Charts to build: ');
console.log(JSON.stringify(chartsToBuild));

console.log('Saving tmp/chartsToBuild.json...');
buildFileHashes.saveToJsonFile('chartsToBuild', 'tmp/', chartsToBuild, console);
