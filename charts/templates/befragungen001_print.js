(function () {
	return {
		chart: {
			type: "column",
			width: 320,
			height: 208,
			spacing: [2, 2, 2, 2], /*top, right, bottom and left */
			borderColor: "#fbfbfb",
			backgroundColor: "#fbfbfb",
			zoomType: "xy",
			style: {
				//fontFamily: "Arial",
				color: "#000000",
				fontSize: "10px"
			},
			events: {
				load: function () {
					this.credits.element.onclick = function () { };

					//for inverted charts, change labels x/y-offset
					if (this.yAxis[0].horiz != true) {
						this.update({
							yAxis: {
								labels: {
									y: 3,
									x: -5
								}
							}
						});
					}

					//add top-margin if legend is right to allow space for axis-labels
					if (this['legend']['options']['layout'] == 'vertical') {
						this.update({
							chart: {
								marginTop: 6
							}
						});
					}
					//add right-margin if legend is top to allow space for axis-labels
					if (this['legend']['options']['layout'] == 'horizontal') {
						this.update({
							chart: {
								marginRight: 16
							}
						});
					}

					//square legends must be placed 3 pixels more to the left than lines, don't know why
					var squareLegendX = (this['options']['chart']['type'] == 'line' ? 0 : 3);

					//for top-left legends with no x defined: move legend to x position of first yAxis
					if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0) {
						this.update({
							legend: {
								x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding - squareLegendX
							}
						});
					}
				}
			},
		},
		plotOptions: {
			series: {
				stacking: "percent",
				borderWidth: 0,
				dataLabels: {
					style: {
						fontSize: "10px"
					}
				}
			},
			column: {
				groupPadding: 0,
			}
		},
		title: {
			text: undefined
		},
		subtitle: {
			text: undefined
		},
		yAxis: {
			tickInterval: 10,
			gridLineWidth: 0.5,
			gridLineColor: '#B9CFD7',
			lineColor: '#B9CFD7',
			title: {
				text: null
			},
			labels: {
				y: 12,
				format: "{value}%",
				style: {
					fontSize: "10px",
					color: "#000000",
					textOverflow: "none"
				}
			}
		},
		xAxis: {
			type: "category",
			//reversed: true,
			uniqueNames: true,
			lineColor: '#B9CFD7',
			lineWidth: 0.5,
			tickLength: 0,
			title: {
				style: {
					color: "#000000"
				}
			},
			labels: {
				rotation: 0,
				style: {
					fontSize: "10px",
					color: "#000000",
					whiteSpace: 'nowrap',
					textOverflow: "none",
					width: 1
				},

                formatter: function () {
                    //add sum of observations of visible series to the axis label
                    var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
                        return val.visible;
                    });
                    var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                    var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
                        return accumulator + series.yData[indexOfCurrentValue];
                    }, 0);

                    //use N if all series are visible, otherwise use n
                    var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';

                    //if chart is inverted then add linebreak in xAxis labels before (N=XY), else space
                    var doBr = (this.chart.inverted == true) ? ' ' : '<br/>';

                    var formattedSum = Highcharts.numberFormat(sum, 0, ",", "")

                    this.value = this.value.replace("und weitere", "u.a.");

                    //check for value that contains only spaces
                    return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + doBr + '(' + nString + formattedSum + ')';
                }
/*
				formatter: function () {
					//add sum of observations of visible series to the axis label
					var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
						return val.visible;
					});
					var indexOfCurrentValue = this.axis.names.indexOf(this.value);
					var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
						return accumulator + series.yData[indexOfCurrentValue];
					}, 0);

					//use N if all series are visible, otherwise use n
					var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';

					//if chart is inverted then add linebreak in xAxis labels before (N=XY), else space
					var doBr = (this.chart.inverted == true) ? ' ' : '<br/>';

					//var formattedSum = Highcharts.numberFormat(sum, 0, ",", " ")
					if (typeof this.value == 'string') {
						this.value = this.value.replace("und weitere", "u.a."); 

					}
					//check for value that contains only spaces, return
					if (typeof this.value == 'string' && this.value.replace(/\s/g, "") == "") return this.value;
					else return this.value + doBr + '(' + nString + sum + ')';
				}
				*/
			}
		},
		legend: {
			enabled: true,
			useHTML: true,
			layout: "vertical",
			align: "right",
			verticalAlign: "middle",
			symbolRadius: 0,
			padding: 0,
			itemMarginBottom: 4,
			itemStyle: {
				fontSize: "10px",
				color: "#000000",
				fontWeight: "normal",
				textOverflow: null,
				whitespace: "nowrap"
			},
			labelFormatter: function () {
				return this.name.replace('/ ', '/<br/>');
			}
		},
		tooltip: {
			pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: false
		},
		credits: {
			enabled: true,
			position: {}
		},
		navigation: {
			buttonOptions: {
				enabled: false
			}
		}
	};
}());