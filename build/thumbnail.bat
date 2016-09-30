rem Create a single SVG thumbnail from a highcharts options file

cd c:\dev\workspace\statabs-test\indikatoren\assets

c:\dev\phantomjs-2.1.1-windows\bin\phantomjs.exe highcharts-export-server\phantomjs\highcharts-convert.js -infile ..\build\I.1.1.1.json -outfile ..\build\I.1.1.1.svg