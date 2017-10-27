/*  global Highcharts 
    global $
*/
Highcharts.setOptions({
	"lang": {
		"downloadJPEG": "JPEG",
		"resetZoom": "Zoom zurücksetzen",
		"resetZoomTitle": "Zoom zurücksetzen 1:1",
		"printChart": "Drucken",
		"downloadSVG": "SVG",
		"downloadPNG": "PNG",
		"decimalPoint": ",",
		"contextButtonTitle": "Exportieren und drucken",
		"downloadPDF": "PDF",
		"downloadCSV": 'CSV',
		"downloadXLS": 'XLS',		
        "thousandsSep": " ",
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
                "text": "",
                "menuItems": Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 7),

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
            "padding": '0px 10px'
        }
    }
});

//Add "Einbetten" menu item
var indikatorensetView = ($.url('?Indikatorenset') || $.url('?indikatorensetView') ) ? true : false;
var indikatorensetParameter = indikatorensetView ? '&indikatorensetView=' + indikatorensetView : '';
Highcharts.getOptions().exporting.buttons.contextButton.menuItems.push(
    {
        "text": "URL", 
        "onclick": function(){            
            window.open($.url('protocol') + '://' + $.url('hostname') + ':' + $.url('port') + '/' + $.url(1) + '/chart.html?id=' + this.renderTo.id.substring(10) + indikatorensetParameter + "&suppressNumberInTitle=true", '_blank'); 
        }
    });
    




					    
//define new chart type, necessary contents are added later on in the chart's template
Highcharts.seriesType('mappie', 'pie', {}, {});
					
					

