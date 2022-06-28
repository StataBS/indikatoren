(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0.2,
            groupPadding: 0.2, // exaclty overlaps columns
            borderWidth: 0
        }
  },
  
  yAxis: [
      {
        tickAmount: 6,
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
        max: 12500,
        tickAmount: 6,
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
            }, 

        }
      }
    ],
  
  "xAxis": {
   "tickInterval": 1,
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
  	itemDistance: 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#007a2f",
      "index": 0,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#FF8028",
      "index": 0,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#B00000",
      "index": 0,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 2
    },
	{   
	    yAxis: 1,
      "color": "#ffbb58",
      "index": 1,
      "type": "line",
      "marker": {
        "enabled": false
      }, 
      legendIndex: 3,
      tooltip: {
      	"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    }
    },
  ],  
  "tooltip": {
    "shared": true
  },
  "chart": {
    width: 662,
    height: 208,
  }
};
}());