const fs = require("fs");

function readMd(p) {
  return fs.readFileSync(p, "utf8");
}

function titleFromMarkdown(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : "Untitled";
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Rewrites relative .md links to the .html files build.js generates
// (README.md -> index.html, weeks/week-01.md -> weeks/week-01.html).
function fixLinks(html) {
  return html.replace(/href="([^"]+)"/g, (full, href) => {
    if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith("#") || href.startsWith("mailto:")) return full;
    const out = href.replace(/README\.md(#.*)?$/i, "index.html$1").replace(/\.md(#.*)?$/i, ".html$1");
    return `href="${out}"`;
  });
}

// Parses a leading front-matter block ("---\nkey: value\n---") off a markdown
// file, Jekyll-style — enough scalar/flat-list parsing for category/tags, no
// nested YAML. Returns the parsed data plus the remaining markdown with the
// block stripped, so front matter never ends up rendered in the page body.
function parseFrontMatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, content: md };
  const data = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }
    data[kv[1]] = value;
  }
  return { data, content: md.slice(m[0].length) };
}

// Drops a rendered <h2>heading</h2> section (up through the next <h2> or end
// of document) — used to remove the home page's plain "Index" list once it's
// replaced by a richer, generated course grid.
function stripSection(html, heading) {
  const re = new RegExp(`<h2>${heading}</h2>[\\s\\S]*?(?=<h2>|$)`, "i");
  return html.replace(re, "");
}

module.exports = { readMd, titleFromMarkdown, escapeHtml, fixLinks, stripSection, parseFrontMatter };
