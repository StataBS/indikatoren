
/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function () {
	return {
		"legend": {
			useHTML: false,
			"title": {
				"text": "Mittlerer nächtlicher<br>Wärmeinseleffekt in °C",
				style: { 'fontWeight': ' bold' }
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -60,
			//"y": -20,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 0.9999999999,
				color: '#D3E2E4',
				name: "<span style='color: rgba(0,0,0,0)'>.0</span>< 1,00"
			}, {
				from: 1,
				to: 1.9999999999,
				color: '#A8C3CA',
				name: "1 &ndash; 1,99"
			}, {
				from: 2,
				to: 2.9999999999,
				color: '#689199',
				name: "2 &ndash; 2,99"
			}, {
				from: 3,
				to: 3.9999999999,
				color: '#246370',
				name: "3 &ndash; 3,99"
			}, {
				from: 4,
				color: '#083038',
				name: "<span style='color: rgba(0,0,0,0)'>.0</span>≥ 4,00"
			}],
		},
		"tooltip": {
			formatter: function (args) {
				if (!this.point["Wohnviertel Id"]) {
					//Rhein
					return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
				}
				else {
					//Wohnviertel
					return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' +
						this.point.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.point.value), 2) + ' °C</b><br/>';
				}
			}
		},
		"data": {
			"seriesMapping": [
				{
					x: 0, y: 4
				}
			]
		},
		"series": [
			{
				"name": "Wohnviertel",
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"borderColor": "#fbfbfb",
				"joinBy": ['TXT', 'Wohnviertel Id'],
				"keys": ['Wohnviertel Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}
			}

		],
		chart: {
			events: {
				load: function (e) {
					this.credits.element.onclick = function () { };
					var chart = this;
					var fn = this.options.customFunctions;
					//define new Highcharts template "mappie"
					fn.addLegendRectangle(chart, 265, 250, 155, 120, '#fbfbfb');
				}
			}
		}
	};
}());


