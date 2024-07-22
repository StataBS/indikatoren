(function(){
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      "series": {
        "stacking": "percent"
      }
    },
    xAxis: {
			type: "category"
//      tickInterval: 1
    },
    "yAxis": {
        reversedStacks: false,
      "labels": {
        "format": "{value}%",
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      shared: true
    },  
    "legend": {
        reversed: true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
			{ "color": "#246370"}, // dunkelgrün
			{ "color": "#689199"}, // grün
			{ "color": "#ffbb58"}, // orange
			{ "color": "#FF8028"}, // rot
			{ "color": "#B00000"}, // grau
    ],
	};
}());
