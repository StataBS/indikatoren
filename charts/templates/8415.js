(function(){
    return {
        "series": [
            {"color": "#083038"},
            {"color": "#256370"},
            {"color": "#71A3B5"},
            {"color": "#8A8A8A"},
            {"color": "#C8C8C8"}                
    ],
    "xAxis": {
        "type": "category"
    },
    yAxis: {
        reversedStacks: false,
        tickInterval: 20,
        max: 80,
    },
    "legend": {
        "reversed": false,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 5,     
        "align": "left",
        //"x": 30,
        //"y": 35,
        itemWidth: 150,
            width: 340,
            itemStyle: {
                textOverflow: "none",
                whiteSpace: "nowrap"
                },
        
    },    
    "tooltip": {
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b>',
    },      
    "plotOptions": 
    {
        "series": {
            "stacking": null
        }
    }
	}
}());

 