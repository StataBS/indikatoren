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

global isIndikatorensetView
global indikatorensetData
global indikatorensetNames
global lazyRenderChartById

*/

//holds config of each chart

var indikatoren;
var view = false;
var perPage = 16;

$(document).ready(function () {
  //display header if requested
  var showHeader = window.decodeURIComponent($.url("?showHeader")) === "true";
  if (showHeader) {
    $("#header").removeClass("hidden");
  }

  //pre-populate searchbox
  var searchUrlParamValue = window.decodeURIComponent($.url("?search"));
  if (searchUrlParamValue != "undefined") {
    $("#searchbox-indikatorenset").val(searchUrlParamValue);

    $("#searchbox").val(searchUrlParamValue);
  }

  //Render page differently depending on url query string 'Indikatorenset'
  var indikatorenset = window.decodeURIComponent($.url("?Indikatorenset"));
  //defines if portal or indikatorenset view is to be shown
  view = false;
  var jsonDatabaseUrl = "metadata/portal/indikatoren.js";
  //determine if valid indikaorenset name
  if (indikatorensetNames.indexOf(indikatorenset) > -1) {
    view = true;
    jsonDatabaseUrl = "metadata/sets/" + indikatorenset + ".js";
  }

  //dynamically change filterColumns in indikatorenset view only, see http://jsfiddle.net/KyleMit/pgt6tczj/
  var stufeParameter = parseInt(window.decodeURIComponent($.url("?stufe")), 10);
  var maxStufe =
    stufeParameter >= 0 && stufeParameter <= 5 ? stufeParameter : 2;
  if (isIndikatorensetView(view)) {
    //change width of columns
    var $myCols = $("#indikatorensetFilterControls");
    var visibleCols = maxStufe + 1; //add the search box as a column
    var div = Math.floor(12 / visibleCols);
    var rem = 12 % visibleCols;
    var colSize = rem === 0 ? div : 2;
    $myCols
      .children()
      .removeClass()
      .addClass("col-xs-" + colSize);
    //hide columns to the right of maxStufe
    $myCols.children().each(function (i, element) {
      if (i >= visibleCols) {
        $(element).hide();
      }
    });
  }

  //load data
  $.when(
    $.getScript(jsonDatabaseUrl),
    $.Deferred(function (deferred) {
      $(deferred.resolve);
    })
  ).done(function () {
    if (isIndikatorensetView(view)) {
      //if indikatorenset is loaded: make sure the data is loaded into var indikatoren
      indikatoren = indikatorensetData;
    } else {
      //add daily changing random number to properties
      Math.seedrandom(new Date().toLocaleDateString());
      indikatoren = $.map(indikatoren, function (val, i) {
        val["randomNumber"] = Math.random();
        return val;
      });
    }

    //determine how many chart previews to display
    var perPageParam = parseInt(
      window.decodeURIComponent($.url("?PerPage")),
      10
    );
    //parameter must be an int, see https://stackoverflow.com/a/14636652
    if (perPageParam > 0 && perPageParam <= 32) {
      //perPage defined globally with a default value
      perPage = perPageParam;
    }

    //determine sort order
    var sortOptions;
    var sortParam = window.decodeURIComponent($.url("?sort"));
    if (sortParam != "undefined") {
      sortOptions = getSortOptions(sortParam);
    }
    initializeFilterJS(indikatorenset, perPage, sortOptions);
  });
});

//reset all filter criteria
function resetPortalFilter(FJS, view) {
  if (isIndikatorensetView(view)) {
    $("#searchbox").val("");
    $("#searchbox-indikatorenset").val("");
    $("#stufe3_filter").prop("selectedIndex", 0);
    $("#stufe2_filter").prop("selectedIndex", 0);
    $("#stufe1_filter").prop("selectedIndex", 0);
    $("#darstellungsart_filter")
      .multiselect("selectAll", false)
      .multiselect("updateButtonText");
    FJS.filter();
  }
  //portal view
  else {
    $("#searchbox").val("");
    $("#searchbox-indikatorenset").val("");
    $("#thema_criteria :radio:first()").prop("checked", true);
    $("#unterthema_filter").prop("selectedIndex", 0);
    $("#raeumlicheGliederung_filter")
      .multiselect("selectAll", false)
      .multiselect("updateButtonText");
    $("#darstellungsart_filter")
      .multiselect("selectAll", false)
      .multiselect("updateButtonText");
    FJS.filter();
  }
}

