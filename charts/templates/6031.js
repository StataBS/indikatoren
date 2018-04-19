(function(){
  return {
    title: {
      useHTML: true
    },
    "plotOptions": {
      "series": {
        "borderWidth": 0,
        "pointWidth": 30,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        },
        "stacking": "false"
      }
    },
    "xAxis": {
      "type": "category",
  	//"tickInterval": 1	
    },  
    "yAxis": [{
    	title: {
          text: null
      },
      "labels": {
        "format": "{value:,.0f}",
         "style": {
         "color": "black"
          },
      },
      "min": 0,  },
    {
      title: {
          text: null
      },
      "labels": {
        "format": "{value:,.1f}",
         "style": {
         "color": "black"
          },
      },
      "min": 0,
      "opposite": true
    }
    ],
    "series": [
      {
  	  "index": 1,
  	  "color": "#71A3B5",
        //"legendIndex": 2,
        "type": "column",
        "tooltip": {
      		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} Tonnen</b><br/>',
         }
      }, // Blau
      {
        "color": "#000000",
        "type": "line",
        //"legendIndex": 3,
        "yAxis": 1,
        "marker": {
          "enabled": false
      },
      "tooltip": {
      		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} Tonnen</b><br/>',
       }
      }
    ],
     "tooltip": {
      //"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "shared": false, 
      useHTML: true
    }, 
    "legend": {
      useHTML: true,
      "enabled": true,
      //"y": 35,
      //itemWidth: 160,
      itemDistance: 12,
      padding: 0,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal", 
        textOverflow: null,
      }
    },
    "chart": {    
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
    },
    exporting: {
      allowHTML: true
    }
  };
}());
