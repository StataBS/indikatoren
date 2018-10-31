(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      "pointWidth": 40,
      borderWidth: 0,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
  	 max: 6000,
     tickInterval: 2000,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#B00000", "index": 4}, /*rot */
  {"color": "#FF8028", "index": 3}, /*dunkelorange */
  {"color":"#E6E600", "index": 2}, /*dunkelgelb */
  {"color":"#68AB2B ", "index": 1}, /*dunkelgrün */
  ],
  "chart": {
    "type": "column",
    "inverted": false,
    spacingTop: 5,
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
};
}());
