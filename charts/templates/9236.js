(function(){
    return {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "style": {
          "fontSize": "9px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",  
    "labels": {
      rotation: -45
    }
  },  
  "yAxis": {
    tickAmount: 8,
    max: 350,
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    enabled: true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 3,
    "align": "right",
    symbolPadding: 0,
    margin: 1,
    width: 100,
    labelFormatter: function(){
      return this.name
        .replace("Boden, Fliesen, Tapeziererei", "Boden, Fliesen, <br/>Tapeziererei")
        .replace("Stuck, Gipserei, Verputzerei", "Stuck, Gipserei, <br/>Verputzerei")
        .replace("Bautischlerei, -schlosserei", "Bautischlerei, <br/>-schlosserei");
    },
    "itemStyle": {
      fontSize: "9px",
      textOverflow:"undefined",
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#FF8028",
      "legendIndex": 1
    },
    {
      "color": "#FABD24",
      "legendIndex": 0
    },
  ],
  "chart": {    
    "type": "column",
    spacingTop: 7
  }
	}
}());