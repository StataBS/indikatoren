(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": "normal",
      /*"pointWidth": 35,*/
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    }
  },
  "xAxis": {
    "type": "category",  
    /*tickPositioner: function () {
      var interval = 2,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
      while (i >= ext.dataMin) pos.unshift(i = i - interval);
      return pos;
    } */
  },  
  "yAxis": [
    {
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      tickAmount: 5,
       "tickInterval": 400,
      "title": {
          "style": {
              "color": "#000000",
              "fontSize": null
          },
          "text": null
      },
      "labels": {
       //step: 4,
          "style": {
          "color": "#000000"
          },
          "format": "{value:,.0f}",
      },
      "reversedStacks": true,
      //tickInterval: 4,
    },
    {
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      tickAmount: 5,
      "tickInterval": 5,
      "min": 0,
      //"max":20,
      "title": {
          "style": {
              "color": "#000000",
              "fontSize": null
          },
          "text": null
      },      
      "labels": {
        "format": "{value:,0f}",
        "style": {
          "color": "#000000"
        }              
      },
      "opposite": true,
    }
  ],
  "tooltip": {    
    "shared": true, 
    //"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    //"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
  },  
  "legend": {
     itemMarginBottom: 5,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",

    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"},
    labelFormatter: function(){
      console.log(this);
      return this.name
        .replace("Einbürgerungsziffer", "Einbürgerungsziffer (rechte Skala)")
        
  },
},
  "series": [
    /*{
      "color": "#FABD24",
      "type": "column", 
      tooltip: {
        valueDecimals: 0
      }, 
      marker: {
        enabled: false
      },
      "legendIndex": 1
    },*/
    {
      "color": "#008AC3",
      "type": "column", 
      tooltip: {
        valueDecimals: 0
      }, 
      marker: {
        enabled: false
      },
      "legendIndex": 2
    },
    {
      "color": "#9F7C5A",
      "type": "line",
      tooltip: {
        valueDecimals: 1
      }, 
      marker: {
        enabled: false
      },
      "yAxis": 1,
      "stacking": null, 
      "legendIndex": 3
    }    
  ],
  "chart": {
    //"marginBottom": 65,
    "type": "column"
  }
	}
}());
