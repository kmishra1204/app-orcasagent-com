# Component Inventory — app.orcasagent.com

> Build-ready component list derived from `02_PLANNING/page-plan.md` and `agent-mesh-release` prototype.
> No code written yet. Awaiting build order.

## Layout Components (all pages)
| Component | Props | Notes |
|-----------|-------|-------|
| `Nav` | none | Sticky, brand mark (SIS SVG mark), nav links, Book an Assess CTA |
| `Footer` | none | Copyright + trademark footnote, ink background variant for closing |

## Home Page Components (`/`)
| Component | Props | Sections |
|-----------|-------|----------|
| `HeroSection` | version (string) | Eyebrow, headline, subhead, dual CTAs |
| `PrimaryCTA` | href, children | Brass button |
| `GhostCTA` | href, children | Outline button |
| `ProofStrip` | stats (array) | 5 stat cards from release-manifest.json |
| `StatCard` | value, label | Big number + muted label |
| `ProblemStatement` | none | Problem copy |
| `FeatureColumns` | none | 3-col: Native first / Governed / Connected |
| `FeatureColumn` | title, body | Single column |
| `PlatformGroup` | owner, platforms (array) | Owner heading + tile grid |
| `PlatformTile` | name, logoStatus | Text-only until logo approved |
| `TrustGrid` | none | 6 hardening groups |
| `TrustCard` | group, description | Single group |
| `StageCards` | none | 4 stages: Assess / Pilot / Scale / Operate |
| `StageCard` | duration, title, body, gate | Duration pill + h3 + description |
| `ClosingCTA` | none | Dark background, headline, CTA |

## Legal Pages
| Component | Props | Page |
|-----------|-------|------|
| `TrademarkNotice` | none | /legal/trademarks |
| `LogoRegisterTable` | owners (array) | /legal/trademarks |
| `PrivacyNotice` | none | /privacy |

## Data Pipeline
| Script | Input | Output |
|--------|-------|--------|
| `scripts/build-data.js` | `release-manifest.json`, per-kit `native-agents.json` | `data/site.json` (totals, kit list, owner groups) |
