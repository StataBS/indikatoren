const fs = require("fs");
const parse = require('csv-parse/lib/sync');
const child_process = require('child_process');
const eol = require("eol");

var config = require('./config.json');
var tempDir = config.tempDir
var verzeichnisTxtPath = tempDir + "verzeichnis.txt";

//parse csv  
const records = parse(fs.readFileSync(verzeichnisTxtPath), {
    columns: true,
    skip_empty_lines: true,
});

//load json and tsv for each row
records.forEach(row => {

    //for each line: download and save json / tsv
    console.log('downloading files for ' + row.Indikator + '...');
    if (fs.existsSync(tempDir + row.Indikator + '.json')) {
        console.log('file exists ' + tempDir + row.Indikator + '.json');
      }
    fs.copyFileSync(tempDir + row.Indikator + '.json', 'metadata/single/' + row.Indikator + '.json');
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
        }
        console.log(gitTsvCommand);
        try {
            child_process.execSync(gitTsvCommand);
        }
        catch (error) {
        }
    }
    else {
        fs.copyFileSync(tempDir + row.Indikator + '.tsv', 'data/' + row.Indikator + '.tsv');
    }
});
console.log('...done!');
console.log('=== Test Links: ===');

//open browser tab for visual check
records.forEach(row => {
    console.log('http://127.0.0.1:8084/chart-details.html?id=' + row.Indikator);
});
