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
        "type": "category"
      },
      "yAxis": {
          tickAmount: 8,
        "labels": {
          "format": "{value:,.0f}"
        }
      },
      "series": [
        { color: "#007A2F" },
        { color: "#68AB2B" },
        { color: "#73B97C" },
        { color: "#246370" },
        { color: "#0F7399" },
        { color: "#689199" },
        { color: "#A8C3CA" },
        { color: "#D3E2E4" }     
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        //"y": 35,    
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
      "tooltip": {
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
        "shared": false
      },
      "chart": {
        "renderTo": 'container-I.17.3.0003',
        "marginBottom": 75,
        //"marginTop": 85,
        "type": "column",
      }
    }
  }());
  