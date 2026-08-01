const { escapeHtml } = require("./markdown");
const { relPrefix, siteHeader } = require("./header");
const { siteFooter } = require("./footer");

function layout({ title, page, depth, content, siteData }) {
  const prefix = relPrefix(depth);
  const dataScript = siteData ? `<script>window.SITE_DATA = ${JSON.stringify(siteData)};</script>` : "";
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
${siteHeader(depth)}
<main>
${content}
</main>
${siteFooter()}
<script src="${prefix}/assets/app.js" defer></script>
</body>
</html>
`;
}

module.exports = { layout };
