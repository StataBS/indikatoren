(function(){
    return {
 "xAxis": {
   "type": "category",
    "labels": {
     rotation: 0
    }
    //labels:{
    	//style:{
    		//TextOverflow: 'none' // prevents ellipsis
    	//}
    //}
  },
  "yAxis": {
    offset: -10,
    tickAmount: 7,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
	{"color": "#6F6F6F"}, /*BS*/
  {"color": "#FF8028"}, /*BL*/
 	{"color": "#A8C3CA"}, /*AG*/
	{"color": "#008AC3"}, /*ZH*/
	  ],
  "legend": {
    width:300,
    itemwidth:140,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    labelFormatter: function(){
    return this.name.replace("Basel-Stadt", "BS") .replace("Basel-Landschaft", "BL") .replace("Aargau", "AG") .replace("Zürich", "ZH");
    },
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
            "series": {
                "stacking": null,
				pointPadding: 0, 
				groupPadding: 0.1, 
				borderWidth: 0

            }
        },
        "chart": {   
          //marginLeft: 48,
          spacing: [2,1,1,1], 
            "type": "column"
        },
    }
}());