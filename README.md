# Indikatorenportal Statistisches Amt Basel-Stadt 
Find and display statistical indicators from the canton of Basel-Stadt, Switzerland. See live version [here](http://www.statistik.bs.ch/zahlen/indikatoren/).  


## Create png files of each chart within an indikatorenset
- In a terminal window within c9.io, run the following command: 
```javascript
npm run start-export-server
```
- In Chrome, open print.html?Indikatorenset=indikatorensetname 
- Chrome will download a png file of each chart in the given Indikatorenset to the local downloads directory. You can then manually move them to their target folder. 
- To preview single charts in print view, use chart.html with the url parameter "view=print", e.g. chart.html?view=print&id=5824. 
- To download a single chart as png, use chart.html?thumbnailOfflineExporting=false&thumbnailType=png&view=print&exportServer=https://[c9-workspace-url]:8081&id=[chart-id]
- At the end of the export session, it's best to stop the export server again: 
```javascript
npm run stop-export-server
```

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
- In the command line (e.g. in c9.io): run 
```javascript
npm run build:umwelt_charts
```
- This uses casperJs / phantomJs to open all charts of Indikatorenset "Umwelt" and save their Highcharts configuration in charts/config/indikatorenset and charts/configs/portal. 
- Create svg files, e.g. by running the command 
```javascript
npm run build
```


## URL Parameters

- Most of the URL Paramaters outlibned below can be used in combination. 
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
| stufe1, stufe2, stufe3 | Portal, Indikatorenset | [Example](https://statabs.github.io/indikatoren/?Indikatorenset=Arbeitsmarkt&stufe=3&stufe1=Monitoring%20Basler%20Arbeitsmarkt&stufe2=Bruttoinlandprodukt%20und%20Wertsch%C3%B6pfung) |  | Pre-populates the filter for stufe1, stufe2 and stufe3. 
| hideSidebar | Portal | [Example](https://statabs-test-indikatoren-jonasbieri.c9users.io/?raeumlicheGliederung=Kanton&hideSidebar=true) | false | Hides the sidebar that contains full text search text box, reset button, thema filter, and räumliche Gliederung filter. 
| hideSearch | Portal | [Example](https://statabs-test-indikatoren-jonasbieri.c9users.io/?raeumlicheGliederung=Kanton&hideSearch=true) | false | Hides the full text search text box. 
| hideResetButton | Portal | [Example](https://statabs-test-indikatoren-jonasbieri.c9users.io/?raeumlicheGliederung=Kanton&hideResetButton=true) | false | Hides the filter reset button. 
| hideThema | Portal | [Example](https://statabs-test-indikatoren-jonasbieri.c9users.io/?raeumlicheGliederung=Kanton&hideThema=true) | false | Hides the Thema filter control. 
| hideUnterthema | Portal | [Example](https://statabs-test-indikatoren-jonasbieri.c9users.io/?raeumlicheGliederung=Kanton&hideUnterthema=true) | false | Hides the Unterthema filter control. 
| hideRaeumlicheGliederung | Portal | [Example](https://statabs-test-indikatoren-jonasbieri.c9users.io/?raeumlicheGliederung=Kanton&hideRaeumlicheGliederung=true) | false | Hides the Räumliche Gliederung filter control. 
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


### Update dependencies
Update version numbers in package.json, then run the following command to do a clean reinstall: 
```javascript
npm run reinstall
```

### Develop in a private github repositoriy
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
- Create new hosted workspace based on the node.js template and the correct github repo
- Run the following command. This will set node.js version to 6, install true type fonts, and install the application.
```shell
./c9-setup.sh
```
- Run application on c9: Click "Run", "New Run Configuration...", click "Runner", click "Apache httpd". Click into the field "Run Config Name" and type "Apache http" to give this configuration a name. Now click Run, then click the url displayed in the console log: ```https://<c9-vm-name>-<c9-username>.c9users.io```
- To make this runner configuration the default, right-click the green "Run" button, click "Manage...", click "Set as Default". Now, this runner is always invoked when you click the green "Run" button.


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
    - befragungenProzent001: Use for survey rsults if numbers are given in percentages:
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
