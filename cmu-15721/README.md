# CMU 15-721 — Advanced Database Systems

## Links

- Course site: https://15721.courses.cs.cmu.edu/spring2024/ (Spring 2024, Andy Pavlo)
- Lecture videos (YouTube): https://www.youtube.com/playlist?list=PLSE8ODhjZXjYa_zX-KeMJui7pcN1rIaIJ

## Why Spring 2024, not the current semester

Unlike mit-6.824 and cmu-15445, this syllabus is **not** synced to the live offering. As of
Fall 2025 (https://www.cs.cmu.edu/~15721-f25/), 15-721 has changed hands and format entirely:
it's now taught by Jignesh Patel as a paper-reading research seminar (2–3 papers/week, no
recorded lectures, grade dominated by a group research project) — there's nothing to build a
video-linked syllabus from there.

Spring 2024 was Andy Pavlo's last lecture-based offering: full schedule with slides, notes, and
a complete public YouTube playlist for every lecture but one (Lecture 16 has no recording). This
syllabus is built directly off that semester, self-consistently — no cross-year topic matching
needed, since every lecture's own video is used.

## Format — this is a paper-reading seminar, not a problem-set course

Unlike 15-445, there are no discrete homeworks or programming projects assigned per week.
The real course's grading was: 15% reading reviews, 10% lecture-note duty, 60% group project,
15% take-home final exam. What that means for self-study:

- **Reading reviews**: each lecture links a *primary* paper (and often several optional ones).
  The real course requires a one-paragraph synopsis of the primary paper before each class. As
  a self-study habit, writing that synopsis yourself before watching the lecture is genuinely
  useful — it's not tracked in the week files since it's a practice, not a gradable artifact.
- **Lecture-note duty**: a rotating in-class role (one student transcribes each lecture). Not
  applicable to self-study — the real notes are already linked per lecture.
- **Project**: the real course has students form 3-person teams and build a microservice for a
  cloud-native OLAP DBMS (scheduler, execution engine, catalog service, I/O/cache, or optimizer)
  over a semester, evaluated on implementation + tests + benchmarks. See
  https://15721.courses.cs.cmu.edu/spring2024/project.html for the full brief. There's no
  self-study equivalent to plug in here — if you want the experience, treat it as an optional
  capstone: pick one of those five components, implement it against an existing open-source
  OLAP engine (e.g. DuckDB), and hold yourself to the same three deliverables (implementation,
  tests, evaluation).
- **Exam**: take-home, long-form questions over the semester's readings. No public copy exists.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-12.md`), each self-contained: that
  week's lecture(s) with paper readings, slides, notes, and video. Calendar dates are stripped
  out, same convention as mit-6.824 and cmu-15445. Spring break falls between week-06 and
  week-07 — noted in week-06.md.

## Weeks

| Week | Lectures |
|---|---|
| [1](weeks/week-01.md) | Course Overview, Modern Analytical Database Systems |
| [2](weeks/week-02.md) | Data Formats & Encoding I/II |
| [3](weeks/week-03.md) | Query Execution & Processing I/II |
| [4](weeks/week-04.md) | Vectorized Query Execution, Code Generation & Compilation |
| [5](weeks/week-05.md) | Scheduling & Coordination, Hash Join Algorithms |
| [6](weeks/week-06.md) | Multi-Way Join Algorithms |
| — | *Spring break* | |
| [7](weeks/week-07.md) | Server-side Logic Execution, Networking Protocols |
| [8](weeks/week-08.md) | Optimizer Implementation I/II |
| [9](weeks/week-09.md) | Optimizer Implementation III, Cost Models |
| [10](weeks/week-10.md) | System Analysis: BigQuery, Databricks/Spark |
| [11](weeks/week-11.md) | System Analysis: Snowflake, DuckDB |
| [12](weeks/week-12.md) | System Analysis: Yellowbrick, Redshift, Final exam, Project |
