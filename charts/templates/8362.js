(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: -.5,
        //groupPadding: 0.1, 
        borderWidth: 0,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        }
      },
      "column": {
        "colorByPoint": true
      }
    },
    "xAxis": {
      "type": "category",
      labels: {
        style: {
          textOverflow: 'none',
          whiteSpace: "nowrap"
        },
        x: -12,
        rotation: 0,
        "formatter": function () {
          return this.value.replace("BS/BL/JU (rechte Skala)", "<span style='color: rgba(0,0,0,0)'>Abstand</span>BS/BL/JU <br/><span style='color: rgba(0,0,0,0)'>Abstand</span>(rechte  Skala)")
            .replace("Schweiz (rechte Skala)", "<span style='color: rgba(0,0,0,0)'>Abstand</span>Schweiz <br/><span style='color: rgba(0,0,0,0)'>Abstand</span>(rechte  Skala)")
            .replace("Basel-Landschaft", "Basel-<br/>Landschaft");
        }
      }
    },
    "yAxis": [{
      "labels": {
        "format": "{value:,.f}",
        "style": {
          "color": "#000000",
        }
      },
      "min": 0,
      "max": undefined,
      "title": "",
    },
    {
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "format": "{value:,.f}",
        "style": {
          "color": "#000000",
          textOverflow: 'none',
          whiteSpace: "nowrap"
        }
      },
      "min": 0,
      "max": undefined,
      "gridLineWidth": 0,
      "opposite": true
    }
    ],
    "series": [{
      index: 1
    },
    {
      index: 2,
      yAxis: 1
    }
    ],
    "colors": [
      "#474747",
      "#FF8028",
      "#FABD24",
      "#B375AB",
      "#990300"
    ],

    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"y": 35,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "shared": false
    },
    "chart": {
      margin: [60, 60, 80, 60],
      "type": "column",
    }
  }
}());