function initializeFilterJS(indikatorenset, perPage, sortOptions) {
  var fjsConfig = {
    template: undefined,
    search: {
      ele: isIndikatorensetView(view)
        ? "#searchbox-indikatorenset"
        : "#searchbox",
      start_length: 1,
      // define fields in which to search for search term
      fields: [
        "title",
        "subtitle",
        "description",
        "thema",
        "unterthema",
        "kennzahlenset",
        "stufe1",
        "lesehilfe",
        "erlaeuterungen",
        "quellenangabe",
        "id",
        "children",
      ],
    },
    callbacks: {
      afterFilter: afterFilter,
      shortResult: sortResult,
    },
    pagination: {
      container: "#pagination",
      visiblePages: 5,
      perPage: {
        values: [perPage, 30, 100],
        container: "#per_page",
      },
    },
  };

  if (isIndikatorensetView(view)) {
    //Indikatorenset View
    if (!sortOptions) {
      sortOptions = { orderKey: "asc" };
    }
    prepareIndikatorensetView(indikatorenset);

    //define filter.js configuration
    fjsConfig["template"] = "#indikator-template-carousel-indikatorenset";

    var FJS = FilterJS(indikatoren, "#indikatoren", fjsConfig);
    FJS.addCriteria({
      field: "kennzahlenset",
      ele: "#kennzahlenset_filter",
      all: "all",
    });
    FJS.addCriteria({ field: "stufe1", ele: "#stufe1_filter", all: "all" });
    FJS.addCriteria({ field: "stufe2", ele: "#stufe2_filter", all: "all" });
    FJS.addCriteria({ field: "stufe3", ele: "#stufe3_filter", all: "all" });
    FJS.addCriteria({
      field: "darstellungsart",
      ele: "#darstellungsart_filter",
      all: "all",
    });
  } else {
    //Portal view
    if (!sortOptions) {
      sortOptions = { randomNumber: "asc" };
    }
    preparePortalView();
    //define filter.js configuration
    fjsConfig["template"] = "#indikator-template-carousel-portal";

    FJS = FilterJS(indikatoren, "#indikatoren", fjsConfig);
    FJS.addCriteria({
      field: "thema",
      ele: "#thema_criteria input:radio",
      all: "Alle",
    });
    FJS.addCriteria({
      field: "unterthema",
      ele: "#unterthema_filter",
      all: "all",
    });
    FJS.addCriteria({
      field: "raeumlicheGliederung",
      ele: "#raeumlicheGliederung_filter",
      all: "all",
    });
    FJS.addCriteria({
      field: "darstellungsart",
      ele: "#darstellungsart_filter",
      all: "all",
    });

    //reset all filter criteria
    $("#portal-reset-button").click(function () {
      resetPortalFilter(FJS, false);
    });
  }

  //implement default sorting, add event listener, and implement sortResult function
  $("#sortBy").on("change", function (e) {
    sortOptions = getSortOptions($(this).val());
    FJS.filter();
    e.preventDefault();
  });

  function sortResult(query) {
    if (sortOptions) {
      query.order(sortOptions);
    }
  }

  window.FJS = FJS;
  FJS.filter();
  //only now display page
  $("body").show();

  //add event listener to render chart on modal show
  $("#lightbox").on("show.bs.modal", function (e) {
    var targetId = $(e.relatedTarget).attr("indikator-id-data");
    lazyRenderChartById(targetId, undefined, view);
    var targetItem = $("#container-" + targetId).parent();
    var currentNumber = $(".item").index(targetItem) + 1;
    updateIndicatorText(currentNumber);

    //Update number of chart in slider
    function updateIndicatorText(number) {
      var indicatorText = $("#carousel-indicators li").text();
      var lastNumberText = indicatorText.substring(
        0,
        indicatorText.indexOf(" /")
      );
      $("#carousel-indicators li").text(
        indicatorText.replace(lastNumberText, number)
      );
      $("#carousel-indicators li").removeClass("active");
    }

    //add event listener to render chart on carousel slide
    //only do this in here in order to prevent two events from happening when clicking on a non-active chart thumbnail (sliding and opening model)
    $("#lightbox").on("slide.bs.carousel", function (e) {
      var targetId = $(e.relatedTarget)
        .children()
        .first()
        .attr("indikator-id-data");
      lazyRenderChartById(targetId, undefined, view);
      //display chart number in indicator
      var currentNumber = $(e.relatedTarget).index() + 1;
      updateIndicatorText(currentNumber);
    });
  });

  //remove sliding event event handler when modal ist closed in order to prevent sliding event from also being triggered when clicking an a chart thumbnail
  $("#lightbox").on("hide.bs.modal", function (e) {
    //remove slide event handler
    $("#lightbox").off("slide.bs.carousel");
  });
}

