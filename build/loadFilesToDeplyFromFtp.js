

const fs = require("fs");
const https = require("https");
const filePath = "tmp/chartsToDeploy.txt";
const urlBase = "https://indikatoren.statabs.ch/";
const parse = require('csv-parse/lib/sync');
const child_process = require('child_process');



//get all charts to deploy
const chartListFile = fs.createWriteStream(filePath);
https.get(urlBase + "verzeichnis.txt", listOfCharts => {
    const stream = listOfCharts.pipe(chartListFile);
    stream.on("finish", function() {
        //parse csv  
        const records = parse(fs.readFileSync(filePath), {
          columns: true,
          skip_empty_lines: true,
        });
        //load json and tsv for each row
        records.forEach(row => {
            
            const downloadFileContents = (url, filePath) => {
                const file = fs.createWriteStream(filePath);
                https.get(url, fileContents => {
                    const stream = fileContents.pipe(file);
                    //stream.on("finish", function() {});
                });
            };
            console.log('downloading files for '+ row.Indikator + '...');
            downloadFileContents(urlBase + row.Indikator + '.json', 'metadata/single/' + row.Indikator + '.json');
            downloadFileContents(urlBase + row.Indikator + '.tsv', 'data/' + row.Indikator + '.tsv');
            //checkout js for each chart with a branch number other than 0
            
            if (row.Branch){
                console.log('checking out ' + row.Indikator + '.js from branch ' + row.Branch + '...');
                child_process.exec('git checkout origin/issue-' + row.Branch + ' -- charts/templates/' + row.Indikator + '.js');
                //Git.exec('git checkout origin/issue-' + row.Branch + ' -- charts/templates/' + row.Indikator + '.js');
            }
        
        });
        console.log('...done!');
  });
});

//for each line: download and save json / tsv
//if branch is present: checkout js from origin


