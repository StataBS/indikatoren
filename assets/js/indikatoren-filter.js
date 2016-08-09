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

//holds config of each chart
var chartOptions = new Object();

$(document).ready(function(){
  //define filter.js configuration 
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
    }
  };

  //Render page differently depending on url query string 'Indikatorenset'  
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

  //implement default sorting, add event listener, and implement sortResult function
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

  window.FJS = FJS;  
  FJS.filter();  
  //only now display page
  $('body').show();

  //add event listener to render chart on modal show
  $("#lightbox").on('show.bs.modal', function (e) {    
    var targetKuerzel = $(e.relatedTarget).attr("indikator-kuerzel-data");
    renderChartByKuerzel(targetKuerzel);
  });

  //add event listener to render chart on carousel slide
  $('#lightbox').on('slide.bs.carousel', function (e) {
      var targetKuerzel = $(e.relatedTarget).children().first().attr('indikator-kuerzel-data');
      renderChartByKuerzel(targetKuerzel);
  });
  });//$(document).ready(function()


//interpret sort configuration received from dropdown
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


//dom ids may contain . or :, if used in jquery these must be escaped. http://learn.jquery.com/using-jquery-core/faq/how-do-i-select-an-element-by-an-id-that-has-characters-used-in-css-notation/
function escapeCssChars(myid) {
    return myid.replace( /(:|\.|\[|\]|,)/g, "\\$1" );
}


//change DOM and render controls to accomodate portal view
function preparePortalView(){
  $("#main-control-element-indikatorenset").remove();    
  renderThema();
  renderMultiselectDropdownFromJson(indikatoren, 'schlagwort', '#schlagwort_filter');    
  renderMultiselectDropdownFromJson(["Kanton", "Gemeinde", "Wohnviertel", "Bezirk", "Block", "Blockseite"], '', '#raeumlicheGliederung_filter');   
};


//change DOM and render controls to accomodate indikatorenset view
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


//create a single-select dropdown that contain values from a given json object at a specified place in the DOM 
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


//create a multi-select dropdown that contain values from a given json object at a specified place in the DOM 
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


//convert a normal html select given via its css selector to a multiselect dropdown
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


//find index of a given _fid in the FJS.last_result array. 
//this is necessary for carousel since links to charts in the carousel contain the array index which changes upon paging. 
function getIndexByFid(fid){
  //source: http://stackoverflow.com/questions/15997879/get-the-index-of-the-object-inside-an-array-matching-a-condition
  try{
    indexes = $.map(window.FJS.last_result, function(obj, index) {
      if(obj._fid== fid) {
          return index;
      }
    })
    firstIndex = indexes[0];
    return firstIndex;
    }
  catch (e) {
    return 'undefined';
  }
}


//after filtering is done: update counts in dropdowns and create all carousel components
var afterFilter = function(result, jQ){
    //$('#total_indikatoren').text(result.length);    

    //define how counts in dropdowns or checkboxes are rendered 
    var optionCountRenderFunction = function(c, count){c.text(c.val() + ' (' + count + ')') };
    var checkboxCountRenderFunction = function(c, count){c.next().text(c.val() + ' (' + count + ')')};
    //render new counts after each control
    updateCounts(result, jQ, '#thema_criteria :input:gt(0)', 'thema', checkboxCountRenderFunction);        
    updateCounts(result, jQ, '#schlagwort_filter > option', 'schlagwort', optionCountRenderFunction);
    updateCounts(result, jQ, '#raeumlicheGliederung_filter > option', 'raeumlicheGliederung', optionCountRenderFunction);

    //for multiselect dropdowns: rebuild control after select tag is updated
    $('#schlagwort_filter').multiselect('rebuild');
    $('#raeumlicheGliederung_filter').multiselect('rebuild');
    
    //if results fit in a single page: hide pagination, use bootstrap invisible class to leave row height intact    
    (result.length <= 16) ? $('#pagination').addClass('invisible') : $('#pagination').removeClass('invisible');

    createCarousel(result);
    
    //Add Counts in brackets after each option
    function updateCounts(result, jQ, selector, key, renderFunction){
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
    
    //create a div that will contain the chart and an indicator dot for each chart in the result. the result contains charts over all pages. 
    //bootstrap carousel combined with modal inspired by https://codepen.io/krnlde/pen/pGijB
    function createCarousel(result){            
      //add a carousel-inner div for each thumbnail
      //build template function using template from DOM
      var html = $('#indikator-template-modal').html();
      var templateFunction = FilterJS.templateBuilder(html);
      var container = $('#carousel-inner');
      //first remove all carousel divs
      container.children().remove();
      //add a new carousel for each chart in results
      $.each(result, function(i, item){
        container.append(templateFunction(item))
      });      
      //set first child to active, only now the carousel is visible
      container.children().first().addClass("active");


      //add an indicator (dot that links to a chart) for each chart
      //build template function using template from DOM
      var html = $('#carousel-indicator-template').html();
      var templateFunction = FilterJS.templateBuilder(html);
      var container = $('#carousel-indicators');
      //first remove all carousel divs
      container.children().remove();
      //add a new indicator for each chart in results    
      $.each(result, function(i, item){
        var element = container.append(templateFunction(item));      
      });
      //set first child to active, otherwise when clicking on the first thumbnail the indicator does not display the currently displayed chart 
      container.children().first().addClass("active");      
      //set value of data-slide-to: must be the 0-based index of the indicator 
      var items = $(container).children();
      $.each($(container).children(), function(i, item){
        $(item).attr("data-slide-to", i);
      });
      
      //bind keyboard to carousel: arrow left/right, esc
      //source: http://stackoverflow.com/questions/15720776/bootstrap-carousel-with-keyboard-controls
      $(document).bind('keyup', function(e) {
        if(e.which == 39){
          $('.carousel').carousel('next');
        }
        else if(e.which == 37){
          $('.carousel').carousel('prev');
        }
        else if (e.which == 27){
          $('.carousel').modal('hide');
        }
    });
  
    };
};


//load global options, template, chartOptions from external scripts, load csv data from external file, and render chart to designated div
function renderChart(globalOptions, template, chart, csv, chartId){   
  //load scripts one after the other, then load csv and draw the chart
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
  
  
  //parse csv and configure HighCharts object
  function parseData(completeHandler, chartOptions, data) {
      //try {
        var dataOptions = {
            csv: data
        };
        dataOptions.sort = true
        dataOptions.complete = completeHandler;
        Highcharts.data(dataOptions, chartOptions);
      /*} catch (error) {
        console.log(error);
        completeHandler(undefined);
      }
      */
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
};


//construct urls by chart kuerzel and render to designated div
function renderChartByKuerzel(kuerzel){
  var chartUrl = 'charts/' + kuerzel + '.js';
  var csvUrl = 'data/' + kuerzel + '.csv';
  renderChart('charts/options001.js', 'charts/template001.js', chartUrl, csvUrl, kuerzel);
}