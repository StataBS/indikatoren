/*
global Highcharts
*/

(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "xAxis": {
    "labels": {
      rotation: 0,
    },
    "type": "category"
  },
  "yAxis": {
    tickInterval: 0.02,
    //max: 0.08,
    "labels": {
     "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
      "format": "{value}" 
    }    
  },
  "series": [
	{"color": "#6F6F6F"}, /*BS*/
 	{"color": "#FF8028"}, /*BL*/
 	{"color": "#A8C3CA"}, /*AG*/
	{"color": "#008AC3"}, /*ZH*/
	{"color": "#B00000"}, /*CH*/
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  //"y": 55,  
	  //"itemWidth": 50,
	  itemDistance: 10,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>'; 
    },
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
};
}());

 