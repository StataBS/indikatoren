chartOptions['I.03.1.0002'] = {
	"chart": {
		"renderTo": "container-I.03.1.0002"
	},
	"title": {
		"text": "Erwerbstätigenquote"
	},
	"yAxis": {
		"labels": {
			"formatter": function(){
				return Highcharts.numberFormat((this.value),2);                
			}
		}
    },
	"credits": {
		"text": "Quellenangabe: woher kommen die Daten?"
	},
	"legend": {
		"enabled": false
	},
	"series": [{
		"color": "#923F8D"
	}]
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199