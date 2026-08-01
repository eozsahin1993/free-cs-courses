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

module.exports = { extractCheckboxKeys, injectKeys };
