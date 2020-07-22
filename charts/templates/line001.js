(function () {
	return {
		chart: {
			type: "line",
			width: 485,
			height: 415,
			spacingBottom: 45,
			borderColor: "#fbfbfb",
			backgroundColor: "#fbfbfb",
			style: {
				fontFamily: "Arial"
			},
			zoomType: "xy",
			panning: true,
			panKey: 'shift',
			events: {
				load: function () {
					this.credits.element.onclick = function () { };

					//for top-left legends with no x defined: move legend to x position of first yAxis
					if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0) {
						this.update(
							{
								legend: {
									x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
								}
							}
						);
					}
				}
			},
		},
		plotOptions: {
			series: {
				marker: {
					enabled: false
				}
			}
		},
		title: {
			align: "left",
			style: {
				fontSize: "14px",
				fontWeight: "bold",
				color: "#000000"
			}
		},
		subtitle: {
			text: "",
			align: "left",
			style: {
				fontSize: "12px",
				fontWeight: "normal",
				color: "#000000"
			}
		},
		xAxis: {
			lineColor: '#B9CFD7',
			lineWidth: 0.5,
			tickLength: 0,
			uniqueNames: true,
			title: {
				style: {
					color: "#000000"
				}
			},
			labels: {
				style: {
					color: "#000000",
					textOverflow: 'none'
				}
			}
		},
		yAxis: {
			min: 0,
			gridLineWidth: 0.5,
			gridLineColor: '#B9CFD7',
			lineColor: '#B9CFD7',
			title: {
				style: {
					color: "#000000",
					fontSize: null
				},
				text: null
			},
			labels: {
				style: {
					color: "#000000"
				}
			}
		},
		legend: {
			enabled: false,
			layout: "vertical",
			verticalAlign: "middle",
			align: "right",
			symbolRadius: 0,
			itemStyle: {
				fontWeight: "normal"
			}
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
		customFunctions: {
			//usage example: 
			//yAxis.events.afterSetExtremes: function(){ 
			//  this.chart.options.customFunctions.optimalAxisLabelDecimals(this.chart.yAxis[0], '{value:,.howManyDecimalsf}'); 
			//}
			optimalAxisLabelDecimals: function (axis, formatString) {

				//see https://forum.highcharts.com/highcharts-usage/how-to-have-all-yaxis-labels-show-same-number-of-decimals-t40826/ 
				//function checks how many decimal places has a number
				var countDecimals = function (value) {
					if ((value % 1) != 0)
						return value.toString().split(".")[1].length;
					return 0;
				};

				var ticks = axis.tickPositions;
				var howManyDecimals = 0;

				//loop looks for the the largest number of decimal places
				ticks.forEach(function (tick) {
					if (countDecimals(tick) > howManyDecimals) {
						howManyDecimals = countDecimals(tick);
					}
				});

				//update labels so they have the same number of decimal places
				axis.chart.update({
					yAxis: [{
						labels: {
							//format: '{value:,.' + howManyDecimals + 'f}',
							format: formatString.replace('howManyDecimals', howManyDecimals),
						}
					}, {
						//second yAxis, if present
					}]
				}, true, true);
			}
		}
	};
}());