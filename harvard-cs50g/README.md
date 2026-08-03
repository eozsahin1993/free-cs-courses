---
university: Harvard
code: CS50G
category: Game Development
level: Intro
tags: [game-dev, unity, lua]
---
# Harvard CS50G — Introduction to Game Development

## Links

- Course site: https://cs50.harvard.edu/games/2018/ (2018 offering, Colton Ogden & David J.
  Malan) — this is the archived version of the course. CS50 Games ("CS50G") was **retired on
  30 June 2024** and is officially deprecated — the material remains public for self-study
  ("archive purposes only"), but there is no active offering or credit path. Note that Harvard's
  *current* self-paced game-dev OCW page (`cs50.harvard.edu/games/`, no year) is a **different,
  narrower 8-week course** ("CS50's Introduction to 2D Game Development") that dropped the Unity
  content entirely — this repo deliberately uses the 2018 archive because it's the only version
  with the Unity/C# weeks.
- Lecture videos (YouTube): full playlist —
  https://www.youtube.com/playlist?list=PLhQjrBD2T383Vx9-4vJYFsJbvZ_D17Qzh — **verified complete**:
  all 12 weeks (0–11) individually confirmed to have a working YouTube link on their own page,
  not sampled.
- Notes: linked per-week below, at `games/2018/notes/<N>/` — one per lecture, covering that
  week's concepts (verified for all 12 weeks).
- Slides: linked per-week below, PDFs at `cdn.cs50.net/games/2018/spring/lectures/<N>/lecture<N>.pdf`
  (verified for all 12 weeks).
- Projects: linked per-week below, at `games/2018/projects/<N>/<slug>/` — starter code (`src<N>.zip`)
  exists for weeks 0–10; week 11 ("Portal Problems") has no separate starter zip since it builds on
  week 10's Portal project and leads into the Final Project.
- Final Project: https://cs50.harvard.edu/games/2018/final/ — an open-ended capstone game built in
  either LÖVE or Unity, with at least 3 game states and win/lose conditions, more complex than any
  single week's project. No submission path exists any longer (archived), but the spec itself is a
  legitimate self-study capstone.
- Textbook: none — the course is entirely lecture + slides + hands-on project based.

## Framework split

Weeks 0–7 use **Lua** and the **LÖVE2D** framework (2D games: Pong through Pokémon). Weeks 8–11
switch to **Unity** and **C#** (3D/advanced: Helicopter Game 3D, Dreadhalls, Portal, Portal
Problems) — confirmed directly from each week's notes page, not assumed from the course
description. If your interest is specifically Unity, weeks 8–11 (plus the Final Project, which
allows either framework) are the relevant ones; the LÖVE2D weeks still build the same underlying
game-dev concepts (game loops, state machines, collision, physics, animation, audio) in a lighter
framework.

## Structure

- [weeks/](weeks/) — one file per week (`week-00.md` … `week-11.md`), matching the course's own
  one-project-per-week pacing exactly (no grouping needed — unlike most courses in this repo, CS50G
  is naturally already one self-contained unit per week). No calendar dates, worked at your own
  pace. Project/lab code, if kept, lives inside the relevant week's file rather than a separate
  top-level directory.

## Weeks

| Week | Topic | Framework | Project |
|---|---|---|---|
| [0](weeks/week-00.md) | Pong | Lua / LÖVE2D | Pong |
| [1](weeks/week-01.md) | Flappy Bird | Lua / LÖVE2D | Flappy Bird |
| [2](weeks/week-02.md) | Breakout | Lua / LÖVE2D | Breakout |
| [3](weeks/week-03.md) | Match 3 | Lua / LÖVE2D | Match 3 |
| [4](weeks/week-04.md) | Super Mario Bros. | Lua / LÖVE2D | Super Mario Bros. |
| [5](weeks/week-05.md) | Legend of Zelda | Lua / LÖVE2D | Legend of Zelda |
| [6](weeks/week-06.md) | Angry Birds | Lua / LÖVE2D | Angry Birds |
| [7](weeks/week-07.md) | Pokémon | Lua / LÖVE2D | Pokémon |
| [8](weeks/week-08.md) | Helicopter Game 3D | Unity / C# | Helicopter Game 3D |
| [9](weeks/week-09.md) | Dreadhalls | Unity / C# | Dreadhalls |
| [10](weeks/week-10.md) | Portal | Unity / C# | Portal |
| [11](weeks/week-11.md) | Portal Problems | Unity / C# | Final Project (open-ended, LÖVE or Unity) |

## Implementation

12 projects (one per week, 0–10 numbered plus an open-ended Final Project after week 11), each a
complete playable game clone built from public starter code. Starter zips and specs are public
(linked per-week); solutions are kept in a separate private repo, not published here, matching this
repo's policy for every other code course (mit-6.824, cmu-15445, etc.).

## Self-study access

No official non-enrolled grading or submission path — CS50G's Gradescope/submission system was
retired along with the course. Self-check each project against its spec's stated requirements and
the lecture's own live-coded solution (visible in that week's video) — there's no separate answer
key, but watching the instructor build the same project in the lecture doubles as a worked
solution.
