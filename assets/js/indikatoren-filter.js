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
var view = false;

$(document).ready(function(){
  //Render page differently depending on url query string 'Indikatorenset'
  //var indikatorenset = $.url('?Indikatorenset');
  var indikatorenset = window.decodeURIComponent($.url('?Indikatorenset'));
  //defines if portal or indikatorenset view is to be shown
  view = false;
  
  var jsonDatabaseUrl = 'metadata/portal/indikatoren.js';
  //determine if valid indikaorenset name
  if (indikatorensetNames.indexOf(indikatorenset) > -1){
    view = true;
    jsonDatabaseUrl = 'metadata/sets/'+ indikatorenset + '.js';
  }
  
  //load data
  $.when(    
    $.getScript(jsonDatabaseUrl),
    $.Deferred(function(deferred){
      $(deferred.resolve);
    })
  ).done(function(){
      if (isIndikatorensetView(view)) {
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


//reset all filter criteria
function resetPortalFilter(FJS, view){
  if (isIndikatorensetView(view)){
    $('#searchbox').val('');
    $("#stufe2_filter").prop('selectedIndex', 0);
    $("#stufe1_filter").prop('selectedIndex', 0);
    FJS.filter();
  }
  //portal view
  else{
    $('#searchbox').val('');
    $("#thema_criteria :radio:first()").prop('checked', true);
    $("#unterthema_filter").prop('selectedIndex', 0);
    $("#schlagwort_filter option").prop('selected', true);
    $("#schlagwort_filter").multiselect('selectAll', false).multiselect('updateButtonText');      
    $("#raeumlicheGliederung_filter").multiselect('selectAll', false).multiselect('updateButtonText');
    FJS.filter();
  }
}


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


  if (isIndikatorensetView(view)){ 
    //Indikatorenset View
    sortOptions = {'orderKey': 'asc'};
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
    sortOptions = {'randomNumber': 'asc'};
    preparePortalView();    
    //define filter.js configuration 
    fjsConfig['template'] = '#indikator-template-carousel-portal';

    FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);
    FJS.addCriteria({field: "thema", ele: "#thema_criteria input:radio", all: "Alle"});
    FJS.addCriteria({field: "unterthema", ele: "#unterthema_filter", all: "all"});
    FJS.addCriteria({field: "schlagwort", ele: "#schlagwort_filter", all: "all"});
    FJS.addCriteria({field: "raeumlicheGliederung", ele: "#raeumlicheGliederung_filter", all: "all"});      

    //reset all filter criteria
    $("#portal-reset-button").click(function(){
      resetPortalFilter(FJS, false)
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

  window.FJS = FJS;  
  FJS.filter();  
  //only now display page
  $('body').show();


  //add event listener to render chart on modal show
  $("#lightbox").on('show.bs.modal', function (e) {    
    var targetId = $(e.relatedTarget).attr("indikator-id-data");
    lazyRenderChartById(targetId, undefined, view);
    var targetItem = $('#container-' + targetId).parent();
    var currentNumber = $('.item').index(targetItem) +1;
    updateIndicatorText(currentNumber);
  
    //Update number of chart in slider
    function updateIndicatorText(number){        
      var indicatorText = $('#carousel-indicators li').text();
      var lastNumberText = indicatorText.substring(0, indicatorText.indexOf(' /'));      
      $('#carousel-indicators li').text(indicatorText.replace(lastNumberText, number));      
      $('#carousel-indicators li').removeClass('active');
    }
    
    //add event listener to render chart on carousel slide
    //only do this in here in order to prevent two events from happening when clicking on a non-active chart thumbnail (sliding and opening model)
    $('#lightbox').on('slide.bs.carousel', function (e) {
        var targetId = $(e.relatedTarget).children().first().attr('indikator-id-data');
        lazyRenderChartById(targetId, undefined, view);
        //display chart number in indicator      
        var currentNumber = $(e.relatedTarget).index() + 1;    
        updateIndicatorText(currentNumber);
    });
  });

  //remove sliding event event handler when modal ist closed in order to prevent sliding event from also being triggered when clicking an a chart thumbnail
  $("#lightbox").on('hide.bs.modal', function (e) {
      //remove slide event handler
      $('#lightbox').off('slide.bs.carousel');
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
    case 'orderKey_asc':
      return {'orderKey': 'asc'};
    case 'orderKey_desc':
      return {'orderKey': 'desc'};
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


//find index of chart with a given id
function getIndexOfChart(chartId, charts){
  var indexes = $.map(charts, function(obj, index) {
    if(obj.id == chartId) {
        return index;
    }
  });    
  return indexes[0];
}


//slide carousel to a specified chart id
function slideToLinkedChart(chartId, FJS, view){
  var index = getIndexOfChart(chartId, getLastFjsResult());
  if (index > -1){
    $('.carousel').carousel(index);
  }
  else {
    //get index of currently displayed chart
    var currentIndex = $(".item.active").index();
    //reset search filters
    resetPortalFilter(FJS, view);
    //find index of target chart
    index = getIndexOfChart(chartId, getLastFjsResult());
    if (index > -1){
      //if index of current chart is same as index of target chart we have to mess with the "active" attribute in order to make sliding work
      if (currentIndex == index){
        //set active class on the last item (is set to first item by afterFilter function)
        $(".item.active").removeClass("active");
        $(".item:last-child").addClass("active");
      }
      //slide to target item
      $('.carousel').carousel(index);
    }
    else {
      console.log('No chart with id ' + chartId + ' found...');
    }
  }
}


//render the html required for links to other chart, kennzahlenset or external resources
function renderLinksHTML(kennzahlenset, renderLink, externalLinks, view){
  var returnText = "";
  var displayLinkToIndikatorenset = (kennzahlenset && !isIndikatorensetView(view));
  var displayRenderLink = (renderLink && renderLink.length && renderLink[0].length);
  var displayExternalLinks = (externalLinks && externalLinks.length && externalLinks[0].length);
  //any of the links need to be present 
  if (displayLinkToIndikatorenset || displayRenderLink || displayExternalLinks ) {
    returnText = " \
        <div> \
          <h1>Links</h1> \
          <div class='lesehilfe'> \
            <ul class='list-unstyled'>\
        ";
    // Only display Link to Indikatorenset if not already in Indikatorenset View
    if (displayLinkToIndikatorenset) {
      returnText += "<li><img src='assets/img/icon-link.png' class='link-icon'/>Dieser Indikator ist Bestandteil des Indikatorensets <a href='http://www.statistik.bs.ch/zahlen/indikatoren/sets/"+ kennzahlenset.toLowerCase().replace(" ", "-") + ".html' target='_blank'>" + kennzahlenset + "</a>.</li>";
    }
    if (displayRenderLink) {
      returnText += "<li><img src='assets/img/icon-link.png' class='link-icon'/><a href='javascript:javascript:slideToLinkedChart(" + renderLink[0] + ", window.FJS, " + view + ")'>Andere Darstellungsform</a> dieser Daten</li>";
    }
    if (displayExternalLinks) {
      returnText += "<li><img src='assets/img/icon-link.png' class='link-icon'/>" + externalLinks + "</li>";
    }
    returnText += " \
            </ul> \
          </div> \
        </div> \
        ";
  }
  return returnText;
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


//if full-text search is used (search_text has some minimum length), FJS uses a different results array than if not. 
function getLastFjsResult(){
  return (window.FJS.search_text.length > FJS.opts.search.start_length) ? window.FJS.search_result : window.FJS.last_result;
}


//find index of a given _fid in the results array. 
//this is necessary for carousel since links to charts in the carousel contain the array index which changes upon paging. 
function getIndexByFid(fid){
  //source: http://stackoverflow.com/questions/15997879/get-the-index-of-the-object-inside-an-array-matching-a-condition
  try{
    var indexes = $.map(getLastFjsResult(), function(obj, index) {
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
var afterFilter = function(result, jQ){
    //$('#total_indikatoren').text(result.length);    

    //define how counts in dropdowns or checkboxes are rendered 
    var optionCountRenderFunction = function(c, count){c.text(c.val() + ' (' + count + ')') };
    var checkboxCountRenderFunction = function(c, count){c.next().text(c.val() + ' (' + count + ')')};
    //render new counts after each control
    updateCountsExclusive('#thema_criteria :input:gt(0)', 'thema', checkboxCountRenderFunction, result, jQ);        
    updateCountsExclusive('#schlagwort_filter > option', 'schlagwort', optionCountRenderFunction, result, jQ);
    updateCountsExclusive('#raeumlicheGliederung_filter > option', 'raeumlicheGliederung', optionCountRenderFunction, result, jQ);

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
    function updateCountsExclusive(selector, field, renderFunction){
          var items  = $(selector);
          //iterate over each displayed value of the criterion 
          items.each(function(){            
            var c = $(this), count = 0;           
            //get last Query JsonQuery Object of last filter event and remove the current filter value from it
            try{
              var jsonQ = window.FJS.last_Query;           
              //save array to restore later
              var origArray = jsonQ.where().criteria.where[field + '.$in'];
              //add only current item to new criterion array
              var newArray = [c.val()];
              jsonQ.where().criteria.where[field + '.$in'] = newArray;
              //if any of the where criteria contains an empty array as filter item: remove the clause to make jsonQuery work
              $.each(jsonQ.where().criteria.where, function(index, value){
                if (value === undefined){
                  delete jsonQ.where().criteria.where[index];
                }
              });
              //invoke JsonQuery and get length of result
              count = jsonQ.count;
              //handle full text search if it is defined in FJS
              if(window.FJS.has_search){                
                //only do full text search with minimum number of search characters               
                if (window.FJS.search_text.length > window.FJS.opts.search.start_length){
                  var result = window.FJS.search(window.FJS.search_text, jsonQ.all);
                  count = result.length;
                }                
              }                             
              //restore original criterion array
              jsonQ.where().criteria.where[field + '.$in'] = origArray;
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
      var template = (isIndikatorensetView(view)) ? '#indikator-template-modal-indikatorenset' : '#indikator-template-modal-portal';
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

