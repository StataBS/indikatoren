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

//holds config of each chart
var chartOptions = new Object();
var sortOptions = new Object();
//Indikatorenset or Portal view
var indikatorensetView = false;

$(document).ready(function(){
  //template: '#indikator-template-carousel', 

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


  //Render page differently depending on url query string 'Indikatorenset'
  var indikatorenset = $.url('?Indikatorenset');
  indikatorensetView = indikatorenset ? true : false; 
  if (indikatorensetView){ 
    //Indikatorenset View
    sortOptions = {'kuerzelKunde': 'asc'};
    prepareIndikatorensetView(indikatorenset);

    //define filter.js configuration 
    fjsConfig['template'] = '#indikator-template-carousel-indikatorenset';

    var FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);
    FJS.addCriteria({field: "kennzahlenset", ele: "#kennzahlenset_filter", all: "all"});
    FJS.addCriteria({field: "stufe1", ele: "#stufe1_filter", all: "all"});
    FJS.addCriteria({field: "stufe2", ele: "#stufe2_filter", all: "all"});
  }  
  else {
    //Portal view
    sortOptions = {'kuerzel': 'asc'};
    preparePortalView();    
    //define filter.js configuration 
    fjsConfig['template'] = '#indikator-template-carousel-portal';

    var FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);
    FJS.addCriteria({field: "thema", ele: "#thema_criteria input:radio", all: "Alle"});
    FJS.addCriteria({field: "unterthema", ele: "#unterthema_filter", all: "all"});
    FJS.addCriteria({field: "schlagwort", ele: "#schlagwort_filter", all: "all"});
    FJS.addCriteria({field: "raeumlicheGliederung", ele: "#raeumlicheGliederung_filter", all: "all"});
    FJS.addCriteria({field: "unterthema", ele: "#unterthema_filter", all: "all"});  
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
});//$(document).ready()


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
};


//change DOM and render controls to accomodate portal view
function preparePortalView(){
  $("#main-control-element-indikatorenset").remove();    
  renderThema();
  renderMultiselectDropdownFromJson(indikatoren, 'schlagwort', '#schlagwort_filter');    
  renderMultiselectDropdownFromJson(["Kanton", "Gemeinde", "Wohnviertel", "Bezirk", "Block", "Blockseite"], '', '#raeumlicheGliederung_filter');

  //prepare query String object for filtering thema and unterthema
  var baseQuery = new Object();
  //render unterthema dropdown for the first time   
  renderDropdownFromJson(indikatoren, 'unterthema', '#unterthema_filter', 'unterthema', baseQuery);
      
  //configure unterthema to be filtered correctly upon change of thema           
  configureCascadedControls('#thema_criteria', '#unterthema_filter', "#thema_criteria :checked", 'Alle', 'thema', 'unterthema', baseQuery);  
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
  var baseQuery = new Object();
  baseQuery['kennzahlenset'] = indikatorenset;              

  renderDropdownFromJson(indikatoren, 'stufe1', '#stufe1_filter', 'stufe1', baseQuery);
  renderDropdownFromJson(indikatoren, 'stufe2', '#stufe2_filter', 'stufe2', baseQuery);

  //add cascaded dropdowns functionality to stufe1 and stufe2
  configureCascadedControls('#stufe1_filter', '#stufe2_filter', '#stufe1_filter', 'all', 'stufe1', 'stufe2',baseQuery); 
};


function configureCascadedControls(level1selector, level2selector, level1ValueSelector, level1AllValue, level1field, level2Field, baseQuery){
  //add cascaded dropdowns functionality to level1 and level2
  $(level1selector).change(function(){
    //remove selection on 2nd level dropdown upon change in first level dropdown (set to first = all)
    $(level2selector + ' :nth-child(1)').prop('selected', true);
    $(level2selector).change();
    //filter 2nd level to include only values that occur together with selected 1st level value
    //deep copy baseQuery object
    var level2QueryString = $.extend(true, {}, baseQuery); 
    var selectedValue = $(level1ValueSelector).val();
    if (selectedValue !== level1AllValue) {
      level2QueryString[level1field] = selectedValue;
    }
    renderDropdownFromJson(indikatoren, level2Field, level2selector, level2Field, level2QueryString);
  })
};


