(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    tickInterval: 10,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
 "series": [
  {"color": "#b00000"}, /*Schweiz*/
   { color: "#b00000", 
      linkedTo: ':previous',
  //      marker: {
    //      enabled: true,
      //  }    
    }, 
  {"color": "#672773"}, /*Deutschland*/
     { color: "#672773", 
      linkedTo: ':previous',
 //       marker: {
   //       enabled: true,
     //   }    
    }, 
  {"color": "#007a2f"}, /*Italien*/
     { color: "#007a2f", 
      linkedTo: ':previous',
  //      marker: {
    //      enabled: true,
      //  }    
    }, 
  {"color": "#fabd24"}, /*Türkei*/
     { color: "#fabd24", 
      linkedTo: ':previous',
   //     marker: {
     //     enabled: true,
       // }    
    }, 
  {"color": "#b475ab"}, /*EU-17 & EFTA*/
     { color: "#b475ab", 
      linkedTo: ':previous',
   //     marker: {
     //     enabled: true,
      //  }    
    }, 
  {"color": "#71a3b5"}, /*EU-Ost */
     { color: "#71a3b5", 
      linkedTo: ':previous',
   //     marker: {
     //     enabled: true,
      //  }    
    }, 
  {"color": "#b9cfd7"}, /*Balkan*/
     { color: "#b9cfd7", 
      linkedTo: ':previous',
    //    marker: {
      //    enabled: true,
        //}    
    }, 
  {"color": "#ff8028"}, /*Mittel- & Südamerika */
     { color: "#ff8028", 
      linkedTo: ':previous',
 //       marker: {
   //       enabled: true,
     //   }    
    }, 
  {"color": "#73ba7c"}, /*Arabische Länder */
     { color: "#73ba7c", 
      linkedTo: ':previous',
   //     marker: {
     //     enabled: true,
       // }    
    }, 
  {"color": "#9f7c5a"}, /*Afrikanische Länder*/
     { color: "#9f7c5a", 
      linkedTo: ':previous',
    //    marker: {
      //    enabled: true,
      //  }    
    }, 
  {"color": "#999999"}, /*Übrige Länder*/
     { color: "#999999", 
      linkedTo: ':previous',
  //      marker: {
    //      enabled: true,
      //  }    
    }, 
  ],
   "legend": {
   		labelFormatter: function () {
        return this.name.slice(0, this.name.indexOf('(Stadt)'));
        //return this.name.slice(0, -8)
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
  },
  chart:{
  	   "height": 500,    
  }
}
}());