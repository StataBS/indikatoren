(function () {
    return {
      "plotOptions": {
        "series": {
          pointPadding: 0,
          groupPadding: 0.1,
          borderWidth: 0,
          "dataLabels": {
            "style": {
              "fontSize": "10px"
            }
          }
        },
      },
      data:{
          switchRowsAndColumns: true
      },
      "xAxis": {
        "type": "category",
        labels: {
          rotation: 0,
        }
      },
      "yAxis": {
       tickAmount: 8,  
        "labels": {
          "format": "{value:,.0f}"
        }
      },
      "series": [
        { color: "#246370" },
        { color: "#0F7399" },
        { color: "#689199" },
        { color: "#A8C3CA" },
        // { color: "#D3E2E4" }  
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left", 
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
      "tooltip": {
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} Fr.</b><br/>',
        "shared": false
      },
      "chart": {
        "marginBottom": 35,
        "type": "column",
      }
    }
  }());
  