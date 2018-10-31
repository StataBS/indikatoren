(function(){
  return {
    title: {
      useHTML: true
    },
    "xAxis": {
      "type": "category",
  	//"tickInterval": 1	
    },  
    yAxis: [{
    	title: {
          text: null
      },
      labels: {
        format: "{value:,.0f}",
        y: 3,
         style: {
         color: "black",
         fontSize: '10px',
        },
      },
      min: 0,  
      tickAmount: 5
    },
    {
      title: {
          text: null
      },
      labels: {
        format: "{value:,.1f}",
        y: 3,
        style: {
         color: "black",
         fontSize: '10px',
        },
      },
      min: 0,
      tickAmount: 5,
      opposite: true
    }
    ],
    "series": [
      {
  	  "index": 1,
  	  "color": "#71A3B5",
        //"legendIndex": 2,
        "type": "column",
        "tooltip": {
      		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
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
      		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
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
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
       "fontWeight": "normal"
      }
    },
    "chart": {    
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
    }, 
    exporting: {
      allowHTML: true,
    },
  };
}());
