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

"use strict";
/*  
global $ 

global FilterJS
global JsonQuery
global FJS

global indikatoren
global indikatorensetData
global indikatorensetNames
global lazyRenderChartById

global seedrandom

*/

//holds config of each chart
var chartOptions = {};
var sortOptions = {};

var indikatoren;
var indikatorensetView = false;

$(document).ready(function(){
  //Render page differently depending on url query string 'Indikatorenset'
  //var indikatorenset = $.url('?Indikatorenset');
  var indikatorenset = window.decodeURIComponent($.url('?Indikatorenset'));
  //defines if portal or indikatorenset view is to be shown
  indikatorensetView = false;
  
  var jsonDatabaseUrl = 'metadata/portal/indikatoren.js';
  //determine if valid indikaorenset name
  if (indikatorensetNames.indexOf(indikatorenset) > -1){
    indikatorensetView = true;
    jsonDatabaseUrl = 'metadata/sets/'+ indikatorenset + '.js';
  }
  
  //load data
  $.when(    
    $.getScript(jsonDatabaseUrl),
    $.Deferred(function(deferred){
      $(deferred.resolve);
    })
  ).done(function(){
      if (indikatorensetView) {
        //if indikatorenset is loaded: make sure the data is loaded into var indikatoren
        indikatoren = indikatorensetData;
      }
      else { 
        //add daily changing random number to properties
        Math.seedrandom(new Date().toLocaleDateString());
        indikatoren = $.map(indikatoren, function(val, i){
          val['randomNumber'] = Math.random();
          return val;
        });
      }
      initializeFilterJS(indikatorenset);
  });  
});


function initializeFilterJS(indikatorenset){
  var fjsConfig = {      
    template: undefined,
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


  if (indikatorensetView){ 
    //Indikatorenset View
    sortOptions = {'kuerzelKunde': 'asc'};
    prepareIndikatorensetView(indikatorenset);

    //define filter.js configuration 
    fjsConfig['template'] = '#indikator-template-carousel-indikatorenset';
    fjsConfig['criterias'] = [
      {field: "kennzahlenset", ele: "#kennzahlenset_filter", all: "all"},
      {field: "stufe1", ele: "#stufe1_filter", all: "all"},
      {field: "stufe2", ele: "#stufe2_filter", all: "all"}
      ];

    window.FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);

  }  
  else {
    //Portal view
    sortOptions = {'randomNumber': 'asc'};
    preparePortalView();    
    //define filter.js configuration 
    fjsConfig['template'] = '#indikator-template-carousel-portal';
    fjsConfig['criterias'] = [
      {field: "thema", ele: "#thema_criteria input:radio", all: "Alle"},
      {field: "unterthema", ele: "#unterthema_filter", all: "all"},
      {field: "schlagwort", ele: "#schlagwort_filter", all: "all"},
      {field: "raeumlicheGliederung", ele: "#raeumlicheGliederung_filter", all: "all"}
    ];
    window.FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);
    //reset all filter criteria upon button press
    $("#portal-reset-button").click(function(){
      $('#searchbox').val('');
      $("#thema_criteria :radio:first()").prop('checked', true);
      $("#unterthema_filter").prop('selectedIndex', 0);
      $("#schlagwort_filter option").prop('selected', true);
      $("#schlagwort_filter").multiselect('selectAll', false).multiselect('updateButtonText');      
      $("#raeumlicheGliederung_filter").multiselect('selectAll', false).multiselect('updateButtonText');
      FJS.filter();
    });
  }  

  //implement default sorting, add event listener, and implement sortResult function  
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

  //only now display page
  $('body').show();

  //add event listener to render chart on modal show
  $("#lightbox").on('show.bs.modal', function (e) {    
    var targetId = $(e.relatedTarget).attr("indikator-id-data");
    lazyRenderChartById(targetId, undefined, indikatorensetView);
  });

  //add event listener to render chart on carousel slide
  $('#lightbox').on('slide.bs.carousel', function (e) {
      var targetId = $(e.relatedTarget).children().first().attr('indikator-id-data');
      lazyRenderChartById(targetId, undefined, indikatorensetView);
      //display chart number in indicator      
      var currentNumber = $(e.relatedTarget).index() + 1;            
      var indicatorText = $('#carousel-indicators li').text();
      var lastNumberText = indicatorText.substring(0, indicatorText.indexOf(' /'));      
      $('#carousel-indicators li').text(indicatorText.replace(lastNumberText, currentNumber));      
      $('#carousel-indicators li').removeClass('active');
  });
}


