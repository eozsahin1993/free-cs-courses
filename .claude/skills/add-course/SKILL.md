---
name: add-course
description: Scaffold a new self-paced course into this repo (weekly syllabus with verified lecture/notes/video/assignment links), matching the structure used by cmu-15445, cmu-15721, mit-6.824, mit-6.033, and stanford-cs231n. Takes a course name and/or a link (course site or video playlist) as an argument. Use whenever the user asks to add, scaffold, or set up a new course here.
---

# Adding a course to this repo

This is the write half of course-tracking in this repo; **`search-course` is the discovery half.**
If the user hasn't already settled on a specific course (they're browsing, comparing options, or
asking "what's out there for X"), that's `search-course`'s job — invoke it instead and come back
here once they pick one.

This repo tracks self-paced grad CS courses: one directory per course, a `README.md` with links
and a weekly table, and `weeks/week-NN.md` files with checklists. No lab/assignment
implementations are ever committed here (see the top-level `README.md`) — only the syllabus
itself.

Do the research and writing yourself; don't ask the user to supply links you can look up — unless
they already gave you one (see §1a).

## 1. Confirm scope with the user first

Before doing any research, get explicit agreement on: which course, and roughly how much of the
research/verification work to do before showing a plan. If the user only asked "look for X
courses" or "which is better," that's exploratory — don't scaffold until they actually say to add
one.

### 1a. If the user supplies a link, seed research from it — don't re-search for what it gives you

The invocation may include a URL instead of (or alongside) a course name/number — a course site,
a syllabus page, or a video playlist. Fetch it first and use it as ground truth for whatever it
actually contains, but don't assume one link satisfies the whole gate in §2:

- **Course site / syllabus link** → gives you the schedule, lecture topics, slides, assignments.
  Still separately search for public video lectures — course sites essentially never host their
  own video archive inline (it's usually gated LMS/Canvas), so a playlist has to be found
  independently even when the syllabus link is solid.
- **Video playlist link** (YouTube playlist/channel) → confirms §2's video requirement is already
  satisfied for at least one offering. Still separately find the official course site for the
  current syllabus structure, slide/notes links, and assignments — a playlist alone doesn't tell
  you the week-by-week schedule or whether homeworks/labs exist.
- **Either way**, treat the supplied link as one data point, not the finish line — still run the
  full gate in §2 and the research pass in §4 for whatever the link didn't cover.

## 2. Gate: the course must have video lectures, and homeworks/labs if it has any

Before scaffolding anything, confirm two things — this is a hard requirement, not a nice-to-have:

1. **Video lectures exist somewhere publicly**, current offering or a past one. If no offering of
   the course was ever recorded and posted publicly (not even an old YouTube playlist), stop and
   tell the user instead of scaffolding a syllabus with no videos — flag it rather than silently
   downgrading to slides-only.
2. **If the course has hands-on work — homeworks, labs, problem sets, projects — those must be
   real and findable**, not just a grading-percentage line in a syllabus PDF. Confirm the actual
   assignment specs/starter code are publicly reachable (a course site page, a GitHub repo, Colab
   notebooks), the way CS231n's notebooks or CMU 10-714's Needle assignments are. A course whose
   assignments are locked behind an LMS with nothing public is a red flag — surface that to the
   user rather than scaffolding around a hole.
3. **Some courses genuinely have no hands-on component** (design/reading-and-writing courses like
   6.033, or lecture-only survey courses) — that's fine and not a reason to reject the course, but
   confirm that's actually the course's real format rather than assuming it because you didn't
   find the assignments page yet.

If either check fails outright (no public video anywhere, or hands-on work exists per the syllabus
but nothing about it is actually public), stop and ask the user whether to proceed anyway before
writing any files — don't scaffold a thin syllabus and present it as done.

## 3. Pick the directory name

`<school-abbrev>-<course-number>`, all lowercase, matching existing examples: `mit-6.824`,
`mit-6.033`, `cmu-15445`, `cmu-15721`, `stanford-cs144`, `stanford-cs231n`. Always include the
school prefix, even if it's the only course from that school in the repo so far — this was
retrofitted once already (`cs144`/`cs231n` → `stanford-cs144`/`stanford-cs231n`) and re-doing that
churn is wasted work.

## 4. Research (WebSearch/WebFetch), before writing anything

Gather, in this order:

1. **Official course site** — current schedule/syllabus page. This is the source of truth for
   lecture ordering, topics, and slide/note links.
2. **Lecture videos.** Check whether the *current* offering's videos are public. They usually
   aren't (enrolled-only via Canvas/Panopto/Box). Find the most recent public offering instead
   (a YouTube playlist, a department channel) and map its lectures to the current syllabus by
   topic, not by number — numbering drifts between years. Where a current-syllabus lecture has no
   video counterpart in the public year (new topic, guest lecture, etc.), say so explicitly in
   that week's file rather than omitting it silently or forcing a mismatch.
3. **Written notes**, if the course has a notes site separate from slides (e.g.
   `cs231n.github.io`, `dlsyscourse.org`). Note where the notes site doesn't cover newer lecture
   topics — link `none` for those rather than leaving it ambiguous.
4. **Assignments/labs/projects** — what kind of work they actually are (code labs, problem sets,
   written critiques/design docs, exams), and self-study accessibility: is there a public
   self-study grading path (like 15-445's Gradescope section), or is it self-checked only (like
   CS231n's notebooks with built-in gradient checks, or 6.033's ungraded written exercises)? This
   determines the "Self-study access" / "Format" section of the README (see §6).
5. **Textbook**, if any — free/OCW-hosted vs. paywalled. Note paywalled books without a link
   rather than linking a pirated copy.

## 5. Verify every link before it goes in a file — never guess a URL pattern

Slide/video URLs often follow a numeric pattern (`lecture_6.pdf`, `lecture_7.pdf`, ...) that looks
safe to extrapolate — it isn't. When scaffolding CS231n, lectures 1–16 followed
`slides/2026/lecture_N.pdf` but 17–18 (guest/closing lectures) 404'd because no slides existed for
them. Check every URL you're about to write, e.g.:

```bash
for u in "${urls[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" -L "$u")
  echo "$code  $u"
done
```

If something 404s, don't paper over it — write `none posted` / `none found` and say why (new
topic, guest lecture, not yet recorded) instead of a dead link.

