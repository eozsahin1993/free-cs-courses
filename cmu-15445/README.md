# CMU 15-445/645 — Intro to Database Systems

## Links

- Course site: https://15445.courses.cs.cmu.edu/spring2026/
- Textbook: *Database System Concepts* (7th ed.) — Silberschatz, Korth, Sudarshan
- Lecture videos (YouTube, CMU Database Group): the course's own recordings live on CMU Box and
  are restricted to enrolled students. The public substitute is the CMU Database Group's YouTube
  channel, which posts a full re-recording every year. This syllabus links the **Fall 2025**
  playlist (https://www.youtube.com/playlist?list=PLSE8ODhjZXjYMAgsGH-GtY5rJYZ6zjsd5) since its
  lecture numbering and topics line up almost 1:1 with the Spring 2026 schedule. One lecture
  (#26, Final Review + Systems Potpourri) has no Fall 2025 counterpart and is linked from the
  **Fall 2024** playlist instead — noted in `weeks/week-14.md`.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-14.md`), each self-contained: that
  week's lecture(s), readings, homework/project (assigned/in-progress), and anything due. Mirrors
  the real Spring 2026 schedule's pacing and ordering, but with calendar dates stripped out since
  this is meant to be worked through at your own pace, not on the semester's actual timeline.
  Spring break falls between week-07 and week-08 — noted in week-07.md.

Project code write-ups/status, if kept, should live inside the relevant week's file rather than a
separate top-level directory — status is more useful next to the assignment link than split out.

## Weeks

| Week | Lectures | Lab | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Relational Model & Algebra, Modern SQL | Project 0, HW1 assigned | — |
| [2](weeks/week-02.md) | Database Storage I | — | Project 0, HW1 |
| [3](weeks/week-03.md) | Memory Management, Database Storage II | Project 1, HW2 assigned | — |
| [4](weeks/week-04.md) | Storage Models & Compression, Hash Tables | — | HW2 |
| [5](weeks/week-05.md) | Indexes & Filters I/II | HW3 assigned | Project 1 |
| [6](weeks/week-06.md) | Index Concurrency Control, Sorting & Aggregation | Project 2 assigned | HW3 |
| [7](weeks/week-07.md) | Joins Algorithms | — | Midterm |
| — | *Spring break* | | |
| [8](weeks/week-08.md) | Query Execution I/II | HW4 assigned | Project 2 |
| [9](weeks/week-09.md) | Query Planning & Optimization I/II | Project 3 assigned | HW4 |
| [10](weeks/week-10.md) | Concurrency Control Theory, Two-Phase Locking | — | — |
| [11](weeks/week-11.md) | Timestamp Ordering, MVCC I | HW5, Project 4 assigned | Project 3 |
| [12](weeks/week-12.md) | MVCC II, Database Logging | — | HW5 |
| [13](weeks/week-13.md) | Database Recovery, Distributed Databases I | HW6 assigned | — |
| [14](weeks/week-14.md) | Distributed Databases II, Final Review | — | HW6, Project 4, Final exam |

## Implementation

Project code (BusTub, the C++ database built up over the course) is kept in a separate private
repo (not published here), matching the same policy used for mit-6.824.

Source: https://github.com/cmu-db/bustub

## Submitting projects as a self-study student

The course's FAQ (https://15445.courses.cs.cmu.edu/spring2026/faq.html) confirms non-CMU students
can get their project submissions actually graded, not just self-checked:

1. Create a Gradescope account: https://www.gradescope.com/
2. Join the course's public self-study section — the entry code and school name are listed in the
   FAQ above (Q: "How can people not enrolled in the class test their projects?"); not reproduced
   here since it's semester-specific and best read straight from the source.
3. Work through the project using the BusTub source linked above.
4. The autograder for each project unlocks on Gradescope only *after* that project's due date for
   enrolled CMU students — so expect a lag behind the self-paced schedule in `weeks/`.
5. Submit your implementation on Gradescope for grading.
6. In exchange for the access, the course asks that you don't publish your project implementation
   publicly (GitHub or elsewhere).

The homeworks (HW1–6) aren't mentioned in that FAQ answer — they look to be self-graded via
released solutions rather than autograded.
