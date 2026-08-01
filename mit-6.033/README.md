# MIT 6.033 — Computer System Engineering

## Links

- Course site: https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/
  (Spring 2018, Katrina LaCurts) — syllabus, calendar, all 14 weeks of lecture outlines/slides,
  recitation readings, hands-on assignments, and the design project brief.
- Textbook: Saltzer & Kaashoek, *Principles of Computer System Design: An Introduction*.
  Part I (Ch. 1–6: naming, enforced modularity, virtual memory, threads, performance) is a
  print-only Morgan Kaufmann book (ISBN 9780123749574) — no free copy exists, so `weeks/*.md`
  cites section numbers without a link for those chapters. Part II (Ch. 7–11: networks, fault
  tolerance, atomicity, security) *is* free — MIT republished it as an open OCW resource:
  https://ocw.mit.edu/courses/res-6-004-principles-of-computer-system-design-an-introduction-spring-2009/
  — linked directly per chapter where used.
- Lecture videos (YouTube): 6.033 was never re-recorded and posted publicly the way 6.824 or
  15-445 were. The only full lecture-video archive that exists anywhere is the **Spring 2005**
  offering (Robert Morris & Samuel Madden), playlist:
  https://www.youtube.com/playlist?list=PL6535748F59DCA484 — 13 years before the 2018 materials
  this syllabus otherwise uses. Since the two offerings don't line up 1:1, each `weeks/*.md` file
  links whichever 2005 lecture covers the closest-matching topic to that week's 2018 lecture, and
  says so explicitly where no 2005 lecture matches at all (e.g. the 2018 course's dedicated BGP,
  P2P/CDN, DDoS/botnet, Bitcoin, and Tor lectures — none of which existed as separate 2005
  lectures). Separately: the 2005 playlist's own first uploaded video is labeled "Lec 4" — its
  first three lectures (Intro, Complexity, Abstractions) appear to have never been recorded, so
  2018's opening lecture also has no 2005 counterpart for that reason.
- No official solutions are published for hands-on assignments, critiques, or quizzes on OCW —
  see "Format" below for what that means for self-study.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-14.md`), each self-contained: that
  week's lecture(s), recitation(s), and anything assigned/due. Mirrors the real Spring 2018
  schedule's pacing and ordering (26 lectures across 14 weeks), but with calendar dates stripped
  out since this is meant to be worked through at your own pace. The published 2018 calendar page
  doesn't call out a spring break between any two weeks (unlike 6.824/15-445/15-721's source
  semesters), so none is marked here.

## Format — hands-on assignments and the design project are reading/writing exercises, not code

Unlike mit-6.824 or cmu-15445, 6.033 has no programming labs and no BusTub-style codebase. The
real course's grading is 35% technical material (quizzes 30% + hands-on experiments 5%), 40%
communication/design (design project 30% + critiques 6% + peer review 4%), 25% participation.
What that means for self-study:

- **Hands-on assignments** (7 of them, e.g. the DNS, UNIX, Eraser, and MapReduce assignments) are
  short written-response exercises tied to a recitation's reading — answer the questions in your
  own words. No solution key is published; self-check against the source paper/reading.
- **System critiques** (2 of them: DNS in week 2, MapReduce in week 6) are 2–3 page written
  critiques of a real system. Same deal — self-graded, no published rubric answer key, though the
  assignment prompts themselves are public.
- **Quizzes** (2 of them) are closed-collaboration, open-book written exams. No official solutions
  or practice exams are published on OCW; the syllabus and calendar linked above are the only
  public artifacts.
- **Design project**: a term-long, 3-person-team system design (not code) — preliminary report,
  presentation, final report, and peer review of another team's report. Full assignment specs and
  grading rubrics *are* public: https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/pages/design-project/
  (including two full example student reports). There's no self-study team to peer-review, and no
  external submission/grading mechanism the way 15-445 has via Gradescope — treat it as a solo
  design-writing exercise: pick a real system, write the preliminary and final reports against the
  rubric, and self-assess.

## Weeks

| Week | Lectures | Assignment | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Coping with Complexity: Enforced Modularity | Critique 1 (DNS) assigned | — |
| [2](weeks/week-02.md) | Naming in Systems, Operating Systems + Virtual Memory | Hands-on 1 (DNS), Hands-on 2 (UNIX Pt. 1) assigned | Critique 1 (DNS) |
| [3](weeks/week-03.md) | Bounded Buffers + Locks, Threads | Design Project assigned (Preliminary Report) | Hands-on 2 (UNIX, both parts) |
| [4](weeks/week-04.md) | OS Structure + Virtual Machines, Performance | Critique 2 (MapReduce), Hands-on 3 (MapReduce) assigned | — |
| [5](weeks/week-05.md) | Introduction to Networking, Routing | Hands-on 4 (Reliable Transport) assigned | — |
| [6](weeks/week-06.md) | Networking: Routing (BGP), Transport Layer | Hands-on 5 (Internet Routes/RTT) assigned | Critique 2 (MapReduce) |
| [7](weeks/week-07.md) | In-Network Resource Management, P2P Networks + CDN | — | Design Project Preliminary Report |
| [8](weeks/week-08.md) | Fault Tolerance: Reliability via Replication, Intro to Transactions | Design Project Presentation | — |
| [9](weeks/week-09.md) | Atomicity via Logging, Fault Tolerance: Isolation | Hands-on 6 (Write-Ahead Log) assigned | — |
| [10](weeks/week-10.md) | Distributed Transactions | Hands-on 7 (Databases) assigned | — |
| [11](weeks/week-11.md) | Availability via Replication, Introduction to Security | Design Project Peer Review assigned | — |
| [12](weeks/week-12.md) | Authentication and Passwords, Secure Channels | — | — |
| [13](weeks/week-13.md) | Network Security + DDoS, Bitcoin | — | Design Project Final Report, Peer Review |
| [14](weeks/week-14.md) | Tor, Policy vs. Mechanism | — | Quiz 2 |

Quiz 1 is administered in week 8 (see `weeks/week-08.md`); Quiz 2 in week 14 (see `weeks/week-14.md`).
