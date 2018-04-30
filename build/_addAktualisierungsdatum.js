var fs = require("fs");
var glob = require("glob");

var files = glob.sync("metadata/single/*.json");
console.log("Setting aktialisierungsdatum to each relevant chart's metadata");
files.forEach(function(filepath){
    var fileContents = fs.readFileSync(filepath, 'utf8');
    var indikator = JSON.parse(fileContents);
    
    if (!indikator["aktualisierungsdatum"] || indikator["aktualisierungsdatum"] == ""){
        switch (indikator["kennzahlenset"]){
            case "Gesellschaftlicher-Zusammenhalt" :
            case "":
                if (indikator.id == 4722 || indikator.id == 4863){
                    indikator["aktualisierungsdatum"] = "2017-02-28T00:00:00.000";
                }
                else {
                    indikator["aktualisierungsdatum"] = "2016-09-21T00:00:00.000";
                }
                break;
            case "Richtplan": 
                indikator["aktualisierungsdatum"] = "2017-10-27T00:00:00.000";
                break;
            case "Cercle-Indicateurs": 
                indikator["aktualisierungsdatum"] = "2017-11-14T00:00:00.000";
                break;
            case "Wanderungen": 
                indikator["aktualisierungsdatum"] = "2017-12-19T00:00:00.000";
                break;
            case "Tourismus": 
                indikator["aktualisierungsdatum"] = "2018-02-15T00:00:00.000";
                break;
            case "Wohnraumentwicklung": 
            case "Wohnviertel":
                indikator["aktualisierungsdatum"] = "2018-02-28T00:00:00.000";
                break;
            case "Arbeitsmarkt":
                indikator["aktualisierungsdatum"] = "2018-03-14T00:00:00.000";
                break;
            case "Integration":
                indikator["aktualisierungsdatum"] = "2018-03-21T00:00:00.000";
                break;
            case "Nachhaltigkeit":
                indikator["aktualisierungsdatum"] = "2018-04-03T00:00:00.000";
                break;
            case "Umwelt":
                indikator["aktualisierungsdatum"] = "2017-07-11T00:00:00.000";
                break;
            case "Legislaturplan":
                indikator["aktualisierungsdatum"] = "2017-11-29T00:00:00.000";
                break;
            default: 
                console.log('No case statement found for this chart, changing nothing. Id: ', indikator.id, ", Set: ", indikator.kennzahlenset);
        }
    }    

    var indikatorText = JSON.stringify(indikator, null, 1);
    fs.writeFileSync(filepath, indikatorText);
    console.log("...done!");
});
