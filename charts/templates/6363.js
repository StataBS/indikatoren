(function(){
    return {
    title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
  "xAxis": {
    "type": "category",
    "labels": {
          useHTML: true,
        	align: "left",
        	step: 1,
          "rotation": 0,
          //overflow: 'justify',
          x: -240,
          padding: -100,
          style: {
                  textOverflow: 'none'
          }
       },  
},
  "yAxis": {
	//"max": 100,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "colors": [
    "#B00000", // red 
    "#2B0099", // blue1 
    "#008AC3", // blue2 
    "#008AC3", // blue2 
    "#B6CFD7", // blue3
    "#B6CFD7", // blue3
    "#008AC3", // blue2 ",
    "#B6CFD7", // blue3",
    "#B6CFD7", // blue3",
    "#B6CFD7", // blue3",  
    "#008AC3", // blue2 ", 
    "#007A2F"
  ],  
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
   	"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
    /*tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}  m²</b><br/>',
    "shared": false
  },*/
    tooltip: {  
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">● </span> <b> {point.y:.1f} m²</b><br/>'  
    },
  "chart": {     
     marginLeft:250,
    "type": "column",
    "inverted": true,
    "spacingBottom": 50
  },
  "plotOptions": {
    "series": {
      "pointWidth": 10,
      },
    "column": {
            "colorByPoint": true 
        } 
  },
  exporting: {
    allowHTML: true
  }
};
}());