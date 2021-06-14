(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: {
      y: 12
    },
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>'
  },
  "series": [
    { 
      color: "#B00000", 
      id: '0',
    }, /* dunkelrot */
  	{
  	  color: "#007A2F",
  	  id: '1',
  	}, /* dunkelgrün */
    {
  	  color: "#4f81bd",
  	  id: '2',
  	}, /* dunkelblau */
  	{
  	  color: "#662673", 
  	  id: '3', 
  	}, /* dunkelviolett */
  	{
      color: "#7F5F1A", 
      id: '4'
    }, /* dunkelbraun */
    {
  	  color: "#FABD24", 
  	  id: '5'
  	}, /* dunkelgelb */
  	{
  	  color: "#3C3C3C", 
  	  id: '6'
  	}, /* schwarz */
    { 
      color: "#B00000", /* dunkelrot */
      linkedTo: '0',
       // marker: {
         // enabled: true,
        //}    
    }, 
    { 
      color: "#007A2F", /* dunkelgrün */
	    showInLegend: false,
	    linkedTo: '1',
     // marker: {
       // enabled: true,
      //}    
    }, 
    { 
      color: "#4f81bd", /* dunkelblau */
	    showInLegend: false,
	    linkedTo: '2',
   //     marker: {
     //   enabled: true,
      //}    
    }, 
  	{ 
  	  color: "#662673", /* dunkelviolett */
	    showInLegend: false,
	    linkedTo: '3',
   //   marker: {
     //   enabled: true,
      //}    
    }, 
    { 
      color: "#7F5F1A", /* dunkelbraun */
      linkedTo: '4',
   //   marker: {
     //   enabled: true,
      //}    
    }, 
  	{ 
  	  color: "#FABD24", /* dunkelgelb */
	    showInLegend: false,
	    linkedTo: '5',
   //   marker: {
     //   enabled: true, 
      //}    
    }, 
  	{ 
  	  color: "#3C3C3C", /* schwarz */
	    showInLegend: false,
	    linkedTo: '6',
  //    marker: {
    //    enabled: true, 
    //  }    
    }, 
  ],
   "legend": {
   		labelFormatter: function () {
        return this.name.slice(0, this.name.indexOf('(Stadt)'));
      },
    "enabled": true,
    itemDistance: 5, 
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
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
        radius: 2
      }
    }
  }
}
}());
 