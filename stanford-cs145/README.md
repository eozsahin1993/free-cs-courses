---
university: Stanford
code: CS145
category: Databases
level: Intro
tags: [sql, application-development]
---
# Stanford CS145 — Introduction to Databases (Jennifer Widom MOOC)

CS145 is Stanford's on-campus database course number; this repo entry is specifically the archived
2011 Jennifer Widom MOOC ("Introduction to Databases"), which was explicitly built on "the allied
CS145 Introduction to Databases course at Stanford." It is not the same offering as the current
on-campus CS145 ("Data Management and Data Systems") — that one has newer (2017+) public
assignments/projects on GitHub but no public video lectures for any offering, which is why this
older, fully-video MOOC version is what's scaffolded here instead. If a future on-campus CS145
offering gets public video, it could reasonably live in this same directory as an update, or get
its own entry if the two diverge enough to be worth tracking separately.

## Links

- Video (all 54 lectures, verified individually): YouTube playlist
  https://www.youtube.com/playlist?list=PLroEs25KGvwzmvIxYHRhoGTz9w8LeXek0 — an uploader mirror
  (channel "xiaoyupan") of the original 2011/2012 recordings, filenames match the official
  db-class.org module numbering exactly (`01-01-introduction.mp4` … `17-02-nosql-overview.mp4`),
  so this is the complete original lecture set, not a partial re-recording. `db-class.org` itself
  is now dead (the domain no longer resolves) — this playlist and the GitHub mirror below are the
  live sources. The playlist also includes bonus, non-syllabus items not covered in `weeks/*.md`:
  Midterm Exam Solutions, Final Exam Review, and two Office Hours recordings.
- Official course (for the interactive/auto-graded version): Stanford's original MOOC is now
  offered as free, self-paced edX mini-courses — audit enrollment is free (an edX account, no
  payment). Each has in-video quizzes, standalone quizzes, and interactive auto-graded SQL/XML
  exercises: Databases: Relational Databases and SQL
  (https://www.edx.org/learn/computer-programming/stanford-university-databases-5-sql),
  Databases: Introduction to Relational Databases
  (https://www.edx.org/learn/computer-programming/stanford-university-databases-1-introduction-to-relational-databases),
  Databases: Modeling and Theory
  (https://www.edx.org/learn/databases/stanford-university-databases-modeling-and-theory),
  Databases: Semistructured Data
  (https://www.edx.org/learn/relational-databases/stanford-university-databases-semistructured-data),
  Databases: OLAP and Recursion
  (https://www.edx.org/learn/databases/stanford-university-databases-olap-and-recursion). A sixth,
  "Advanced Topics in SQL" (indexes, transactions, constraints, triggers, views, authorization),
  exists in the same series but its edX URL wasn't independently verified — search "Stanford
  Advanced Topics in SQL edX" if you want it specifically.
- Exercises/quizzes without an account: https://github.com/andylamp/stanford_dbclass — an
  MIT-licensed, per-module mirror of the same exercises and quizzes (question text, datasets, and
  worked solutions as Markdown/PDF), reorganized to match the mini-course structure. Covers most
  but not all modules (see the Weeks table below and each `weeks/*.md` for exactly what exists per
  week). A second repo, https://github.com/max-alletsee/stanford-lagunita-sql, independently
  mirrors just the SQL module's 6 exercise sets with setup instructions for SQLite/MySQL/Postgres
  — useful if you want a from-scratch local practice environment.
- No assigned textbook — the course is entirely video + slides + exercises.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-11.md`). This course was never a
  single semester with a real weekly calendar — it's simply the original 17 numbered lecture
  modules (54 videos total), which this repo groups into 11 weeks by topic and rough size (the
  largest module, SQL, gets a full week to itself at 9 lectures; several small modules share a
  week). Order matches the original module numbering throughout — nothing was reordered.

## Weeks

| Week | Modules | Video lectures | Exercises/quiz available (no account) |
|---|---|---|---|
| [1](weeks/week-01.md) | Introduction, Relational Model | 3 | none found |
| [2](weeks/week-02.md) | XML, JSON | 5 | XML only (quiz + 3 exercises) |
| [3](weeks/week-03.md) | Relational Algebra | 2 | yes (exercises + quiz) |
| [4](weeks/week-04.md) | SQL | 9 | yes (6 exercise sets) |
| [5](weeks/week-05.md) | Relational Design Theory | 5 | yes (3 quizzes: functional deps, multivalued deps, normalization) |
| [6](weeks/week-06.md) | XPath, XQuery, XSLT | 5 | yes (8 exercises total) |
| [7](weeks/week-07.md) | UML, Indexes | 3 | UML only (quiz) |
| [8](weeks/week-08.md) | Constraints and Triggers | 6 | yes (exercises + quiz) |
| [9](weeks/week-09.md) | Transactions | 3 | none found |
| [10](weeks/week-10.md) | Views, Authorization | 6 | yes (exercises + 2 quizzes) |
| [11](weeks/week-11.md) | Recursion, OLAP, NoSQL | 7 | none found |

## Format

No programming assignments in the sense other courses in this repo have (no starter code, no
autograder to run locally). The hands-on work is SQL/XML/XQuery/XSLT query-writing exercises
against small provided datasets (movie ratings, social network, course catalog, countries) —
either worked through by hand/in a local database, or via edX's in-browser interactive checker.
Nothing to keep in a separate implementation repo; the exercise write-ups themselves (if you keep
solutions) would be the only "code."

## Self-study access

Two independent, non-enrolled paths, both free:
- **GitHub mirrors** (linked above) — read the exercise/quiz question files directly, work them
  against the provided schema/dataset files locally (in SQLite, MySQL, or Postgres — the
  `stanford-lagunita-sql` repo's `sql-guide.html` has setup instructions for all three), and check
  your own answers against the included solution files. No account of any kind required.
- **edX audit enrollment** — free (no payment info needed), gets you the original in-browser
  interactive SQL/XML checker with instant auto-grading, plus the in-video and standalone quizzes.
  This is the closer-to-original experience but does require creating an edX account.

Coverage isn't uniform: some modules (Relational Model, JSON, Indexes, Transactions, Recursion,
OLAP, NoSQL) have no exercise/quiz files in either GitHub mirror — for those, the video lecture is
the only material found; each affected `weeks/*.md` says so explicitly rather than linking
something that doesn't exist.
