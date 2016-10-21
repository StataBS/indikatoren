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
        "thousandsSep": " "  
	},
	"exporting": {
        "sourceWidth": null,
        "scale": 5,
        "buttons": {
            "contextButton": {
                "text": "",
                "menuItems": Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 7)     
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
Highcharts.getOptions().exporting.buttons.contextButton.menuItems.push(
    {
        "text": "URL", 
        "onclick": function(){
            window.open($.url('protocol') + '://' + $.url('hostname') + ':' + $.url('port') + '/' + $.url(1) + '/chart.html?kuerzel=' + this.renderTo.id.substring(10), '_blank'); 
        }
    });