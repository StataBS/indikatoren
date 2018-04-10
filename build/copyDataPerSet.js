var fs = require("fs-extra");
var glob = require("glob");
var files = glob.sync("metadata/single/*.json");
console.log('Copying tsv files to their respective kennzahlenset directories...');
fs.removeSync('data/sets/');
files.forEach(function(filepath){
    var fileContents = fs.readFileSync(filepath, 'utf8');
    var indikator = JSON.parse(fileContents);
    var id = indikator.id;
    var indikatorenset = indikator.kennzahlenset;
    var destDir = 'data/sets/' + (indikatorenset ? indikatorenset : '(empty)');
    var destFile = destDir + '/' + id + '.tsv';
    var sourceFile = 'data/' + id + '.tsv';
    fs.ensureDirSync(destDir);
    if (indikator.visible){
        fs.copySync(sourceFile, destFile);
    }
});