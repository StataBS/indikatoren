(function () {
	return {
	  plotOptions: {
		scatter: {
		  marker: {
			symbol: 'circle'
		  }
		},
	  },
	  "yAxis": {
		max: 50,
		"tickInterval": 10,
		"labels": {
		  "format": "{value:,.0f}%",
		}
	  },
	  "xAxis": {
		"type": "category",
		"tickInterval": 1,
		"labels": {
		  formatter: function () {
			return this.value.replace('-', '/'); //workaround for Chrome which automatically replaces e.g. 2000/01 by 2000-01 (interprets it as year/month)
		  }
		}
	  },
	  "legend": {
		"enabled": true,
		"layout": "horizontal",
		"verticalAlign": "top",
		"align": "left",
		//"width": 50,
		//"y": 50,
		//"x": 40,
		"itemMarginBottom": 2,
		//itemWidth: 235,
		//y: -10,
		margin: 3,
		"itemStyle": {
		  "fontWeight": ["bold", "normal", "bold"]
		},
		 labelFormatter: function () {
		   return this.name.replace('xxKnaben', '').replace('xxMädchen', '');
		//   return this.name.replace(' Mädchen', '').replace(' Knaben', '').replace('Knaben', '<b>Knaben</b>').replace('Mädchen', '<b>Mädchen</b>');
		 }
	  },
	  "series": [
		{ "color": "#E64900", legendIndex: 0, "visible": true, marker: { symbol: 'diamond' } },
		{ "color": "#E64900", legendIndex: 0, "visible": true }, // hellrot 
		{ "color": "#008AC3", legendIndex: 0, "visible": true, marker: { symbol: 'diamond' } },
		{ "color": "#008AC3", legendIndex: 0, "visible": true },// hellblau
		{ "color": "#68AB2B", legendIndex: 0, "visible": true, marker: { symbol: 'diamond' } },
		{ "color": "#68AB2B", legendIndex: 0, "visible": true }, //hellgrün 
		{ "color": "#B375AB", legendIndex: 0, "visible": true, marker: { symbol: 'diamond' } },
		{ "color": "#B375AB", legendIndex: 0, "visible": true }, //hellviolett
		{ "color": "#FFDA80", legendIndex: 0, "visible": true, marker: { symbol: 'diamond' } },
		{ "color": "#FFDA80", legendIndex: 0, "visible": true }, // hellgelb 
		{ "color": "#3C3C3C", legendIndex: 0, "visible": true, marker: { symbol: 'diamond' } },
		{ "color": "#3C3C3C", legendIndex: 0, "visible": true } // grau
	  ],
	  "chart": {
		type: 'scatter',
		inverted: false
	  },
	  tooltip: {
		headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
		pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}%</b><br/>'
	  }
	  /*    
		  "marginBottom": 65,
		  "type": "line",
		  "alignTicks": false
	  */
	};
  }());