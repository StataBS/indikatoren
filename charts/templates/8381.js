(function(){
    return {
    "xAxis": {     
        reversed: false,
        "type": "category", 
        "labels": {
            align: 'left',
            reserveSpace: true,
            x: -12,
            formatter: undefined,
            style: {
                fontSize: "10px",
                color: "#000000",
                width: 1,
                whiteSpace: 'nowrap',
                textOverflow: "none"
            },
        }
    },
    "yAxis": {
        "tickInterval": 20,
        "reversedStacks": false,
       
       // ItemMarginTop:5,
        labels: {
            y:10,
            rotation: 0
            },
    },   
    "series": [
        {"color": "#256370"},
        {"color": "#71A3B5"},
        {"color": "#FFBB58"},
        {"color": "#FF8028"},
        {"color": "#C8C8C8"},
        {"color": "#8A8A8A"}        
    ], 
    legend: {
        margin: 9,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 0,
        x: -18,
        itemWidth: 142,
        width: 300,
        itemStyle: {
          textOverflow: "none",
          whiteSpace: "nowrap",

        }
      },  
    "chart":
    {
        "inverted": true, 
        marginRight: 8,
        }
	}
}());