/*
global Highcharts
*/


(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
             groupPadding: 0.2,
             borderWidth: 0,
        }
  },
  "yAxis": {
      tickAmount: 7,
      max: 6000,
          
    "labels": {
      "format": "{value:,.0f}",
       "formatter": function(){
        return Highcharts.numberFormat((this.value),0)+''; 
      }, 
    }
  },
  "xAxis": {
  	"type": "category",
    "tickInterval": 1,
          "labels": {
          	step: 1,
        }  
  },
 "legend": { 
    x: 25,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    width: 340,
   // itemWidth: 150,
   // margin: 20,
    itemMarginBottom: 0,
    labelFormatter: function(){
      return this.name
        .replace("Öffentliche Verwaltung, Sozialvers.", "Öffentl. Verw., Sozialvers.")
        .replace("Verkehr, Lagerei, Kommunikation", "Verkehr, Lagerei, Komm.")
        .replace("Industrie (exkl. Chemie, Pharma)", "Industrie (o. Chemie, Pharma)")
        .replace("Berat., Plan., Forsch., Immob., IT", "Berat., Plan., Forsch., Imm., IT");
    },
    "itemStyle": {
   fontFamily: "Arial",
   fontSize: "9px",
   "fontWeight": "normal"
    },
   // symbolHeight: 6,
    symbolPadding: 0,
    itemDistance: 0
    
  },
 "series": [
	 {"color": "#E7CEE2", index: 15}, /* */
	 {"color": "#923F8D", index: 14}, /* */
	 {"color": "#662673", index: 13}, /* */
	 {"color": "#73B97C", index: 12}, /* */
	 {"color": "#B6CFD7", index: 11}, /* */
	 {"color": "#007A2F", index: 10}, /* */
	 {"color": "#FFDA80", index: 9}, /* */
	 {"color": "#FFBB58", index: 8}, /* */
	 {"color": "#689199", index: 6}, /* */
	 {"color": "#008AC3", index: 3},  /* */
	 {"color": "#C8C8C8", index: 2},  /* */
	 {"color": "#2B0099", index: 1}, /* */
	 {"color": "#8A8A8A", index: 0}, /* */
  ],
 tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + ' </b><br/><b>' 
    },
  },  
  "chart": {
  	//height: 600,
  	type: "column",
    inverted: false,
  },
  
data: {
    parsed: function(columns){
      var pointsToKeep=10;
      //keep only the last n elements in the arrays but keep the column title
      columns.forEach(function(v, i, a){
        v.splice(1, v.length-pointsToKeep-1);
      });
    }
  },
};
}());





