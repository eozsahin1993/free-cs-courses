const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(__dirname, "docs");
const IGNORE_DIRS = new Set(["site", "node_modules"]);

let marked;

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

function fixLinks(html) {
  return html.replace(/href="([^"]+)"/g, (full, href) => {
    if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith("#") || href.startsWith("mailto:")) return full;
    const out = href.replace(/README\.md(#.*)?$/i, "index.html$1").replace(/\.md(#.*)?$/i, ".html$1");
    return `href="${out}"`;
  });
}

function slugify(s) {
  return (
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "item"
  );
}

// Derives a stable per-item key ("<heading-slug>--<label-slug>") from the raw
// markdown so that inserting/reordering checklist items doesn't shift anyone
// else's checked state (unlike a plain positional index).
function extractCheckboxKeys(md) {
  const lines = md.split("\n");
  let heading = "";
  const seen = new Set();
  const keys = [];
  for (const line of lines) {
    const h = line.match(/^#{2,3}\s+(.+)$/);
    if (h) {
      heading = slugify(h[1]);
      continue;
    }
    const cb = line.match(/^\s*-\s*\[[ xX]\]\s*(.+)$/);
    if (cb) {
      const label = cb[1].split(/:(?!\/\/)/)[0].trim();
      const base = `${heading}--${slugify(label)}`;
      let key = base;
      let n = 2;
      while (seen.has(key)) key = `${base}-${n++}`;
      seen.add(key);
      keys.push(key);
    }
  }
  return keys;
}

// Stamps each rendered checkbox <input> with data-key, in document order,
// matching the order extractCheckboxKeys() derived from the source markdown.
function injectKeys(html, keys) {
  let i = 0;
  return html.replace(/<input([^>]*)type="checkbox"([^>]*)>/g, (m, a, b) => {
    const key = keys[i] !== undefined ? keys[i] : `item-${i}`;
    i++;
    return `<input${a}type="checkbox"${b} data-key="${key}">`;
  });
}

function relPrefix(depth) {
  return depth === 0 ? "." : Array(depth).fill("..").join("/");
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function layout({ title, page, depth, content, siteData }) {
  const prefix = relPrefix(depth);
  const dataScript = siteData ? `<script>window.SITE_DATA = ${JSON.stringify(siteData)};</script>` : "";
  const backLink = depth === 0 ? "<span>Courses</span>" : `<a href="${prefix}/index.html">&larr; Courses</a>`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="${prefix}/assets/style.css">
${dataScript}
</head>
<body data-page="${page}">
<header class="site-header">${backLink}</header>
<main>
${content}
</main>
<footer class="site-footer">Generated from markdown in this repo. Checkbox progress is tracked locally in your browser (localStorage).</footer>
<script src="${prefix}/assets/app.js" defer></script>
</body>
</html>
`;
}

// Home page: one row per course. Enrollment (and therefore the progress bar)
// is a client-side/local concept, so both the button and the bar are always
// emitted — app.js decides which is visible based on localStorage.
function courseListProgress(courses) {
  const rows = courses
    .map(
      (c) => `  <div class="progress-row">
    <div class="label"><a href="${c.slug}/index.html">${escapeHtml(c.title)}</a></div>
    <button class="enroll-btn" data-enroll="${c.slug}">Enroll to track progress</button>
    <div class="progress-placeholder is-hidden" data-track-for="${c.slug}" data-progress-for="${c.slug}">
      <div class="bar"><div class="fill" style="width:0%"></div></div><span class="pct">0/0</span>
    </div>
  </div>`
    )
    .join("\n");
  return `<section class="progress-section">\n<h2>Progress</h2>\n${rows}\n</section>`;
}

// Course page: a single enroll toggle for the whole course, gating a
// per-week progress list.
function weekListProgress(slug, weeksMeta) {
  if (!weeksMeta.length) return "";
  const rows = weeksMeta
    .map(
      (w) => `    <div class="progress-row">
      <div class="label"><a href="weeks/${w.slug}.html">${escapeHtml(w.title)}</a></div>
      <div class="progress-placeholder" data-progress-for="${w.page}">
        <div class="bar"><div class="fill" style="width:0%"></div></div><span class="pct">0/0</span>
      </div>
    </div>`
    )
    .join("\n");
  return `<section class="progress-section">
<h2>Progress</h2>
<button class="enroll-btn" data-enroll="${slug}">Enroll to track progress</button>
<div class="progress-weeks is-hidden" data-track-for="${slug}">
${rows}
</div>
</section>`;
}

function build() {
  fs.rmSync(OUT, { recursive: true, force: true });
  ensureDir(path.join(OUT, "assets"));
  fs.copyFileSync(path.join(__dirname, "assets", "style.css"), path.join(OUT, "assets", "style.css"));
  fs.copyFileSync(path.join(__dirname, "assets", "app.js"), path.join(OUT, "assets", "app.js"));

  const courseDirs = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !IGNORE_DIRS.has(d.name) && !d.name.startsWith("."))
    .filter((d) => fs.existsSync(path.join(ROOT, d.name, "README.md")))
    .map((d) => d.name)
    .sort();

  const siteData = {};
  const courses = [];

  for (const slug of courseDirs) {
    const courseDir = path.join(ROOT, slug);
    const readmeMd = readMd(path.join(courseDir, "README.md"));
    const title = titleFromMarkdown(readmeMd);

    const weeksDir = path.join(courseDir, "weeks");
    const weekFiles = fs.existsSync(weeksDir)
      ? fs.readdirSync(weeksDir).filter((f) => f.endsWith(".md")).sort()
      : [];

    const weeksMeta = [];

    weekFiles.forEach((wf, idx) => {
      const wMd = readMd(path.join(weeksDir, wf));
      const wTitle = titleFromMarkdown(wMd);
      const wSlug = wf.replace(/\.md$/, "");
      const pageKey = `${slug}/weeks/${wSlug}`;
      const keys = extractCheckboxKeys(wMd);

      let html = fixLinks(marked.parse(wMd));
      html = injectKeys(html, keys);
      html = html.replace(/(<h1[^>]*>[\s\S]*?<\/h1>)/, `$1\n<div class="self-progress" data-progress-self></div>`);

      const prev = idx > 0 ? weekFiles[idx - 1].replace(/\.md$/, ".html") : null;
      const next = idx < weekFiles.length - 1 ? weekFiles[idx + 1].replace(/\.md$/, ".html") : null;
      const nav = `<nav class="week-nav">${prev ? `<a href="${prev}">&larr; Previous</a> ` : ""}<a href="../index.html">Course</a>${next ? ` <a href="${next}">Next &rarr;</a>` : ""}</nav>`;

      const pageHtml = layout({
        title: `${wTitle} · ${title}`,
        page: pageKey,
        depth: 2,
        content: html + nav,
      });

      ensureDir(path.join(OUT, slug, "weeks"));
      fs.writeFileSync(path.join(OUT, slug, "weeks", `${wSlug}.html`), pageHtml);

      siteData[pageKey] = { keys };
      weeksMeta.push({ slug: wSlug, title: wTitle, page: pageKey, total: keys.length });
    });

    siteData[slug] = { weeks: weeksMeta.map((w) => w.page) };
    courses.push({ slug, title, weeksMeta });

    const courseHtml = fixLinks(marked.parse(readmeMd));
    const progress = weekListProgress(slug, weeksMeta);

    const coursePage = layout({
      title,
      page: slug,
      depth: 1,
      content: courseHtml + progress,
      siteData,
    });
    ensureDir(path.join(OUT, slug));
    fs.writeFileSync(path.join(OUT, slug, "index.html"), coursePage);
  }

  const rootReadme = readMd(path.join(ROOT, "README.md"));
  const homeHtml = fixLinks(marked.parse(rootReadme));
  const homeProgress = courseListProgress(courses);
  const homePage = layout({
    title: "Courses",
    page: "",
    depth: 0,
    content: homeHtml + homeProgress,
    siteData,
  });
  fs.writeFileSync(path.join(OUT, "index.html"), homePage);

  const weekCount = Object.values(siteData).filter((v) => v.keys !== undefined).length;
  console.log(`Built ${courses.length} courses, ${weekCount} weeks -> ${path.relative(ROOT, OUT)}/`);
}

async function main() {
  ({ marked } = await import("marked"));
  marked.use({ gfm: true });

  build();

  if (process.argv.includes("--watch")) {
    console.log("Watching for markdown changes (Ctrl+C to stop)...");
    fs.watch(ROOT, { recursive: true }, (event, filename) => {
      if (!filename) return;
      if (filename.startsWith("docs" + path.sep) || filename.includes("node_modules")) return;
      if (!filename.endsWith(".md") && !filename.startsWith("site" + path.sep + "assets")) return;
      try {
        build();
      } catch (e) {
        console.error(e);
      }
    });
  }
}

main();
