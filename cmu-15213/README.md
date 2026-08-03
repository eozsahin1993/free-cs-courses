---
university: CMU
code: 15-213
category: Systems
level: Intermediate
tags: [computer-systems, x86-64]
---
# CMU 15-213 — Introduction to Computer Systems (ICS / "CS:APP")

## Links

- Course site (current — Summer 2026 session): https://www.cs.cmu.edu/~213/
- Syllabus baseline used here (Fall 2025 — a standard 15-week Tue/Thu semester, not the
  compressed daily summer session): https://www.cs.cmu.edu/afs/cs/academic/class/15213-f25/www/
  — slides for all 24 numbered lectures are public directly from this archived page.
- Textbook: *Computer Systems: A Programmer's Perspective, 3rd ed.* (CS:APP3e), Bryant &
  O'Hallaron — not free; companion site with supplementary material: http://csapp.cs.cmu.edu/
- Lecture videos (YouTube): CMU never posts video for its own live offerings (Panopto,
  enrolled-only). This syllabus uses the **Spring 2015** public recording of the full course
  instead (https://www.youtube.com/playlist?list=PLpIxOj-HnDsPZIJYO4U9f-xRI8bBadaso) — 28
  lectures + 7 recitations. The core curriculum (bits/machine code/linking/memory
  hierarchy/VM/malloc/ECF/networking/concurrency) is essentially unchanged since 2015, so
  lectures are mapped to the Fall 2025 syllabus **by topic**, not by number — 2015's numbering
  and pacing differ (e.g. it splits Bits/Bytes into two lectures and covers a standalone Floating
  Point lecture that Fall 2025 folds elsewhere). Two Fall 2025 lectures have no clean 2015
  counterpart — "Design and Debugging" and the closing "Frontiers of Computing" — noted in
  `weeks/week-04.md` and `weeks/week-13.md`.
- Labs: CMU's own current labs.html only links Autolab (enrolled-only, no public handouts). The
  textbook's official self-study page fills this gap:
  http://csapp.cs.cmu.edu/3e/labs.html — publicly downloadable handout + starter code for Data
  Lab, Bomb Lab, Attack Lab, Cache Lab, Malloc Lab, Shell Lab, and Proxy Lab (solutions require a
  login, handouts don't). Two of CMU's current 10 labs — **L0 (C Programming/Cord Lab)** and
  **L8 (SFS, a simplified file system)** — are CMU-specific additions not part of the general
  CS:APP public lab set, so no public self-study handout exists for those two; noted in their
  respective weeks.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-13.md`), each self-contained: that
  week's lecture(s), slides, video, and any lab due that week. Mirrors Fall 2025's real Tue/Thu
  pacing (2 lectures/week, closing lecture alone in week 13), calendar dates stripped since this
  is self-paced. CMU's schedule only publishes lab **due** dates, not "assigned" dates, so weeks
  note due dates only — start each lab once its corresponding lecture is covered.

Lab code, if kept, should live inside the relevant week's file rather than a separate top-level
directory.

## Weeks

| Week | Lectures | Lab Due |
|---|---|---|
| [1](weeks/week-01.md) | Overview, Bits/Bytes & Integers | — |
| [2](weeks/week-02.md) | Machine Programming I (Basics), Machine Programming II (Control) | L0: C Programming/Cord Lab |
| [3](weeks/week-03.md) | Machine Programming III (Procedures), Machine Programming IV (Data) | L1: Data Lab |
| [4](weeks/week-04.md) | Linking, Design and Debugging | L2: Bomb Lab |
| [5](weeks/week-05.md) | The Memory Hierarchy, Cache Memories | L3: Attack Lab |
| [6](weeks/week-06.md) | Virtual Memory: Concepts, Virtual Memory: Details | — |
| [7](weeks/week-07.md) | Dynamic Memory Allocation: Basic, Dynamic Memory Allocation: Advanced | L4: Cache Lab |
| [8](weeks/week-08.md) | Code Optimization, Processes and Multitasking | L5a: Malloc Lab (checkpoint) |
| [9](weeks/week-09.md) | Exceptional Control Flow, System-Level I/O and File Systems | L5b: Malloc Lab (final) |
| [10](weeks/week-10.md) | File Systems / Network Programming I, Network Programming II | — |
| [11](weeks/week-11.md) | Concurrent Programming, Synchronization: Basic | L6: Shell Lab |
| [12](weeks/week-12.md) | Synchronization: Advanced, Thread-Level Parallelism | L7: Proxy Lab |
| [13](weeks/week-13.md) | Frontiers of Computing | L8: SFS (Simplified File System) |

(The real Fall 2025 offering also has an in-class midterm after week 7's lectures — no separate
week entry since it's not self-study-relevant.)

## Implementation

Every lab is real, substantial code (a binary bomb defuser, a buffer-overflow exploit, a cache
simulator, a working `malloc`/`free`, a Unix shell, a concurrent web proxy) — closer to CMU
15-445's BusTub-style labs than CS231n's notebooks. Code implementations, if kept, live in a
separate private repo, matching the same policy used for the other courses here.

## Self-study access

No official non-enrolled grading path (Autolab submission is for enrolled students only), but
7 of the 10 labs (Data, Bomb, Attack, Cache, Malloc, Shell, Proxy) have official self-study
handouts from the textbook's companion site (http://csapp.cs.cmu.edu/3e/labs.html) that bundle a
**real local autograder**, not just an expected-output description — confirmed by inspecting the
handout tarballs:
- Malloc Lab: `mdriver.c` runs your `mm.c` against reference traces and prints the same
  correctness/throughput/utilization score Autolab computes.
- Shell Lab: `sdriver.pl` + a reference `tshref` binary + 15 trace files diff your shell's
  behavior against the reference implementation trace-by-trace.
- Cache Lab: `test-csim` checks your simulator's hit/miss/eviction counts against `csim-ref`;
  `driver.py` grades `trans.c` on cache-miss count.
- Proxy Lab: `driver.sh` + a bundled `tiny` test server + `nop-server.py` for end-to-end/
  concurrency tests.
- Bomb Lab and Attack Lab are self-checking by construction (a phase defuses or it doesn't; a
  cookie matches or it doesn't).

L0 and L8 (CMU-specific labs) have no public handout at all — skip them or substitute equivalent
practice (e.g. any basic Unix file-I/O exercise for L8).
