(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0.1,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category",
    "labels": {
      rotation: -90,
      y: 7,
           "formatter": function() {
            return this.value
            .replace("Industrie (exkl. Chemie, Pharma)", "Industrie (exkl. <br/>Chemie,\u00A0Pharma)")
            .replace("Chemie, Pharma", "Chemie, Pharma")
            .replace("Baugewerbe", "Baugewerbe")
            .replace("Handel, Reparatur", "Handel, Reparatur")
            .replace("Verkehr, Lagerei, Kommunikation", "Verkehr, Lagerei,<br/>Kommunikation")
            .replace("Gastgewerbe", "Gastgewerbe")
            .replace("Finanz-, Versicherungs-DL", "Finanz- und<br/>Versicherungs-DL")
            .replace("Beratung, Planung, Forschung, Immobilien, IT, Personalvermittlung, andere DL", "Beratung, Planung, <br/>Forschung, Immob.,<br/>IT, sonst. DL")
            .replace("Gebäudebetreuung, Sicherheit, sonst. wirtsch. DL", "Gebäudebetreuung, <br/>Sicherheit, sonst. <br/>wirtsch. DL")
            .replace("Öffentliche Verwaltung, Sozialversicherungen", "Öffentl. Verwaltung, <br/>Sozialversicherungen")
            .replace("Erziehung, Unterricht", "Erziehung, Unterricht")
            .replace("Kultur, Unterhaltung, pers. DL", "Kultur, Unterhaltung, <br/>pers. DL")
            .replace("Gesundheits-, Sozialwesen", "Gesundheits-, <br/>Sozialwesen")
            .replace("Total", "Total")
            ;
    },
    style: { 
          "textAlign": "center",
          fontSize: "9px",
          //width: "100px",
          //wordWrap: 'break-word',
		} 
    },
  },
  "yAxis": {
    tickInterval: 0.02,
    "labels": {
      "format": "{value}%" ,
        style: { 
          fontSize: "9px",
		//	textOverflow: 'none' // prevents ellipsis
		},
    "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
    }    
  },
  "series": [
  {"color": "#C9D6DB"},
  {"color": "#71A3B5"}, 
  {"color": "#008AC3"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    margin: 8,
    itemDistance: 3,
    "itemStyle": {
      "fontSize": "9px",
      "fontWeight": "normal"
    },
  },
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  },   
  "chart": {  
  	"type": "column",
    "inverted": false,
  	width: 662, 
  	height: 208,
	  spacingTop: 5,
	  spacingBottom: 5,
	  events: {
      render: function(args){
        let chart = this;
          chart.xAxis[0].labelGroup.element.childNodes.forEach(label => {
            if(label.getBBox().height > 9){
            	label.attributes[4].value = label.attributes[4].value - (label.getBBox().height - 9)/4
            }
          })
 
        }

      }
  }
}
}());

 