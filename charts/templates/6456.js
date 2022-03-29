(function(){
    return {
 "xAxis": {
    "type": "category",
    labels:{
      rotation: 0
    }
  },
  "yAxis": {
      tickInterval: 5000,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#FFBB58"},
  {"color": "#FF8028"}, 
  {"color": "#DC440E"}, 
  {"color": "#B00000"}, 
	  ],
  "legend": {
     width: 430,
     itemWidth: 215,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "labelFormatter": function (){
      return this.name
        .replace("Beratung, Planung, Forschung, Immobilien", "Beratung, Planung, Forschung, <br/>Immobilien")
        .replace("Gebäudebetreuung, Sicherheit, sonst. wirtsch. DL", "Gebäudebetreuung, Sicherheit, <br/>sonst. wirtsch. DL")
        .replace("Personalvermittlung, -überlassung", "Personalvermittlung, <br/>-überlassung");
    },
    "itemStyle": {
      "fontWeight": "normal",
      textOverflow: "none",
      whiteSpace: "nowrap",
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
            "type": "column"
            
        },
    }
}());