(function () {
	return {
		chart: {
			events: {
				load: function () {
					this.credits.element.onclick = function () { };
					//draw spider backgrounds
					//colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199
					var top = -Math.PI / 2; 
					//var top = -Math.PI / 2.3; wenn Farbtrennung nicht in der Mitte sein soll. 
					var endPurple = top + 2 * Math.PI / 16 * 7;
					var endGreen = endPurple + 2 * Math.PI / 16 * 5;
					var endBlue = top;
					var centerX = 247;
					var centerY = 212.5;
					var radius = 136;
					this.renderer.arc(centerX, centerY, radius, 0, top, endPurple).attr({
						fill: '#923F8D',
						stroke: '#923F8D',
						'stroke-width': 0,
						'fill-opacity': 0.5
					}).add();
					this.renderer.arc(centerX, centerY, radius, 0, endPurple, endGreen).attr({
						fill: '#68AB2B',
						stroke: '#68AB2B',
						'stroke-width': 0,
						'fill-opacity': 0.5
					}).add();
					this.renderer.arc(centerX, centerY, radius, 0, endGreen, endBlue).attr({
						fill: '#689199',
						stroke: '#689199',
						'stroke-width': 0,
						'fill-opacity': 0.5
					}).add();
				}
			},
			borderColor: "#fbfbfb",
			backgroundColor: "#fbfbfb",
			width: 485,
			height: 415,
			spacingBottom: 45,
			marginLeft: 20,
			style: {
				fontFamily: "Arial"
			},
			zoomType: "xy",
			type: "area",
			polar: true,
		},
		plotOptions: {
			area: {
				lineColor: 'white',
				lineWidth: 0.5,
			},
			series: {
				lineWidth: 1,
				color: '#808080',
				marker: {
					enabled: false
				},
				dataLabels: {
					x: 5,
					align: "left",
					verticalAlign: "middle",
					enabled: false,
					style: {
						fontSize: "10px"
					},
				}
			}
		},
		pane: {
			//size: '60%'
		},
		title: {
			style: {
				fontSize: "14px",
				fontWeight: "bold",
				fontFamily: "Arial",
				color: "#000000"
			},
			align: "left"
		},
		subtitle: {
			style: {
				fontSize: "12px",
				fontWeight: "normal",
				fontFamily: "Arial",
				color: "#000000"
			},
			text: "",
			align: "left"
		},
		yAxis: {
			lineColor: 'white',
			title: {
				style: {
					color: "#000000",
					fontSize: null
				},
				text: null
			},
			labels: {
				y: 11,
				x: 0,
				overflow: 'justified',
				style: {
					color: "white",
					textOverflow: 'none',
					fontSize: '10px',
				}
			},
			min: 1,
            max: 21.1,
            endOnTick: false,
			tickInterval: 7,
			showFirstLabel: false,
			showLastLabel: true,
			gridLineInterpolation: 'polygon',
			lineWidth: 0,
			gridLineColor: 'white',
		},
		xAxis: {
			type: 'category',
			title: {
				style: {
					color: "#000000"
				}
			},
			labels: {
				style: {
					color: "#000000",
					fontSize: "10px"
				},
				useHTML: false,
				//replace "&nbsp;" by its unicode "\u00A0" no-break-space to control line breaks
				formatter: function () {
					return (this.value + "").replace(/&nbsp;/g, "\u00A0");
				}
			},
			tickLength: 0,
			tickmarkPlacement: 'on',
			lineWidth: 0,
			tickInterval: 1,
			gridLineColor: 'white',
		},
		credits: {
			enabled: true,
			style: {
				color: "#000000",
				fontSize: "10px",
				cursor: "default"
			},
			position: {
				align: "left",
				verticalAlign: "bottom",
				x: 10
			}
		},
		legend: {
			enabled: false,
			symbolRadius: 0
		},
		tooltip: {
			padding: 0,
			useHTML: true,
			formatter: function () {

				//individual units and numberFormat in tooltips, depending on series name
				var w, d = undefined, e = '', f = 1, t = ' ';
				switch (this.point.name) {
					case 'Altersquotient':
					case 'Jugendquotient':
						d = 1; f = 100; break;
					case 'Baujahr&nbsp;Wohngebäude':
						d = 0; t = ''; break;
					case 'Fläche&nbsp;pro&nbsp;Wohnung':
					case 'Wohnfläche&nbsp;pro&nbsp;Kopf':
						d = 1; e = ' m²'; break;
					case 'Vermögenssteuer':
					case 'Einkommenssteuer':
						d = 0; e = ' Fr.'; break;
					case 'Arbeitsplätze&nbsp;pro&nbsp;Kopf':
						d = 2; break;
					case (this.point.name.match(/anteil|quote/i) || {}).input:
						d = 1; e = '%'; f = 100; break;
				}
				w = Highcharts.numberFormat((this.point.Wert * f), d, ',', t) + e;

				//fix html xAxis labels rendered above tooltip, see http://jsfiddle.net/g2j344z4/19/ 
				//replace "&nbsp;" by "\u00A0" to control line breaks in SVG without using html
				return "" +
					'<div style= "display: block; background-color: #fff; padding:9px; margin-left: 1px; margin-top: 1px;">' +
					'<span style="font-size: 10px">' + this.point.Wohnviertel + '</span><br/>' +
					this.key.replace(/&nbsp;/g, "\u00A0").replace(/-/g, "") + ': <b>' + w + ' </b> (Rang <b>' + this.point.y + '</b>)<br/>' +
					'</div>';
			}
		},
		exporting: {
			allowHTML: false,
		}
	};
}());


