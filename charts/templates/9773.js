(function () {
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
        width: 100,
        labelFormatter: function () {
          return this.name
            .replace("Nahrungsmittelindustrie", "Nahrungs-<br/>mittelindustrie");
        },
        "itemStyle": {
          fontSize: "9px",
          textOverflow: "undefined",
          "fontWeight": "normal"
        }
      },
      "series": [
        {
          "color": "#661200",
          "legendIndex": 6
        },
        {
          "color": "#B00000",
          "legendIndex": 5
        },
        {
          "color": "#FF8028",
          "legendIndex": 4
        },
        {
          "color": "#FFBB58",
          "legendIndex": 3
        },
      ],
      "chart": {
        "type": "column",
        spacingTop: 7
      }
    }
  }());