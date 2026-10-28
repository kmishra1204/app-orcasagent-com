# Page Plan — app.orcasagent.com (Superintelligence Service GTM)

> Source of truth: `agent-mesh-release` private repo (cloned to `/tmp/agent-mesh-release`).
> Every figure, claim, and rule below traces to `release-manifest.json`, `GTM_PLAYBOOK.md`, `BRAND_GUIDE.md`, `SITEMAP_AND_COPY.md`, and the prototype HTML.
> Status: **Planning complete — ready for code.** No code written yet.

---

## Tech Stack (locked — CP-005 Done)

| Layer | Selection |
|-------|-----------|
| Framework | Next.js App Router |
| Rendering | Static Site Generation (SSG) |
| Styling | Tailwind CSS |
| Content | Static MDX + JSON data pipeline |
| Hosting | Docker container (local) |
| Deploy | `docker compose up` |

---

## Sitemap (v1 Launch)

| Path | Page | Type | Primary CTA | Data Source |
|------|------|------|-------------|-------------|
| `/` | Home | Static page | Book an Assess workshop | `release-manifest.json` |
| `/legal/trademarks` | Trademarks & ownership | Static page | — | `BRAND_GUIDE.md`, `LOGO_PERMISSIONS.md` |
| `/privacy` | Privacy notice | Static page | — | `SITEMAP_AND_COPY.md` §Before go-live |

**v2 (post-launch, not in scope):** `/partners`, `/resources`

**Note:** Per `SITEMAP_AND_COPY.md`, `how-it-works`, `platforms`, `trust`, and `engage` are **anchored sections on the home page**, not separate routes in v1.

---

## Brand & Design Tokens (from `BRAND_GUIDE.md`)

| Token | Light | Dark | Role |
|-------|-------|------|------|
| Ink | `#0F1D2E` | `#E8EDF4` | Text, mark outline |
| Brass | `#9A6410` | `#E2A64A` | Accent, core, CTAs (one per view) |
| Teal | `#0D7A72` | `#3CC4B8` | Status "pass", secondary nodes |
| Rose | `#B4235A` | `#F06C9B` | Risks and gaps only |
| Paper | `#F2F4F7` | `#0B1420` | Page background |
| Line | `#D9DFE7` | `#24344A` | Rules and borders |

**Typography:**
- Display: Bricolage Grotesque 700–800 (headlines only)
- Body: IBM Plex Sans 400–600
- Data/labels: IBM Plex Mono 400–500, uppercase, 0.12–0.14em letter-spacing

**Voice:** Plain, specific, evidence-led. Preferred: governed, native-first, approved, evidence, gate, shadow mode, L1. Avoid: autonomous (unqualified), guaranteed, certified (unless true), revolutionary, superintelligent (as a claim).

**Hard Rules (non-negotiable):**
1. No third-party logos anywhere — all 11 owners are "Not requested" in `logo-register.csv`. Platform tiles stay `data-logo-status="text-only"`.
2. Plain-text platform names only in our own typeface.
3. Never say "partner", "certified", "powered by", or "endorsed" about any vendor/hyperscaler.
4. "Superintelligence" is a brand name, never a capability claim.
5. No ROI, customer names, testimonials, or prices until commercial approves.
6. All numbers come from `release-manifest.json` — never hard-coded.

---

## Page 1: Home (`/`)

**Layout:** Single responsive page, light/dark theme, sticky nav, anchored sections.

### Section 1: Hero
| Element | Content | Source |
|---------|---------|--------|
| Eyebrow | Superintelligence Service · Agent Mesh {version} | `release-manifest.json` |
| Headline | One governed agent fabric across your platforms. | `SITEMAP_AND_COPY.md` |
| Subhead | Run AI agents natively inside {kits} enterprise platforms, under one policy, one audit trail and human approval, using the vendor AI you already license. | `SITEMAP_AND_COPY.md` |
| CTA 1 (Brass) | Book an Assess workshop → `#engage` | `SITEMAP_AND_COPY.md` |
| CTA 2 (Ghost) | How it works → `#how` | `SITEMAP_AND_COPY.md` |

**Components:** `HeroSection`, `PrimaryCTA`, `GhostCTA`

---

