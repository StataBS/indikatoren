const exporter = require("highcharts-export-server");
const fs = require("fs");
const path = require("path");

const customFunctionsJs = fs.readFileSync(
  path.join(__dirname, "../assets/js/customFunctions.js"),
  "utf8"
);

// highcharts-export-server injects customLogic.resources.files (e.g. proj4.js)
// only AFTER the chart has already been constructed (see triggerExport() in
// highcharts-export-server/lib/highcharts.js vs. addPageResources() in
// export.js, called after setAsConfig()). mapbubble series with lat/lon data
// need proj4 available DURING construction to project points, otherwise
// Highcharts silently drops them (warning #21) - the points exist but get no
// graphic. Embedding proj4's source directly in customCode (which runs
// before chart creation) makes it available in time.
const proj4Js = fs.readFileSync(
  path.join(__dirname, "../node_modules/proj4/dist/proj4.js"),
  "utf8"
);

// Serializes a Highcharts config object (containing JS functions) to a string
// that can be reconstructed with new Function('return ' + str)().
//
// Why not JSON.stringify + EXP_FUN markers (like the export server's X()):
//   JSON.stringify escapes " to \" inside string values. Once the outer JSON
//   quotes are removed, those \" sequences become invalid JS syntax.
//   e.g.  function(){ return "hi"; }  →  function(){ return \"hi\"; }  ← broken
//
// Fix: custom recursive serializer that writes function bodies as raw source
// (no JSON escaping), and uses JSON.stringify only for actual string data.
function serializeWithFunctions(val) {
  if (val === null) return "null";
  if (val === undefined) return "undefined";
  if (typeof val === "function") {
    return val
      .toString()
      .replace(/\/\*[\s\S]*?\*\//g, " ") // remove block comments first (prevents // inside /* */ creating nested block comments)
      .replace(/(?<!:)\/\/[^\n\r]*/g, "") // remove line comments; negative lookbehind avoids stripping "https://..." URL strings
      .replace(/[\n\t\r]/g, "\u2028"); // Unicode line separator: preserves ASI in new Function(), invisible to De()'s /\t|\n|\r/ regex
  }
  if (typeof val === "boolean" || typeof val === "number") return String(val);
  if (typeof val === "string") return JSON.stringify(val);
  if (Array.isArray(val)) {
    return "[" + val.map(serializeWithFunctions).join(",") + "]";
  }
  if (typeof val === "object") {
    const pairs = Object.keys(val).map(
      (k) => JSON.stringify(k) + ":" + serializeWithFunctions(val[k]),
    );
    return "{" + pairs.join(",") + "}";
  }
  return JSON.stringify(val);
}

var chartDetails = [];

go();

async function go() {
  var views = ["portal"];
  views.forEach(function (view) {
    console.log("Creating array entries for indikatorensetView=" + view);
    var files = JSON.parse(fs.readFileSync("tmp/chartsToBuild.json"));
    files.forEach(function (chartId) {
      var pathArray = createPathArray(chartId, view);
      if (pathArray) {
        chartDetails.push(pathArray);
      }
    });
  });

  const initOptions = {
    pool: {
      minWorkers: 1,
      maxWorkers: 1,
      // Force a fresh page per export. Chart instances/containers from a render are
      // never destroyed, so a shared page accumulates them across exports; past a
      // few dozen this causes runaway/duplicated SVG output or hangs for whichever
      // chart happens to hit the threshold next (reproduced with charts 9022/9023).
      workLimit: 1,
    },
    logging: { level: 0 },
    customLogic: {
      allowCodeExecution: true,
      allowFileResources: true,
    },
    other: {
      listenToProcessExits: false,
    },
    highcharts: {
      version: "latest",
      cdnURL: "https://code.highcharts.com/",
      useNpm: true,
      coreScripts: ["highcharts", "highcharts-more", "highcharts-3d"],
      moduleScripts: ["stock", "map"],
      indicatorScripts: [],
      customScripts: [],
      forceFetch: false,
      cachePath: ".cache",
    },
    server: {
      proxy: {},
    },
    puppeteer: {
      args: [],
      tempDir: "./tmp/",
    },
  };

  exporter.setOptions(initOptions);
  await exporter.initExport(initOptions);

  await createSvgImages(chartDetails);
}

function createPathArray(chartId, view) {
  var imagePath = "images/" + view + "/";
  var configPath = "charts/configs/" + view + "/";
  var singlePath = "metadata/single/";
  var infilePath = path.join(__dirname, "../" + configPath + chartId + ".json");
  var additionalConfigPath = path.join(
    __dirname,
    "../" + singlePath + chartId + ".json",
  );
  var outfilePath = path.join(__dirname, "../" + imagePath + chartId + ".svg");

  try {
    var additionalConfigFile = fs.readFileSync(additionalConfigPath, "utf8");
    var additionalConfig = deserialize(additionalConfigFile);
    if (!additionalConfig.kennzahlenset.toLowerCase().includes("print")) {
      var configFile = fs.readFileSync(infilePath, "utf8");
      var config = deserialize(configFile);

      // Ensure white background regardless of what's in the config
      if (config.chart) config.chart.backgroundColor = "#ffffff";

      // Disable useHTML in legend so text renders as SVG elements (not foreignObject) in export
      if (config.legend) config.legend.useHTML = false;

      // Legende, Zoom-Buttons und Massstab bei map-Charts in Vorschaubildern ausblenden
      if (config.chart && config.chart.type === 'map') {
        if (!config.legend) config.legend = {};
        config.legend.enabled = false;

        if (!config.mapNavigation) config.mapNavigation = {};
        config.mapNavigation.enabled = false;
        config.mapNavigation.enableButtons = false;

        if (Array.isArray(config.series)) {
          config.series = config.series.filter(function (s) {
            return !s || s.name !== 'Massstab';
          });
        }
      }

      // mappie is registered in customCode before chart creation.
      // defineTemplate() in chart.events.load would try to re-register it → throws → blocks drawPies().
      // Make it a no-op so the load handler can proceed past it.
      if (config.customFunctions && typeof config.customFunctions.defineTemplate === 'function') {
        config.customFunctions.defineTemplate = function () {};
      }

      // HC12 map coordinate fix: HC12 computes the bounding box relative to (0,0), causing LV95
      // coordinates (~2.6M) to render at ~1/500 of the correct scale. We compute the real LV95
      // bounds here and pass them through so the SVG can be post-processed after export.
      var lv95Bounds = null;
      if (config.chart && config.chart.type === 'map') {
        var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        function traverseLv95Coords(obj) {
          if (!obj || typeof obj !== 'object') return;
          if (Array.isArray(obj)) {
            if (obj.length >= 2 && typeof obj[0] === 'number' && obj[0] > 1000000) {
              // LV95 coordinate pair: X ~2.6M, Y ~1.27M
              minX = Math.min(minX, obj[0]); maxX = Math.max(maxX, obj[0]);
              minY = Math.min(minY, obj[1]); maxY = Math.max(maxY, obj[1]);
            } else {
              obj.forEach(traverseLv95Coords);
            }
          } else {
            Object.values(obj).forEach(traverseLv95Coords);
          }
        }
        if (Array.isArray(config.series)) {
          config.series.forEach(function(s) {
            if (s && s.mapData) traverseLv95Coords(s.mapData);
          });
        }
        if (minX < Infinity) lv95Bounds = { minX, maxX, minY, maxY };
      }

      // v5 uses lowercase camelCase constructors
      var constr = config.isStock
        ? "stockChart"
        : config.chart.type === "map"
          ? "mapChart"
          : "chart";
      return {
        config: config,
        additionalConfig: additionalConfig,
        outfilePath: outfilePath,
        constr: constr,
        lv95Bounds: lv95Bounds,
      };
    } else {
      console.log(
        "File for Chart-Id " + chartId + " not created (is Print-Indikator) ",
      );
      return null;
    }
  } catch (err) {
    console.log("Exception when reading json file " + infilePath + ": " + err);
  }
}

async function createSvgImages(chartDetails) {
  if (chartDetails.length > 0) {
    var chartEntry = chartDetails.pop();

    if (
      !chartEntry.additionalConfig.kennzahlenset.toLowerCase().includes("print")
    ) {
      var exportSettings = {
        export: {
          type: "svg",
          instr: serializeWithFunctions(chartEntry.config),
          constr: chartEntry.constr,
        },
        customLogic: {
          allowCodeExecution: true,
          customCode: `
          ${proj4Js}
          (function () {
              // The export pool reuses the same browser page/Highcharts instance across
              // multiple chart exports (see pool.workLimit below). Everything in this block
              // patches the Highcharts module globally (addEvent/wrap on shared prototypes,
              // seriesType registration) rather than per chart instance, so re-running it on
              // every export accumulates duplicate handlers/wraps on that shared instance.
              // After ~20-30 exports in the same worker this causes runaway rendering
              // (multi-MB SVGs) or hangs for whichever chart happens to trigger it next.
              // Guard so it only runs once per page lifetime.
              if (Highcharts.__portalExportPatched) return;
              Highcharts.__portalExportPatched = true;

              // HC12 Compatibility: series.yData wurde durch series.getColumn('y') ersetzt
              if (Highcharts.Series && !Object.getOwnPropertyDescriptor(Highcharts.Series.prototype, 'yData')) {
                  Object.defineProperty(Highcharts.Series.prototype, 'yData', {
                      get: function () { return this.dataTable && this.getColumn ? this.getColumn('y') : []; },
                      set: function () {}, // HC12 setzt yData intern – ignorieren
                      configurable: true
                  });
              }

              // HC12 Compatibility: Highcharts.each wurde entfernt
              if (!Highcharts.each) {
                  Highcharts.each = function (arr, fn) { arr.forEach(fn); };
              }

              // Export-Kontext: jQuery-Alias sicherstellen; falls jQuery nicht verfügbar,
              // No-op-Stub damit chart.load-Events mit $() nicht crashen (SVG-Export ist statisch)
              if (typeof $ === 'undefined') {
                  window.$ = (typeof jQuery !== 'undefined') ? jQuery : function () {
                      var noop = function () { return noop; };
                      noop.click = noop.on = noop.off = noop.attr = noop.css =
                          noop.addClass = noop.removeClass = noop.each =
                          noop.find = noop.hide = noop.show = noop.toggle = noop;
                      return noop;
                  };
                  if (typeof jQuery === 'undefined') {
                      window.$.extend = function (target) {
                          for (var i = 1; i < arguments.length; i++) {
                              var src = arguments[i];
                              if (src) { for (var k in src) { if (src.hasOwnProperty(k)) target[k] = src[k]; } }
                          }
                          return target;
                      };
                  }
              }

              // HC12 Compatibility: axis.names kann undefined sein (z.B. in Navigator-Achsen)
              // Sicherstellt, dass axis.names immer ein Array ist, damit formatter nicht crashen.
              Highcharts.addEvent(Highcharts.Axis, 'afterInit', function () {
                  if (!this.names) { this.names = []; }
              });

              // HC12 Compatibility: Tick-Label-Formatter können crashen wenn names[i] undefined ist
              // (z.B. this.chart.xAxis[0].names[this.value].slice(0,4) bevor Namen befüllt sind).
              // Globaler Schutz: Tick.addLabel mit try/catch umhüllen; Fallback: leerer Label-Text.
              if (Highcharts.Tick && Highcharts.Tick.prototype && Highcharts.Tick.prototype.addLabel) {
                  Highcharts.wrap(Highcharts.Tick.prototype, 'addLabel', function (proceed) {
                      try {
                          return proceed.apply(this, Array.prototype.slice.call(arguments, 1));
                      } catch (e) {
                          // Formatter crashed – render tick without label text
                      }
                  });
              }


              // HC12 Compatibility: Map-Point-Properties/Keys wurden von direktem Zugriff (point.Wohnviertel_Id)
              // nach point.properties.* bzw. point.options.* verschoben.
              // Shim: Properties und Options-Keys direkt auf den Punkt kopieren.
              Highcharts.addEvent(Highcharts.Point, 'afterInit', function () {
                  var point = this;
                  if (point.properties && typeof point.properties === 'object') {
                      Object.keys(point.properties).forEach(function (key) {
                          if (point[key] === undefined) { point[key] = point.properties[key]; }
                      });
                  }
                  if (point.options && typeof point.options === 'object') {
                      Object.keys(point.options).forEach(function (key) {
                          if (point[key] === undefined && key !== 'x' && key !== 'y') {
                              point[key] = point.options[key];
                          }
                      });
                  }
              });

              // HC12 Compatibility: fromLatLonToPoint gibt undefined zurück wenn mapView noch nicht initialisiert
              // Schützt mappie-Charts vor "Cannot read properties of undefined (reading 'x')"
              var origFromLatLon = Highcharts.Chart.prototype.fromLatLonToPoint;
              if (origFromLatLon) {
                  Highcharts.Chart.prototype.fromLatLonToPoint = function (latLon) {
                      var result = origFromLatLon.call(this, latLon);
                      return result || { x: 0, y: 0 };
                  };
              }

              // Vollständige mappie-Registrierung (Karte + Torten-Overlay).
              // Muss VOR chart.events.load passieren, damit defineTemplate() im load-handler
              // nicht erneut registriert (was einen Fehler wirft und drawPies() blockiert).
              Highcharts.seriesType('mappie', 'pie', {
                  center: null,
                  clip: true,
                  states: { hover: { halo: { size: 5 } } },
                  dataLabels: { enabled: false }
              }, {
                  getCenter: function () {
                      var options = this.options,
                          chart = this.chart,
                          slicingRoom = 2 * (options.slicedOffset || 0);
                      if (!options.center) { options.center = [null, null]; }
                      if (options.center.lat !== undefined) {
                          var point = (typeof chart.fromLatLonToPoint === 'function')
                              ? chart.fromLatLonToPoint(options.center)
                              : null;
                          if (point) {
                              options.center = [
                                  chart.xAxis[0].toPixels(point.x, true),
                                  chart.yAxis[0].toPixels(point.y, true)
                              ];
                          }
                      }
                      if (options.sizeFormatter) { options.size = options.sizeFormatter.call(this); }
                      var result = Highcharts.seriesTypes.pie.prototype.getCenter.call(this);
                      result[0] -= slicingRoom;
                      result[1] -= slicingRoom;
                      return result;
                  },
                  translate: function (p) {
                      this.options.center = this.userOptions.center;
                      this.center = this.getCenter();
                      return Highcharts.seriesTypes.pie.prototype.translate.call(this, p);
                  }
              });

              // HC12 Compatibility: chart.events.load mit try/catch absichern.
              // fireEvent() in HC12 ist eine lokale Variable (nicht Highcharts.fireEvent), daher
              // wird der Konstruktor gewrapped um events.load vor der Chart-Erstellung zu patchen.
              ['chart', 'stockChart', 'mapChart'].forEach(function (fnName) {
                  var orig = Highcharts[fnName];
                  if (!orig) return;
                  Highcharts[fnName] = function (renderTo, options, callback) {
                      try {
                          if (options && options.chart && options.chart.events && typeof options.chart.events.load === 'function') {
                              var origLoad = options.chart.events.load;
                              options.chart.events.load = function () {
                                  try { return origLoad.apply(this, arguments); }
                                  catch(e) { console.warn('chart.events.load error:', e && e.message); }
                              };
                          }
                      } catch(e) {}
                      return orig.apply(this, arguments);
                  };
              });

              // Credits entfernen
              Highcharts.addEvent(Highcharts.Chart, 'load', function () {
                  if (this.credits && this.credits.element) {
                      this.credits.element.remove();
                  }
              });

              // Control-Points entfernen
              Highcharts.addEvent(Highcharts.Chart, 'load', function () {
                  const cp = this.container.querySelector('.highcharts-control-points');
                  if (cp) cp.remove();
              });

              // Titel & Untertitel entfernen
              Highcharts.addEvent(Highcharts.Chart, 'load', function () {
                  const title = this.container.querySelector('.highcharts-title');
                  if (title) title.remove();

                  const subtitle = this.container.querySelector('.highcharts-subtitle');
                  if (subtitle) subtitle.remove();
              });

              // pieLegend-Elemente entfernen (Karten-Vorschaubilder)
              Highcharts.addEvent(Highcharts.Chart, 'load', function () {
                  // Benannte pieLegend-Elemente entfernen
                  this.container.querySelectorAll('[class*="pieLegend"]').forEach(function (el) {
                      el.remove();
                  });
                  // Unbenannte Legenden-Rechtecke entfernen (addLegendRectangle ohne cssClass → class="undefined")
                  this.container.querySelectorAll('rect[class="undefined"]').forEach(function (el) {
                      el.remove();
                  });
              });
          })();
          ${customFunctionsJs}
          `,
          resources: {
            files: [
              // proj4 is embedded directly in customCode above (see comment
              // near proj4Js) since resources.files loads too late for
              // mapbubble lat/lon projection during chart construction.
              "node_modules/jquery/dist/jquery.min.js",
            ],
          },
        },
      };

      await exporter.startExport(exportSettings, async (error, info) => {
        if (error) {
          console.log(
            "Exception when exporting chart " +
              chartEntry.outfilePath +
              ": " +
              (error.error?.stackMessage ||
                error.stackMessage ||
                error.message),
          );
        } else {
          let svg = info.result.replace(/&nbsp;/g, "&#160;");
          if (chartEntry.lv95Bounds) svg = fixMapSvgTransform(svg, chartEntry.lv95Bounds);
          fs.writeFileSync(chartEntry.outfilePath, svg);
          console.log(
            "Image created: " +
              chartEntry.outfilePath +
              ", " +
              chartDetails.length +
              " to go...",
          );
        }
      });
    } else {
      console.log(
        "Image not created (is Print): " +
          chartEntry.outfilePath +
          ", " +
          chartDetails.length +
          " to go...",
      );
    }

    await createSvgImages(chartDetails);
  } else {
    console.log("...done!");
    await exporter.killPool();
    process.exit();
  }
}

// HC12 renders LV95 map charts at ~1/500 scale because it treats (0,0) as the coordinate origin.
// This function replaces the wrong inner transform on all map series groups with a correct one
// computed from the actual LV95 coordinate bounds.
function fixMapSvgTransform(svg, bounds) {
  const { minX, maxX, minY, maxY } = bounds;

  // Read plot dimensions from the plot-background rect in the SVG
  const bgMatch = svg.match(/class="highcharts-plot-background"[^>]*x="([^"]+)"[^>]*y="([^"]+)"[^>]*width="([^"]+)"[^>]*height="([^"]+)"/);
  const plotW = bgMatch ? parseFloat(bgMatch[3]) : 580;
  const plotH = bgMatch ? parseFloat(bgMatch[4]) : 280;

  const dataW = maxX - minX;
  const dataH = maxY - minY;

  // Scale to fit within 90% of the plot area (5% padding each side)
  const scale = Math.min(plotW / dataW, plotH / dataH) * 0.9;

  // Center map in plot area
  const tx = (plotW - dataW * scale) / 2 - minX * scale;
  const ty = (plotH - dataH * scale) / 2 + maxY * scale;
  const sw = (1 / scale).toFixed(4);

  // Replace every inner coordinate group transform (identified by tiny scale < 0.01)
  return svg.replace(
    /<g stroke-width="[\d.eE+-]+" transform="translate\([^)]+\) scale\([^)]+\)">/g,
    `<g stroke-width="${sw}" transform="translate(${tx.toFixed(4)},${ty.toFixed(4)}) scale(${scale.toFixed(8)} ${(-scale).toFixed(8)})">`
  );
}

//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript) {
  return eval("(" + serializedJavascript + ")");
}
