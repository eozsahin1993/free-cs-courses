---
category: Algorithms & Data Structures
level: Intro
tags: [java, data-structures]
---
# UC Berkeley CS61B — Data Structures

## Links

- Course site: https://sp26.datastructur.es/ (Spring 2026 offering, taught by Josh Hug and Kay
  Ousterhout)
- Lecture videos (YouTube): https://www.youtube.com/playlist?list=PL8FaHk7qbOD44fDmItR1wrkor8XdfUXC6
  — the *current* Spring 2026 offering's own live lecture recordings, publicly posted lecture by
  lecture. 38 of the 40 lectures are recorded; Lecture 6 ("SLLists, Nested Classes, Sentinel
  Nodes") and Lecture 8 ("Resizing and circular arrays") have no video in the playlist — noted in
  `weeks/week-03.md`.
- Textbook (Josh Hug, Spring 2026 edition): https://cs61b-2.gitbook.io/cs61b-textbook-spring-2026
  — written notes covering most of the course. Chapter numbering doesn't line up 1:1 with lecture
  numbers (a few lectures share a chapter, and review/guest lectures generally have none); each
  week file links the closest matching chapter where one clearly exists, and says `none` where it
  doesn't rather than guessing.
- Homeworks: https://sp26.datastructur.es/homeworks/ — short written/coding exercises. HW01–04,
  06, 08, 09 are plain pages on the course site; HW5, HW7, and HW10 have no public page at all —
  Gradescope is the only reference for them, and that link 401s without a login (verified, not
  just "may require").
- Projects: https://sp26.datastructur.es/projects/, https://sp26.datastructur.es/proj4/,
  https://sp26.datastructur.es/proj5/ — Project 0 (particle simulator), 1–3 (core data
  structures), 4A–D (a multi-part BST/graph project), 5A–C (Build Your Own World, a Java game
  project).
- Skeleton/starter code: https://github.com/Berkeley-CS61B/skeleton-sp26 — public GitHub repo,
  pulled into your own project repo per
  https://sp26.datastructur.es/resources/assignment-workflow/. No Berkeley login required to view
  it.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-14.md`), each self-contained: that
  week's lecture(s), video/notes links, and any homework/project assigned or due. Mirrors the
  real Spring 2026 schedule's pacing and ordering, but with calendar dates stripped out since this
  is meant to be worked through at your own pace, not on the semester's actual timeline. Spring
  break falls right after `week-09.md` (real course weeks 1–9, then 11–15 — there's no lecture
  content in the break week itself, so it isn't given its own file); the RRR/study week and final
  exam are noted at the end of `week-14.md` instead of a separate file, for the same reason.

Project/homework code, if kept, should live inside the relevant week's file rather than a
separate top-level directory — status is more useful next to the assignment link than split out.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Welcome to 61B, Intro to Java; Defining and Using Classes, Lists | HW01 | — |
| [2](weeks/week-02.md) | Lists/arrays/maps/references; Testing; Packages, Recursion, IntLists | HW02, Project 0 | HW01 |
| [3](weeks/week-03.md) | SLLists, Nested Classes, Sentinel Nodes; DLLists, ALists; Resizing and circular arrays | HW03, Project 1 | HW02, Project 0 |
| [4](weeks/week-04.md) | Interface/Implementation Inheritance; Iterators and Iterables; Subtype Polymorphism, Comparables, Comparators | Project 2 | HW03, Project 1 |
| [5](weeks/week-05.md) | Review and midterm practice; Asymptotics I | HW04 | Project 2, Midterm 1 |
| [6](weeks/week-06.md) | Disjoint Sets; Asymptotics II; Asymptotics III | Project 3 | HW04 |
| [7](weeks/week-07.md) | Sets, Extends, and BSTs; B-Trees; Red-Black Trees | Project 4A, HW5 | Project 3 |
| [8](weeks/week-08.md) | Heaps/Priority Queues/Tree Representations; Tree and Graph Traversals; Graph Traversals and Implementations | Project 4B, HW6 | Project 4A |
| [9](weeks/week-09.md) | Shortest Paths; Minimum Spanning Trees; Directed Acyclic Graphs | Project 4C | Project 4B, HW6 |
| — | *Spring break* | | |
| [10](weeks/week-10.md) | Hashing I; Hashing II; Tries | Project 4D | Project 4C |
| [11](weeks/week-11.md) | Software Engineering I; Midterm 2 review; Software Engineering II - BYOW Warmup | HW7, Project 5A | Project 4D, Midterm 2 |
| [12](weeks/week-12.md) | Basic Sorts; Insertion Sort and Intro to Quicksort; Quicksort | Project 5B | Project 5A |
| [13](weeks/week-13.md) | Sorting and Algorithmic Bounds; Radix Sorts; The Social Implications of Computing | HW8 | Project 5B |
| [14](weeks/week-14.md) | Software Engineering III - AI in Software Engineering; Compression; Summary, Fun | Project 5C, HW9 | HW8; HW10 and Final exam (RRR week) |

## Implementation

Project/homework code is kept in a separate private repo (not published here), matching the
policy used for the other code-based courses in this collection.

## Self-study access

No official non-enrolled grading path was found (unlike CMU 15-445's public Gradescope section) —
the class Gradescope course is enrollment-restricted. The work is still realistically self-checkable
though: the public skeleton repos include visible local tests (Project 0's spec explicitly notes
"no hidden tests on autograder"), and the public exam archive
(https://sp26.datastructur.es/resources/exam-archive/) has past exams for self-assessment.
