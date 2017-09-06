var fs = require("fs");
var glob = require("glob");
var hashFiles = require('hash-files');
var buildFileHashes = require('./buildFileHashes.js');

console.log('Searching for json files to add to hashesAfterBuild.json...');
var hashes = buildFileHashes.getChartsHashes('metadata/single/*.json');

console.log('Saving hash database...');
buildFileHashes.saveToJsonFile('hashesAfterBuild', 'metadata/all/', hashes, console);
