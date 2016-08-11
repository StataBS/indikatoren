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
        buttons: {
            contextButton: {
                "text": "",
                menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 8)                
            }
        }
    },
    navigation: {
        menuItemStyle: {
            fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
            padding: '0px 10px'
        }
    }
});