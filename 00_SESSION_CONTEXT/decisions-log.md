# Decisions Log — app.orcasagent.com

> Log every significant decision. Format: DEC-### | Date | Decision | Rationale | Alternatives | Impact

---

## Template (copy for new entries)
```
### DEC-### — [Date]
**Decision:** [What was decided]
**Rationale:** [Why]
**Alternatives Considered:** [Option A, Option B — and why not]
**Impact:** [Which folders/files affected]
**Status:** Proposed / Approved / Reversed
```

---

## Decisions

### DEC-001 — 2026-10-28
**Decision:** Adopt numbered folder prefix convention (00_, 01_, ...) for chronological/phase ordering.
**Rationale:** Keeps sessions naturally ordered in file explorers and matches workflow sequence.
**Alternatives Considered:** Alphabetical folders, date-based folders.
**Impact:** All 13 top-level folders use numeric prefixes.
**Status:** Approved

### DEC-002 — 2026-10-28
**Decision:** Use Markdown for all planning/research documents; JSON/YAML only for structured data (config, schema).
**Rationale:** Markdown is version-control friendly, readable in Hermes, and exports easily.
**Alternatives Considered:** Google Docs, Notion, Word.
**Impact:** All docs in `01_RESEARCH` through `08_DOCS` will be `.md`.
**Status:** Approved
