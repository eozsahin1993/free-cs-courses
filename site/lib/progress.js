const { escapeHtml } = require("./markdown");

// Filled in client-side by app.js once a course is enrolled — see computeProgress().
function progressBar() {
  return `<div class="bar"><div class="fill" style="width:0%"></div></div><span class="pct">0/0</span>`;
}

function enrollButton(slug) {
  return `<button class="enroll-btn" data-enroll="${slug}">Enroll to track progress</button>`;
}

function tagList(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="tags">${tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>`;
}

function levelBadge(level) {
  if (!level) return "";
  const cls = level.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `<span class="level level-${cls}">${escapeHtml(level)}</span>`;
}

// One card on the home page: course title + level, its tags, its enroll
// toggle, and a bar that stays hidden (`data-track-for`) until app.js sees
// it's enrolled.
function courseCard(course) {
  return `  <div class="course-card">
    <div class="card-top">
      <div class="course-title-block">
        <a class="course-title" href="${course.slug}/index.html">${escapeHtml(course.name || course.title)}</a>
        ${course.subtitle ? `<div class="course-subtitle">${escapeHtml(course.subtitle)}</div>` : ""}
      </div>
      ${levelBadge(course.level)}
    </div>
    ${tagList(course.tags)}
    ${enrollButton(course.slug)}
    <div class="progress-placeholder is-hidden" data-track-for="${course.slug}" data-progress-for="${course.slug}">
      ${progressBar()}
    </div>
  </div>`;
}

// Groups courses by their front-matter `category` (default "Other"),
// preserving first-seen order within each group, sorted alphabetically by
// category name for a stable, deterministic home page layout.
function groupByCategory(courses) {
  const groups = new Map();
  courses.forEach((c) => {
    const key = c.category || "Other";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(c);
  });
  return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

// One row on a course page: a single week, linked, with its own bar.
function weekRow(week) {
  return `    <div class="progress-row">
      <div class="label"><a href="weeks/${week.slug}.html">${escapeHtml(week.title)}</a></div>
      <div class="progress-placeholder" data-progress-for="${week.page}">
        ${progressBar()}
      </div>
    </div>`;
}

// Home page: one card grid per category, replacing the plain README index
// list (see stripSection() in markdown.js) so the course list only appears once.
function courseListProgress(courses) {
  return groupByCategory(courses)
    .map(([category, group]) => {
      const cards = group.map(courseCard).join("\n");
      return `<section class="course-section">\n<h2>${escapeHtml(category)}</h2>\n<div class="course-grid">\n${cards}\n</div>\n</section>`;
    })
    .join("\n");
}

// Course page: a single enroll toggle gating the whole per-week list.
function weekListProgress(slug, weeksMeta) {
  if (!weeksMeta.length) return "";
  const rows = weeksMeta.map(weekRow).join("\n");
  return `<section class="progress-section">
<h2>Progress</h2>
${enrollButton(slug)}
<div class="progress-weeks is-hidden" data-track-for="${slug}">
${rows}
</div>
</section>`;
}

module.exports = { courseListProgress, weekListProgress };
