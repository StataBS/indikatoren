(function(){
    return {
  plotOptions: {
        series: {
        	pointPadding: 0.2,
        	"stacking": "normal",
        	 "borderWidth": 0,
        },
    scatter: {
        yAxis: 1,
        tooltip: {
          headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
          pointFormatter: function(){ 
              return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat( this.y, 1, ",", " ") + '%</b><br/>';
          }
        }
    }
  },
    yAxis: [
      {
  	    //max: 6000000000,
  	    min: 0,
  	    tickAmount: 7,
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
        	format: "{value:,.0f}",
            style: {
            color: "#000000"
            }
        }
      },
      {
        opposite: true,
        min: 0,
        tickAmount: 7,
        //max: 45,
        //tickInterval: 15,
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
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
            }, 
            formatter: function() {
               return  this.value + "%";
            }
        }
      }
    ],
  "xAxis": {
  	"type": "category",
   "tickInterval": 1,
          "labels": {
          	step: 1,
            //"rotation": 0,
            //"rotation": -90,
        }  
  },
  "legend": { 
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    width: 662,
    itemWidth: 310,
    itemDistance: 0,
    itemMarginBottom: 0,
    "labelFormatter": function () {
      return this.name.replace('Anteil NP', 'Anteil natürliche Personen')
      .replace('Anteil JP', 'Anteil juristische Personen')
      .replace('(JP)', 'juristischer Personen')
      .replace('(NP)', 'natürlicher Personen');
  },
    "itemStyle": {
        "fontWeight": "normal",
        textOverflow: "none",
    },
},
 "series": [
  {"color": "#007A2F", "index": 0, "legendIndex":5}, /**/
  {"color": "#083038", "index": 1, "legendIndex":4}, /**/
  {"color": "#923F8D", "index": 2, "legendIndex":3}, /**/
  {"color": "#FABD24", "index": 3, "legendIndex":2}, /**/
  {"color": "#999999", "index": 4, "legendIndex":1}, /**/
  {"color": "#008AC3", "index": 5, "legendIndex":0}, /**/
        {
        	index:6, legendIndex: 6,
            color: "#B00000",
            type: 'scatter',
            marker: {
                enabled: true,
                symbol: 'circle', 
                radius: 4
            },
            //pointPlacement : -0.15,
        	yAxis: 1,
        },
        {
        	index:7, legendIndex: 7,
            color: "#662673",
            type: 'scatter',
            marker: {
                enabled: true,
                symbol: 'circle', 
                radius: 4
                
            },
            //pointPlacement : 0.15,
            stacking: false,
        	yAxis: 1,
        } 
  //{"color": "#73ba7c", "index": 7, "legendIndex":7}, /**/  
  //{"color": "#73ba7c", "index": 8, "legendIndex":8}, /**/    
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },
  "chart": {
    width: 662, 
  	height: 208,
  	type: "column",
    "inverted": false,
  }
};
}());





