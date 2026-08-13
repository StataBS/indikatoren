document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");
  const closeBtn = document.getElementById("close-lightbox");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");
  const indicators = document.getElementById("carousel-indicators");

  let slides = [];
  let currentIndex = 0;
  let openedIndicatorId = null;
  let lightboxResizeObserver = null;

  // The lightbox is position:fixed, so it never contributes to body.scrollHeight.
  // iframe-resizer therefore never resizes the iframe to fit it. We fix this by
  // mirroring the lightbox's full scrollHeight onto body.style.minHeight, which
  // iframe-resizer *does* measure. A ResizeObserver keeps it in sync as the chart
  // and text content render asynchronously.
  function syncLightboxHeight() {
    const h = lightbox.scrollHeight;
    document.body.style.minHeight = h + "px";
  }

  function openLightbox(index) {
    currentIndex = index;
    openedIndicatorId = window.slides?.[index]?.id ?? null;
    updateLightbox();
    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    syncLightboxHeight();
    lightboxResizeObserver = new ResizeObserver(syncLightboxHeight);
    lightboxResizeObserver.observe(lightboxContent);

    lightbox.scrollTop = 0;
    // When embedded in an iframe, position:fixed is relative to the iframe
    // viewport. Scroll the iframe document to the top so the lightbox is visible.
    window.scrollTo(0, -9999);
    // Also notify the parent page to scroll to the top of the iframe
    try {
      if (window.parent !== window) {
        window.parent.scrollTo({ top: window.frameElement.offsetTop, behavior: "smooth" });
      }
    } catch (e) {
      // Cross-origin parent — cannot access, ignore
    }
  }

  function closeLightbox() {
    lightboxResizeObserver?.disconnect();
    lightboxResizeObserver = null;
    lightbox.classList.add("hidden");
    lightboxContent.innerHTML = "";
    document.body.style.overflow = "";
    document.body.style.minHeight = "";

    if (openedIndicatorId) {
      const el = document.querySelector(`[indikator-id-data="${openedIndicatorId}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        try {
          if (window.parent !== window) {
            const rect = el.getBoundingClientRect();
            const scrollY = window.scrollY + rect.top;
            window.parent.scrollTo({
              top: window.frameElement.offsetTop + scrollY,
              behavior: "smooth",
            });
          }
        } catch (e) {
          // Cross-origin parent — ignore
        }
      }
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex = (currentIndex - 1) % window.slides.length;
      updateLightbox();
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % window.slides.length;
    updateLightbox();
  }

  function updateLightbox() {
    if (!window.slides.length) return;
    const slide = window.slides[currentIndex];
    lightboxContent.innerHTML = "";

    // Highcharts slide (object with id + kuerzel)
    if (typeof slide === "object" && slide.id) {
      renderHighchartInModal(slide.id, slide.kuerzel);
    }

    // SVG image slide (string path)
    if (typeof slide === "string" && slide.endsWith(".svg")) {
      const img = document.createElement("img");
      img.src = slide;
      img.className = "max-w-full max-h-[90vh] mx-auto h-auto";
      lightboxContent.appendChild(img);
    }

    // Update dots
    /**Array.from(indicators.children).forEach((dot, i) => {
      dot.classList.toggle("bg-white", i === currentIndex);
      dot.classList.toggle("bg-gray-500", i !== currentIndex);
    });*/

    if (indicators.firstChild) {
      indicators.firstChild.textContent = `${currentIndex + 1} / ${
        window.slides.length
      }`;
    }
  }

  function renderHighchartInModal(id, kuerzel) {
    const templateHtml = document.getElementById(
      "indikator-template-modal-portal"
    ).innerHTML;

    const compiled = _.template(templateHtml);

    const chartMeta = findChartById(indikatoren, id);

    if (!kuerzel) {
      kuerzel = chartMeta
        ? chartMeta.kuerzel
        : findKuerzelById(indikatoren, id);
    }

    const html = compiled({
      id,
      kuerzel,
      lesehilfe: chartMeta?.lesehilfe || "",
      erlaeuterungen: chartMeta?.erlaeuterungen || "",
      kennzahlenset: chartMeta?.kennzahlenset || null,
      renderLink: chartMeta?.renderLink || null,
      externalLinks: chartMeta?.externalLinks || null,
    });

    nextBtn.classList.add("hidden");
    prevBtn.classList.add("hidden");

    lightbox.addEventListener("click", function (e) {
      if (e.target.id === "lightbox-wrapper") {
        closeLightbox();
      }
    });

    lightboxContent.innerHTML = html;

    setTimeout(() => {
      if (typeof getChartOptionsById === "function") {
        const options = getChartOptionsById(id);
        Highcharts.chart(`container-${id}`, options);
      } else if (typeof lazyRenderChartById === "function") {
        lazyRenderChartById(id, undefined, window.view);
      } else {
        console.warn(`No chart render function available for ID: ${id}`);
      }
    }, 50);

    setTimeout(() => {
      nextBtn.classList.remove("hidden");
      prevBtn.classList.remove("hidden");
    }, 70);
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (lightbox.classList.contains("hidden")) return;

    if (e.key === "ArrowRight") {
      nextBtn.click();
    } else if (e.key === "ArrowLeft") {
      prevBtn.click();
    } else if (e.key === "Escape") {
      closeLightbox();
    }
  });

  function waitForElements(selector, callback) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      callback(elements);
    } else {
      setTimeout(() => waitForElements(selector, callback), 100);
    }
  }

  /**waitForElements(".lightbox-trigger", (elements) => {
    console.log(elements);
    slides = [...elements]
      .map((el) => {
        const id = el.dataset.id;
        const kuerzel = el.dataset.kuerzel;
        const src = el.dataset.src;

        if (id && kuerzel) return { id, kuerzel };
        if (src) return src;
        return null;
      })
      .filter(Boolean);

    elements.forEach((item, index) => {
      item.addEventListener("click", () => {
        openLightbox(index);
      });

      if (index === 0) {
        const label = document.createElement("div");
        label.className = "text-sm text-white";
        label.textContent = `1 / ${elements.length}`;
        indicators.appendChild(label);
      } else {
        //const dot = document.createElement("div");
        //dot.className = "w-3 h-3 rounded-full bg-gray-500 cursor-pointer";
        //dot.addEventListener("click", () => openLightbox(index));
        //indicators.appendChild(dot);
      }
    });
  });*/

  window.attachLightboxTriggers = function (fullResult) {
    const indicators = document.getElementById("carousel-indicators");
    const elements = document.querySelectorAll(".lightbox-trigger");
    if (!elements.length) return;

    // Use the directly passed result (all filtered items) when available.
    // This avoids timing issues with window.FJS not being set yet.
    if (fullResult && fullResult.length) {
      window.slides = fullResult.map((item) => ({
        id: item.id,
        kuerzel: item.kuerzel,
      }));
    } else {
      // Fallback: build from rendered DOM elements only
      window.slides = [...elements]
        .map((el) => {
          const id = el.dataset.id;
          const kuerzel = el.dataset.kuerzel;
          const src = el.dataset.src;
          if (id) return { id, kuerzel };
          if (src) return src;
          return null;
        })
        .filter(Boolean);
    }

    elements.forEach((item) => {
      item.addEventListener("click", () => {
        // data-index is the position in the full result (set by getIndexByFid)
        const idx = parseInt(item.dataset.index, 10);
        openLightbox(isNaN(idx) ? 0 : idx);
      });
    });

    // Reset indicators
    if (indicators) {
      indicators.innerHTML = "";
      const label = document.createElement("div");
      label.className = "text-sm";
      label.textContent = `1 / ${window.slides.length}`;
      indicators.appendChild(label);
    }
  };
});
