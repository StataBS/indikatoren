# Indikatorenportal Statistisches Amt Basel-Stadt 
Find and display statistical indicators from the canton of Basel-Stadt, Switzerland. See live version [here](http://www.statistik.bs.ch/zahlen/indikatoren/). 

## Update charts from ftp server
- Run the following command in a terminal window: 
```javascript
npm run deployNewCharts
npm run build
```
- Build, commit and push as explained further down. 

## Create png/pdf files of each chart within an indikatorenset
- In Chrome, open print.html?Indikatorenset=indikatorensetname or print.html?Indikatorenset=indikatorensetname&type=pdf
    - use keyword `view` to decide if indicator-title is included
        - &view=print: no title
        - &view=portal: title
        - &view=indikatorenset: number and title
- Chrome will download a png/pdf file of each chart in the given Indikatorenset to the local downloads directory. You can then manually move them to their target folder.
- It uses a [Highcharts Node.js Export Server](https://github.com/highcharts/node-export-server) deployed on the StatA-Server [pdstatasvpapp05](highcharts-export.stata.pd.intranet.bs.ch)  
- To preview single charts in print view, use chart.html with the url parameter "view=print", e.g. chart.html?view=print&id=5824. 
- To download a single chart as pn/pdfg, use chart.html?thumbnailOfflineExporting=false&thumbnailType=png&view=print&exportServer=https://highcharts-export.stata.pd.intranet.bs.ch/&id=[chart-id]&thumbnailType=[pdf/png]


## Manually create svg thumbnails 
- For the portal view: In Chrome, open thumbnails.html
- For the indikatorenset view: In Chrome, open thumbnails.html?view=indikatorenset
This will download all svg files to the local downloads directory. You can then manually move them to their respective directory below /images/.


## Local Installation
Install [node.js](https://nodejs.org), then run the following command in the console: 
```javascript
npm install
```


## Getting Started
Locally build, start http server, open browser:
```javascript
npm start
```


## Get Charts from "Umweltbericht beider Basel"
- In Indikatoren-App (Access) go to > "Spezialtabellen" > "Umweltbericht Indikatoren" and run:
    - Metadaten einlesen (gets Metadaten of all Indicators from UB-Webpage)
    - Metadaten abgleichen (Imports Metadata to local Indicators DB)
- Set all indicators to status "Bereit für Live" and click "publizieren" to export all JSONs with correct "zuletzt geändert" date
- Github: Create new [issue](https://github.com/statabs/indikatoren/) and [branch](https://github.com/statabs-test/indikatoren/)
- VS Studio: pull, checkout branch
- Copy metadata (JSON) and tsv files (only for incdicators where data is not copied from Umweltbericht) to branch as described above in section "Update charts from ftp server".
- In the command line: run 
```javascript
npm run build:create_umwelt_charts
npm run build:clean_umwelt_charts
```
This uses casperJs / phantomJs to open all charts of Indikatorenset "Umwelt" and save their Highcharts configuration in charts/configs/portal. 
If a Umwelt chart metadata's datenInChartIntegriert is:
1) false, the chart's Highcharts config is cleaned and saved as js file in charts/templates/[id].js (This allows using a Umwelt chart Higcharts configuration with data from an externally provided tsv (manually uploaded, default for all other indicators)).
2) undefined or true: its tsv file is downloaded ftom UB-website and saved to data/[id].tsv (This allows retrieving the tsv file from the Highcharts hamburger menu.)

- Create svg files by running the command 
```javascript
npm run build
```
- run local-server, [check everything](http://127.0.0.1:8084/?Indikatorenset=Umwelt)
- add, commit, push
- add branch/issue-nr to all indicators in the umwelt-set via StatApp
- set all indicators to status "bereit für Live" in Indikatoren-App
- (inform git-admin about update)

## URL Parameters

- Most of the URL Paramaters outlined below can be used in combination. 
- Use ? to separate server + document from the list of parameters, then & before 2nd, 3rd (and so on) oparameter in the URL. See examples for stufe below. 
- Filter parameters can be used even if the respective filter element is hidden. 
- Url encoding of filter parameter values is automatically performed by the browser, just type in the value in the browser's url bar and hit enter. 

| Parameter | View | Example | Default | Description | 
|---------- | ---- | ------- | ------- | ----------- |
| indikatorenset | Indikatorenset | [Example](https://statabs.github.io/indikatoren/?Indikatorenset=Wohnviertel) | | Switches to Indikatorenset view: Hides sidebar, thema filter, räumliche Gliederung filter, but adds stufe1 and stufe2 filter. Additionally, kuerzelKunde is displayed instead of kuerzel.  
| stufe | Indikatorenset | [Example](https://statabs.github.io/indikatoren/?Indikatorenset=Arbeitsmarkt&stufe=3) | 2 | Sets the maximum stufe ('Kapitel' / 'Unterkapitel') to be displayed as a dropdown filter control. 
| showHeader | Portal | [Example](https://statabs.github.io/indikatoren/?showHeader=true) | false | Displays header containing bs.ch logo, StatA text and Link to Indikatorenportal. 
| PerPage | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?PerPage=32) | 16 | Sets the number of charts to be displayd per page. 
| search | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?search=nominal) |  | Pre-populates the full-text search field. 
| thema | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?thema=14%20Gesundheit) |  | Pre-populates the thema filter. 
| unterthema | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?thema=14%20Gesundheit&unterthema=Spit%C3%A4ler) |  | Pre-populates the thema filter. 
| raeumlicheGliederung | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?raeumlicheGliederung=Kanton) |  | Pre-populates the raeumlicheGliederung filter.  
| darstellungsart | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?darstellungsart=Karte) |  | Pre-populates the Darstellungsart filter.  
| stufe1, stufe2, stufe3 | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?Indikatorenset=Arbeitsmarkt&stufe=3&stufe1=Monitoring%20Basler%20Arbeitsmarkt&stufe2=Bruttoinlandprodukt%20und%20Wertsch%C3%B6pfung) |  | Pre-populates the filter for stufe1, stufe2 and stufe3. 
| sort | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?sort=aktualisierungsdatum_desc) | orderKey_asc | Sorts charts by a metadata property. Currently supports sorting by kuerzel, kuerzelKunde, orderKey, aktualisierungsdatum. 
| hideSidebar | Portal | [Example](https://statabs.github.io/indikatoren/?hideSidebar=true) | false | Hides the sidebar that contains full text search text box, reset button, thema filter, and räumliche Gliederung filter. 
| hideSearch | Portal | [Example](https://statabs.github.io/indikatoren/?hideSearch=true) | false | Hides the full text search text box. 
| hideResetButton | Portal | [Example](https://statabs.github.io/indikatoren/?hideResetButton=true) | false | Hides the filter reset button. 
| hideThema | Portal | [Example](https://statabs.github.io/indikatoren/?hideThema=true) | false | Hides the Thema filter control. 
| hideUnterthema | Portal | [Example](https://statabs.github.io/indikatoren/?hideUnterthema=true) | false | Hides the Unterthema filter control. 
| hideRaeumlicheGliederung | Portal | [Example](https://statabs.github.io/indikatoren/?hideRaeumlicheGliederung=true) | false | Hides the Räumliche Gliederung filter control. 
| hideDarstellungsart | Portal | [Example](https://statabs.github.io/indikatoren/?hideDarstellungsart=true) | false | Hides the Darstellungsart filter control. 
| showLastUpdatedSets | Portal | [Example](https://statabs.github.io/indikatoren/?Indikatorenset=Arbeitsmarkt&showLastUpdatedSets=true) | false | Shows the table containing the last few updated indikatorensets. 
| id | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401) |  | Defines the id of the chart to be displayed. 
| hideHeaeder | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401&hideHeader=true) | false | Hides the header containing bs.ch logo, StatA text and Link to Indikatorenportal, decreases left margin. 
| hideTitle | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401&hideTitle=true) | false | Hides the chart Title in the html text below the chart. 
| hideLesehilfe | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401&hideLesehilfe=true) | false | Hides the Lesehilfe title and text. 
| hideLesehilfeTitle | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401&hideLesehilfeTitle=true) | false | Hides the Lesehilfe Title but leaves the Lesehilfe text. 
| hideErlaeuterungen | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401&hideErlaeuterungen=true) | false | Hides the Erlaeuterungen title and text. 
| hideErlaeuterungenTitle | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401&hideErlaeuterungenTitle=true) | false | Hides the Erlaeuterungen Title but leaves the Lesehilfe text. 
| hideLinks | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401&hideLinks=true) | false | Hides the Links title and list. 
| hideLinksTitle | chart-details.html | [Example](https://statabs.github.io/indikatoren/chart-details.html?id=2401&hideLinksTitle=true) | false | Hides the Links Title but leaves the Link list. 



## Development
### Add or Update Data
Copy the data as tab-separated tsv file named _id_.tsv into the folder 'data'. Refresh browser.  

### Add or Update Metadata
- Copy the json file named _id_.json into the folder 'metadata/single'. 
- On test system (https://github.com/statabs-test/indikatoren), the master branch is automatically built and deployed to [github pages](https://statabs-test.github.io/indikatoren/) via [travis-ci](https://travis-ci.org/statabs-test/indikatoren) - thus no local build necessary. 
- For a local build: Rebuild the project to regenerate the json databases for indikatorensets (in folder 'metadata/sets') and for all indikatoren (file metadata/portal/indikatoren.js): 
```javascript
npm run build
``` 

### Add or Update Chart Configurations
- Copy the chart configuration file named _id_.js into the folder 'charts/templates'. The file needs to contain a self-calling function that returns the Highchart configuration details that differ from the chart's template. At least the "series" node is required. 
- On test system (https://github.com/statabs-test/indikatoren), the master branch is automatically built and deployed to [github pages](https://statabs-test.github.io/indikatoren/) via [travis-ci](https://travis-ci.org/statabs-test/indikatoren) - thus no local build necessary. 
- For a local build: Rebuild the project to regenerate metadata databases, final chart configurations, and svg thumbnail images for all indicators: 
```javascript
npm run build
``` 

### Create Kennzahlensets for Print: Copy Data and Chart Configurations
- If a new kennzahlenset is created for print, it can be initialized with data and chart configurations of their respective parent kennzahlenset. 
- To do this, first upload the metadata files to metadata/single. 
- Then run 
```javascript
npm run build:init_print_charts
```
- This will check each metadata file for matching data/[id].tsv and charts/templates/[id].js. If tsv or js file is missing, it will be copied from the parent chart's file. 
- This is an excellent starting point to refine charts for printing. 


### Build Application Locally
To build the application,  create the json config files and the svg images of the charts that have changed since the last build: 
```javascript
npm run build
```

To build the application and rebuild all json config files and all chart's svg images: 
```javascript
npm run rebuild
```

Manually create svg thumbnails: 
- For the portal view: In Chrome, open thumbnails.html.
- For the indikatorenset view: In Chrome, open thumbnails.html?indikatorensetView=true.
This will download all svg files to the local downloads directory. You can then manually move them to their respective directory below /images/.


### What does the build script do?
The build script does the following things: 
- npm run build:database: Creates metadata database files to be used in portal view: 
    - Loads each chart's metadata file from metadata/single/[id].json and evaluates if it is visible (visible == true) and/or visible in portal view (visibleInPortal == true). 
    - Metadata of each charts that has property visible == true gets copied into the file metadata/all/indikatoren.json
    - A chart gets the property visibleInPortal set to true if it: 
        - has property visibleInPortal set to true or undefined, and
        - is not member of kennzahlenset "Test", "-print", and
        - has no parent chart of which the metadata file is present or has a parent chart and links to that chart because it is e.g. the same data but presented differently.
    - Metadata of each chart with metadata visibleInPortal == true gets copied into the file metadata/portal/indikatoren.json. 
    - Files metadata/all/kuerzelById.json, idByKuerzel.json, templateById.json, all.md are created. Those can be used by humans to quickly look up id, kuerzel, kennzahlenset, visible, visibleInPortal and template of each chart. 
- npm run build:find_changed_charts: Checks which charts must be rebuilt since last build: 
    - Calculates hash code of each file in data/, metadata/single/, charts/templates/ and compares it to the hash code after the previous build (created by npm run build:save_checksums). If a chart's data, metadata, config file or template config have changed since last build, its id is added to file tmp/chartsToBuild.json. 
- npm run build:partial_databases: Creates a json database for each kennzahlenset: 
    - Runs through all files metadata/single/*.json and adds charts that have property visible == true or visible == undefined to a file metadata/sets/[kennzahlenset].json. This file is loaded by index.html when parameter ?indikatorenset is specified, instead of the larger file metadata/portal/indikatoren.json. 
- npm run build:charts: Creates Highcharts config file for each chart: 
    - Runs through each chart in tmp/chartsToBuild.json to create a highchart config file charts/configs/portal/[id].json by combining the chart's from data/[id].tsv, metadata from metadata/single/[id].json, template from charts/templates/[id].js and template's config from charts/templates/[template].js. 
- npm run build:images: Creates the svg file for each chart to be used as a preview: 
    - Runs through each chart in tmp/chartsToBuild.json to create a file images/portal/[id].svg from its Highcharts config file charts/config/[id].json. 
- npm run build:images_viewbox: Adds viewbox to the generated svg files so that IE displays them nicely. 
- npm run build:optimize_images: Optimizes svg files so that they are smaller. 
- npm run build:save_checksums: Saves checksums of all files to metadata/all/hasesAfterBuild.json so that during next build, npm run build:find_changed_charts can find changes. 
- npm run build:copy_modules: Copies npm modules that are required for the live website (defined in packages.json, key "dependencies") to assets/js/modules. 
- npm run build:copy_data_per_set: Copies tsv files to a folder defined by the chart's kennzahlenset (data/sets/[kennzahlenset]/[id].tsv)
- npm run build:deployNewCharts: Downloads data, metadata and config for charts that are ready to be updated: 
    - It downloads the file https://indikatoren.statabs.ch/verzeichnis.txt which contains all charts that are ready to be updated in csv format with columns "indikator", "branch". 
    - For each chart that is ready to be updated, it downloads its respective tsv and metadata json file from https://indikatoren.statabs.ch/
    - If a branch name ist given for a chart, it retrieves that chart's js file through git from origin/[branch name]. 
### Update dependencies
Update version numbers in package.json, then run the following command to do a clean reinstall: 
```javascript
npm run reinstall
```

### Develop in a private github repository
- Develop in a private github repositoriy as you would do in the public repo: Create an issue, create a branch called 'issue-XXX' with XXX being the id of the issue. 
- When it's time to release the new functionality onto the public repository: 
    - In the private repo, define the public repo as a remote repo named "upstream" (of course use the correct https url, not the following dummy url. Use e.g. the address from the browser and add '.git' at the end): 
    ```shell
    git remote add upstream https://github.com/user/indikatoren.git
    ```
    - Add, commit and push your changes to the private repo as usual. 
    - Create a branch with the same name on the public github repository ('upstream'). 
    - Pull the latest commits from the public branch to the private branch: 
    ```shell
    git checkout issue-XXX
    git pull upstream issue-XXX
    ```
    - If there are conflicts (public and private branch have changes in common files), manually resolve the conflicts, then add, commit and push the resolved conflicts to the private branch. 
    ```shell
    git add .
    git commit -m"Merge upstream"
    git push
    ```
    - Push your changes to the branch 'issue-XXX' on the public repo: 
    ```shell
    git push upstream issue-XXX
    ```


### Develop using [cloud9](https://c9.io)
- Create new hosted workspace based on the node.js template and the correct github repo. Use the SSH repo path. 
- Run the following command. This will set node.js version to 6, install true type fonts, and install the application.
```shell
./c9-setup.sh
```
- Close the bash terminal and open a new one: click on the + symbol, choose "New Terminal"
- Enter the following command in terminal and press enter: 
```shell
npm run reinstall
```
- Run application on c9: Click "Run", "New Run Configuration...", click "Runner", click "Apache httpd". Click into the field "Run Config Name" and type "Apache httpd" to give this configuration a name. Now click Run, then click the url displayed in the console log: ```https://<c9-vm-name>-<c9-username>.c9users.io```
- To make this runner configuration the default, right-click the green "Run" button in the menu bar, click "Manage...", click "Set as Default". Now, this runner is always invoked when you click the green "Run" button.


## How to create new charts
- Upload the new metadata json file to metadata/single/[id].json
- Upload the tsv file to data/[id].json
- Copy an existing chart definition file to charts/templates/[id].js, or create a new chart definition file that contains:
    - a [self-invoking javascript function](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) that returns a javascript object, which contains:
    - an array named "series" which contains one object for each column in the tsv that needs to be used in the chart (starting with the 2nd column in the data file, no object necessary for the first column),
    - all deviations from the chart template file that is defined in the chart's metadata file. 
- Edit chart-dev.html to use the chart id and template file for your current chart
- Load chart-dev.html in the browser, and check if it matches your requirements. If not: 
- Adapt your chart definition file [id].js until it matches your requirements by following the [Highcharts API Documentation](https://api.highcharts.com/). 
- To get ideas check e.g. [this book](https://www.amazon.com/Learning-Highcharts-Joe-Kuan/dp/1849519080). 
- To see which charts are based on which templates: check metadata/all/templatesById.json
- To add the chart to portal and/or indikatorenset View: [Build the application](#build-application-locally) 
- If you decide not to copy and adapt an existing chart, choose from the following existing templates (click onto image to open interactive chart): 
    - area001: e.g. 6548: 
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=6548" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/6548.svg"></a>
    - befragungen001: Use for survey results if numbers are given as counts:
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=6266" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/6266.svg"></a>  
    - befragungenProzent001: Use for survey results if numbers are given in percentages:
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=5821" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/5821.svg"></a>
    - bubble001: 
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=6549" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/6549.svg"></a>
    - dotplot: 
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=4839" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/4839.svg"></a>  
    - line001: 
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=5813" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/5813.svg"></a>
    - map001: Wohnviertel Choropleth Map with Ranks read from data file displayed in tooltip
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=5109" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/5109.svg"></a>
    - map002: Simple Wohnviertel Choropleth Map without ranks and with simple tooltip
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=9999" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/9999.svg"></a> 
    - mapcolumn002: 
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=6022" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/6022.svg"></a> 
    - mappie001: 
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=6009" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/6009.svg"></a>
    - pie001: 
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=6013" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/6013.svg"></a> 
    - populationPyramid001
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=6018" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/6018.svg"></a>
    - stock001: Time axis, mini chart to filter, e.g. 4132:
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=4132" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/4132.svg"></a>
    - template001: General Purpose template to create your own charts. Most bar, column or combination charts are based on this template. 
        <a href="https://statabs.github.io/indikatoren/chart-details.html?id=6011" target="_blank"><img src="https://statabs.github.io/indikatoren/images/portal/6011.svg"></a>



## Licensing
[Highcharts](http://www.highcharts.com/) is free for personal, school or non-profit projects under the Creative Commons Attribution - Non Commercial 3.0 License.
For commercial and governmental websites and projects, you need to buy a license. See [License and Pricing](http://shop.highsoft.com/highcharts.html).
