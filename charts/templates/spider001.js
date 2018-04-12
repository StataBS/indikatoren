(function(){ 
    return {
        chart: {		
            "events":{
                "load": function() {
                    this.credits.element.onclick = function() {};
                    //draw spider backgrounds
                    //colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199
                    var top = -Math.PI/2;
                    var endPurple = top + 2*Math.PI/18*8;
                    var endGreen = endPurple + 2*Math.PI/18*5;
                    var endBlue = top;
                    var centerX = 242.5;
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
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,
            "spacingBottom": 45,
            "style": {
                "fontFamily": "Arial"
            },
            "zoomType": "xy",
            type: "area",
            polar: true,
        },
        pane: {
            //size: '60%'
        },
        "title": {
            "style": {
            "fontSize": "14px",
            "fontWeight": "bold",
            "fontFamily": "Arial",
            "color": "#000000"
            },        
            "align": "left"
        },
        "subtitle": {
            "style": {
            "fontSize": "12px",
            "fontWeight": "normal",
            "fontFamily": "Arial",
            "color": "#000000"
            },
            "text": "",
            "align": "left"
        },
        "plotOptions": {
            area: {
                lineColor: 'white',
                lineWidth: 0.5,
            },
            "series": {
                lineWidth: 1,
                color: '#808080',
                marker: {
                    enabled: false
                },
                "dataLabels": {
                    "x": 5,
                    "align": "left",
                    "verticalAlign": "middle",
                    "enabled": false,
                    "style": {
                        "fontSize": "10px"
                    },
                }
            }
        },
        "yAxis": {
            lineColor: 'white',
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                y: 11,
                x: 0,
                overflow: 'justified',
                "style": {
                    "color": "white", 
                    textOverflow: 'none', 
                    fontSize: '10px',
                }
            }, 
            min: 1, 
            max: 21, 
            tickInterval: 7, 
            showFirstLabel: false,
            showLastLabel: true,
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            gridLineColor: 'white',
        },
        "xAxis": {
            type: 'category',
            "title": {
                "style": {
                    "color": "#000000"
                }
            },
            "labels": {
                "style": {
                    "color": "#000000",
                    "fontSize": "10px"
                }, 
                
                useHTML: false,
                //replace "&nbsp;" by its unicode "\u00A0" no-break-space to control line breaks
                formatter: function(){
                    return (this.value + "").replace(/&nbsp;/g, "\u00A0");
                }
            },
            "tickLength": 0,
            tickmarkPlacement: 'on',
            lineWidth: 0,
            "tickInterval": 1,
            gridLineColor: 'white',
        },
        "credits": {
            "enabled": true,
            "style": {
                "color": "#000000",
                "fontSize": "10px",
                "cursor": "default"
            },
            "position": {
                "align": "left",
                "verticalAlign": "bottom",
                "x": 10
            }
        },
        "legend": {
    		"enabled": false,
            "symbolRadius": 0
    	},
        "tooltip": {
            padding: 0,
            useHTML: true,
            //fix html xAxis labels rendered above tooltip, see http://jsfiddle.net/g2j344z4/19/ 
            //replace "&nbsp;" by "\u00A0" to control line breaks in SVG without using html
            formatter: function() {
                return "" + 
                '<div class="tev" style= "display: block; background-color: #fff; padding:9px; margin-left: 1px; margin-top: 1px;">'+ 
                  '<span style="font-size: 10px">' + this.key.replace(/&nbsp;/g, "\u00A0").replace(/-/g, "") + '</span><br/>'+
                  '<span style="color:' + this.point.color + '">\u25CF</span> ' + this.series.name + ': <b>' + this.point.y + '</b><br/>' + 
                '</div>';
            }
        },
    	exporting: {
    	    allowHTML: false, 
    	}        
    };
}());


