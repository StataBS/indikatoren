/*  global Highcharts 
    global $
*/

Highcharts.setOptions({
	"lang": {
		"resetZoom": "Zoom zurücksetzen",
		"resetZoomTitle": "Zoom zurücksetzen 1:1",
		"contextButtonTitle": "Exportieren und drucken",
		"printChart": "Drucken",
		"downloadJPEG": "Bild - JPEG",
		"downloadSVG": "Bild - SVG",
		"downloadPNG": "Bild - PNG",
		"downloadPDF": "Bild - PDF",		
		"downloadCSV": 'Daten - CSV/TSV',
		"downloadXLS": 'Daten - XLS',
		"decimalPoint": ",",
        "thousandsSep": " ",
        numericSymbols: null,
        months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        rangeSelectorFrom: "Von",
        rangeSelectorTo: "Bis",
        rangeSelectorZoom: "Zeitraum:"
	},
	"exporting": {
        "sourceWidth": null,
        "scale": 5,
        "buttons": {
            "contextButton": {
                /*
                "text": "",
                "menuItems": Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 8),
                */
        chartOptions: {
            chart: {
                borderColor: 'white',
                backgroundColor: 'white'
            }
        }
                /*
                Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 7).push({"textKey": "Test", "onclick": function(){ console.log('Test was clicked.'); }}) 
                 */           
            }
        }
    },
    "navigation": {
        "menuItemStyle": {
            "fontFamily": Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
            "padding": '1px 10px'
        }
    }, 
    chart: {
        style: {
            fontFamily: 'Arial'
        }
    }
});

//Add "Einbetten" menu item
var indikatorensetView = ($.url('?Indikatorenset') || $.url('?indikatorensetView') ) ? true : false;
var indikatorensetParameter = indikatorensetView ? '&indikatorensetView=' + indikatorensetView : '';

var menuItems = Highcharts.getOptions().exporting.buttons.contextButton.menuItems;
menuItems.push(
    {
        "text": "Daten - TSV/CSV", 
        "onclick": function(){            
            window.open($.url('protocol') + '://' + $.url('hostname') + ':' + $.url('port') + '/' + $.url(1) + '/data/' + this.renderTo.id.substring(10) + ".tsv", '_blank'); 
        }
    });
menuItems.push({separator: true});
menuItems.push(
    {
        "text": "Einbetten - Grafik", 
        "onclick": function(){            
            window.open($.url('protocol') + '://' + $.url('hostname') + ':' + $.url('port') + '/' + $.url(1) + '/chart.html?hideHeader=true&id=' + this.renderTo.id.substring(10), '_blank'); 
        }
    });
menuItems.push(
    {
        "text": "Einbetten - Grafik+Text", 
        "onclick": function(){            
            window.open($.url('protocol') + '://' + $.url('hostname') + ':' + $.url('port') + '/' + $.url(1) + '/chart-details.html?hideHeader=true&id=' + this.renderTo.id.substring(10), '_blank'); 
        }
    });
menuItems.push(
    {
        "text": "Verlinken - Grafik+Text", 
        "onclick": function(){            
            window.open($.url('protocol') + '://' + $.url('hostname') + ':' + $.url('port') + '/' + $.url(1) + '/chart-details.html?hideHeader=false&id=' + this.renderTo.id.substring(10), '_blank'); 
        }
    });
					    
//define new chart type, necessary contents are added later on in the chart's template
Highcharts.seriesType('mappie', 'pie', {}, {});
					
					
					
//add polyfill for ie, see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sign                    	
if (!Math.sign) {
  Math.sign = function(x) {
    return ((x > 0) - (x < 0)) || +x;
  };
}					

