(function () {
  return {
    "chart": {
      "type": "line",
      events: {
        load: function () {
          //move legend title
          var title = this.legend.title.translate(-113, 75);
        }
      }
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
      }
    },
    subtitle: {
      useHTML: true
    },
    "yAxis": [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          enabled: false
        },
        "labels": {
          useHTML: true,
          //"format": "{value:,.2f}",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          enabled: false
        },
        "labels": {
          //"format": "{value:,.2f}",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
        "opposite": true
      }
    ],
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      alignColumns: true,
      useHTML: true,
      y: -75,
      x: 30,
      itemMarginBottom: 3,
      align: "right",
      width: 350,
      itemWidth: 100,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      labelFormatter: function () {
        //return (this.index % 2 != 0) ? this.name.slice(-4) : this.name; //remove text before year on each item with odd index
        //return this.name.slice(-4); //return last 4 letters
        return this.name.split(" ").pop().replace('Basel', 'Stadt Basel'); //return only last word of legend-title
      },
      title: {
        text: 'PW pro Haushalt:<br/><br/>Motorisierungsgrad:<br>(rechte Skala)',
        style: {
          fontWeight: 'normal',
          lineHeight: 1.4
        }
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>'
    },
    /*"PW pro Haushalt Pestalozzi"	"Motorisierungsgrad Pestalozzi"	
    "PW pro Haushalt Kannenfeld"	"Motorisierungsgrad Kannenfeld"	
    "PW pro Haushalt Landskron"	"Motorisierungsgrad Landskron"	
    "PW pro Haushalt Lysbüchel"	"Motorisierungsgrad Lysbüchel"	
    "PW pro Haushalt Friedmatt"	"Motorisierungsgrad Friedmatt"	
    "PW pro Haushalt Basel"	"Motorisierungsgrad Basel"
*/
    "series": [
      {
        "color": "#9E7C59", type: 'column', legendIndex: 5, index: 9 /* "#b375ab" Pestalozzi*/
      },
      {
        "color": "#9E7C59", yAxis: 1, legendIndex: 11, index: 10/* "#b375ab" Pestalozzi*/
      },
      {
        "color": "#FF8028", type: 'column', legendIndex: 2, index: 3 /* "#689199" Kannenfeld*/
      },
      {
        "color": "#FF8028", yAxis: 1, legendIndex: 8, index: 4/* "#689199" Kannenfeld*/
      },
      {
        "color": "#923F8D", type: 'column', legendIndex: 3, index: 5/* "#662673" Landskron*/
      },
      {
        "color": "#923F8D", yAxis: 1, legendIndex: 9, index: 6 /* "#662673" Landskron*/
      },
      {
        "color": "#689199", type: 'column', legendIndex: 4, index: 7 /* "#999" Lysbüchel*/
      },
      {
        "color": "#689199", yAxis: 1, legendIndex: 10, index: 8/* "#999" Lysbüchel*/
      },
      {
        "color": "#FABD24", type: 'column', legendIndex: 1, index: 1 /*"#cd9c00" Friedmatt*/
      },
      {
        "color": "#FABD24", yAxis: 1, legendIndex: 7, index: 2 /*"#cd9c00" Friedmatt*/
      },
      {
        "color": "#8A8A8A", type: 'column', legendIndex: 6, index: 11/*"#8A8A8A" Stadt Basel*/
      },
      {
        "color": "#8A8A8A", yAxis: 1, legendIndex: 12, index: 12/*"#8A8A8A" Stadt Basel*/
      }
    ]
  }
}());
