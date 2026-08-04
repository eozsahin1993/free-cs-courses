(function () {
  var PREFIX = "courses-progress:";
  var ENROLL_PREFIX = "courses-progress:enrolled:";
  var page = document.body.getAttribute("data-page") || "";

  function keyFor(pagePath, itemKey) {
    return PREFIX + pagePath + "#" + itemKey;
  }
  function isChecked(pagePath, itemKey) {
    return localStorage.getItem(keyFor(pagePath, itemKey)) === "1";
  }
  function countChecked(pagePath, keys) {
    var n = 0;
    keys.forEach(function (k) {
      if (isChecked(pagePath, k)) n++;
    });
    return n;
  }
  function renderBar(el, done, total) {
    var pct = total ? Math.round((done / total) * 100) : 0;
    el.innerHTML =
      '<div class="bar"><div class="fill" style="width:' + pct + '%"></div></div>' +
      '<span class="pct">' + done + "/" + total + "</span>";
  }

  function isEnrolled(slug) {
    return localStorage.getItem(ENROLL_PREFIX + slug) === "1";
  }
  function setEnrolled(slug, val) {
    localStorage.setItem(ENROLL_PREFIX + slug, val ? "1" : "0");
  }

  // --- Week pages: wire up real, content-keyed checkboxes ---
  var boxes = document.querySelectorAll("main input[type=checkbox][data-key]");
  if (boxes.length) {
    boxes.forEach(function (box) {
      var k = box.getAttribute("data-key");
      box.disabled = false;
      box.checked = isChecked(page, k);
      box.addEventListener("change", function () {
        localStorage.setItem(keyFor(page, k), box.checked ? "1" : "0");
        updateSelf();
      });
    });
  }

  function updateSelf() {
    var bar = document.querySelector("[data-progress-self]");
    if (!bar) return;
    var done = document.querySelectorAll("main input[type=checkbox]:checked").length;
    renderBar(bar, done, boxes.length);
  }
  if (boxes.length) updateSelf();

  // --- Aggregate progress from SITE_DATA (course/home pages) ---
  function computeProgress(root) {
    var els = root.matches("[data-progress-for]")
      ? [root]
      : root.querySelectorAll("[data-progress-for]");
    els.forEach(function (el) {
      var entry = window.SITE_DATA[el.getAttribute("data-progress-for")];
      if (!entry) return;
      var done = 0, total = 0;
      if (entry.weeks) {
        entry.weeks.forEach(function (weekPage) {
          var w = window.SITE_DATA[weekPage];
          if (!w) return;
          total += w.keys.length;
          done += countChecked(weekPage, w.keys);
        });
      } else {
        total = entry.keys.length;
        done = countChecked(el.getAttribute("data-progress-for"), entry.keys);
      }
      renderBar(el, done, total);
    });
  }

  // --- Home page: pin enrolled courses into a "Continue Learning" section up
  // top. Moves each card's actual DOM node (not a clone) so its already-wired
  // enroll button and progress bar keep working; un-enrolling moves it back
  // to its original category grid.
  var clSection = document.querySelector("[data-continue-learning-section]");
  var clGrid = clSection && clSection.querySelector("[data-continue-learning-grid]");
  var homeCards = [];
  if (clSection) {
    document.querySelectorAll(".course-grid:not([data-continue-learning-grid]) .course-card").forEach(function (card) {
      var enrollBtn = card.querySelector("[data-enroll]");
      if (enrollBtn) homeCards.push({ slug: enrollBtn.getAttribute("data-enroll"), card: card, home: card.parentNode });
    });
  }
  function refreshContinueLearning() {
    if (!clSection) return;
    var any = false;
    homeCards.forEach(function (entry) {
      if (isEnrolled(entry.slug)) {
        clGrid.appendChild(entry.card);
        any = true;
      } else {
        entry.home.appendChild(entry.card);
      }
    });
    clSection.classList.toggle("is-hidden", !any);
  }
  refreshContinueLearning();

  // --- Enrollment toggles: gate whether progress is shown at all ---
  document.querySelectorAll("[data-enroll]").forEach(function (btn) {
    var slug = btn.getAttribute("data-enroll");
    var track = document.querySelector('[data-track-for="' + slug + '"]');

    function refresh() {
      var enrolled = isEnrolled(slug);
      btn.textContent = enrolled ? "Enrolled — pause tracking" : "Enroll to track progress";
      btn.classList.toggle("is-enrolled", enrolled);
      if (track) {
        track.classList.toggle("is-hidden", !enrolled);
        if (enrolled) computeProgress(track);
      }
    }

    btn.addEventListener("click", function () {
      setEnrolled(slug, !isEnrolled(slug));
      refresh();
      refreshContinueLearning();
    });

    refresh();
  });
})();
