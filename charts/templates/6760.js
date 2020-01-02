/* 
global Highcharts
*/

(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns,
            borderWidth: 0,
           // pointWidth: 300
            
        },
  },
  "yAxis": {
  	//"min": -16000,
  	"max": 16000,
  	"tickInterval": 4000,
    "labels": {
      "format": "{value:,.0f}",
    },
    //gridZIndex: 3,
     /*plotLines: [{
                    value: 0,
                    color: '#6F6F6F',
                    width: 2,
                    zIndex: 4
                }],*/
     plotLines: [{
                    value: 0,
                    color: 'white',
                    width: 2,
                    zIndex: 4 //series have zIndex 3 by default
                }],

  },
  "xAxis": {
   "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"width": 50,
	  //"y": 15,
    "itemMarginBottom": 5,
   // itemWidth: 180,
    labelFormatter: function(){
      return this.name
        .replace("Wegzugsort: unbekannt", "Unbekannt")
        .replace("Wegzugsort: Ausland", "Ausland")
        .replace("Wegzugsort: übrige Schweiz", "Übrige Schweiz")
        .replace("Wegzugsort: Nordwestschweiz", "Nordwestschweiz")
        ;
},
    "itemStyle": {
      "fontWeight": "normal",
      textOverflow: null,
      whiteSpace: 'nowrap'
    }
  },
  "series": [
    {
      "color": "#6F6F6F", // dunkelblau -Zuzug_Unbekannt
      //"color": "#83038", // dunkelblau -Zuzug_Unbekannt
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
     // legendIndex: 2, 
      zIndex: 5, //small values: place above white plotLine
   //   linkedTo: "4",
      showInLegend: false
    },
    {
      "color": "#689199", //dunkelgrün -Zuzug_Ausland
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
     // legendIndex: 3,
   //         linkedTo: "1",
      showInLegend: false
    },
    {
      "color": "#B00000", //hellblau - Zuzug_Übrige Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      
   //   legendIndex: 1,
      showInLegend: false
    },
    {
      "color": "#FFBB58", //gelb ch agglo
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
     // legendIndex: 0,
      showInLegend: false
    },
        {
      "color": "#6F6F6F", // dunkelblau -Wegzug_Unbekannt
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 3,
      
    },
    {
      "color": "#689199", //dunkelgrün -Wegzug_Schweiz. Agglomeration Basel
      //"index": 0,
  //     id: "1",
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
    {
      "color": "#B00000", //hellblau - Wegzug_Übrige Schweiz
      //"index": 0,
   //   id: "2",
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#FFBB58", // wegzug ch agglo
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#000000",
      //"index": 1,
      "type": "line",
	   "marker": {
    	"enabled": false
      }, 
      legendIndex: 4,
    },
      /*{
      "color": "000000", //hellgrün - Wegzug_Ausland
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 4
    },*/
  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
  "chart": {
      	width: 662, 
        height: 208,
    events: {
      render: function(args){
        //Add functionality to define plotLines' zIndex between different series. Series have zIndex 3. See https://github.com/highcharts/highcharts/issues/1687 and http://jsfiddle.net/highcharts/r3Lzjjz6/1/
        Highcharts.wrap(Highcharts.PlotLineOrBand.prototype, 'render', function (proceed) {
        	var chart = this.axis.chart;
            
            proceed.call(this);
        
        	if (!chart.seriesGroup) {
        		chart.seriesGroup = chart.renderer.g('series-group')
        			.attr({ zIndex: 3 })
        			.add();
        	}
        
            if (this.svgElem.parentGroup !== chart.seriesGroup) {
            	this.svgElem
                	.attr({ zIndex: this.options.zIndex })
                	.add(chart.seriesGroup);
            }
            return this;
        });
        

      }
    }
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
  }
};
}());

