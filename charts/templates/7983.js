(function () {
	return {
		chart: {
			marginRight: 16,
			width: 665,
			events: {
                load: function () {
                    var chart = this;
                    chart.series.forEach(function (series) {
                        series.points.forEach(function (point) {
                            var x = 0, y = 0;
                            switch (point.name) {
                                //case 'CH': case 'Schweiz':        x = 0; y = 0; break; //ent-kommentieren falls gewünscht
                                case 'DE': case 'Deutschland':    x = 5; y = -3; break;
                                case 'US': case 'USA':            x = 30; y = 70; break;
                                case 'GB': case 'UK': x = 40; y = 35; break;
                                case 'FR': case 'Frankreich': x = 30; y = 0; break;
                                case 'IT': case 'Italien': x = 20; y = 40; break;
                                case 'ES': case 'Spanien': x = -30; y = 30; break;
                                case 'NL': case 'Niederlande': x = -15; y = -5; break;
                                case 'CN': case 'VR China':       x = 0; y = 55; break;
								case 'IN': case 'Indien': x = -15; y = 5; break;
                            }
                            point.dataLabel.translate(point.dataLabel.x + x, point.dataLabel.y + y);
                        });
                    });
                }
            }
		},
		series: [
			{
			}
		],
		tooltip: {
			useHTML: false,
			pointFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.name}</span><br/>' +
				'Anteile am Übernachtungsvolumen 2020:<b> {point.x}%</b><br/>' +
				'Veränderung 2020 gegenüber dem Mittelwert 2009-2013:<b> {point.y}%</b><br/>' +
				'Wachstumsbeitrag:<b> {point.z}%</b>'
		},
		data: {
			seriesMapping: [
				//bubble series
				{ x: 2, y: 1, z: 3, name: 0, color: 4 }
			],
			parsed: function (columns) {
				//define colors by entry in first column
				var colors = columns[0].map(function (val, i, arr) {
					//column name
					if (i == 0) {
						val = 'color';
					}
					//column value
					else {
						switch (val) {
							/*case 'Schweiz': val = 'rgb(176, 0, 0)'; break;
							case 'Deutschland': val = 'rgb(255, 128, 40)'; break;
							case 'Vereinigte Staaten': val = 'rgb(115, 186, 124)'; break;
							case 'Vereinigtes Königreich': val = 'rgb(180, 117, 171)'; break;
							case 'Frankreich': val = 'rgb(8, 161, 217)'; break;
							case 'Italien': val = 'rgb(131, 82, 46)'; break;
							case 'Spanien': val = 'rgb(255, 232, 70)'; break;
							case 'Niederlande': val = 'rgb(60, 60, 60)'; break;
							case 'China, Hongkong, Taiwan': val = 'rgb(103, 39, 115)'; break;*/

							case 'CH': case 'Schweiz': val = 'rgb(176, 0, 0)'; break;
							case 'DE': case 'Deutschland': val = 'rgb(255, 128, 40)'; break;
							case 'US': case 'USA': val = 'rgb(115, 186, 124)'; break;
							case 'GB': case 'UK': val = 'rgb(180, 117, 171)'; break;
							case 'FR': case 'Frankreich': val = 'rgb(8, 161, 217)'; break;
							case 'IT': case 'Italien': val = 'rgb(131, 82, 46)'; break;
							case 'ES': case 'Spanien': val = 'rgb(255, 232, 70)'; break;
							case 'NL': case 'Niederlande': val = 'rgb(60, 60, 60)'; break;
							case 'CN': case 'VR China': val = 'rgb(103, 39, 115)'; break;
							case 'IN': case 'Indien': val = 'rgb(0, 122, 47)'; break;


							//default: val = 'black';
						}
					}
					return val;
				});
				columns.push(colors);
			}
		},
		xAxis: {
			tickInterval: 5,
			max: 60,
			min: -5,
			labels: {
				format: '{value}%'
			},
			/*title: {
				text: 'Anteile am Übernachtungsvolumen 2020'
			}*/
		},
		yAxis: {
			useHTML: true,
			min: -150,
			tickInterval: 50,
			labels: {
				format: '{value}%'
			},
			title: {
				text: 'Veränderung Logiernächte 2020 gegenüber Ø 2009<span>-</span>2013'
			}
		},
		plotOptions: {
			series: {
			},
			bubble: {
				sizeBy: 'area',
                maxSize: '30%',
                minSize: '8',
				label: {
					enabled: true
				},
				dataLabels: {
					format: '<span style="font-size: 10px"> {point.name}</span><br/>' + 
				'{point.z:,.1f}%',
				formatter: function() {
					//only return last word
					return this.key.replace("Nieder", "Nieder-<br>"); //Umbruch, falls gewünscht;
					//return Highcharts.numberFormat(this.point.y, 0, ",", " ") // I dont't want to display a number but a character
					/*return Highcharts.numberFormat((this.point.z,.1f)%,*/					
					 },
				style: {
					fontSize: "10px", 
					color: 'black', 
					fontWeight: 'normal',
					textOutline: false,
					},
					x: 0,
					y: -15,

					allowOverlap: true,
					//padding: 50,
					//borderRadius:100,
					//overflow: "none",
					//crop: false,
					/*style: {
						fontSize: '10px',
						color: 'black',
						fontWeight: 'normal',
					}*/
				}
			}
		}
	};
}());