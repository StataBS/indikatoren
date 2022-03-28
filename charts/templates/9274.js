(function(){
    return {
  "xAxis": {
      tickPositioner: function () {
        var interval = 8,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
  "yAxis": {
    "min": 0, 
    tickInterval: 800,
    max: 4000,
	  "labels": {
        "format": "{value:,.0f}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [

    {
    	"color": "#008AC3", 
    	"legendIndex": 0
    }, /* blau */
    {
    	"color": "#3c3c3c", /* schwarz */
    	"legendIndex": 1,
        },
            {
              "color": "#3c3c3c", /* schwarz */
              showInLegend: false,
                },
                {
                  "color": "#3c3c3c", /* schwarz */
                  showInLegend: false
                    },
                    {
                      "color": "#3c3c3c", /* schwarz */
                      showInLegend: false
                        },
                        {
                          "color": "#3c3c3c", /* schwarz */
                          showInLegend: false
                            },
                            {
                              "color": "#3c3c3c", /* schwarz */
                              showInLegend: false
                                },
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  },
  chart: {
    marginRight: 20
  }
}
}());