### Section 2: Proof Strip
| Fact | Value | Source |
|------|-------|--------|
| Platforms | 23 | `release-manifest.json` totals.kits |
| Governed agents | 1,200 | `release-manifest.json` totals.agents |
| Vendor AI agents governed | 94 | `release-manifest.json` (94 vendor-native agents mapped) |
| Hardening controls | 30 | `RELEASE_NOTES.md` (H01–H30) |
| Kits validated | 23/23 | `release-manifest.json` (all validation PASS) |

**Components:** `ProofStrip`, `StatCard`

---

### Section 3: The Problem
| Element | Content |
|---------|---------|
| Eyebrow | The problem |
| Body | Every platform now ships its own AI agent, each with its own console, credits, permissions and risk. Security says no, and pilots stall. |

**Components:** `ProblemStatement`

---

### Section 4: How It Works (3 columns)
| Column | Headline | Body |
|--------|----------|------|
| 1 | Native first | The vendor's own agent, the platform's runtime, its UI and its data. We add only what's missing. |
| 2 | Governed | Every agent starts in shadow mode, then acts only with human approval. A kill switch per agent, with every action audited. |
| 3 | Connected | HCL Universal Orchestrator conducts workflows across platforms under the strictest rule of every platform involved. |

**Components:** `FeatureColumns`, `FeatureColumn`

---

### Section 5: Platforms (23 kits, grouped by owner)
**Structure:** 8 platform groups, plain-text tiles only (`data-logo-status="text-only"`).

| Group | Platforms (from `release-manifest.json`) |
|-------|------------------------------------------|
| HCLSoftware | AppScan, BigFix, CDP, Commerce, Compass, Connections, DX, DevOps Velocity, Domino, Leap, Sametime, Unica, Universal Orchestrator, Volt MX, Workload Automation, iControl |
| HCLSoftware · Actian | Informix |
| ServiceNow | ServiceNow |
| Salesforce | Salesforce |
| LogicMonitor | LogicMonitor |
| Vercel | Vercel |
| RunPod | RunPod |
| Actian | Actian Zen |

**Note:** The `build_site.py` groups 16 HCL + 1 HCL/Actian + 1 ServiceNow + 1 Salesforce + 1 LogicMonitor + 1 Vercel + 1 RunPod + 1 Actian = 23 total.

**Components:** `PlatformGroup`, `PlatformTile` (text-only until logo approved)

**Footer note:** Names identify platforms only. Logos appear only with each owner's written permission. No partnership or endorsement is implied.

---

### Section 6: Trust (6 hardening groups)
| Group | Description |
|-------|-------------|
| Identity | Least privilege, vault-held secrets, MFA for approvers |
| Agent safety | Prompt-injection defence, tool allow-lists, step and cost caps |
| Data | Regional processing, zero-retention model terms |
| Supply chain | SBOMs, signed images, pinned MCP servers |
| Operations | Hash-chained audit to your SIEM, anomaly pause, DR drills |
| Governance | Red-team before promotion, framework mapping, evidence per gate |

**Footer note:** Every fact we rely on is tagged confirmed or still to verify, and verified in your sandbox before it is used.

**Components:** `TrustGrid`, `TrustCard`

---

### Section 7: Engage (4 stages with gates)
| Stage | Duration | Deliverables | Exit Gate |
|-------|----------|--------------|-----------|
| Assess | 2–3 weeks | Signed native map per platform, licence BOM, wave plan | Sponsor approves the wave plan |
| Pilot | 30 days | One platform from verification to agents at L1, with gate evidence | Go/no-go for sub-prod |
| Scale | Per wave | Sub-prod and production through your change board; cross-platform workflows | Agents promoted on evidence |
| Operate | Ongoing | Agent operations, evals, red-teaming and versioned releases | Quarterly value review |

**Components:** `StageCards`, `StageCard`

---

