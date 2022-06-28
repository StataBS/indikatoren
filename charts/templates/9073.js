(function(){
    return {
   "chart": {
    "type": "column",
    width: 665,
   },
  "yAxis": [
    {
      min: 0,
      max: 240000,
    "labels": {
      "format": "{value:,.0f}",
      },
      title: {
        style: {
            color: "#000000",
            fontSize: null
        },
        text: null
    },
    },
    {
      opposite: true,
      min: 0,
      max: 2400,
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      //lineColor: '#B9CFD7', 
      title: {
          style: {
              color: "#000000",
              fontSize: null
          },
          text: null
      },
      labels: {
        formatter: function(){
          return Highcharts.numberFormat(this.value, 0);
        },
          style: {
              color: "#000000"
          }, 

      }
    }
  ],
  "xAxis": {
    //"type": "linear",
    //type: "category",
    //tickInterval: 1,
    //endOnTick: true,
    //startOnTick: true,
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      color: '#923F8D',
      index: 1,
      legendIndex: 1,
      type: "line",
      marker: {
        enabled: false
      },
    },
    {
      color: '#CD9C00',
      index: 2,
      legendIndex: 2,
      type: "line",
      marker: {
        enabled: false
      },
    },
    {
      yAxis: 1,
      color: '#E7CEE2',
      index: 0,
      legendIndex: 3
    }
  
  ],  
  "tooltip": {
    "shared": true
  },
};
}());