chartOptions['I.01.1.0038.map'] = {
	"tooltip": {
		"pointFormatter": function(){
			return '<span style="color:{series.color}">' + this.series.data[this.x].name + '</span>: <b>'+Highcharts.numberFormat((this.value*100),2)+'%</b><br/>Rang <b>' + parseInt(this.x + 1) + '</b>'
		}
	},
	colorAxis: {
		min: 0,
		/*
		minColor: '#ffffff',
		maxColor: '#923F8D',
		*/		
		labels: {
			formatter: function () {
				return Highcharts.numberFormat((this.value*100),0)+'%'; 
			}
		}
	},			
	series: [{
		animation: true,
		mapData: geojson_wohnviertel,
		joinBy: ['TXT', 'Wohnviertel Id'],
		keys: ['Wohnviertel Id', 'value'],
		states: {
			hover: {
				color: '#BADA55'
			}
		}
	}]
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199