### Section 8: Closing CTA
| Element | Content |
|---------|---------|
| Background | Ink (#0F1D2E) |
| Headline | Start with a two-week Assess. |
| Body | Leave with a signed native map for every platform you run, and a plan your security team has already reviewed. |
| CTA | Contact: add your sales address here |

**Components:** `ClosingCTA`

---

### Footer
| Element | Content |
|---------|---------|
| Line 1 | © Superintelligence Service. Prototype: the name and claims are pending legal and trademark review. |
| Line 2 | Product and company names are trademarks of their respective owners, used for identification only. No endorsement or partnership is implied. |

**Components:** `Footer`

---

## Page 2: Legal / Trademarks (`/legal/trademarks`)

**Purpose:** Trademark clearance status, ownership notices, logo permission register status.

| Section | Content |
|---------|---------|
| Name status | "Superintelligence Service" — pending trademark and domain clearance (not cleared for public launch) |
| Logo register | 11 owners, all "Not requested" — table with owner, marks covered, rule, status |
| Plain-text rule | Product and company names are trademarks of their respective owners, used for identification only. No endorsement or partnership is implied. |
| Third-party rule | No third-party logo until register shows Approved with matching scope and filed evidence |

**Components:** `TrademarkNotice`, `LogoRegisterTable`

---

## Page 3: Privacy (`/privacy`)

**Purpose:** Privacy notice required before go-live (prototype has no form backend; add one through host's form service).

| Section | Content |
|---------|---------|
| Data collected | Name, work email, company, platforms, message (via "Book an Assess" form only) |
| Storage | Never stored in the repo |
| Backend | Host's form service (Netlify Forms, Vercel + form API, or Formspree) |
| Consent | Analytics hook present but inactive until consent decision |

**Components:** `PrivacyNotice`

---

## Component Inventory (for Next.js build)

| Component | Purpose | Page(s) |
|-----------|---------|---------|
| `Nav` | Sticky header, brand mark + links + CTA | All |
| `HeroSection` | Eyebrow, headline, subhead, dual CTAs | Home |
| `PrimaryCTA` / `GhostCTA` | Brass button / outline button | Home |
| `ProofStrip` | 5 stat cards from release-manifest.json | Home |
| `StatCard` | Big number + label | Home |
| `ProblemStatement` | Problem copy | Home |
| `FeatureColumns` | 3-col grid (Native first / Governed / Connected) | Home |
| `FeatureColumn` | Single column with h3 + p | Home |
| `PlatformGroup` | Owner heading + tile grid | Home |
| `PlatformTile` | Text-only tile, `data-logo-status` prop | Home |
| `TrustGrid` | 6-col grid of hardening groups | Home |
| `TrustCard` | Group name + description | Home |
| `StageCards` | 4-stage grid with duration + gate | Home |
| `StageCard` | Duration pill, h3, description | Home |
| `ClosingCTA` | Dark background, headline, CTA | Home |
| `Footer` | Copyright, trademark footnote | All |
| `TrademarkNotice` | Name clearance status | /legal/trademarks |
| `LogoRegisterTable` | 11-owner permission status | /legal/trademarks |
| `PrivacyNotice` | Data collection + form backend notice | /privacy |

---

## Data Pipeline (build-time)

```
release-manifest.json  →  totals (kits, agents, intents)
                         →  kit list (23 entries: slug, version, agents, intents)
                         →  grouped by owner (for Platforms section)
native-agents.json     →  per-kit native agent counts (94 total vendor AI agents)
```

**Rule:** Never hard-code `23`, `1200`, `94`, `30`, or `23/23`. Generate at build time from `release-manifest.json` (porting logic from `gtm/website/build_site.py`).

---

## Quality Bar (from `DEV_TEAM_STARTER.md`)

| Metric | Target |
|--------|--------|
| WCAG | 2.2 AA (contrast, keyboard nav, alt text, landmarks) |
| Lighthouse | 95+ (performance, accessibility, best practices, SEO) |
| Fonts | Self-hosted or preloaded with fallbacks |
| Logos | SVG inline or optimized |
| SEO | Title + meta description from SITEMAP_AND_COPY.md, Open Graph, Twitter cards, sitemap.xml, robots.txt, canonical URL |
| Form | "Book an Assess" — name, work email, company, platforms, message. Privacy notice must exist first. |
| Analytics | None until consent decision. Single documented hook only. |

---

## Next Steps (in order)

1. **Initialize Next.js** in `07_CODE/frontend/` (App Router, Tailwind, TypeScript)
2. **Create data pipeline** script to read `release-manifest.json` and emit JSON for build
3. **Build components** in order: Nav → Footer → Hero → ProofStrip → Problem → FeatureColumns → PlatformGroup/Tile → TrustGrid → StageCards → ClosingCTA
4. **Assemble home page** with all 8 anchored sections
5. **Build /legal/trademarks and /privacy**
6. **Add sitemap.xml, robots.txt, Open Graph tags**
7. **Docker build** → `make up` → verify on localhost:3000
8. **Commit** to `origin/master`

---

**All source material is in `/tmp/agent-mesh-release/` and referenced in your project folders.** Tell me which page or component to build first, and I'll write the Next.js code directly from this plan.