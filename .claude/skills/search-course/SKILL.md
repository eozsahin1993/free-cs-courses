---
name: search-course
description: Discover and compare candidate self-paced courses for a topic/constraint the user gives (e.g. "AI/ML courses", "algorithms courses", "something with more labs"), read-only — no files written. Ranks candidates by whether they have public video lectures, real assignments/labs, and a solid weekly syllabus, and notes reputation/rigor to help pick between them. Use whenever the user wants course options, is browsing, or asks "what's out there for X" — hand off to add-course only once they pick one.
---

# Searching for a course to potentially add

This is the discovery half of course-tracking in this repo; **`add-course` is the write half.**
This skill never creates or edits files — it researches and presents options, then waits for the
user to pick one before anything gets scaffolded (that's `add-course`'s job, invoke it
separately once they do).

## 1. Clarify the ask only if it's actually ambiguous

Common asks: a subject area ("AI/ML courses"), a hard constraint ("must have real labs, not just
problem sets"), a comparison ("which of these is more rigorous/recognized"), or "surprise me."
Don't over-ask — if the request is clear enough to search on, just search; only use
`AskUserQuestion` for a genuine fork (e.g. "intro-level or grad-level?") that would send the
search in a materially different direction.

## 2. Search for candidates (WebSearch)

Cast a net sized to the ask — a few strong candidates for a narrow ask, wider for "what's out
there." Prefer well-known university courses with a track record (the kind that show up
repeatedly across "best free X courses" roundups and awesome-lists) over obscure ones; this repo
consistently favors rigor and recognition over novelty (see prior picks: CS231n over less-known
alternatives, specifically for its outsized influence/recognition in the field).

## 3. Rank each candidate on three things — don't just assume from a syllabus PDF

These three are the actual priority order for this repo, not optional flags. A candidate strong
on reputation but weak here should rank *below* a less-famous one that's solid on all three:

1. **Public video lectures exist** (current offering or a past one) — verify, don't assume from
   the course having a YouTube channel; check that lectures are actually there and not gated.
2. **Real, publicly-reachable assignments/labs exist** — not a "35% homework" line in a grading
   rubric, but actual assignment specs, starter code, or notebooks a self-study learner can open
   today. A course whose hands-on work is locked behind an LMS with nothing public should rank
   below one whose materials are fully open, even if the locked one is the more prestigious name.
3. **A solid, followable weekly syllabus exists** — a real week-by-week (or lecture-by-lecture
   with clear dates/ordering) schedule, not just a loose topic list or a self-paced book with no
   session breakdown. This matters concretely: it's what `add-course` maps into
   `weeks/week-NN.md` files, so a course without one is real extra work (or guesswork) to
   scaffold later. Note whether the schedule reads as stable/recurring across years (safe to
   follow) or reshuffled every offering (harder to pin a syllabus to).

A course can still be worth mentioning if it's missing one of these (e.g. no hands-on component
at all is a legitimate format, see below) — but say so plainly and rank it accordingly, don't let
it read as equivalent to a candidate that clears all three.

- **If the course has no hands-on component at all**, that's a legitimate format
  (design/reading courses, survey courses), not automatically a mark against it — but it should
  be visible in the comparison, not discovered later during `add-course`.

This is the same gate `add-course` enforces before scaffolding — ranking on it here means
`add-course` won't hit a surprise when the user picks one.

## 4. Present a comparison, not a report

Short, scannable, one entry per candidate, best-ranked first:

```
**<Course>** (<school>)
- <one line: what it's known for / why it fits the ask>
- Video: <✅ full public recordings | ⚠️ partial/old year only | ❌ none public>
- Hands-on: <✅ real public assignments — one line what they build | — no hands-on component>
- Syllabus: <✅ stable weekly schedule, easy to map | ⚠️ exists but loose/irregular | ❌ no clear week-by-week structure>
- <optional: recognition/rigor note if it's a deciding factor for the comparison>
```

Keep it to 2-4 sentences of framing plus the list — this mirrors how the CS231n/CS285/10-714 and
CS231n-recognition comparisons were presented: recommendation-with-tradeoffs, not an exhaustive
survey. End by asking which one (if any) to hand off to `add-course`.

## 5. Never scaffold from here

Even if the user's answer sounds like a decision ("yeah let's do CS231n"), that's the cue to
invoke `add-course` next — not to start writing `README.md`/`weeks/*.md` inside this skill.
