(function(){
    return {
"plotOptions": {
    "series": {
       borderWidth: 0,
       pointPadding: 0.1,
     // "pointWidth": 30,
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1,
    "labels": {
    formatter: function(){
        return this.value
          .replace("Beschäftigte", "Beschäftigte<br>(N=5 155)")
          .replace("Betriebe", "Betriebe<br>(N=985)")
          ;
      },
    }
  },  
  "yAxis": {
      tickAmount: 8,
      "labels": {
"format": "{value:,.0f}%",
    },
	"max": undefined
  },
  "legend": {
    y: 30,
  "enabled": true,
  layout: 'vertical',
  align: 'right',
  verticalAlign: 'middle',
  itemWidth: 170,
  margin: 5,
  "itemMarginBottom": 20,
  "itemStyle": {
    "fontWeight": "normal",
    textOverflow: null,
  }
},
  "series": [
  {"color": "#A0BEC8"}, 
  {"color": "#68AB2B"},

  ],
  "chart": {
    //"renderTo": 'container-I.01.1.0016', 
    //"marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false,
    "spacingBottom": 40,
    spacingRight: 0
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    "footerFormat": 'Total: <b>{point.total:,.1f}%</b>',
   "shared": false
  },
  credits: {
    position: {
      y: -15
    },
    style: {
      width: 470
    }
  }
}
}());
