(function () {
  const GRAPH_SELECTOR = ".markdown-body .mermaid[data-mermaid-source]";
  const FALLBACK_THEME = {
    bgColor: "#ffffff",
    primaryColor: "#f6f8fa",
    primaryBorderColor: "#d0d7de",
    primaryTextColor: "#24292f",
    secondaryColor: "#f6f8fa",
    secondaryBorderColor: "#d0d7de",
    secondaryTextColor: "#24292f",
    tertiaryColor: "#ffffff",
    tertiaryBorderColor: "#d0d7de",
    tertiaryTextColor: "#24292f",
    lineColor: "#57606a",
    textColor: "#24292f",
    edgeLabelBackground: "#ffffff",
    actorBorder: "#d0d7de",
    actorBkg: "#f6f8fa",
    actorTextColor: "#24292f",
    noteBkgColor: "#fff8c5",
    noteTextColor: "#24292f",
    noteBorderColor: "#d0d7de",
    activationBorderColor: "#57606a",
    activationBkgColor: "#f6f8fa",
    signalColor: "#57606a",
    signalTextColor: "#24292f",
    labelBoxBkgColor: "#f6f8fa",
    labelBoxBorderColor: "#d0d7de",
    labelTextColor: "#24292f",
    classText: "#24292f",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif",
  };

  function getMermaidTheme() {
    const mode = document.documentElement.getAttribute("data-color-mode");
    return mode === "dark" ? "dark" : "base";
  }

  function cssVar(name, fallback) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  }

  function getThemeVariables() {
    const isDark = getMermaidTheme() === "dark";

    if (isDark) {
      const darkText = cssVar("--fgColor-default", "#e6edf3");
      const darkBg = cssVar("--bgColor-default", "#0d1117");
      const darkMuted = cssVar("--bgColor-muted", "#161b22");
      const darkBorder = cssVar("--borderColor-default", "#30363d");
      return {
        ...FALLBACK_THEME,
        bgColor: darkBg,
        primaryColor: darkMuted,
        primaryBorderColor: cssVar("--borderColor-muted", "#30363d"),
        primaryTextColor: darkText,
        secondaryColor: darkMuted,
        secondaryBorderColor: cssVar("--borderColor-muted", "#30363d"),
        secondaryTextColor: darkText,
        tertiaryColor: darkBg,
        tertiaryBorderColor: darkBorder,
        tertiaryTextColor: darkText,
        lineColor: cssVar("--fgColor-muted", "#8b949e"),
        textColor: darkText,
        edgeLabelBackground: darkMuted,
        actorBorder: darkBorder,
        actorBkg: darkMuted,
        actorTextColor: darkText,
        noteBkgColor: cssVar("--bgColor-accent-muted", "#1f2a3a"),
        noteTextColor: darkText,
        noteBorderColor: darkBorder,
        activationBorderColor: cssVar("--fgColor-muted", "#8b949e"),
        activationBkgColor: darkMuted,
        signalColor: cssVar("--fgColor-muted", "#8b949e"),
        signalTextColor: darkText,
        labelBoxBkgColor: darkMuted,
        labelBoxBorderColor: darkBorder,
        labelTextColor: darkText,
        classText: darkText,
        sectionBkgColor: darkMuted,
        sectionBkgColor2: darkBg,
        sectionTextColor: darkText,
        taskBorderColor: darkBorder,
        taskBkgColor: "#1f6feb",
        taskTextColor: "#0d1117",
        activeTaskBkgColor: "#3fb950",
        activeTaskBorderColor: "#3fb950",
        doneTaskBkgColor: "#a371f7",
        doneTaskBorderColor: darkBorder,
        critBorderColor: "#ff7b72",
        critBkgColor: "#ff7b72",
        todayLineColor: "#ffa657",
        gridColor: darkBorder,
        pie1: "#1f6feb",
        pie2: "#39d0d8",
        pie3: "#3fb950",
        pie4: "#d4a72c",
        pie5: "#ff7b72",
        pie6: "#ffa657",
        pie7: "#a371f7",
        pie8: "#79c0ff",
        pieTitleTextColor: "#e6edf3",
        pieSectionTextColor: "#e6edf3",
        pieLegendTextColor: "#e6edf3",
        pieStrokeColor: darkBg,
        pieStrokeWidth: "2px",
        pieOuterStrokeColor: darkBorder,
        pieOuterStrokeWidth: "1px",
      };
    }

    const lightBg = cssVar("--bgColor-default", "#ffffff");
    const lightMuted = cssVar("--bgColor-muted", "#f6f8fa");
    const lightBorder = cssVar("--borderColor-default", "#d0d7de");
    const lightText = cssVar("--fgColor-default", "#24292f");
    return {
      ...FALLBACK_THEME,
      bgColor: lightBg,
      primaryColor: lightMuted,
      primaryBorderColor: lightBorder,
      primaryTextColor: lightText,
      secondaryColor: lightMuted,
      secondaryBorderColor: lightBorder,
      secondaryTextColor: lightText,
      tertiaryColor: lightBg,
      tertiaryBorderColor: lightBorder,
      tertiaryTextColor: lightText,
      lineColor: cssVar("--fgColor-muted", "#57606a"),
      textColor: lightText,
      edgeLabelBackground: lightBg,
      actorBorder: lightBorder,
      actorBkg: lightMuted,
      actorTextColor: lightText,
      noteBkgColor: "#fff8c5",
      noteTextColor: lightText,
      noteBorderColor: lightBorder,
      activationBorderColor: cssVar("--fgColor-muted", "#57606a"),
      activationBkgColor: lightMuted,
      signalColor: cssVar("--fgColor-muted", "#57606a"),
      signalTextColor: lightText,
      labelBoxBkgColor: lightMuted,
      labelBoxBorderColor: lightBorder,
      labelTextColor: lightText,
      classText: lightText,
      sectionBkgColor: lightMuted,
      sectionBkgColor2: lightBg,
      sectionTextColor: lightText,
      taskBorderColor: lightBorder,
      taskBkgColor: "#218bff",
      taskTextColor: "#ffffff",
      activeTaskBkgColor: "#2da44e",
      activeTaskBorderColor: "#2da44e",
      doneTaskBkgColor: "#8957e5",
      doneTaskBorderColor: lightBorder,
      critBorderColor: "#cf222e",
      critBkgColor: "#cf222e",
      todayLineColor: "#bc4c00",
      gridColor: lightBorder,
      pie1: "#218bff",
      pie2: "#2da44e",
      pie3: "#8957e5",
      pie4: "#bf8700",
      pie5: "#cf222e",
      pie6: "#bc4c00",
      pie7: "#a475f9",
      pie8: "#218bff",
      pieTitleTextColor: lightText,
      pieSectionTextColor: lightText,
      pieLegendTextColor: lightText,
      pieStrokeColor: lightBg,
      pieStrokeWidth: "2px",
      pieOuterStrokeColor: lightBorder,
      pieOuterStrokeWidth: "1px",
    };
  }

  function convertCodeBlocks() {
    const blocks = document.querySelectorAll(".markdown-body .mermaid-codeblock code");

    blocks.forEach((code) => {
      const source = code.textContent || "";
      const target = code.closest(".mermaid-codeblock");
      if (!target) return;

      const graph = document.createElement("div");
      graph.className = "mermaid";
      graph.setAttribute("data-mermaid-source", source);
      graph.textContent = source;
      target.replaceWith(graph);
    });
  }

  async function renderDiagrams() {
    if (!window.mermaid) return;

    window.mermaid.initialize({
      startOnLoad: false,
      theme: getMermaidTheme(),
      securityLevel: "loose",
      themeVariables: getThemeVariables(),
      gantt: {
        leftPadding: 220,
        rightPadding: 30,
        topPadding: 40,
        barHeight: 22,
        barGap: 8,
        fontSize: 13,
      },
    });

    const graphs = document.querySelectorAll(GRAPH_SELECTOR);
    graphs.forEach((graph) => {
      const source = graph.getAttribute("data-mermaid-source") || "";
      graph.textContent = source;
      graph.removeAttribute("data-processed");
    });

    try {
      await window.mermaid.run({ querySelector: GRAPH_SELECTOR });
    } catch (error) {
      console.warn("Mermaid render failed:", error);
    }
  }

  function observeThemeChange() {
    const observer = new MutationObserver((mutations) => {
      const modeChanged = mutations.some(
        (mutation) =>
          mutation.type === "attributes" && mutation.attributeName === "data-color-mode",
      );

      if (modeChanged) {
        renderDiagrams();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-color-mode"],
    });
  }

  async function init() {
    convertCodeBlocks();
    await renderDiagrams();
    observeThemeChange();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
