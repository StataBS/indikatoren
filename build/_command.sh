/home/ubuntu/workspace/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs /home/ubuntu/workspace/build/highcharts-convert.js -infile /home/ubuntu/workspace/charts/configs/indikatorenset/9998.json -outfile /home/ubuntu/workspace/images/indikatorenset/9998.svg -constr Chart


/home/ubuntu/workspace/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs /home/ubuntu/workspace/build/highcharts-convert.js -infile /home/ubuntu/workspace/charts/configs/portal/4127.json -outfile /home/ubuntu/workspace/images/portal/4127.svg -multi true -multiArgsFile /home/ubuntu/workspace/build/convertArgs.json

/home/ubuntu/workspace/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs /home/ubuntu/workspace/build/highcharts-convert.js -infile /home/ubuntu/workspace/charts/configs/portal/9999.json -outfile /home/ubuntu/workspace/images/portal/9999.svg -customcode /home/ubuntu/workspace/build/mappie.js


					Highcharts.seriesType('mappie', 'pie', {}, {});
					
					
					


					// New map-pie series type that also allows lat/lon as center option.
					// Also adds a sizeFormatter option to the series, to allow dynamic sizing
					// of the pies.
					Highcharts.seriesType('mappie', 'pie', {
					    center: null, // Can't be array by default anymore
					    clip: true, // For map navigation
					    states: {
					        hover: {
					            halo: {
					                size: 5
					            }
					        }
					    },
					    dataLabels: {
					        enabled: false
					    }
					    
					}, {
					    getCenter: function () {
					        var options = this.options,
					            chart = this.chart,
					            slicingRoom = 2 * (options.slicedOffset || 0);
					        if (!options.center) {
					            options.center = [null, null]; // Do the default here instead
					        }
					        // Handle lat/lon support
					        if (options.center.lat !== undefined) {
					            var point = chart.fromLatLonToPoint(options.center);
					            options.center = [
					                chart.xAxis[0].toPixels(point.x, true),
					                chart.yAxis[0].toPixels(point.y, true)
					            ];
					        }
					        // Handle dynamic size
					        if (options.sizeFormatter) {
					            options.size = options.sizeFormatter.call(this);
					        }
					        // Call parent function
					        var result = Highcharts.seriesTypes.pie.prototype.getCenter.call(this);
					        // Must correct for slicing room to get exact pixel pos
					        result[0] -= slicingRoom;
					        result[1] -= slicingRoom;
					        return result;
					    },
					    translate: function (p) {
					        this.options.center = this.userOptions.center;
					        this.center = this.getCenter();
					        return Highcharts.seriesTypes.pie.prototype.translate.call(this, p);
					    }
					});
										