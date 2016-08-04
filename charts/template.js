var template = {
	chart: {
		renderTo: 'container',
    events:{
    load: function() {
        this.credits.element.onclick = function() {
            window.open(
              "http://www.statistik.bs.ch",
              '_blank' // http://stackoverflow.com/questions/16810556/how-to-open-credits-url-of-highcharts-in-new-tab
            );
          }
        }
    }
	},
	navigation: {
		menuItemStyle: {
			fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
			padding: '2px 10px'
		}
	}
};