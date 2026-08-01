const REPO_URL = "https://github.com/eozsahin1993/free-cs-courses";

function relPrefix(depth) {
  return depth === 0 ? "." : Array(depth).fill("..").join("/");
}

function siteHeader(depth) {
  const prefix = relPrefix(depth);
  const brand =
    depth === 0
      ? '<span class="brand">Courses</span>'
      : `<a class="brand" href="${prefix}/index.html">&larr; Courses</a>`;
  return `<header class="site-header">
  ${brand}
  <a class="github-link" href="${REPO_URL}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
</header>`;
}

module.exports = { relPrefix, siteHeader };