## 6. Write `<dir>/README.md`

Sections, in order (see `stanford-cs231n/README.md` or `mit-6.033/README.md` for full examples):

- **Links** — course site, notes site (if any), assignments/labs URL, lecture video source with
  an explanation of *why* that particular year/playlist was chosen and where it doesn't line up with
  the current syllabus.
- **Structure** — one line: `weeks/` layout, week count, self-paced/no-calendar-dates note, and
  where to note anything unusual (spring break gaps, missing lecture-to-video mappings, etc.).
  Also state that assignment/lab code, if kept, lives inside the relevant week's file rather than
  a separate top-level directory.
- **Weeks** — a markdown table: `Week | Lectures | Assigned | Due` (or `Lab`/`Assignment`/whatever
  fits the course's own vocabulary), one row per week, linking to `weeks/week-NN.md`.
- **Implementation** (code courses) or **Format** (non-code courses) — where lab/assignment code
  would live (a separate private repo, matching existing courses' policy) — or, for non-code
  courses like 6.033, an explicit explanation that the course has no programming component and
  what the written/design deliverables actually are.
- **Self-study access** — whether there's an official non-enrolled grading path, or the work is
  self-checked only, and how (gradient checks in notebooks, self-grading against readings, etc.).

## 7. Write `<dir>/weeks/week-NN.md`

One file per week, matching the real course's own weekly pacing (not lecture count) with calendar
dates stripped. Checklist format:

```markdown
# Week N

## Lecture N — Title
- [ ] Slides: <url>
- [ ] Video: <url> (<source offering> — same topic | note if no counterpart exists)
- [ ] Notes: <url> | none (<reason>)

## Assigned
- [ ] <assignment/lab/project> (assigned) — <url>

## Due
- [ ] <thing due this week> — <url>
      (or: "(nothing due yet)" / "(nothing due yet — X due week N)")
```

Only include `## Assigned` / `## Due` when something actually happens that week.

## 8. Update the top-level `README.md` index

Add exactly one line under `## Index`, matching the existing format:
`- [<School> <Course> — <Title>](<dir>/README.md)`.

**Check `git status`/`git diff README.md` first.** Other course-scaffolding work may be
in-progress and uncommitted (untracked directories, a pending index edit) — add your line without
touching or reverting anyone else's in-flight changes.

## 9. Commit/push only when explicitly asked, and only your course's files

Stage precisely the new course directory plus the one-line `README.md` index change — not other
untracked directories or unrelated `README.md` hunks that happen to be sitting in the working
tree from other in-progress work.