function renderThema(){  
  var values = ["Alle", "01 Bevölkerung",	"02 Raum, Landschaft, Umwelt",	"03 Erwerbsleben",	"04 Volkswirtschaft",	"05 Preise",	"06 Produktion und Handel",	"07 Land- und Forstwirtschaft",	"08 Energie",	"09 Bau- und Wohnungswesen",	"10 Tourismus",	"11 Verkehr",	"12 Finanzmärkte und Banken",	"13 Soziale Sicherheit",	"14 Gesundheit",	"15 Bildung und Wissenschaft",	"16 Kultur und Sport",	"17 Politik",	"18 Öffentliche Finanzen",	"19 Rechtspflege", "50 Regelmässige Befragungen"];

  var html = $('#radio-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#thema_criteria');
  
  $.each(values, function(i, c){
    container.append(templateFunction({ value: c , radioGroupName: "themaRadioGroup"}))
  });

  //check first radio ('Alle')
  $("#thema_criteria :radio:first()").prop('checked', true);
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
  var control = $(selector);
  //configure multiselect
  control.multiselect({
      maxHeight: 240,
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
      dropUp: true,
      checkboxName: function(option) {
          return 'multiselect_test';
      }
      selectAllValue: 'all',
    */
  );
  //check all boxes
  control.multiselect('selectAll', false);
  control.multiselect('updateButtonText');
};


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
    })    
    return indexes[0];
    }
  catch (e) {
    return undefined;
  }
}


//after filtering is done: update counts in dropdowns and create all carousel components
var afterFilter = function(result, jQ){
    //$('#total_indikatoren').text(result.length);    

    //define how counts in dropdowns or checkboxes are rendered 
    var optionCountRenderFunction = function(c, count){c.text(c.val() + ' (' + count + ')') };
    var checkboxCountRenderFunction = function(c, count){c.next().text(c.val() + ' (' + count + ')')};
    //render new counts after each control
    updateCountsExclusive('#thema_criteria :input:gt(0)', 'thema', checkboxCountRenderFunction);        
    updateCountsExclusive('#schlagwort_filter > option', 'schlagwort', optionCountRenderFunction);
    updateCountsInclusive(result, jQ,'#raeumlicheGliederung_filter > option', 'raeumlicheGliederung', optionCountRenderFunction);

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
    function updateCountsExclusive(selector, key, renderFunction){
          var items  = $(selector);
          //iterate over each displayed value of the criterion 
          items.each(function(){            
            var c = $(this), count = 0;           
            //get last Query JsonQuery Object of last filter event (full text search not implemented yet! todo: implement)
            //remove the current filter value from it
            try{
              var jsonQ = window.FJS.lastQuery           
              //jsonQ.where().criteria.where[key + '.$in'] = [];              
              var newArray = [c.val()];
              //console.log(newArray);
              //save array to restore later
              var origArray = jsonQ.where().criteria.where[key + '.$in']
              //console.log(origArray);
              jsonQ.where().criteria.where[key + '.$in'] = newArray;
              //invoke JsonQuery and get length of result
              count = jsonQ.all.length
              //console.log(key + '."' + c.val() + '" (' + count + ')');
              //restore original array
              jsonQ.where().criteria.where[key + '.$in'] = origArray;
            }
            catch(e){
              //no filter after first page load, thus no criteria. Silently dismiss exception. 
              //console.log(e);
            }
            //render text using the appropriate function
            renderFunction(c, count);
          });      
    }


    //Add Counts in brackets after each option
    //calculate number of results that would be found if current value was _additionally_ filtered by (i.e. inclusive any filtercriteria of the current control)
    function updateCountsInclusive(result, jQ, selector, key, renderFunction){
          var items  = $(selector);
          //iterate over each displayed value of the criterion 
          items.each(function(){            
            var c = $(this), count = 0;
            if(result.length > 0){
              var queryString = new Object();
              queryString[key] = c.val();              
              count = jQ.where(queryString).count;
            }
            //render text using the appropriate function
            renderFunction(c, count);
          });      
    }


    //hide dropdown if no specific entry present, select the  specific entry if it is the only one present  
    function selectSingleEntryOrHideDropdown(selector){
      //if only 1 item present besides the 'all' option: select it  
      var optionsCount = $(selector + " > option").length;
      if (optionsCount == 1){
        //no item present besides 'all', hide dropdown      
        $(selector).addClass('hide');
      }
      else {
        //show dropdown
        $(selector).removeClass('hide');
        if (optionsCount == 2) {
          //select the one existing entry         
          $(selector).prop('selectedIndex', 1);
          //$("#unterthema_filter > option:first()").remove();
        }
      } 
    };

    
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
};//afterFilter

