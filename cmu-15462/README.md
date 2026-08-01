---
category: Graphics
level: Intermediate
tags: [computer-graphics, rendering]
---
# CMU 15-462/662 — Computer Graphics

## Links

- Course site: http://15462.courses.cs.cmu.edu/fall2020/ (Fall 2020, Keenan Crane) — syllabus,
  23 lectures with slides, mini-homework, and course info. The course was renumbered to
  **15-362/662** starting with the Fall 2025 offering (still commonly known by, and referred to
  throughout the self-study community as, "15-462/662" — Scotty3D's own repo description uses
  both numbers inconsistently, reflecting how fresh the change is). Later offerings
  (Spring 2024, Fall 2025) reorganize some lecture groupings and add a few new lectures
  (e.g. a dedicated C++ primer, a Kinematics/Splines split) — this repo uses Fall 2020 as the
  single source of truth for both syllabus *and* video, since it's the one offering where every
  lecture's slides, topics, and recording line up 1:1 with no cross-year guessing required.
- Lecture videos (YouTube): pre-recorded and uploaded to YouTube for this remote-instruction
  offering — confirmed by the course's own Fall 2020 course-info page ("Lecture videos will be
  pre-recorded and uploaded to YouTube"). Playlist:
  https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E — **verified complete**
  by extracting the full playlist listing (not sampling): all 23 lectures present
  (Lecture 01–Lecture 23), each individually titled and matching the syllabus exactly, hosted on
  instructor Keenan Crane's own channel (`@keenancrane`), plus a welcome video and a closing
  "student creations" reel.
- Slides: linked per-lecture in `weeks/*.md`, all verified — each lecture's resource page
  (`fall2020/lecture/<slug>`) links a slide PDF at
  `fall2020content/lectures/<NN>_<slug>/<NN>_<slug>_slides.pdf`.
- Assignments: **Scotty3D** — https://github.com/CMU-Graphics/Scotty3D, a public, actively
  maintained GitHub repo (the same base code current students use) with 5 assignment specs under
  `assignments/` (A0–A4). No official public due-date calendar exists for the Fall 2020
  offering — assignment pacing below is inferred from which lecture range covers each
  assignment's prerequisite material, not a posted schedule; treat it as a guideline, not a
  sourced deadline.
- Textbook: none assigned — no textbook is referenced on the course-info page; each lecture's
  material is self-contained in its slides, with occasional supplementary papers linked
  per-lecture in `weeks/*.md`.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-12.md`), grouping the 23 lectures two
  at a time (the course's real Tue/Thu cadence), with the final week holding the single closing
  lecture. No calendar dates are used since this is worked at your own pace. Assignment code, if
  kept, lives inside the relevant week's file rather than a separate top-level directory.

## Weeks

| Week | Lectures | Assigned |
|---|---|---|
| [1](weeks/week-01.md) | Course Intro; Linear Algebra | Assignment 0 (Scotty3D setup) |
| [2](weeks/week-02.md) | Vector Calculus; Drawing a Triangle (Intro to Sampling) | — |
| [3](weeks/week-03.md) | Transformations; 3D Rotations and Complex Representations | — |
| [4](weeks/week-04.md) | Perspective Projection and Texture Mapping; Depth and Transparency | Assignment 1 (Rasterizer) |
| [5](weeks/week-05.md) | Introduction to Geometry; Meshes and Manifolds | — |
| [6](weeks/week-06.md) | Digital Geometry Processing; Geometric Queries | Assignment 2 (Mesh Editing) |
| [7](weeks/week-07.md) | Spatial Data Structures; Color | — |
| [8](weeks/week-08.md) | Radiometry; The Rendering Equation | — |
| [9](weeks/week-09.md) | Numerical Integration; Monte Carlo Ray Tracing | Assignment 3 (Path Tracer) |
| [10](weeks/week-10.md) | Variance Reduction; Intro to Animation | — |
| [11](weeks/week-11.md) | Dynamics and Time Integration; Introduction to Optimization | Assignment 4 (Animation) |
| [12](weeks/week-12.md) | Physically-Based Animation and PDEs | — |

## Implementation

5 assignments (A0–A4), all built on **Scotty3D**, a shared C++ 3D modeling/rendering/animation
codebase: A0 is a setup/debugging onboarding exercise (no graded graphics content); A1 implements a
software rasterization pipeline (line drawing, triangle rendering, depth testing, texture mapping
with mip-mapping, supersampled antialiasing); A2 implements interactive mesh editing (local mesh
operations, subdivision); A3 completes a physically based path-tracing renderer; A4 implements the
animation system (skeletal animation, linear-blend skinning, particle simulation). Starter code and
specs are public on GitHub (linked above); solutions are kept in a separate private repo, not
published here, matching this repo's policy for every other code course (mit-6.824, cmu-15445,
etc.) — the Scotty3D repo itself also explicitly asks that solutions not be made public.

Grading breakdown, for reference on real course weighting (not applicable to self-study): 15%
mini-homework (short per-lecture written questions, up to 4 droppable), 60% the four major
programming assignments (A1–A4), 20% midterm/final, 5% participation.

## Self-study access

No official non-enrolled grading path for the programming assignments (no public autograder or
Gradescope entry code, unlike mit-6.1810 or cmu-15445) — self-check A1–A4 against Scotty3D's
reference renders/behavior described in each assignment spec. Mini-homework questions (one per
lecture) have no published answer key; self-check against that lecture's slides.