//interpret sort configuration received from dropdown
function getSortOptions(name) {
  switch (name) {
    case "kuerzel_asc":
      return { kuerzel: "asc" };
    case "kuerzel_desc":
      return { kuerzel: "desc" };
    case "kuerzelkunde_asc":
      return { kuerzelKunde: "asc" };
    case "kuerzelkunde_desc":
      return { kuerzelKunde: "desc" };
    case "orderKey_asc":
      return { orderKey: "asc" };
    case "orderKey_desc":
      return { orderKey: "desc" };
    case "aktualisierungsdatum_asc":
      return { aktualisierungsdatum: "asc" };
    case "aktualisierungsdatum_desc":
      return { aktualisierungsdatum: "desc" };
    default:
      return { orderKey: "asc" };
  }
}

//change DOM and render controls to accomodate portal view
function preparePortalView() {
  $("#main-control-element-indikatorenset").remove();
  renderThema();
  renderMultiselectDropdownFromJson(
    [
      "Schweiz",
      "Grossregion",
      "Kanton",
      "Gemeinde",
      "Wohnviertel",
      "Bezirk",
      "Block",
      "Blockseite",
      "Innenstadt",
      "Agglomeration",
    ],
    "",
    "#raeumlicheGliederung_filter",
    false
  );
  renderMultiselectDropdownFromJson(
    indikatoren,
    "darstellungsart",
    "#darstellungsart_filter",
    false
  );

  //prepare query String object for filtering thema and unterthema
  var baseQuery = {};
  //render unterthema dropdown for the first time
  renderDropdownFromJson(
    indikatoren,
    "unterthema",
    "#unterthema_filter",
    "unterthema",
    baseQuery
  );

  //pre-populate fields with url parameter values
  var themaUrlParameterVal = window.decodeURIComponent($.url("?thema"));
  //check if thema is valid
  if (
    indikatoren.find(function (element) {
      return element["thema"] === themaUrlParameterVal;
    })
  ) {
    $("#thema_criteria :radio")
      .filter("[value='" + themaUrlParameterVal + "']")
      .prop("checked", true);
  }
  setDropdownValFromUrlParameter("unterthema");
  var raeumlicheGliederungUrlParameterValue = window.decodeURIComponent(
    $.url("?raeumlicheGliederung")
  );
  if (raeumlicheGliederungUrlParameterValue != "undefined") {
    setMultiselectValue(
      "#raeumlicheGliederung_filter",
      raeumlicheGliederungUrlParameterValue
    );
  }
  var darstellungsartUrlParameterValue = window.decodeURIComponent(
    $.url("?darstellungsart")
  );
  if (darstellungsartUrlParameterValue != "undefined") {
    setMultiselectValue(
      "#darstellungsart_filter",
      darstellungsartUrlParameterValue
    );
  }

  //hide elements upon request
  if (window.decodeURIComponent($.url("?hideSidebar")) === "true") {
    $("#sidebar-element").hide();
    //make sure the remaining elements use up all horizontal space
    $("#main-element").removeClass().addClass("cx-col-12");
  }
  if (window.decodeURIComponent($.url("?hideUnterthema")) === "true") {
    $("#unterthema_criteria").hide();
  }
  if (window.decodeURIComponent($.url("?hideSearch")) === "true") {
    $("#search").hide();
  }
  if (window.decodeURIComponent($.url("?hideResetButton")) === "true") {
    $("#portal-reset-button").hide();
  }
  if (window.decodeURIComponent($.url("?hideThema")) === "true") {
    $("#thema").hide();
  }
  if (
    window.decodeURIComponent($.url("?hideRaeumlicheGliederung")) === "true"
  ) {
    $("#raeumlicheGliederung").hide();
  }
  if (window.decodeURIComponent($.url("?hideDarstellungsart")) === "true") {
    $("#darstellungsart").hide();
  }
}

