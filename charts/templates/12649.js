(function () {
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      "series": {
        //pointPadding: 0,
        groupPadding: 0.2,
        borderWidth: 0
      }
    },    "xAxis": {
      type: "category"
      //"tickInterval": 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.1f} GWh</b><br/>'
    },
    "series": [
      { 
        "color": "#FABD24" /* "#b375ab" Friedmatt*/   
        },
        {
          "color": "#FF8028" /* "#689199" Kannenfeld*/
        },
        {
          "color": "#923F8D" /* "#662673" Landskron*/
        },
        {
          "color": "#689199" /* "#999" Lysbüchel*/
        },
        {
          "color": "#9E7C59" /*"#cd9c00" Pestalozzi*/
        }
    ],
    "legend": {
      width: 460,
      //itemWidth: 230,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      labelFormatter: function () {
        return this.name.split(" ").slice(-1).toString();  //holt z.B. 'Freiraumfäche' aus 'Freiraumfäche Friedmatt'
      },
    }
  }
}());