//interpret sort configuration received from dropdown
function getSortOptions(name){
  switch(name){
    case 'kuerzel_asc': 
      return {'kuerzel': 'asc'};
    case 'kuerzel_desc': 
      return {'kuerzel': 'desc'};  
    case 'kuerzelkunde_asc':
      return {'kuerzelKunde': 'asc'};
    case 'kuerzelkunde_desc':
      return {'kuerzelKunde': 'desc'};
    default : 
      return {'kuerzel': 'asc'};     
  }
}


//change DOM and render controls to accomodate portal view
function preparePortalView(){
  $("#main-control-element-indikatorenset").remove();    
  renderThema();
  renderMultiselectDropdownFromJson(indikatoren, 'schlagwort', '#schlagwort_filter', true);    
  renderMultiselectDropdownFromJson(["Schweiz", "Kanton", "Gemeinde", "Wohnviertel", "Bezirk", "Block", "Blockseite"], '', '#raeumlicheGliederung_filter', false);

  //prepare query String object for filtering thema and unterthema
  var baseQuery = {};
  //render unterthema dropdown for the first time   
  renderDropdownFromJson(indikatoren, 'unterthema', '#unterthema_filter', 'unterthema', baseQuery);
      
  //configure unterthema to be filtered correctly upon change of thema           
  configureCascadedControls('#thema_criteria', '#unterthema_filter', "#thema_criteria :checked", 'Alle', 'thema','#unterthema_filter', 'all', 'unterthema', baseQuery);  
}


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
  var baseQuery = {};
  baseQuery['kennzahlenset'] = indikatorenset;              

  renderDropdownFromJson(indikatoren, 'stufe1', '#stufe1_filter', 'stufe1', baseQuery);
  renderDropdownFromJson(indikatoren, 'stufe2', '#stufe2_filter', 'stufe2', baseQuery);

  //add cascaded dropdowns functionality to stufe1 and stufe2
  configureCascadedControls('#stufe1_filter', '#stufe2_filter', '#stufe1_filter', 'all', 'stufe1', '#stufe2_filter', 'all', 'stufe2', baseQuery); 
}


//add cascaded dropdowns functionality to level1 and level2
function configureCascadedControls(level1Selector, level2Selector, level1ValueSelector, level1AllValue, level1Field, level2valueSelector, level2allValue, level2Field, baseQuery){  

  $(level1Selector).change(function(){    
    //save currently selected value
    var currentLevel2Value = $(level2Selector).val(); 
    //set 2nd level dropdown to first (all)
    $(level2Selector + ' :nth-child(1)').prop('selected', true);
    $(level2Selector).change();
    //filter 2nd level to include only values that occur together with selected 1st level value
    var level2QueryString = $.extend(true, {}, baseQuery); 
    var selectedValue = $(level1ValueSelector).val();
    if (selectedValue !== level1AllValue) {
      level2QueryString[level1Field] = selectedValue;
    }
    renderDropdownFromJson(indikatoren, level2Field, level2Selector, level2Field, level2QueryString);
    //re-set previously selected value if level 1 is not "all"
    if (selectedValue !== level1AllValue){
      $(level2Selector).val(currentLevel2Value);
    }
    //if no item is selected now, select the first one
    if (!$(level2Selector).val()){
      $(level2Selector + ' :nth-child(1)').prop('selected', true);
    }
  });


  $(level2Selector).change(function(){
    //upon selection in level2 dropdown: if level1 is set to the first one (all), set level1 value to the single (or first) value that matches    
    var selectedValue = $(level2valueSelector).val();           
    //level2 value is not the first one in the list (all) and level1 value is the first one (all)
    if (selectedValue !== level2allValue /*&& $(level1ValueSelector).val() === level1AllValue*/ ) {
      var level1QueryString = $.extend(true, {}, baseQuery);
      //extend JsonQuery object    
      level1QueryString[level2Field] = selectedValue;
      //find first level1 value that matches the selected level2 value
      var result = JsonQuery(indikatoren).where(level1QueryString).all[0][level1Field];
      //set level1 to the found value
      if (level1ValueSelector.indexOf('checked') > -1) {
        //for radios: 
        $(level1Selector).find('[value="' + result + '"]').prop('checked', true);
        $(level1Selector).change();
      }
      else {
        //for dropdown: 
        $(level1Selector).val([result]);
        $(level1Selector).change();
      }
    }
  });
}


