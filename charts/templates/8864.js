(function () {
    return {
      "plotOptions": {
        "series": {
          pointPadding: -.5,
          //groupPadding: 0.1, 
          borderWidth: 0,
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
            //return this.value.replace("Schweiz (rechte Skala)", "<span style='color: rgba(0,0,0,0)'>Absd</span>Schweiz <br/><span style='color: rgba(0,0,0,0)'>Abs</span>(rechte Skala)")
            return this.value.replace("Basel-Landschaft", "Basel-<br/>Landschaft");
          }
        }
      },
      "yAxis": [{
        tickAmount: 5,
        "labels": {
            "formatter": function(){
                return Highcharts.numberFormat((this.value*100),0)+'%'; 
              }, 
          "style": {
            "color": "#000000"
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
            "color": "#000000"
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
      },
      "tooltip": {
            "pointFormatter": function(){
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
          },
        "shared": false
      },
      "chart": {
        "type": "column",
      }
    }
  }());
  