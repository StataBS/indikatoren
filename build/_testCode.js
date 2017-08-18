//Include the exporter module
const exporter = require('highcharts-export-server');

var globalOptions = 
    {   /*
        "lang": {
    		"decimalPoint": ",",
            "thousandsSep": " ",
            numericSymbols: null,
            months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            rangeSelectorFrom: "Von",
            rangeSelectorTo: "Bis",
            rangeSelectorZoom: "Zeitraum:"
    	}
    	*/
    };

//Export settings 
var exportSettings = {
    type: 'svg',
    infile: 'charts/configs/portal/5123.json',
    constr: 'Map',
    outfile: 'test.svg'
};


//Set log level
exporter.logLevel(4);

//Set up a pool of PhantomJS workers
exporter.initPool({
    maxWorkers: 1
});

//Perform an export
/*
    Export settings corresponds to the available CLI arguments described
    above.
*/
exporter.export(exportSettings, function (err, res) {
    //The export result is now in res.
    //If the output is not PDF or SVG, it will be base64 encoded (res.data).
    //If the output is a PDF or SVG, it will contain a filename (res.filename).
    console.log('Successfully exported to ' + res.filename);

    //Kill the pool when we're done with it, and exit the application
    exporter.killPool();
    process.exit();
});



