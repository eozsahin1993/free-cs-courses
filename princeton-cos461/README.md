# Princeton COS 461 — Computer Networks

## Links

- Course site: https://www.cs.princeton.edu/courses/archive/fall21/cos461/ — schedule:
  https://www.cs.princeton.edu/courses/archive/fall21/cos461/schedule.html. This is the **Fall
  2021** offering; its instructor of record was Kyle Jamieson. COS461 itself was created and long
  taught by Michael Freedman and Jennifer Rexford, and Nick Feamster (a co-creator of the course's
  assignments) still maintained the Fall 2021 assignment repo. Fall 2021 is used here because it's
  the most complete public archive of the course: every one of its 23 lecture slide decks is still
  live, and its own assignment repo (see below) is public and complete.
- Textbook: Larry L. Peterson & Bruce S. Davie, *Computer Networks: A Systems Approach* — free
  online at https://book.systemsapproach.org/. There's no separate written notes site (slides +
  textbook readings are the only written references), so week files below have no `Notes` line.
- Assignments: https://github.com/feamster/COS461-Public (`assignments/assignment1` …
  `assignment5`) — the Fall 2021 assignment repo itself, maintained by Nick Feamster. The course
  site's own assignments page links it via a `github.com/PrincetonUniversity/COS461-Public` alias
  that 301-redirects here.
- Lecture videos: the Fall 2021 offering's own recordings are hosted on Princeton's gated Panopto
  instance (`princeton.hosted.panopto.com`), restricted to enrolled students — **not linked here
  under any circumstance**. The public substitute is Nick Feamster's own YouTube playlist
  "Computer Networking Course":
  https://www.youtube.com/playlist?list=PLpherdrLyny-zJw95jcE-uJkcsIAG1MEn (186 videos, confirmed
  as his own upload via YouTube's oembed metadata — `author_name: "Nick Feamster"`). Feamster
  co-created COS461's material, so topic coverage maps closely, but the playlist itself is a
  standalone series of short (2–10 minute) concept clips, not full lecture-length recordings, and
  it isn't tied to any particular year's numbering — so each lecture below links whichever clip(s)
  most closely match its topic, verified individually via the YouTube oembed endpoint. **5 of the
  23 lectures have no clean counterpart in the playlist** (Lecture 5's UDP/TCP-mechanics half,
  Multicast and Anycast, both Wireless lectures, and the Course Wrap-Up) — each is marked
  `none found` in its week file rather than forced onto an unrelated clip.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-12.md`). Fall 2021 paces the course
  as 2 lectures + 1 recap "class meeting" per week (the course is flipped: lectures are watched
  independently, then discussed live); that pacing is mirrored here, with calendar dates stripped
  since this is meant to be worked through at your own pace. Fall Recess (one day, no lecture
  content lost) falls inside week-07's window and Thanksgiving recess disrupts the pairing around
  week-11/week-12 — both noted in those files. Assignment code, if kept, should live inside the
  relevant week's file rather than a separate top-level directory.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Course Overview, Link Layer | Assignment 1 | — |
| [2](weeks/week-02.md) | Network Layer, Network Devices—Switches and Routers | — | — |
| [3](weeks/week-03.md) | Transport Layer and TCP, Congestion Control in Hosts | — | — |
| [4](weeks/week-04.md) | Queue Management on Links, Middleboxes and Tunneling | Assignment 2 | Assignment 1 |
| [5](weeks/week-05.md) | Routing Algorithms, Routing Convergence | — | — |
| [6](weeks/week-06.md) | Interdomain Routing, Network Measurement | Assignment 3 | Assignment 2, Midterm exam |
| [7](weeks/week-07.md) | Multicast and Anycast, Discovery and DNS | Assignment 4 | Assignment 3 |
| [8](weeks/week-08.md) | HTTP and the Web, Content Distribution Networks | Assignment 5 | Assignment 4 |
| [9](weeks/week-09.md) | Wireless I: Medium Access, Software-Defined Networking | — | — |
| [10](weeks/week-10.md) | Wireless II: Routing, Security I: Concepts and Applications | — | Assignment 5 |
| [11](weeks/week-11.md) | Security II: Network Security, Datacenter Networks | — | — |
| [12](weeks/week-12.md) | Course Wrap-Up | — | Final exam |

## Implementation

The 5 assignments are real programming projects in Go, C, and Python (socket programming, TCP
congestion-control measurement, passive network measurement from packet traces, port scanning,
and an HTTP proxy), built and run inside a course-provided Vagrant VM (or a UTM VM on Apple
Silicon). Code, if kept, lives in a separate private repo, matching the same policy used for the
other courses in this repo — the course's own collaboration policy also explicitly requires
keeping your solutions in a *private* repo, not a public one.

## Self-study access

There's no official non-enrolled grading path (no Gradescope-style section like CMU 15-445's).
But this isn't a plotting-notebook-only course either — real local self-check scripts exist for
4 of the 5 assignments, inspected directly from the assignment repo's contents:

- **Assignment 1** (Sockets): `assignment1/client_server/test_client_server.sh` — a bash test
  harness that runs your client/server implementations against each other across every
  language-pair combination (C/Python/Go), sends short, random-alphanumeric, random-binary, and
  concurrent messages, diffs what was sent against what the server received, and prints a
  `TESTS PASSED: X/Y` summary. This is a genuine local pass/fail check, not just a runner.
- **Assignment 2** (TCP Congestion Control & Bufferbloat): only a Jupyter notebook
  (`Assignment2_Notebook.ipynb`) with plotting helpers (`plot_cwnd.py`, `plot_qsize.py`, etc.) —
  no hash-checked answers or pass/fail script found. This one is genuinely self-graded by eye
  against expected plot shapes, not self-checked by a script.
- **Assignment 3** (Passive Network Measurement) and **Assignment 4** (Network
  Security/Portscan): each ships a `testing.py` with hardcoded MD5-hash checker functions (e.g.
  `check_ips_by_flows`, `check_percent_knownbad`) that your notebook's computed answers are run
  through — a real correctness check against a known-good hash, without any submission system.
- **Assignment 5** (HTTP Proxy): `test_scripts/test_proxy.py` and `test_proxy_conc.py` fetch a
  handful of real URLs (`example.com` and others) through your proxy and diff the transaction
  against a direct connection. The scripts also try to import an optional `proxy_grade_private`
  module (not distributed publicly — that's the instructor-side grading extension) but fall back
  cleanly to the public comparison tests when it's absent, so the self-check path works standalone.

Net: no formal autograder or submission system exists, but genuine local self-check tooling
(bash test harness / hash-checked notebook answers / output-diffing scripts) covers 4 of the 5
assignments — closer to CS144's local `check` targets than to CS231n's notebook-only gradient
checks. Assignment 2 is the one exception with no built-in checker of any kind.