function renderThema(){
  //get all values of thema and add value "Alle" as the first one   
  var values = ["Alle"].concat(JsonQuery(indikatoren).uniq("thema").order({"thema": "asc"}).pluck("thema").all);  
  var html = $('#radio-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#thema_criteria');
  
  $.each(values, function(i, c){
    container.append(templateFunction({ value: c , radioGroupName: "themaRadioGroup"}));
  });

  //check first radio ('Alle')
  $("#thema_criteria :radio:first()").prop('checked', true);
}


//create a single-select dropdown that contain values from a given json object at a specified place in the DOM 
function renderDropdownFromJson(data, field, selector, sortKey, filterQueryString){
  var JQ = JsonQuery(data);
  //If filterQueryString is given: filter data before rendering dropdowns
  if (typeof filterQueryString !== 'undefined') {
    JQ = JQ.where(filterQueryString);    
  } 
  //Sort if sortKey is given 
  if (typeof sortKey !== 'undefined'){
    var sortOptions = {};
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
    container.append(templateFunction({ key: c, value: c }));
  });
}


//create a multi-select dropdown that contain values from a given json object at a specified place in the DOM 
function renderMultiselectDropdownFromJson(data, field, selector, sort){
  var JQ = JsonQuery(data);
  var allValuesNested = JQ.pluck(field).all;
  //reduce array of array of values to array of values (flatMap) if applicable
  var allValues = [].concat.apply([], allValuesNested);
  //get unique values and filter out empty string 
  var uniqueValues = allValues.filter(function(item, i, ar){ return ar.indexOf(item) === i && item != ""; }); 
  //sort if applicable
  if (sort) {
    uniqueValues.sort();
  }
  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $(selector);
  //render options
  $.each(uniqueValues, function(i, c){
    container.append(templateFunction({ key: c, value: c }));
  });
  //convert select control to multiselect dropdown
  configureMultiselect(selector);  
}


//convert a normal html select given via its css selector to a multiselect dropdown
function configureMultiselect(selector){
  var control = $(selector);
  //configure multiselect
  control.multiselect({
      maxHeight: 220,
      buttonWidth: '100%', 
      inheritClass: true, 
      includeSelectAllOption: true, 
      selectAllText: 'Alle',      
      enableFiltering: true,       
      enableCaseInsensitiveFiltering: true,
      filterPlaceholder: 'Suche...', 
      nonSelectedText: 'Keines', 
      allSelectedText: 'Alle',
      selectAllNumber : false,
      nSelectedText: 'ausgewählt',
      numberDisplayed: 2
    }
    /*
      dropUp: true,
      allSelectedText: 'Alle ausgewählt',
      checkboxName: function(option) {
          return 'multiselect_test';
      }
      selectAllValue: 'all',
    */
  );
  //check all boxes
  control.multiselect('selectAll', false);
  control.multiselect('updateButtonText');
}


//find index of a given _fid in the results array. if full-text search is used (search_text has some minimum length), FJS uses a different results array than if not. 
//this is necessary for carousel since links to charts in the carousel contain the array index which changes upon paging. 
function getIndexByFid(fid){
  //source: http://stackoverflow.com/questions/15997879/get-the-index-of-the-object-inside-an-array-matching-a-condition
  try{
    var results = (window.FJS.search_text.length > FJS.opts.search.start_length) ? window.FJS.search_result : window.FJS.last_result;
    var indexes = $.map(results, function(obj, index) {
      if(obj._fid == fid) {
          return index;
      }
    });    
    return indexes[0];
    }
  catch (e) {
    return undefined;
  }
}


