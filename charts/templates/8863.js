(function () {
    return {
      "plotOptions": {
        "series": {
          "colorByPoint": true,
          pointPadding: 0,
          borderWidth: 0,
        },
      },
      "xAxis": {
        "type": "category",
        labels: {
          style: {
            textOverflow: 'none',
            whiteSpace: "nowrap"
          },
          rotation: 0,
          "formatter": function () {
            //return this.value.replace("Schweiz (rechte Skala)", "<span style='color: rgba(0,0,0,0)'>Absd</span>Schweiz <br/><span style='color: rgba(0,0,0,0)'>Abs</span>(rechte Skala)")
            return this.value.replace("Basel-Landschaft", "Basel-<br/>Landschaft");
          }
        }
      },
      "yAxis": {
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
      },
      "tooltip": {
            "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b>' 
          },
      },
      "chart": {
        "type": "column",
      }
    }
  }());
  