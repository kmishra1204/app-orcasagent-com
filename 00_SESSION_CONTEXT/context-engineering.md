# Context Engineering — app.orcasagent.com GTM Website

> Purpose: Single source of truth for session-to-session continuity. Every work session must read this first, then update it before ending.

---

## Project Identity
| Field | Value |
|-------|-------|
| Product | app.orcasagent.com |
| Type | GTM Marketing Website |
| Profile | work (Karuna / HCL Tech) |
| Created | Wednesday, October 28, 2026 (CDT) |
| Status | Day 0 — Foundation |

---

## Session State (CURRENT)
| Field | Value |
|-------|-------|
| Active Session | 0001 |
| Phase | Setup & Structure |
| Last Completed | Folder structure + context files created |
| Next Action | Research kickoff (competitor + user personas) |
| Blocked On | None |

---

## Folder Map
| Folder | Purpose | Owner |
|--------|---------|-------|
| `00_SESSION_CONTEXT` | Continuity, checkpoints, decisions log | All sessions |
| `01_RESEARCH` | Market, competitor, user research | Research |
| `02_PLANNING` | GTM strategy, roadmap, requirements | Planning |
| `03_ARCHITECTURE` | System design, tech stack, API | Architecture |
| `04_DATABASE` | Schema, ER diagrams, migrations | Database |
| `05_DESIGN_VISUALS` | Brand, wireframes, mockups, assets | Design |
| `06_MARKETING` | Copy, SEO, campaigns, landing content | Marketing |
| `07_CODE` | Frontend, backend, shared implementation | Engineering |
| `08_DOCS` | API docs, runbooks, onboarding | Docs |
| `99_ARCHIVE` | Deprecated drafts | Archive |

---

## Continuity Rules

### 1. Session Start Checklist
- [ ] Read `00_SESSION_CONTEXT/session-log.md` (last 3 entries)
- [ ] Read `00_SESSION_CONTEXT/checkpoint-tracker.md` (open items)
- [ ] Read `00_SESSION_CONTEXT/decisions-log.md` (recent decisions)
- [ ] Read relevant domain folder (e.g., `01_RESEARCH/` if doing research)
- [ ] Declare session goal + phase at top of new session-log entry

### 2. Session End Checklist
- [ ] Append session summary to `session-log.md`
- [ ] Update `checkpoint-tracker.md` (complete/closed items, add new blockers)
- [ ] Record any new decisions in `decisions-log.md`
- [ ] Update folder states if files were added/changed
- [ ] Tag next session's first action

### 3. Decision Logging
Every significant decision must include:
- Decision ID (DEC-001, DEC-002, ...)
- Date
- What was decided
- Why (rationale)
- Alternatives considered
- Impact on other folders

### 4. Checkpoint Format
Each checkpoint:
- CP-001: Session N — Milestone name — Status (Pending/In Progress/Done)
- Dependencies
- Deliverables
- Verification criteria

---

## Immediate Next Steps (Day 1)
1. Competitor research → `01_RESEARCH/competitor-analysis.md`
2. User personas → `01_RESEARCH/user-personas.md`
3. GTM strategy outline → `02_PLANNING/gtm-strategy.md`
4. Tech stack selection → `03_ARCHITECTURE/tech-stack.md`

---

## Open Questions
- [ ] What is the core product value proposition for orcasagent?
- [ ] Target audience: enterprise, SMB, developers?
- [ ] Preferred tech stack (Next.js, Astro, etc.)?
- [ ] CMS or static site?
- [ ] Budget/timeline for launch?