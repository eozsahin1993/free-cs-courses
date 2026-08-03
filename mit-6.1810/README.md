---
university: MIT
code: 6.1810
category: Systems
level: Intermediate
tags: [operating-systems, xv6]
---
# MIT 6.1810 — Operating System Engineering

## Links

- Course site: https://pdos.csail.mit.edu/6.1810/2025/ — Fall 2025, the most recently completed
  offering as of this writing. The course has no stable un-dated URL; each year gets its own
  directory (the Fall 2026 offering will eventually live at `.../6.1810/2026/`). Formerly numbered
  6.828, then 6.S081 — same course lineage, same PDOS instructors (Frans Kaashoek, Robert Morris,
  Nickolai Zeldovich).
- Schedule: https://pdos.csail.mit.edu/6.1810/2025/schedule.html
- xv6 book (textbook, free): https://pdos.csail.mit.edu/6.1810/2025/xv6/book-riscv-rev5.pdf — no
  paid textbook is assigned; the whole course is built around this book and the xv6 source
  (https://github.com/mit-pdos/xv6-riscv).
- Lecture videos (YouTube): https://www.youtube.com/playlist?list=PLMF2PpA06Sb0Nj-7TDAQpUs0vP5pA28VG
  — the course's only fully public playlist, from the Fall 2020 remote-instruction offering (24
  lectures, then numbered 6.S081). The 2025 site's lecture notes/homework are used for the actual
  syllabus; each `weeks/*.md` file links the 2020 video covering the same topic where one exists,
  and says so explicitly where it doesn't. A few current topics have no 2020 counterpart (added or
  reordered since then): the C/gdb intro lecture, system call interposition, transparent
  superpages, and high-performance networking/scheduling (Shenango).
- Labs: linked per-week below, all under https://pdos.csail.mit.edu/6.1810/2025/labs/

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-15.md`), matching the real Fall 2025
  semester's week groupings, with calendar dates stripped since this is meant to be worked through
  at your own pace. The midterm falls in week 8 (no lecture that week); the final exam is noted
  after week 15. Lab code, if kept, lives inside the relevant week's file rather than a separate
  top-level directory.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Introduction and examples | Lab util | — |
| [2](weeks/week-02.md) | C in xv6, OS design | Lab syscall | Lab util |
| [3](weeks/week-03.md) | OS Organization, Page tables | Lab pgtbl | Lab syscall |
| [4](weeks/week-04.md) | System call entry/exit, System call interposition | Lab traps | Lab pgtbl |
| [5](weeks/week-05.md) | Page faults, Transparent super pages | Lab cow | Lab traps |
| [6](weeks/week-06.md) | Virtual memory for applications, Device drivers | — | — |
| [7](weeks/week-07.md) | Locking | Lab net | Lab cow |
| [8](weeks/week-08.md) | *Midterm exam* | — | — |
| [9](weeks/week-09.md) | Thread switching, Coordination | — | — |
| [10](weeks/week-10.md) | Networking, High-performance networking and scheduling | Lab lock | Lab net |
| [11](weeks/week-11.md) | File systems | Lab fs | Lab lock |
| [12](weeks/week-12.md) | Crash recovery, File system performance and fast crash recovery | Lab mmap | Lab fs |
| [13](weeks/week-13.md) | Multi-Core scalability and RCU | — | — |
| [14](weeks/week-14.md) | Containers and Virtual Machines | — | Lab mmap |
| [15](weeks/week-15.md) | Kernel extensibility, Meltdown | — | — |
| — | *Final exam* | | |

## Implementation

Lab code (util, syscall, pgtbl, traps, cow, net, lock, fs, mmap — all built as extensions to
xv6-riscv) is kept in a separate private repo, not published here, matching this repo's policy for
every other code course (mit-6.824, cmu-15445, etc.).

## Self-study access

Every lab includes a full local autograder — `make grade`, or `make GRADEFLAGS=<exercise> grade`
for an individual exercise — that runs the same tests the official Gradescope submission would.
Self-study is complete without an MIT Gradescope account; only the official submission/grade
record itself is enrolled-only. The per-lecture "homework" pages linked in each week's file are
short prep/reflection questions with no published answer key — treat them as self-check prompts,
not graded work.