//set a multiselect dropdown value and trigger a change event
function setMultiselectValue(selector, value) {
  $(selector + " option").prop("selected", false);
  $(selector)
    .multiselect("deselectAll", false)
    .multiselect("select", value)
    .multiselect("updateButtonText");
}

//change DOM and render controls to accomodate indikatorenset view
function prepareIndikatorensetView(indikatorenset) {
  $("#sidebar-element").remove();
  //Change bootstrap col size in order to fill width
  $("#main-element").removeClass();
  $("#main-element").addClass("col-xs-12");
  $("#main-control-element-portal").remove();

  renderDropdownFromJson(
    indikatoren,
    "kennzahlenset",
    "#kennzahlenset_filter",
    "kennzahlenset"
  );
  //select requested Indikatorenset in dropdown
  $("#kennzahlenset_filter").val(indikatorenset);

  //prepare query String object for filtering stufe1 and stufe2
  var baseQuery = {};
  baseQuery["kennzahlenset"] = indikatorenset;

  renderDropdownFromJson(
    indikatoren,
    "stufe1",
    "#stufe1_filter",
    "orderKey",
    baseQuery
  );
  renderDropdownFromJson(
    indikatoren,
    "stufe2",
    "#stufe2_filter",
    "orderKey",
    baseQuery
  );
  renderDropdownFromJson(
    indikatoren,
    "stufe3",
    "#stufe3_filter",
    "orderKey",
    baseQuery
  );
  renderDropdownFromJson(
    indikatoren,
    "darstellungsart",
    "#darstellungsart_filter",
    "orderKey",
    baseQuery
  );

  //pre-populate fields with url parameter values
  setDropdownValFromUrlParameter("stufe1");
  setDropdownValFromUrlParameter("stufe2");
  setDropdownValFromUrlParameter("stufe3");
  setDropdownValFromUrlParameter("darstellungsart");

  //show lastUpdatedSets table if requested
  if (window.decodeURIComponent($.url("?showLastUpdatedSets")) === "true") {
    renderLastUpdatedSets("#lastUpdatedSets");
    $("#lastUpdatedSets").show();
  }
}

function renderLastUpdatedSets(selector) {
  //load csv
  $.get(
    "https://statabs.github.io/indikatoren_plus/datenliste.tsv",
    function (tsv) {
      //convert tsv to array
      var datenliste = tsvJSON(tsv);
      //read template from html
      var html = $("#datenliste-row-template").html();
      var templateFunction = FilterJS.templateBuilder(html);
      var container = $("#datenliste");
      $.each(datenliste, function (i, c) {
        //only add if row is not empty
        if (c.Datum && i < 9) {
          container.find("tbody").append(
            templateFunction({
              Datum: c.Datum,
              ThemaLink: c.ThemaLink,
              Thema: c.Thema,
              Bereich: c.Bereich,
              Datenstand: c.Datenstand,
            })
          );
        }
      });
    }
  );
}

//var tsv is the TSV file with headers
//see http://techslides.com/convert-csv-to-json-in-javascript
function tsvJSON(tsv) {
  var lines = tsv.split("\n");
  var result = [];
  var headers = lines[0].split("\t");
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split("\t");
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result; //JavaScript object
  //return JSON.stringify(result); //JSON
}

//check if field value exists before setting value of dropdown
function setDropdownValFromUrlParameter(field) {
  var urlParameterValue = window.decodeURIComponent($.url("?" + field));
  if (
    indikatoren.find(function (element) {
      return element[field] === urlParameterValue;
    })
  ) {
    $("#" + field + "_filter").val(urlParameterValue);
  }
}

function renderThema() {
  //get all values of thema and add value "Alle" as the first one
  var values = ["Alle"].concat(
    JsonQuery(indikatoren).uniq("thema").order({ thema: "asc" }).pluck("thema")
      .all
  );
  var html = $("#radio-template").html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $("#thema_criteria");

  $.each(values, function (i, c) {
    container.append(
      templateFunction({ value: c, radioGroupName: "themaRadioGroup" })
    );
  });

  //check first radio ('Alle')
  $("#thema_criteria :radio:first()").prop("checked", true);
}

