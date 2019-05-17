(function(){
    return {
 "plotOptions": {
  "series": {
      "stacking": "percent"
    }
  },
  "xAxis": {
    reversed: false,
    "type": "category",
    labels: {
      formatter: function(){
        return this.axis.defaultLabelFormatter.call(this);
      },
    },
  },  
  yAxis: {
    maxPadding: 0,
    reversedStacks: false,
    tickAmount: 6,
  },
  legend: {
    enabled: true,
    reversed: false,
    fontWeight: 'normal',
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    itemMarginBottom: 2,
  },
  "series": [
   
    {
      "color": "#246370",
    },
    {
      "color": "#689199",
    },
    {
      "color": "#A8C3CA",
    },
     {
      "color": "#FABD24",
    },
     {
      "color": "#CD9C00",
    },
     {
      "color": "#7F5F1A",
    },
     {
      "color": "#FF8028",
    },
     {
      "color": "#DC440E",
    },
  ],
  "chart": {    
    "type": "column",
    inverted: true,
  }
	};
}());
