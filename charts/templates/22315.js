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
      "labels": {
        "format": "{value}%",
      },
      tickAmount: 5
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} km</b> ({point.percentage:.1f}%)<br/>',
      shared: false
    },  
    "legend": {
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
			{ "color": "#007a2f"}, // dunkelgrün
			{ "color": "#68ab2b"}, // grün
			{ "color": "#ffbb58"}, // orange
			{ "color": "#dc440e"}, // rot
			{ "color": "#6F6F6F"}, // grau
    ],
	};
}());
