(function(){
    return {
 "xAxis": {
    "type": "category"
  },
  yAxis: {
    tickInterval: 20,
    max: 100,
    labels: {
      "type": "category",
      rotation: 0,
    }
  },
  "series": [
    { "color": "#007a2f", index: 5, legendIndex: 1}, // dunkelgrün
    { "color": "#68ab2b", index: 4, legendIndex: 2}, // grün
    { "color": "#ffbb58", index: 3, legendIndex: 3}, // orange
    { "color": "#dc440e", index: 2, legendIndex: 4}, // rot
    { "color": "#C8C8C8", index: 1, legendIndex: 5 },
		{ "color": "#6F6F6F", index: 0, legendIndex: 6 },
  ],
 
  legend: {
    //margin: 9,
    "layout": "horizontal",
    "align": "left",
    "verticalAlign": "top",
    "itemMarginBottom": 4,
    itemWidth: 130,
    width: 300,
    itemStyle: {
      textOverflow: "none",
      whiteSpace: "nowrap",

    }
  },
	};
}());
