(function () {
  return {
    chart: {
      marginRight: 20,
      events: {
        load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text: ""
            })
            .translate(250, -10); //move -140 to the left and 8 down
        }
      }
    },
    data: {
      switchRowsAndColumns: true
    },
    xAxis: {
      //type: "category", /* muss "category" sein, sonst funktioniert es nicht richtig */
      tickPositioner: function () {
        var maxlabels = 10,
          ext = this.getExtremes(),
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min) / maxlabels),
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      x: 20,
      itemWidth: 210,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      //itemMarginBottom: 5,
      title: {
        text: ' ', //muss gesetzt werden, wird via chart.events.load bearbeitet
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
      labelFormatter: function () {
        //if (this.name.includes("Kontingent")) return this.name.split(" ").slice(0, 1).toString();
        //if (this.name.indexOf("Kontingent") >= 0) return this.name.split(" ").slice(0, 1).toString();
        //if (this.name.indexOf("Kontingent Barfüsserplatz") >= 0) return this.name.substring(0,40);
        this.name = this.name.replace("Theaterplatz", "Theaterpl.");
        if (this.name.indexOf("Kontingent") >= 0) return this.name.replace("platz", "pl.");
        //else (this.name.translate(0, -10));
        return this.name;
      },
    },
    series: [
      { color: "#b00000", legendIndex: 0 }, /*Barfi*/
      { color: "#672773", legendIndex: 2 }, /*Marktplatz*/
      { color: "#007a2f", legendIndex: 4 }, /*Münsterplatz*/
      { color: "#fabd24", legendIndex: 6 }, /*Oberer Rheinweg*/
      { color: "#b475ab", legendIndex: 8 }, /*Unterer Rheinweg*/
      { color: "#b9cfd7", legendIndex: 10 }, /*Kaserne*/
      { color: "#b00000", legendIndex: 1, dashStyle: "ShortDot", visible: false}, /*Barfi*/
      { color: "#672773", legendIndex: 3, dashStyle: "ShortDot", visible: false }, /*Marktplatz*/
      { color: "#007a2f", legendIndex: 5, dashStyle: "ShortDot", visible: false }, /*Münsterplatz*/
      { color: "#fabd24", legendIndex: 7, dashStyle: "ShortDot", visible: false }, /*Oberer Rheinweg*/
      { color: "#b475ab", legendIndex: 9, dashStyle: "ShortDot", visible: false }, /*Unterer Rheinweg*/
      { color: "#b9cfd7", legendIndex: 11, dashStyle: "ShortDot", visible: false }, /*Kaserne*/
    ] 
  }
}());