//after filtering is done: update counts in dropdowns and create all carousel components
var afterFilter = function(result, jQ, lastQuery){
    //$('#total_indikatoren').text(result.length);    

    //define how counts in dropdowns or checkboxes are rendered 
    var optionCountRenderFunction = function(c, count){c.text(c.val() + ' (' + count + ')') };
    var checkboxCountRenderFunction = function(c, count){c.next().text(c.val() + ' (' + count + ')')};
    //render new counts after each control
    updateCountsExclusive('#thema_criteria :input:gt(0)', 'thema', checkboxCountRenderFunction, result, jQ, lastQuery);        
    updateCountsExclusive('#schlagwort_filter > option', 'schlagwort', optionCountRenderFunction, result, jQ, lastQuery);
    updateCountsExclusive('#raeumlicheGliederung_filter > option', 'raeumlicheGliederung', optionCountRenderFunction, result, jQ, lastQuery);

    //hide dropdowns if no specific values present, or select the single specific value
    selectSingleEntryOrHideDropdown('#unterthema_filter');
    selectSingleEntryOrHideDropdown('#stufe2_filter');

    //for multiselect dropdowns: rebuild control after select tag is updated
    $('#schlagwort_filter').multiselect('rebuild');
    $('#raeumlicheGliederung_filter').multiselect('rebuild');
    
    //if results fit in a single page: hide pagination, use bootstrap invisible class to leave row height intact    
    (result.length <= 16) ? $('#pagination').addClass('invisible') : $('#pagination').removeClass('invisible');

    createCarousel(result);
    

    //add Counts in brackets after each option
    //calculate number of results that would be found if only the current value was selected (i.e. exclusive any filtercriteria of the current control)
    function updateCountsExclusive(selector, field, renderFunction, result, jQ, lastQuery){
      var items  = $(selector);
      //iterate over each displayed value of the criterion 
      items.each(function(){
        var c = $(this), count = 0;           
        //From last filter event: remove the current filter value from lastQuery JsonQuery Object
        //save array to restore later
        var origArray = lastQuery.where().criteria.where[field + '.$in'];
        //add only current item to new criterion array
        var newArray = [c.val()];
        lastQuery.where().criteria.where[field + '.$in'] = newArray;
        //if any of the where criteria contains an empty array as filter item: remove the clause to make jsonQuery work
        $.each(lastQuery.where().criteria.where, function(index, value){
          if (value === undefined){
            delete lastQuery.where().criteria.where[index];
          }
        });
        //invoke JsonQuery and get length of result
        count = lastQuery.count;
        //render text using the appropriate function
        renderFunction(c, count);

        //handle full text search if it is defined in FJS
        if(window['FJS'] && window['FJS']['has_search']){                
          //only do full text search with minimum number of search characters               
          if (window.FJS.search_text.length > window.FJS.opts.search.start_length){
            var result = window.FJS.search(window.FJS.search_text, lastQuery.all);
            count = result.length;
          }                
        }                             
        //restore original criterion array
        lastQuery.where().criteria.where[field + '.$in'] = origArray;
      });      
    }


    //Add Counts in brackets after each option
    //calculate number of results that would be found if current value was _additionally_ filtered by (i.e. inclusive any filtercriteria of the current control)
    /*
    function updateCountsInclusive(selector, key, renderFunction, result, jQ){
          var items  = $(selector);
          //iterate over each displayed value of the criterion 
          items.each(function(){            
            var c = $(this), count = 0;
            if(result.length > 0){
              var queryString = {};
              queryString[key] = c.val();              
              count = jQ.where(queryString).count;
            }
            //render text using the appropriate function
            renderFunction(c, count);
          });      
    }
    */

    //hide dropdown if no specific entry present, select the  specific entry if it is the only one present  
    function selectSingleEntryOrHideDropdown(selector){
      //if only 1 item present besides the 'all' option: select it  
      var optionsCount = $(selector + " > option").length;
      if (optionsCount == 1){
        //no item present besides 'all', hide dropdown      
        //$(selector).addClass('hidden');
      }
      else {
        //show dropdown
        //$(selector).removeClass('hidden');
        if (optionsCount == 2) {
          //select the one existing entry         
          $(selector).prop('selectedIndex', 1);
          //$("#unterthema_filter > option:first()").remove();
        }
      } 
    }

    
    //create a div that will contain the chart and an indicator dot for each chart in the result. the result contains charts over all pages. 
    //bootstrap carousel combined with modal inspired by https://codepen.io/krnlde/pen/pGijB
    function createCarousel(result){            
      //add a carousel-inner div for each thumbnail
      //build template function using template from DOM
      var template = (indikatorensetView) ? '#indikator-template-modal-indikatorenset' : '#indikator-template-modal-portal';
      var html = $(template).html();
      var templateFunction = FilterJS.templateBuilder(html);
      var container = $('#carousel-inner');
      //first remove all carousel divs
      container.children().remove();
      //add a new carousel for each chart in results
      $.each(result, function(i, item){
        container.append(templateFunction(item));
      });      
      //set first child to active, only now the carousel is visible
      container.children().first().addClass("active");

      //add an indicator (dot that links to a chart) for each chart
      //build template function using template from DOM
      html = $('#carousel-indicator-template').html();
      templateFunction = FilterJS.templateBuilder(html);
      container = $('#carousel-indicators');
      //first remove all carousel divs
      container.children().remove();

      var element = $(templateFunction(1)).appendTo(container);
      //set value of data-slide-to: must be the 0-based index of the indicator      
      element.text('1 / ' + result.length);
      
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
  
  }
};//afterFilter

