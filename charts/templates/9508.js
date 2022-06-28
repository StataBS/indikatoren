(function(){
    return {
  "plotOptions": {

    "series": {
      //"pointWidth": 25,
      borderWidth: 0,
      pointPadding: 0.1,
      groupPadding: 0.1,
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
    tickAmount: 7,
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
    width: 105,
    "labelFormatter": function () {
        return this.name.replace("Handel mit und Reparatur von Motorrädern", "Handel u. Reparatur Motorräder")
        .replace("Automobilteilen", "Auto-<br/>teilen")
        .replace("Automobilen", "Autos");
    },
    "itemStyle": {
      fontSize: "9px",
      textOverflow:"undefined",
      "fontWeight": "normal"
    }
  },
  "series": [
    {
        "color": "#083038",
        "legendIndex": 3
    },
    {
        "color": "#246370",
        "legendIndex": 2
    },
    {
        "color": "#689199",
        "legendIndex": 1
    },
    {
        "color": "#D3E2E4",
        "legendIndex": 0
    }
],
  "chart": {    
    "type": "column",
    spacingTop: 7
  }
	}
}());