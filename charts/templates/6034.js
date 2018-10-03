(function(){
    return {
 "xAxis": {
    "type": "category"
  },
  "series": [
    { "color": "#007a2f", index: 4, legendIndex: 4}, // dunkelgrün
    { "color": "#68ab2b", index: 3, legendIndex: 3}, // grün
    { "color": "#ffbb58", index: 2, legendIndex: 2}, // orange
    { "color": "#dc440e", index: 1, legendIndex: 1}, // rot
    { "color": "#999999", index: 0, legendIndex: 0}, // grau
  ],
    legend: {
    labelFormatter: function(){
      return this.name.replace("/", " /<br/>");
    }
  },
	};
}());
