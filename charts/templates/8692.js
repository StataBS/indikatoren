(function(){
    return {
  plotOptions: {
        series: {
        	pointPadding: 0,
        	"stacking": "normal",
        	 "borderWidth": 0,
             //groupPadding: 0,
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
  	    tickAmount: 4,
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
        tickAmount: 4,
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
    labelFormatter: function(){
        return this.name.replace("und ", "und<br/>");
    },
    "itemStyle": {
        "fontWeight": "normal"
    },
},
 "series": [
  {"color": "#083038", "index": 3, "legendIndex":0}, /**/
  {"color": "#A8C3CA", "index": 2, "legendIndex":1}, /**/
  {"color": "#689199", "index": 1, "legendIndex":2}, /**/
  {"color": "#ffda80", "index": 0, "legendIndex":3}, /**/
  //{"color": "#999999", "index": 4, "legendIndex":1}, /**/
  //{"color": "#008AC3", "index": 5, "legendIndex":0}, /**/
        {
        	index:5, legendIndex: 5,
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
  //{"color": "#73ba7c", "index": 7, "legendIndex":7}, /**/  
  //{"color": "#73ba7c", "index": 8, "legendIndex":8}, /**/    
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },
  "chart": {
  	type: "column",
    "inverted": false,
  }
};
}());