//create a single-select dropdown that contain values from a given json object at a specified place in the DOM
function renderDropdownFromJson(
  data,
  field,
  selector,
  sortKey,
  filterQueryString
) {
  var JQ = JsonQuery(data);
  //If filterQueryString is given: filter data before rendering dropdowns
  if (typeof filterQueryString !== "undefined") {
    JQ = JQ.where(filterQueryString);
  }
  //Sort if sortKey is given
  if (typeof sortKey !== "undefined") {
    var sortOptions = {};
    sortOptions[sortKey] = "asc";
    JQ = JQ.order(sortOptions);
  }

  var allValues = JQ.pluck(field).all;
  //get unique values and filter out empty string
  var uniqueValues = allValues.filter(function (item, i, ar) {
    return ar.indexOf(item) === i && item != "";
  });
  var html = $("#option-template").html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $(selector);

  //save the currently selected value first
  var currentValue = $(selector).val();
  //remove options if any are present, but leave the first one
  var optionsToRemove = selector + " > option:gt(0)";
  $(optionsToRemove).remove();
  //render options
  $.each(uniqueValues, function (i, c) {
    container.append(templateFunction({ key: c, value: c }));
  });
  //re-set previously selected value
  $(selector).val(currentValue);
  //if no item is selected now, select the first one, and trigger a change event so that filtering is updated
  if (!$(selector).val()) {
    $(selector + " :nth-child(1)").prop("selected", true);
    $(selector).change();
  }
}

//create a multi-select dropdown that contain values from a given json object at a specified place in the DOM
function renderMultiselectDropdownFromJson(data, field, selector, sort) {
  var JQ = JsonQuery(data);
  var allValuesNested = JQ.pluck(field).all;
  //reduce array of array of values to array of values (flatMap) if applicable
  var allValues = [].concat.apply([], allValuesNested);
  //get unique values and filter out empty string
  var uniqueValues = allValues.filter(function (item, i, ar) {
    return ar.indexOf(item) === i && item != "";
  });
  //sort if applicable
  if (sort) {
    uniqueValues.sort();
  }
  var html = $("#option-template").html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $(selector);
  //render options
  $.each(uniqueValues, function (i, c) {
    container.append(templateFunction({ key: c, value: c }));
  });
  //convert select control to multiselect dropdown
  configureMultiselect(selector);
}

//find index of chart with a given id
function getIndexOfChart(chartId, charts) {
  var indexes = $.map(charts, function (obj, index) {
    if (obj.id == chartId) {
      return index;
    }
  });
  return indexes[0];
}

//slide carousel to a specified chart id
function slideToLinkedChart(chartId, FJS, view) {
  var index = getIndexOfChart(chartId, getLastFjsResult());
  if (index > -1) {
    $(".carousel").carousel(index);
  } else {
    //get index of currently displayed chart
    var currentIndex = $(".item.active").index();
    //reset search filters
    resetPortalFilter(FJS, view);
    //find index of target chart
    index = getIndexOfChart(chartId, getLastFjsResult());
    if (index > -1) {
      //if index of current chart is same as index of target chart we have to mess with the "active" attribute in order to make sliding work
      if (currentIndex == index) {
        //set active class on the last item (is set to first item by afterFilter function)
        $(".item.active").removeClass("active");
        $(".item:last-child").addClass("active");
      }
      //slide to target item
      $(".carousel").carousel(index);
    } else {
      console.log("No chart with id " + chartId + " found...");
    }
  }
}

