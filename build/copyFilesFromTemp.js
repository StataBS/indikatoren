const fs = require("fs");
const parse = require('csv-parse/lib/sync');
const child_process = require('child_process');
const eol = require("eol");

var config = require('./config.json');
var tempDir = config.tempDir
var verzeichnisTxtPath = tempDir + "verzeichnis.txt";

// handle error function
const handleError = (error) => {
    // write error message to console with red color (\x1b[31m = red, \x1b[0m = reset, %s = string)
    console.log('\x1b[31m%s\x1b[0m', error.message);
}

//parse csv  
const records = parse(fs.readFileSync(verzeichnisTxtPath), {
    columns: true,
    skip_empty_lines: true,
});

//load json and tsv for each row
records.forEach(row => {
    //for each line: download and save json / tsv
    console.log('downloading files for ' + row.Indikator + '...');
    try {
        //fs.copyFileSync(tempDir + row.Indikator + '.json', destinationPath);
        var destinationPath = 'metadata/single/' + row.Indikator + '.json';
        fs.writeFileSync(destinationPath, eol.auto(fs.readFileSync(tempDir + row.Indikator + '.json').toString()));
        console.log('file copied: ' + tempDir + row.Indikator + '.json');
    }
    catch (error) {
        handleError(error);
    }        

    //checkout js and overwrite tsv for each chart with a branch number other than null
    if (row.Branch) {
        console.log('checking out ' + row.Indikator + '.js and ' + row.Indikator + '.tsv from branch ' + row.Branch + '...');
        var gitJsCommand = 'git checkout origin/issue-' + row.Branch + ' -- charts/templates/' + row.Indikator + '.js';
        var gitTsvCommand = 'git checkout origin/issue-' + row.Branch + ' -- data/' + row.Indikator + '.tsv';
        console.log(gitJsCommand);
        try {
            child_process.execSync(gitJsCommand);
        }
        catch (error) {
            handleError(error);
        }        
        console.log(gitTsvCommand);
        try {
            child_process.execSync(gitTsvCommand);
        }
        catch (error) {
            handleError(error);
        }        
    }
    else {
        try {
            //fs.copyFileSync(tempDir + row.Indikator + '.tsv', 'data/' + row.Indikator + '.tsv');
            var destinationPath = 'data/' + row.Indikator + '.tsv';
            fs.writeFileSync(destinationPath, eol.auto(fs.readFileSync(tempDir + row.Indikator + '.tsv').toString()));
            console.log('file copied: ' + tempDir + row.Indikator + '.tsv');
        }
        catch (error) {
            handleError(error);
        }        
    }
});
console.log('...done!');
console.log('=== Test Links: ===');

//open browser tab for visual check
records.forEach(row => {
    console.log('http://127.0.0.1:8084/chart-details.html?id=' + row.Indikator);
});
