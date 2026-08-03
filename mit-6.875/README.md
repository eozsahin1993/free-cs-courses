---
university: MIT
code: 6.875/6.5620
category: Security
level: Advanced
tags: [cryptography, zero-knowledge, complexity-theory, theory]
---

# MIT 6.875/6.5620 — Foundations of Cryptography

## Links

- Current course site (Fall 2025, taught by Yael Kalai): https://mit6875.github.io/ — the
  live syllabus, lecture notes, and problem sets, but its lecture videos are recorded to MIT's
  internal Panopto system and require MIT login (confirmed gated, not public).
- **Schedule used by this repo (Fall 2021, taught by Vinod Vaikuntanathan):**
  https://mit6875.github.io/fall2021.html — chosen over the current offering because it's the
  most recent public-video offering: 24 of its 25 lectures have publicly viewable recordings
  (verified via Vimeo's oEmbed API, no login required); only the final lecture (Dec 8) has no
  recording. The two more recent Vaikuntanathan offerings (Fall 2022, Fall 2023) and the current
  Kalai offering (Fall 2025) all record to Panopto instead and are not public. Topic coverage is
  close to, but not identical to, the current syllabus — Fall 2021 doesn't include the newer
  Succinct Proofs / Quantum Cryptography material Kalai has since added, and instead ends with
  oblivious transfer, PIR, and secure multiparty computation (see `weeks/week-14.md`).
- Lecture videos: individual Vimeo links per lecture, posted by the course's Vimeo account
  (https://vimeo.com/user150298776), linked from each lecture below. For 13 of the 25 lectures
  there's also a public YouTube alternative from the "MIT 6.875 (Cryptography), Spring 2018"
  playlist (https://www.youtube.com/playlist?list=PL6ogFv-ieghe8MOIcpD6UDtdK-UMHG8oH, 23 videos,
  student-recorded, no login required) — linked as "Video (alt, YouTube)" wherever its lecture
  order happens to match the same topic as the Fall 2021 lecture. Spring 2018 is kept as a
  secondary option rather than the primary source because its own lecture order differs
  substantially from Fall 2021's (e.g. one-way functions before PRGs, signatures before
  zero-knowledge), so only about half its lectures line up topic-for-topic with the schedule
  used here.
- Slides and lecture notes: hosted alongside the Fall 2021 schedule page above
  (`SLIDES/lecNN.pptx`, `HANDOUTS/*.pdf`), linked per-lecture below.
- Problem sets: **Fall 2021's own problem set specs were never publicly posted** — the course
  site only links a generic (login-gated) Gradescope/Piazza, with no per-assignment PDF. The
  current Fall 2025 offering does publish its 5 problem sets publicly
  (https://mit6875.github.io/, `PSETS_FALL25/*.pdf`) — used here as substitute self-study
  material, matched to each Fall 2021 HW by how far into the course it falls (HW1→PSET1,
  HW2→PSET2, HW3→PSET3, HW4→PSET4, HW5/HW6→PSET5, since Fall 2025 only has 5 psets against
  Fall 2021's 6). Direct links are inline in each week's Assigned/Due entries below. The
  numbering and week-by-week pacing won't line up exactly with the Fall 2021 schedule used here,
  since it's a different offering/instructor.
- Textbooks:
  - Boneh & Shoup, *A Graduate Course in Applied Cryptography* — free: http://toc.cryptobook.us/book.pdf
  - Rosulek, *The Joy of Cryptography* — free: https://web.engr.oregonstate.edu/~rosulekm/crypto/
  - Katz & Lindell, *Introduction to Modern Cryptography* — recommended, but paywalled; no free
    link found.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-14.md`), matching the real Fall
  2021 Monday/Wednesday schedule (25 lectures across 14 weeks), with calendar dates stripped
  since this is meant to be worked through at your own pace. Two Monday slots have no lecture
  (Oct 11 — Indigenous Peoples' Day; Nov 24 — Thanksgiving), noted as dash rows in the table below
  and inside the relevant week's file. The final lecture (Dec 8) has no video or slides posted —
  noted in `weeks/week-14.md`.

Problem set write-ups, if kept, should live inside the relevant week's file rather than a
separate top-level directory.

## Format

The course has no programming component — problem sets are written, LaTeX-typeset proofs
(complexity-theoretic reductions, security proofs, protocol constructions), not code. There's no
lab/starter-code repo to track here.

## Self-study access

No official non-enrolled grading path was found for either offering — problem sets (from either
year) are self-checked only, with no published solutions. The Fall 2021 offering's own Piazza and
Gradescope are gated to enrolled students.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Perfect Secrecy, One-Time Pad, Shannon's Lower Bound | HW1 | — |
| [2](weeks/week-02.md) | Computational Security & PRGs; Hybrid Argument, PRF Definitions, Secret-Key Encryption | — | — |
| [3](weeks/week-03.md) | GGM PRF Construction; Authentication, MACs, CCA Security | HW2 | HW1 |
| [4](weeks/week-04.md) | One-Way Functions, Hard-Core Bits, Goldreich-Levin; Discrete Log, Diffie-Hellman, Naor-Reingold PRF | — | — |
| [5](weeks/week-05.md) | Public-Key Encryption, Trapdoor Permutations; RSA, QRA, Goldwasser-Micali Encryption | HW3 | HW2 |
| [6](weeks/week-06.md) | *(no lecture — Indigenous Peoples' Day)*; Digital Signatures, EUF-CMA, Lamport Signatures, Collision-Resistant Hashing | — | — |
| [7](weeks/week-07.md) | Stateful Signatures, Naor-Yung; Trapdoor Permutations, Hash-and-Sign, Random Oracle | — | — |
| [8](weeks/week-08.md) | Zero-Knowledge: Definitions & Examples; Zero-Knowledge (continued) | HW4 | HW3 |
| [9](weeks/week-09.md) | ZK for NP, Schnorr Proofs of Knowledge; Non-Interactive Zero-Knowledge | — | — |
| [10](weeks/week-10.md) | NIZK Applications, Non-Malleable Crypto; Lattice-Based Crypto, Learning With Errors | HW5 | HW4 |
| [11](weeks/week-11.md) | Homomorphic Encryption, FHE; FHE (continued) | — | — |
| [12](weeks/week-12.md) | Oblivious Transfer, Private Information Retrieval; *(no lecture — Thanksgiving)* | HW6 | HW5 |
| [13](weeks/week-13.md) | Secure Multiparty Computation, Mental Games; Verifiable Secret Sharing, Threshold Cryptography | — | — |
| [14](weeks/week-14.md) | Concluding Topics; Final Lecture (no recording/slides posted) | — | HW6 |
