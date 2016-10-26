chartOptions['I.50.2.0001'] = {
    "xAxis": {
        "type": "category",
        "labels": {
            "useHTML": true
        }
    },
    "yAxis": {
        "tickInterval": null,
        "reversedStacks": false
    },   
    "series": [
        {
        "color": "#256370"
        },
        {
        "color": "#71A3B5"
        },
        {
        "color": "#FFBB58"
        },
        {
        "color": "#FF8028"
        },
        {
        "color": "#C8C8C8"
        },
        {
        "color": "#8A8A8A"
        }        
    ],
    "tooltip": {
        "useHTML": true,
        "pointFormat": '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%</b><br/>'
    },           
    "legend": {
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 5,     
        "align": "left",
        "x": 145,
        "y": 70,
        "itemWidth": 150,
        "itemStyle": {
            "fontWeight": "normal"
        }
    },      
    "chart":
    {
        "inverted": true
    }
};
 