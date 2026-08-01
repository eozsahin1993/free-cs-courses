const fs = require("fs");
const path = require("path");

const { readMd, titleFromMarkdown, fixLinks, stripSection, parseFrontMatter } = require("./lib/markdown");
const { extractCheckboxKeys, injectKeys } = require("./lib/checkboxes");
const { layout } = require("./lib/layout");
const { courseListProgress, weekListProgress } = require("./lib/progress");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(__dirname, "docs");
const IGNORE_DIRS = new Set(["site", "node_modules"]);

let marked;

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

// Any top-level directory with a README.md is a course — no registration
// needed, so adding a new course folder is picked up on the next build.
function discoverCourseSlugs() {
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !IGNORE_DIRS.has(d.name) && !d.name.startsWith("."))
    .filter((d) => fs.existsSync(path.join(ROOT, d.name, "README.md")))
    .map((d) => d.name)
    .sort();
}

function buildWeekPage({ slug, courseTitle, weeksDir, weekFiles, idx }) {
  const wf = weekFiles[idx];
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
    title: `${wTitle} · ${courseTitle}`,
    page: pageKey,
    depth: 2,
    content: html + nav,
  });

  return { wSlug, pageKey, wTitle, keys, pageHtml };
}

function buildCourse(slug, siteData) {
  const courseDir = path.join(ROOT, slug);
  const { data: meta, content: readmeMd } = parseFrontMatter(readMd(path.join(courseDir, "README.md")));
  const title = titleFromMarkdown(readmeMd);

  const weeksDir = path.join(courseDir, "weeks");
  const weekFiles = fs.existsSync(weeksDir)
    ? fs.readdirSync(weeksDir).filter((f) => f.endsWith(".md")).sort()
    : [];

  const weeksMeta = weekFiles.map((wf, idx) => {
    const week = buildWeekPage({ slug, courseTitle: title, weeksDir, weekFiles, idx });
    ensureDir(path.join(OUT, slug, "weeks"));
    fs.writeFileSync(path.join(OUT, slug, "weeks", `${week.wSlug}.html`), week.pageHtml);
    siteData[week.pageKey] = { keys: week.keys };
    return { slug: week.wSlug, title: week.wTitle, page: week.pageKey, total: week.keys.length };
  });

  siteData[slug] = { weeks: weeksMeta.map((w) => w.page) };

  const courseHtml = fixLinks(marked.parse(readmeMd));
  const coursePage = layout({
    title,
    page: slug,
    depth: 1,
    content: courseHtml + weekListProgress(slug, weeksMeta),
    siteData,
  });
  ensureDir(path.join(OUT, slug));
  fs.writeFileSync(path.join(OUT, slug, "index.html"), coursePage);

  return { slug, title, weeksMeta, category: meta.category || "Other", level: meta.level || "", tags: meta.tags || [] };
}

function copyAssets() {
  ensureDir(path.join(OUT, "assets"));
  fs.copyFileSync(path.join(__dirname, "assets", "style.css"), path.join(OUT, "assets", "style.css"));
  fs.copyFileSync(path.join(__dirname, "assets", "app.js"), path.join(OUT, "assets", "app.js"));
}

function buildHomePage(courses, siteData) {
  const rootReadme = readMd(path.join(ROOT, "README.md"));
  const homeHtml = stripSection(fixLinks(marked.parse(rootReadme)), "Index");
  const homePage = layout({
    title: "Courses",
    page: "",
    depth: 0,
    content: homeHtml + courseListProgress(courses),
    siteData,
  });
  fs.writeFileSync(path.join(OUT, "index.html"), homePage);
}

function build() {
  fs.rmSync(OUT, { recursive: true, force: true });
  copyAssets();

  const siteData = {};
  const courses = discoverCourseSlugs().map((slug) => buildCourse(slug, siteData));
  buildHomePage(courses, siteData);

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
