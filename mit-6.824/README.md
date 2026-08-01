# MIT 6.824 — Distributed Systems

## Links

- Course site: https://pdos.csail.mit.edu/6.824/
- Lecture videos (YouTube): https://www.youtube.com/@6.824

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-15.md`), each self-contained: that
  week's lecture(s), readings, lab (assigned/in-progress), and anything due. Follows the real
  6.5840 schedule, so working through `weeks/` in order is equivalent to sitting the course.
  Spring break (Mar 23–27) falls between week-07 and week-08 — noted in week-07.md.

Lab code write-ups/status, if kept, should live inside the relevant week's file rather than a
separate top-level directory — status is more useful next to the assignment link than split out.

## Weeks

| Week | Lectures | Lab | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Intro, RPC & Threads | Lab 1 assigned | — |
| [2](weeks/week-02.md) | GFS, Paxos | Lab 2 assigned | Lab 1 |
| [3](weeks/week-03.md) | Go Patterns | Lab 3 assigned | Lab 2 |
| [4](weeks/week-04.md) | Raft (1) | — | Lab 3A |
| [5](weeks/week-05.md) | Raft (2), Linearizability | Project assigned | Lab 3B |
| [6](weeks/week-06.md) | Zookeeper, Raft Q&A | Lab 4 assigned | Lab 3C |
| [7](weeks/week-07.md) | Distributed Transactions | — | Mid-term, project proposal |
| — | *Spring break (Mar 23–27)* | | |
| [8](weeks/week-08.md) | Spanner | — | — |
| [9](weeks/week-09.md) | Chain Replication | — | Lab 3D |
| [10](weeks/week-10.md) | OCC/FaRM, IronFleet | Lab 5 assigned | Lab 4A |
| [11](weeks/week-11.md) | Memcached | — | Lab 4B+C |
| [12](weeks/week-12.md) | AWS Lambda, Ray | — | — |
| [13](weeks/week-13.md) | SUNDR, Bitcoin | — | Lab 5A |
| [14](weeks/week-14.md) | Byzantine Fault Tolerance | — | Lab 5B+C+D, project report |
| [15](weeks/week-15.md) | Project demos | — | Final exam |

## Implementation

Lab code is kept in a separate private repo (not published here), per course policy against
sharing solutions publicly.