//convert a normal html select given via its css selector to a multiselect dropdown
function configureMultiselect(selector) {
  var control = $(selector);
  //configure multiselect
  control.multiselect(
    {
      maxHeight: 245,
      buttonWidth: "100%",
      inheritClass: true,
      includeSelectAllOption: true,
      selectAllText: "Alle",
      enableFiltering: true,
      enableCaseInsensitiveFiltering: true,
      filterPlaceholder: "Suche...",
      nonSelectedText: "Keine",
      allSelectedText: "Alle",
      selectAllNumber: false,
      nSelectedText: "ausgewählt",
      numberDisplayed: 2,
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
  control.multiselect("selectAll", false);
  control.multiselect("updateButtonText");
}

//if full-text search is used (search_text has some minimum length), FJS uses a different results array than if not.
function getLastFjsResult() {
  return window.FJS.search_text.length > FJS.opts.search.start_length
    ? window.FJS.search_result
    : window.FJS.last_result;
}

//find index of a given _fid in the results array.
//this is necessary for carousel since links to charts in the carousel contain the array index which changes upon paging.
function getIndexByFid(fid) {
  //source: http://stackoverflow.com/questions/15997879/get-the-index-of-the-object-inside-an-array-matching-a-condition
  try {
    var indexes = $.map(getLastFjsResult(), function (obj, index) {
      if (obj._fid == fid) {
        return index;
      }
    });
    return indexes[0];
  } catch (e) {
    return undefined;
  }
}

//after filtering is done: update dropdonws and their counts, create all carousel components
var afterFilter = function (result, jQ) {
  //$('#total_indikatoren').text(result.length);

  //prepare query String object for filtering stufe1 - stufe5
  var query =
    window["FJS"] && window["FJS"]["last_query"]
      ? window.FJS.last_query
      : undefined;
  var baseQuery = query
    ? query.criteria
      ? query.criteria.where
      : undefined
    : undefined;
  //deep copy so that changes have no effect on filtering charts, only dropdowns
  var baseQueryCopy = $.extend(true, {}, baseQuery);
  //start from the right: remove field of dropdown and render dropdown. This way, stufe3 selection does not filter stufe2 dropdown options, and so on.
  if (baseQueryCopy) {
    delete baseQueryCopy["stufe3" + ".$in"];
  }
  renderDropdownFromJson(
    indikatoren,
    "stufe3",
    "#stufe3_filter",
    "orderKey",
    baseQueryCopy
  );
  if (baseQueryCopy) {
    delete baseQueryCopy["stufe2" + ".$in"];
  }
  renderDropdownFromJson(
    indikatoren,
    "stufe2",
    "#stufe2_filter",
    "orderKey",
    baseQueryCopy
  );
  if (baseQueryCopy) {
    delete baseQueryCopy["stufe1" + ".$in"];
  }
  renderDropdownFromJson(
    indikatoren,
    "stufe1",
    "#stufe1_filter",
    "orderKey",
    baseQueryCopy
  );

  var baseQueryCopyUnterthema = $.extend(true, {}, baseQuery);
  //make sure currently selected unterthema does not filter the unterthema dropdown
  delete baseQueryCopyUnterthema["unterthema" + ".$in"];
  renderDropdownFromJson(
    indikatoren,
    "unterthema",
    "#unterthema_filter",
    "unterthema",
    baseQueryCopyUnterthema
  );

  //define how counts in dropdowns or checkboxes are rendered
  var optionCountRenderFunction = function (c, count) {
    c.text(c.val() + " (" + count + ")");
  };
  var checkboxCountRenderFunction = function (c, count) {
    c.next().text(c.val() + " (" + count + ")");
  };

  //render new counts after each control
  //if no 'where' criteria are defined in last query, use updateCountsInclusive(), otherwise updateCountsExclusive
  var updateFunction =
    query && query.criteria && query.criteria.where
      ? updateCountsExclusive
      : updateCountsInclusive;
  updateFunction(
    "#thema_criteria :input:gt(0)",
    "thema",
    checkboxCountRenderFunction,
    result,
    jQ
  );
  updateFunction(
    "#raeumlicheGliederung_filter > option",
    "raeumlicheGliederung",
    optionCountRenderFunction,
    result,
    jQ
  );
  updateFunction(
    "#darstellungsart_filter > option",
    "darstellungsart",
    optionCountRenderFunction,
    result,
    jQ
  );

  //hide dropdowns if no specific values present, or select the single specific value
  //selectSingleEntryOrHideDropdown('#unterthema_filter');
  //selectSingleEntryOrHideDropdown('#stufe2_filter');

  //for multiselect dropdowns: rebuild control after select tag is updated
  $("#raeumlicheGliederung_filter").multiselect("rebuild");
  $("#darstellungsart_filter").multiselect("rebuild");

  //if results fit in a single page: hide pagination, use bootstrap invisible class to leave row height intact
  result.length <= perPage
    ? $("#pagination").addClass("invisible")
    : $("#pagination").removeClass("invisible");

  createCarousel(result);

  //add Counts in brackets after each option
  //calculate number of results that would be found if only the current value was selected (i.e. exclusive any filtercriteria of the current control)
  function updateCountsExclusive(selector, field, renderFunction) {
    var items = $(selector);
    //iterate over each displayed value of the criterion
    items.each(function () {
      var c = $(this),
        count = 0;

      //get last Query JsonQuery Object of last filter event and remove the current filter value from it
      try {
        var jsonQ = window.FJS.last_query;
        //save array to restore later
        var origArray = jsonQ.where().criteria.where[field + ".$in"];
        //add only current item to new criterion array
        var newArray = [c.val()];
        jsonQ.where().criteria.where[field + ".$in"] = newArray;
        //if any of the where criteria contains an empty array as filter item: remove the clause to make jsonQuery work
        $.each(jsonQ.where().criteria.where, function (index, value) {
          if (value === undefined) {
            delete jsonQ.where().criteria.where[index];
          }
        });
        //invoke JsonQuery and get length of result
        count = jsonQ.count;
        //handle full text search if it is defined in FJS
        if (window.FJS.has_search) {
          //only do full text search with minimum number of search characters
          if (
            window.FJS.search_text.length > window.FJS.opts.search.start_length
          ) {
            var result = window.FJS.search(window.FJS.search_text, jsonQ.all);
            count = result.length;
          }
        }
        //restore original criterion array
        jsonQ.where().criteria.where[field + ".$in"] = origArray;
      } catch (e) {
        //no filter after first page load, thus no criteria. Silently dismiss exception.
        //console.log(e);
      }
      //render text using the appropriate function
      renderFunction(c, count);
    });
  }

  //Add Counts in brackets after each option
  //calculate number of results that would be found if current value was _additionally_ filtered by (i.e. inclusive any filtercriteria of the current control)
  function updateCountsInclusive(selector, key, renderFunction, result, jQ) {
    var items = $(selector);
    //iterate over each displayed value of the criterion
    items.each(function () {
      var c = $(this),
        count = 0;
      if (result.length > 0) {
        var queryString = {};
        queryString[key] = c.val();
        count = jQ.where(queryString).count;
      }
      //render text using the appropriate function
      renderFunction(c, count);
    });
  }

  //hide dropdown if no specific entry present, select the  specific entry if it is the only one present
  function selectSingleEntryOrHideDropdown(selector) {
    //if only 1 item present besides the 'all' option: select it
    var optionsCount = $(selector + " > option").length;
    if (optionsCount == 1) {
      //no item present besides 'all', hide dropdown
      //$(selector).addClass('hidden');
    } else {
      //show dropdown
      //$(selector).removeClass('hidden');
      if (optionsCount == 2) {
        //select the one existing entry
        $(selector).prop("selectedIndex", 1);
        //$("#unterthema_filter > option:first()").remove();
      }
    }
  }

  //create a div that will contain the chart and an indicator dot for each chart in the result. the result contains charts over all pages.
  //bootstrap carousel combined with modal inspired by https://codepen.io/krnlde/pen/pGijB
  function createCarousel(result) {
    //add a carousel-inner div for each thumbnail
    //build template function using template from DOM
    var template = isIndikatorensetView(view)
      ? "#indikator-template-modal-indikatorenset"
      : "#indikator-template-modal-portal";
    var html = $(template).html();
    var templateFunction = FilterJS.templateBuilder(html);
    var container = $("#carousel-inner");
    //first remove all carousel divs
    container.children().remove();
    //add a new carousel for each chart in results
    $.each(result, function (i, item) {
      container.append(templateFunction(item));
    });
    //set first child to active, only now the carousel is visible
    container.children().first().addClass("active");

    //add an indicator (dot that links to a chart) for each chart
    //build template function using template from DOM
    html = $("#carousel-indicator-template").html();
    templateFunction = FilterJS.templateBuilder(html);
    container = $("#carousel-indicators");
    //first remove all carousel divs
    container.children().remove();

    var element = $(templateFunction(1)).appendTo(container);
    //set value of data-slide-to: must be the 0-based index of the indicator
    element.text("1 / " + result.length);

    //bind keyboard to carousel: arrow left/right, esc
    //source: http://stackoverflow.com/questions/15720776/bootstrap-carousel-with-keyboard-controls
    $(document).bind("keyup", function (e) {
      if (e.which == 39) {
        $(".carousel").carousel("next");
      } else if (e.which == 37) {
        $(".carousel").carousel("prev");
      } else if (e.which == 27) {
        $(".carousel").modal("hide");
      }
    });
  }
}; //afterFilter

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function (predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
  });
}
