---
category: Machine Learning
level: Advanced
tags: [nlp, deep-learning]
---
# Stanford CS224N — Natural Language Processing with Deep Learning

## Links

- Course site: https://web.stanford.edu/class/cs224n/
- Lecture notes: no separate notes site — the site's `readings/` folder has written notes PDFs
  for the classic early topics only (word vectors, neural nets, language models/RNNs,
  self-attention/transformers). Newer topics (final projects, pretraining, post-training, PEFT,
  agents/RAG, benchmarking, reasoning, guest lectures, social impact, multimodality, open
  questions) have no written notes — slides/video only.
- Assignments: linked per-lecture on the schedule below (`assignments_w26/a1.zip` … `a4.zip`,
  with PDF handouts and LaTeX templates for the written parts of a2–a4).
- Final project: https://web.stanford.edu/class/cs224n/project/ — Default Final Project
  (minimalist GPT-2 implementation) or a Custom Final Project.
- Lecture videos: Winter 2026's recordings are Canvas-hosted, restricted to enrolled students.
  This syllabus links the **Spring 2024** YouTube playlist instead
  (https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D), topped up with a
  handful of **2023** clips the 2024 playlist itself splices in for topics 2024 didn't re-record
  (pretraining, self-attention/transformers, and three guest lectures — interpretability,
  multimodality, and the tutorial sessions). CS224N's syllabus is rewritten most years to track
  the frontier of NLP/LLM research, so several Winter 2026 lectures — especially the guest
  lectures in weeks 7–10 (tokenization/multilinguality, social impact, Tinker/LoRA, open
  questions) — have **no public video counterpart at all**; this is called out explicitly in each
  week's file rather than forced into a mismatched substitute.
- Textbook: no required textbook. Recommended, all free online:
  - Jurafsky & Martin, *Speech and Language Processing* (2024 pre-release) — https://web.stanford.edu/~jurafsky/slp3/
  - Eisenstein, *Natural Language Processing* (notes) — https://github.com/jacobeisenstein/gt-nlp-class/blob/master/notes/eisenstein-nlp-notes.pdf
  - Goldberg, *A Primer on Neural Network Models for NLP* — http://u.cs.biu.ac.il/~yogo/nnlp.pdf
  - Goodfellow, Bengio & Courville, *Deep Learning* — http://www.deeplearningbook.org/
  - Nielsen, *Neural Networks and Deep Learning* — http://neuralnetworksanddeeplearning.com
  - Tunstall, von Werra & Wolf, *Natural Language Processing with Transformers* (paywalled, no free link) — https://transformersbook.com/

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-10.md`), matching the real Winter
  2026 schedule's own week numbers, with calendar dates stripped since this is meant to be worked
  through at your own pace. Tutorial sessions (Python review, PyTorch, Hugging Face) are included
  alongside the graded lectures since they're part of the same weekly schedule.

Assignment/project code, if kept, lives inside the relevant week's file rather than a separate
top-level directory.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | History of NLP, Word Vectors, Python Review (tutorial) | A1 Intro to Word Vectors | — |
| [2](weeks/week-02.md) | Backprop & Neural Network Basics, Language Models & RNNs, PyTorch (tutorial) | A2 NN Foundations & Dependency Parsing | A1 Intro to Word Vectors |
| [3](weeks/week-03.md) | Transformers, Final Projects Overview & Practical Tips | A3 Self-Attention & Transformers | A2 NN Foundations & Dependency Parsing |
| [4](weeks/week-04.md) | Pretraining, Post-training (RLHF, SFT, DPO) | — | — |
| [5](weeks/week-05.md) | Efficient Adaptation (Prompting + PEFT), Agents/Tool Use/RAG, Hugging Face (tutorial) | A4 LLM Benchmarking & Evaluation | A3 Self-Attention & Transformers |
| [6](weeks/week-06.md) | Benchmarking & Evaluation, Reasoning 1 | Project Proposal | Project Proposal |
| [7](weeks/week-07.md) | Reasoning 2, Guest: Tokenization & Multilinguality | — | A4 LLM Benchmarking & Evaluation |
| [8](weeks/week-08.md) | Guest: Interpretability, Social & Broader Impacts of NLP | — | Project Milestone |
| [9](weeks/week-09.md) | Guest: Multimodality, Guest: Tinker & LoRA Without Regret | — | — |
| [10](weeks/week-10.md) | Open Questions in NLP 2026 (no lecture Thu) | — | Project Report, Project Poster |

## Implementation

Assignments 1–4 are Python (numpy/PyTorch) programming assignments with a written-math component
(LaTeX template provided for a2–a4). The final project is either a from-scratch GPT-2
implementation (Default) or an open-ended Custom project. Code, if kept, lives in a separate
private repo, matching the policy used for the other courses here.

## Self-study access

Homeworks are graded through Gradescope (course-specific, no public entry code found), so there's
no official non-enrolled grading path. Local self-checking differs per assignment — checked by
downloading each zip:

- **A1** (`exploring_word_vectors.ipynb`) — a self-contained notebook with inline expected
  plots/outputs to compare against, no separate grader.
- **A2** (`parser_transitions.py`, `parser_model.py`) — each module has its own CLI-invocable
  self-tests (e.g. `python parser_transitions.py part_c`) rather than a single grader script.
- **A3** (`cs224n-A3-student/`) — ships a real local test suite: `pytest` against
  `tests/test_student.py` and pre-computed snapshot tensors in `tests/snapshots/`.
- **A4** (`cs224n-A4-student/`) — evaluation-style assignment (GSM8K eval, red-teaming, LLM-judge
  scripts against a live model API); self-run and self-inspected rather than pass/fail.

The final project has no formal autograder at all — proposal/milestone/report are feedback-graded
by course staff, so a self-studier's checkpoint is entirely the four assignments' local tests.
