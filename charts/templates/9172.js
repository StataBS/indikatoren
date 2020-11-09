(function(){
    return {
    "xAxis": {
        "type": "category", 
        "labels": {
            formatter: undefined,
            align: 'left',
        reserveSpace: true,
        x: -4,
        }
    },
    "yAxis": {
        "tickInterval": null,
        "reversedStacks": false
    },   
    series: [
        { "color": "#007A2F"}, // dunkelgrün
        { "color": "#73B97C"}, // grün
        { "color": "#FABD24"}, // gelb
        { "color": "#B00000"}, // rot
        { "color": "#C8C8C8"}, // hellgrau
        { "color": "#6F6F6F"}, // grau
      ],
    "legend": {
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 5,     
        "align": "left",
        //"x": 145,
        //"y": 70,
        "itemWidth": 150,
        "itemStyle": {
            "fontWeight": "normal"
        }
    },      
    "chart":
    {
        "inverted": true, 
        height:500,
    }
	}
}());
 