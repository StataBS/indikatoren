/*
 * based on auto.js, an example as part of filter.js (https://github.com/jiren/filter.js/)
 * 2.1.0 (2015-10-17)
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Copyright 2011-2015 Jiren Patel[jirenpatel@gmail.com]
 *
 * Dependency:
 *  jQuery(v1.9 >=)
 */


$(document).ready(function(){ 

  //append elements to different containers at the same time: links and carousel
  var appendFn = function(html_ele, record) {
    //add element to the container defined in FJS configuration
    var defaultContainer = this.$container.selector;
    $(defaultContainer).append(html_ele);
    //$("#indikatoren").append(html_ele);
    
    //create element based on different template
    var html = $('#indikator-template-modal').html();
    var templateFunction = this.templateBuilder(html);

    $('#carousel-inner').append(templateFunction(record))


  }

  var fjsConfig = {
    template: '#indikator-template-carousel',    
    search: { ele: '#searchbox' },
    callbacks: {
          afterFilter: afterFilter, 
          shortResult: sortResult
    },    
    pagination: {
      container: '#pagination',
      visiblePages: 5,
      perPage: {
        values: [16, 30, 100],
        container: '#per_page'
      },
    },
    appendToContainer: appendFn
  };
  


  //Render page differently depending on url query string  
  var indikatorenset = $.url('?Indikatorenset'); 
  if (indikatorenset){ 
    prepareIndikatorensetView(indikatorenset);
    var FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);
    FJS.addCriteria({field: "kennzahlenset", ele: "#kennzahlenset_filter", all: "all"});
    FJS.addCriteria({field: "stufe1", ele: "#stufe1_filter", all: "all"});
    FJS.addCriteria({field: "stufe2", ele: "#stufe2_filter", all: "all"});
  }  
  else {
    preparePortalView();
    var FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);
    FJS.addCriteria({field: "thema", ele: "#thema_criteria input:checkbox"});
    FJS.addCriteria({field: "schlagwort", ele: "#schlagwort_filter", all: "all"});
    FJS.addCriteria({field: "raeumlicheGliederung", ele: "#raeumlicheGliederung_filter", all: "all"});  
  }  

  var sortOptions = {'kuerzel': 'asc'};

  $("#sortBy").on('change', function(e){
    sortOptions = getSortOptions($(this).val());
    FJS.filter();
    e.preventDefault();
  });

  function sortResult(query){
    if(sortOptions){
      query.order(sortOptions);
    }
  }

  FJS.filter();
  window.FJS = FJS;  
  //Only now display page
  $('body').show();
});


function getSortOptions(name){
  switch(name){
    case 'kuerzel_asc': 
      return {'kuerzel': 'asc'};
    case 'kuerzel_desc': 
      return {'kuerzel': 'desc'};         
    default : 
      return {'kuerzel': 'asc'};     
  }
};


function preparePortalView(){
  $("#main-control-element-indikatorenset").remove();    
  renderThema();
  renderMultiselectDropdownFromJson(indikatoren, 'schlagwort', '#schlagwort_filter');    
  renderMultiselectDropdownFromJson(["Kanton", "Gemeinde", "Wohnviertel", "Bezirk", "Block", "Blockseite"], '', '#raeumlicheGliederung_filter');   
};


function prepareIndikatorensetView(indikatorenset){
  $("#sidebar-element").remove();
  //Change bootstrap col size in order to fill width 
  $("#main-element").removeClass();
  $("#main-element").addClass('col-xs-12');
  $("#main-control-element-portal").remove();
    
  renderDropdownFromJson(indikatoren, 'kennzahlenset', '#kennzahlenset_filter', 'kennzahlenset');
  //select requested Indikatorenset in dropdown
  $('#kennzahlenset_filter').val(indikatorenset);  
  
  //prepare query String object for filtering stufe1 and stufe2
  var baseQueryString = new Object();
  baseQueryString['kennzahlenset'] = indikatorenset;              

  renderDropdownFromJson(indikatoren, 'stufe1', '#stufe1_filter', 'stufe1', baseQueryString);
  renderDropdownFromJson(indikatoren, 'stufe2', '#stufe2_filter', 'stufe2', baseQueryString);

  //add cascaded dropdowns functionality to stufe1 and stufe2
  $('#stufe1_filter').change(function(){
    //remove selection on 2nd level dropdown upon change in first level dropdown
    $('#stufe2_filter :nth-child(1)').prop('selected', true);
    $('#stufe2_filter').change();
    //filter stufe2 to include only values that occur together with selected stufe1 value
    //deep copy baseQueryString object
    var stufe2QueryString = $.extend(true, {}, baseQueryString); 
    if ($('#stufe1_filter').val() != 'all') {
      stufe2QueryString['stufe1'] = $('#stufe1_filter').val();
    }
    renderDropdownFromJson(indikatoren, 'stufe2', '#stufe2_filter', 'stufe2', stufe2QueryString);
  });  
};


