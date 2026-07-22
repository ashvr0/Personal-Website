// Custom Shiki themes tuned to the site's CSS variables
// Light: --bg #faf8f4, --text #3a3530, --accent #6b4f3a
// Dark: a warm charcoal companion so it still reads as "the same site"

export const paperLight = {
  name: "paper-light",
  type: "light",
  colors: {
    "editor.background": "#fdfcf9",
    "editor.foreground": "#3a3530",
  },
  settings: [
    { scope: ["comment"], settings: { foreground: "#a29d90", fontStyle: "italic" } },
    { scope: ["keyword", "storage.type", "keyword.control"], settings: { foreground: "#9a3412" } },
    { scope: ["string"], settings: { foreground: "#6d7030" } },
    { scope: ["constant.numeric", "constant.language"], settings: { foreground: "#6b4f3a" } },
    { scope: ["entity.name.function", "support.function"], settings: { foreground: "#6f4a0e" } },
    { scope: ["variable", "variable.other"], settings: { foreground: "#57534e" } },
    { scope: ["variable.parameter", "entity.name.tag"], settings: { foreground: "#8a3e1d" } },
    { scope: ["punctuation", "meta.brace"], settings: { foreground: "#78716c" } },
  ],
};

export const paperDark = {
  name: "paper-dark",
  type: "dark",
  colors: {
    "editor.background": "#1d1915",
    "editor.foreground": "#d6d3d1",
  },
  settings: [
    { scope: ["comment"], settings: { foreground: "#78716c", fontStyle: "italic" } },
    { scope: ["keyword", "storage.type", "keyword.control"], settings: { foreground: "#fdba74" } },
    { scope: ["string"], settings: { foreground: "#b3bd6d" } },
    { scope: ["constant.numeric", "constant.language"], settings: { foreground: "#d8c3a5" } },
    { scope: ["entity.name.function", "support.function"], settings: { foreground: "#f2e2ba" } },
    { scope: ["variable", "variable.other"], settings: { foreground: "#d6d3d1" } },
    { scope: ["variable.parameter", "entity.name.tag"], settings: { foreground: "#dfa088" } },
    { scope: ["punctuation", "meta.brace"], settings: { foreground: "#a8a29e" } },
  ],
};
