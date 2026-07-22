import { readFileSync } from "fs";
import { codeToHtml } from "shiki";
import { paperLight, paperDark } from "./paper-theme.mjs";

// Usage: node highlight.mjs <file> <language>
// Example: node highlight.mjs snippet.js javascript

const [, , filePath, lang] = process.argv;

if (!filePath || !lang) {
  console.error("Usage: node highlight.mjs <file> <language>");
  process.exit(1);
}

const code = readFileSync(filePath, "utf-8");

const html = await codeToHtml(code, {
  lang,
  themes: {
    light: paperLight,
    dark: paperDark,
  },
});

console.log(html);