function renderThema(){  
  var values = ["01 Bevölkerung",	"02 Raum, Landschaft, Umwelt",	"03 Erwerbsleben",	"04 Volkswirtschaft",	"05 Preise",	"06 Produktion und Handel",	"07 Land- und Forstwirtschaft",	"08 Energie",	"09 Bau- und Wohnungswesen",	"10 Tourismus",	"11 Verkehr",	"12 Finanzmärkte und Banken",	"13 Soziale Sicherheit",	"14 Gesundheit",	"15 Bildung und Wissenschaft",	"16 Kultur und Sport",	"17 Politik",	"18 Öffentliche Finanzen",	"19 Rechtspflege", "50 Regelmässige Befragungen"];

  var html = $('#checkbox-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#thema_criteria');
  
  $.each(values, function(i, c){
    //var themaName = (i+1) + " " + c;
    //container.append(templateFunction({ key: c, value: themaName }))
    container.append(templateFunction({ value: c }))
  });

  //Check checkboxes  
  $('#thema_criteria :checkbox').prop('checked', true);
  $('#all_thema').on('click', function(){
    $('#thema_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
};


function renderDropdownFromJson(data, field, selector, sortKey, filterQueryString){
  var JQ = JsonQuery(data);
  //If filterQueryString is given: filter data before rendering dropdowns
  if (typeof filterQueryString !== 'undefined') {
    JQ = JQ.where(filterQueryString);
  } 
  //Sort if sortKey is given 
  if (typeof sortKey !== 'undefined'){
    var sortOptions = new Object();
    sortOptions[sortKey] = 'asc';
    JQ=JQ.order(sortOptions);
  }
  var allValues = JQ.pluck(field).all;
  //get unique values and filter out empty string 
  var uniqueValues = allValues.filter(function(item, i, ar){ return ar.indexOf(item) === i && item != ""; }); 
  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $(selector);
  //remove options if any are present, but leave the first one
  var optionsToRemove = selector+' > option:gt(0)';  
  $(optionsToRemove).remove();
  //render options
  $.each(uniqueValues, function(i, c){
    container.append(templateFunction({ key: c, value: c }))
  });
};


function renderMultiselectDropdownFromJson(data, field, selector){
  var JQ = JsonQuery(data);
  var allValuesNested = JQ.pluck(field).all;
  //reduce array of arrayy of values to array of values if applicable
  var allValues = [].concat.apply([], allValuesNested);
  //get unique values and filter out empty string 
  var uniqueValues = allValues.filter(function(item, i, ar){ return ar.indexOf(item) === i && item != ""; }); 
  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $(selector);
  //render options
  $.each(uniqueValues, function(i, c){
    container.append(templateFunction({ key: c, value: c }))
  });
  //convert select control to multiselect dropdown
  configureMultiselect(selector);  
};


function configureMultiselect(selector){
  //configure multiselect
  $(selector).multiselect({
      buttonWidth: '100%', 
      inheritClass: true, 
      includeSelectAllOption: true, 
      selectAllText: 'Alle', 
      enableFiltering: true, 
      enableCaseInsensitiveFiltering: true,
      filterPlaceholder: 'Suche...', 
      nonSelectedText: 'Keines ausgewählt', 
      allSelectedText: 'Alle ausgewählt', 
      nSelectedText: 'ausgewählt'
    }
    /*
      maxHeight: 400,
      dropUp: true,
      checkboxName: function(option) {
          return 'multiselect_test';
      }
      selectAllValue: 'all',
    */
  );
  //check all boxes
  $(selector).multiselect('selectAll', false);
  $(selector).multiselect('updateButtonText');
};


var afterFilter = function(result, jQ){
    //$('#total_indikatoren').text(result.length);    
    //Add Counts in brackets after each option
    var updateCounts = function(result, jQ, selector, key, renderFunction){
          var checkboxes  = $(selector);
          checkboxes.each(function(){            
            var c = $(this), count = 0
            if(result.length > 0){
              var queryString = new Object();
              queryString[key] = c.val();              
              count = jQ.where(queryString).count;
            }
            //render text using the appropriate function
            renderFunction(c, count);
          });      
    }

    //define how counts are rendered 
    var optionCountRenderFunction = function(c, count){c.text(c.val() + ' (' + count + ')') };
    var checkboxCountRenderFunction = function(c, count){c.next().text(c.val() + ' (' + count + ')')};

    updateCounts(result, jQ, '#thema_criteria :input:gt(0)', 'thema', checkboxCountRenderFunction);        
    updateCounts(result, jQ, '#schlagwort_filter > option', 'schlagwort', optionCountRenderFunction);
    updateCounts(result, jQ, '#raeumlicheGliederung_filter > option', 'raeumlicheGliederung', optionCountRenderFunction);

    //for multiselect dropdowns: rebuild control after select tag is updated
    $('#schlagwort_filter').multiselect('rebuild');
    $('#raeumlicheGliederung_filter').multiselect('rebuild');
    
    //if only 1 page would be displayed: hide pagination, use bootstrap invisible class to leave row height intact    
    (result.length <= 16) ? $('#pagination').addClass('invisible') : $('#pagination').removeClass('invisible');
};


//open chart in bootstrap modal 
function displayModal(indikatorId){
  //get indikator with matching id
  var lastResult = FJS.lastResult();
  
  var JQ = JsonQuery(lastResult);
  //var searchResults = JQ.where({'id': indikatorId}).exec();
  //var chart = searchResults[0];
  var chart = JQ.find(indikatorId);
  //alternatives to eModal: (iframe, no carousel) http://www.bootply.com/61676, (carousel, no iframe) https://codepen.io/krnlde/pen/pGijB 
  //eModal.iframe({'url': chart.url, 'title': ' ', 'size': 'md', 'buttons': [{text: '<', style: 'info',   close: true }, {text: '>', style: 'info', close: true }] });  
  eModal.iframe({'url': chart.url, 'title': ' ', 'size': 'md'});
}


//parse csv and configure HighCharts object
function parseData(completeHandler, chartOptions, data) {
    try {
    var dataOptions = {
        csv: data
    };
    dataOptions.sort = true
    dataOptions.complete = completeHandler;
    Highcharts.data(dataOptions, chartOptions);
    } catch (error) {
    console.log(error);
    completeHandler(undefined);
    }
};


//merge series with all options and draw chart
var drawChart = function(data, chartOptions){            
    parseData(function (dataOptions) {
    // Merge series configs
    if (chartOptions.series && dataOptions) {
        Highcharts.each(chartOptions.series, function (series, i) {
        chartOptions.series[i] = Highcharts.merge(series, dataOptions.series[i]);
        });
    }
    var options = Highcharts.merge(dataOptions, chartOptions, template);
    var chart = new Highcharts['Chart'](options);
    }, chartOptions, data);      
};


//load global options, template, chartOptions from external scripts and render chart to designated div
function renderChart(globalOptions, template, chart, csv, chartId){   
    $.when(        
        /*
        $.getScript('charts/options001.js'),
        $.getScript('charts/template001.js'),
        $.getScript('charts/I.01.2.0002.js'),
        */
        $.getScript(globalOptions),
        $.getScript(template),
        $.getScript(chart),
        $.Deferred(function( deferred ){
            $(deferred.resolve);
        })
    ).done(function(){
        //load csv and draw chart      
        $.get(csv, function(data){
        drawChart(data, chartOptions[chartId])
        });
    });
};
