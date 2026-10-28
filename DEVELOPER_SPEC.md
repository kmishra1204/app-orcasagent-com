# SUPERINTELLIGENCE SERVICE GTM WEBSITE
## Complete Developer Specification & Implementation Guide

**Project:** app.orcasagent.com  
**Product:** Superintelligence Service — Governed Agent Fabric  
**Version:** 1.0 | **Date:** 2026-10-28  
**Status:** Implementation Ready — Research Complete  

---

## 1. PROJECT OVERVIEW

### 1.1 What We're Building
A **static marketing website** for "Superintelligence Service" — a B2B enterprise product that provides a governed agent fabric across 23 enterprise platforms (ServiceNow, Salesforce, HCL Software suite, LogicMonitor, Vercel, RunPod, Actian, etc.) built on Agent Mesh Release 1.0.5.

### 1.2 Target Audience
- **Primary:** CIOs, CISOs, CDOs at large enterprises (5,000+ employees) running 3+ of the 23 platforms
- **Secondary:** Platform owners, Enterprise Architects, Procurement, Security/Risk teams
- **Triggers:** Vendor AI rollout stalled in security review, AI governance mandate, platform consolidation

### 1.3 Core Value Proposition
> **"One governed agent fabric across your platforms."**
>
> Run AI agents natively inside 23 enterprise platforms under one policy, one audit trail, and human approval — using the vendor AI you already license.

### 1.4 Key Differentiators (from GTM Playbook)
| Pillar | Message | Proof |
|--------|---------|-------|
| **One Standard** | Every platform's agents follow one contract | 23 kits, 1 schema, 16 labels/agent, 33 automated checks, 23/23 passing |
| **Native First** | Use each platform's own AI, UI, data, change path | 94 vendor AI agents mapped with licence BOMs; native map across 9 areas/platform |
| **Safe by Default** | Nothing acts without approval until it earns trust | Shadow mode → L1; 4-eyes for high/critical; 30 hardening controls; kill switch/agent |
| **Honest Evidence** | We tell you what's confirmed vs. still to verify | Every fact tagged CONFIRMED/BEST-EFFORT/UNVERIFIED; 209 facts on sandbox checklist |

---

## 2. RESEARCH FOUNDATION (DO NOT RE-RESEARCH)

All research is **complete and documented**. Reference these files in the repository:

### Primary Research
- **`01_RESEARCH/agent-mesh-literature-review.md`** — 25 KB agnostic literature synthesis covering:
  - 4-layer architecture (Identity, Trust/Protocol, Governance, Reward)
  - A2A/MCP/IATP/ACP protocol bridge matrix
  - Governance promotion ladder (Veto → Shadow → L1 → L2 → L3)
  - Native-first principle with 9-area decision matrix
  - Universal Orchestrator (UnO) strictest-wins cross-mesh policy
  - Hardening baseline H01–H30 (8 categories, 30 controls)
  - Kit anatomy, 16 mandatory labels, freezing criteria
  - Comparative analysis vs Service Mesh / MAS
  - 8 open research questions, 26-term glossary

### Source of Truth (Private Repo — Already Cloned)
**Location:** `/tmp/agent-mesh-release/` (or clone from `kmishra1204/agent-mesh-release`)

**Critical Source Files:**
| File | Purpose |
|------|---------|
| `release-manifest.json` | **ALL NUMBERS** — 23 kits, 1,200 agents, 3,546 intents, 94 vendor-native agents |
| `gtm/brand/BRAND_GUIDE.md` | Colors, typography, voice, logo files, hard constraints |
| `gtm/playbook/GTM_PLAYBOOK.md` | Positioning, ICP, personas, offers, partner motions, objections, 30-60-90 plan |
| `gtm/website/SITEMAP_AND_COPY.md` | **ALL COPY**, sitemap, SEO, pre-go-live checklist |
| `gtm/website/build_site.py` | Data pipeline logic (port this to build-time script) |
| `gtm/website/site/index.html` | Working visual prototype (reference implementation) |
| `gtm/brand/*.svg` | Logo files (lockup light/dark/mono, mark light/dark) |
| `gtm/logos/logo-register.csv` | Logo status — **ALL "Not requested"** |
| `gtm/logos/LOGO_PERMISSIONS.md` | Logo workflow rules |
| `gtm/executive/EXECUTIVE_BRIEF.md` | Executive summary |

---

## 3. TECHNICAL SPECIFICATION

### 3.1 Tech Stack (LOCKED)
| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Framework | Next.js App Router | 15.1.0 | React 18, Static Export |
| Language | TypeScript | 5.x | Strict mode |
| Styling | Tailwind CSS | 3.4+ | CSS variables for brand tokens |
| Motion | Framer Motion | 11.x | Client components only |
| Fonts | Google Fonts | — | Self-host or preload with fallbacks |
| Build Output | Static Export | — | `output: 'export'` in next.config.js |
| Hosting | Docker Container (Local) | — | `docker compose up` on port 3000 |

### 3.2 Repository Structure
```
app-orcasagent.com/
├── 00_SESSION_CONTEXT/        # Continuity tracking (session logs, checkpoints, decisions)
├── 01_RESEARCH/               # Research artifacts
├── 02_PLANNING/               # Page plan, component inventory, data pipeline
├── 03_ARCHITECTURE/           # Tech stack decisions
├── 04_DATABASE/               # Schema (future)
├── 05_DESIGN_VISUALS/         # Brand guidelines, assets
├── 06_MARKETING/              # Copy, SEO, campaigns
├── 07_CODE/
│   ├── frontend/              # NEXT.JS APP (primary deliverable)
│   │   ├── app/               # App Router pages
│   │   ├── components/        # React components
│   │   ├── lib/               # Utilities, constants
│   │   ├── data/              # Build-time JSON data
│   │   ├── public/            # Static assets
│   │   └── styles/            # Global styles
│   ├── backend/               # Not needed for v1 (static site)
│   └── shared/                # Types, constants
├── 08_DOCS/                   # API docs, runbooks
├── 99_ARCHIVE/                # Deprecated drafts
├── Dockerfile                 # Multi-stage build
├── docker-compose.yml         # Local orchestration
├── Makefile                   # build/up/down/logs/ps/shell/clean/dev
└── .env.example               # Environment template
```

### 3.3 Existing Implementation (ALREADY DONE)
| Component | File | Status |
|-----------|------|--------|
| HeroSection | `07_CODE/frontend/components/hero-section.tsx` | ✅ Complete |
| Tailwind Config | `07_CODE/frontend/tailwind.config.js` | ✅ Brand tokens, animations |
| Global Styles | `07_CODE/frontend/app/globals.css` | ✅ CSS variables, light/dark |
| Next Config | `07_CODE/frontend/next.config.js` | ✅ Static export |
| Data File | `07_CODE/frontend/data/site.json` | ✅ From release-manifest.json |
| Build Pipeline | `scripts/build-data.js` | ⏳ Needs creation |

---

## 4. BRAND & DESIGN SPECIFICATION (EXACT — NO DEVIATION)

### 4.1 Color Tokens (CSS Variables — USE THESE EXACTLY)

```css
:root {
  /* Light theme (default) */
  --ink-light: #0F1D2E;
  --brass-light: #9A6410;
  --teal-light: #0D7A72;
  --rose-light: #B4235A;
  --paper-light: #F2F4F7;
  --line-light: #D9DFE7;

  /* Dark theme */
  --ink-dark: #E8EDF4;
  --brass-dark: #E2A64A;
  --teal-dark: #3CC4B8;
  --rose-dark: #F06C9B;
  --paper-dark: #0B1420;
  --line-dark: #24344A;

  /* Semantic aliases (use these in components) */
  --ink: var(--ink-light);
  --brass: var(--brass-light);
  --teal: var(--teal-light);
  --rose: var(--rose-light);
  --paper: var(--paper-light);
  --line: var(--line-light);
  --brass-soft: #f5e9d4;   /* light */
  --brass-soft-dark: #2c2414; /* dark */
}

[data-theme="dark"] {
  --ink: var(--ink-dark);
  --brass: var(--brass-dark);
  --teal: var(--teal-dark);
  --rose: var(--rose-dark);
  --paper: var(--paper-dark);
  --line: var(--line-dark);
  --brass-soft: var(--brass-soft-dark);
}
```

### 4.2 Typography (Google Fonts — Self-Host or Preload)

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| **Display** | Bricolage Grotesque | 700, 800 | Headlines only |
| **Body** | IBM Plex Sans | 400, 500, 600 | Body text, UI |
| **Mono** | IBM Plex Mono | 400, 500 | Data, labels, uppercase (0.12–0.14em letter-spacing) |

**Implementation:** Self-host via `next/font/google` or preload with system-ui fallbacks.

### 4.3 Voice & Copy Rules (STRICT)

| ✅ Use | ❌ Never Use |
|--------|--------------|
| governed, native-first, approved, evidence, gate, shadow mode, L1 | autonomous (unqualified), guaranteed, certified (unless true), revolutionary, superintelligent (as claim) |
| "using the vendor AI you already license" | "replace your AI" |
| "governed agent fabric" | "AI platform" |

### 4.4 Logo & Visual Assets
- **Logo files:** `gtm/brand/sis-lockup-light.svg`, `sis-lockup-dark.svg`, `sis-lockup-mono.svg`, `sis-mark.svg`, `sis-mark-dark.svg`
- **Favicon:** Use `sis-mark.svg` (inline or `/public/favicon.svg`)
- **NO third-party logos** — all 11 owners in `logo-register.csv` are "Not requested"
- **Platform tiles = TEXT-ONLY** with `data-logo-status="text-only"`

---

## 5. SITEMAP & PAGE SPECIFICATION

### 5.1 V1 Scope (Build These)

| Route | Page | Type | Primary CTA |
|-------|------|------|-------------|
| `/` | Home | Single page, 8 anchored sections | Book an Assess workshop |
| `/legal/trademarks` | Trademarks & Ownership | Static page | — |
| `/privacy` | Privacy Notice | Static page | — |

### 5.2 Home Page — 8 Anchored Sections (IN ORDER)

| # | Section | Anchor | Content Source |
|---|---------|--------|----------------|
| 1 | **Hero** | `#top` | Eyebrow, Headline, Subhead, Dual CTAs, Proof Strip Teaser |
| 2 | **Proof Strip** | — | 5 stat cards from `release-manifest.json` |
| 3 | **Problem** | — | "Every platform now ships its own AI agent..." |
| 4 | **How It Works** | `#how` | 3 cols: Native First / Governed / Connected |
| 5 | **Platforms** | `#platforms` | 23 tiles × 8 owner groups (text-only) |
| 6 | **Trust** | `#trust` | 6 hardening groups + verification note |
| 7 | **Engage** | `#engage` | 4 stages: Assess → Pilot → Scale → Operate |
| 8 | **Closing CTA** | `#engage` | "Start with a two-week Assess..." |

### 5.3 Legal Pages
| Page | Content |
|------|---------|
| `/legal/trademarks` | "Superintelligence Service" pending trademark clearance; logo register table (11 owners, all "Not requested"); plain-text naming rules |
| `/privacy` | Data collected (name, work email, company, platforms, message); form backend via host service; analytics hook (inactive until consent) |

---

## 6. COMPONENT SPECIFICATION (16 COMPONENTS)

### Layout Components (All Pages)
| Component | Props | Description |
|-----------|-------|-------------|
| `Nav` | — | Sticky header: logo mark (SIS SVG), nav links (How it works, Platforms, Trust, Engage), "Book an Assess" CTA |
| `Footer` | — | Copyright + trademark footnote; ink background variant for closing CTA section |

### Home Page Components (`/`)
| Component | Props | Section |
|-----------|-------|---------|
| `HeroSection` | `version: string` | ✅ **DONE** — Eyebrow, headline, subhead, dual CTAs, proof strip teaser, staggered fade-up, pulsing orbs, breathing dots |
| `ProofStrip` | `stats: Stat[]` | 5 stat cards from `site.json` |
| `StatCard` | `value: string, label: string` | Big number + muted label |
| `ProblemStatement` | — | Problem copy |
| `FeatureColumns` | — | Wrapper for 3 `FeatureColumn` |
| `FeatureColumn` | `title: string, body: string` | Native First / Governed / Connected |
| `PlatformGroup` | `owner: string, platforms: string[]` | Owner heading + tile grid |
| `PlatformTile` | `name: string, logoStatus: 'text-only' \| 'approved'` | Text-only tile (`data-logo-status="text-only"`) |
| `TrustGrid` | — | Wrapper for 6 `TrustCard` |
| `TrustCard` | `group: string, description: string` | Identity, Agent Safety, Data, Supply Chain, Operations, Governance |
| `StageCards` | — | Wrapper for 4 `StageCard` |
| `StageCard` | `duration: string, title: string, body: string, gate: string` | Assess / Pilot / Scale / Operate |
| `ClosingCTA` | — | Dark bg, headline, CTA |

### Legal Page Components
| Component | Props | Page |
|-----------|-------|------|
| `TrademarkNotice` | — | `/legal/trademarks` |
| `LogoRegisterTable` | `owners: Owner[]` | `/legal/trademarks` |
| `PrivacyNotice` | — | `/privacy` |

---

## 6.1 Component Data Types (TypeScript)

```typescript
// lib/site-data.ts
export interface SiteData {
  release: string;
  version: string;
  totals: {
    kits: number;        // 23
    agents: number;      // 1200
    intents: number;     // 3546
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  proofStrip: Stat[];
  problem: string;
  features: Feature[];
  platforms: PlatformGroup[];
  trust: TrustGroup[];
  stages: Stage[];
  closing: {
    headline: string;
    body: string;
    ctaLabel: string;
  };
  trademark: {
    name: string;
    status: string;
    owners: LogoOwner[];
  };
  privacy: {
    dataCollected: string[];
    formBackend: string;
    analyticsStatus: string;
  };
}

export interface Stat { value: string; label: string; }
export interface Feature { title: string; body: string; }
export interface PlatformGroup { owner: string; platforms: string[]; }
export interface TrustGroup { group: string; description: string; }
export interface Stage { duration: string; title: string; body: string; gate: string; }
export interface LogoOwner { owner: string; marks: string; status: string; }
```

---

## 7. COPY SPECIFICATION (EXACT — FROM SITEMAP_AND_COPY.md)

### Hero
```
Eyebrow: Superintelligence Service · Agent Mesh 1.0.5
Headline: One governed agent fabric across <em>your platforms</em>.
Subhead: Run AI agents natively inside 23 enterprise platforms, under one policy, one audit trail and human approval, using the vendor AI you already license.
CTA Primary: "Book an Assess workshop" → #engage
CTA Secondary: "How it works" → #how
```

### Proof Strip (5 Stats)
| Value | Label |
|-------|-------|
| 23 | platforms |
| 1,200 | governed agents |
| 94 | vendor AI agents governed |
| 30 | hardening controls |
| 23/23 | kits validated |

### Problem
> Every platform now ships its own AI agent, each with its own console, credits, permissions and risk. Security says no, and pilots stall.

### How It Works (3 Columns)
| Column | Title | Body |
|--------|-------|------|
| 1 | Native first | The vendor's own agent, the platform's runtime, its UI and its data. We add only what's missing. |
| 2 | Governed | Every agent starts in shadow mode, then acts only with human approval. A kill switch per agent, with every action audited. |
| 3 | Connected | HCL Universal Orchestrator conducts workflows across platforms under the strictest rule of every platform involved. |

### Platforms (23 Platforms, 8 Owner Groups)
| Owner Group | Platforms |
|-------------|-----------|
| HCLSoftware | AppScan, BigFix, CDP, Commerce, Compass, Connections, DX, DevOps Velocity, Domino, Leap, Sametime, Unica, Universal Orchestrator, Volt MX, Workload Automation, iControl |
| HCLSoftware · Actian | Informix |
| ServiceNow | ServiceNow |
| Salesforce | Salesforce |
| LogicMonitor | LogicMonitor |
| Vercel | Vercel |
| RunPod | RunPod |
| Actian | Actian Zen |

**Note below grid:** "Names identify platforms only. Logos appear only with each owner's written permission. No partnership or endorsement is implied."

### Trust (6 Hardening Groups)
| Group | Description |
|-------|-------------|
| Identity | Least privilege, vault-held secrets, MFA for approvers |
| Agent Safety | Prompt-injection defence, tool allow-lists, step and cost caps |
| Data | Regional processing, zero-retention model terms |
| Supply Chain | SBOMs, signed images, pinned MCP servers |
| Operations | Hash-chained audit to your SIEM, anomaly pause, DR drills |
| Governance | Red-team before promotion, framework mapping, evidence per gate |

**Note:** "Every fact we rely on is tagged confirmed or still to verify, and verified in your sandbox before it is used."

### Engage (4 Stages)
| Stage | Duration | Body | Exit Gate |
|-------|----------|------|-----------|
| Assess | 2–3 weeks | Signed native map per platform, licence BOM, wave plan | Sponsor approves the wave plan |
| Pilot | 30 days | One platform from verification to agents at L1, with gate evidence | Go/no-go for sub-prod |
| Scale | Per wave | Sub-prod and production through your change board; cross-platform workflows | Agents promoted on evidence |
| Operate | Ongoing | Agent operations, evals, red-teaming and versioned releases | Quarterly value review |

### Closing CTA
```
Headline: Start with a two-week Assess.
Body: Leave with a signed native map for every platform you run, and a plan your security team has already reviewed.
CTA: "Book an Assess workshop" → #engage
```

### Footer
```
Line 1: © Superintelligence Service. Prototype: the name and claims are pending legal and trademark review.
Line 2: Product and company names are trademarks of their respective owners, used for identification only. No endorsement or partnership is implied.
```

### /legal/trademarks
- Name: "Superintelligence Service" — pending trademark and domain clearance (not cleared)
- Logo Register Table: 11 owners, all "Not requested"
- Plain-text rule: "Product and company names are trademarks of their respective owners, used for identification only. No endorsement or partnership is implied."
- Third-party rule: "No third-party logo until register shows Approved with matching scope and filed evidence."

### /privacy
- Data collected: Name, work email, company, platforms, message
- Backend: Host's form service (Netlify Forms, Vercel + form API, Formspree)
- Storage: Never in repo
- Analytics: Hook present, inactive until consent decision

---

## 8. MOTION & INTERACTION SPECIFICATION

### Hero Section (REFERENCE IMPLEMENTATION — `components/hero-section.tsx`)
| Element | Animation | Spec |
|---------|-----------|------|
| Eyebrow | Fade-in + slide-up | 6px, spring (stiffness 100, damping 15) |
| Headline | Fade-up + scale | 20px, scale 0.98→1.0, spring |
| Subhead | Fade-up | 20px, spring |
| Primary CTA | Staggered slide-up | 10px, delay 0.4s |
| Ghost CTA | Staggered slide-up | 10px, delay 0.5s |
| Proof strip items | Pop-in + scale | 0.9→1.0, teal pulse dots |
| Background brass orb | Slow pulse | Scale 1→1.05→1, 6s loop, easeInOut |
| Background teal orb | Slow pulse (offset) | Scale 1→1.05→1, 6s loop, 3s delay |
| CTA hover | Scale + shadow | Scale 1.02, shadow `0 0 0 12px rgba(154,100,16,0.25)` |
| CTA press | Scale | 0.95 |
| Proof strip dots | Breathe | Opacity 0.4→1→0.4, 3s loop |

### Global Motion Rules
| Rule | Implementation |
|------|----------------|
| Staggered entrance | Framer Motion `variants` with `staggerChildren: 0.15` |
| Background orbs | `motion.div` with `animate={{ scale: [1, 1.05, 1] }}`, `transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }` |
| Breathing dots | `animate={{ opacity: [0.4, 1, 0.4] }}`, `transition: { duration: 3, repeat: Infinity }` |
| CTA hover/tap | `whileHover={{ scale: 1.05 }}`, `whileTap={{ scale: 0.95 }}` |
| Reduced motion | `useReducedMotion()` — disable all animations when `true` |
| Focus states | `focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal focus-visible:ring-offset-2` |

### Background Atmosphere
- **Mesh grid pattern:** 3% opacity, 60px grid lines using `--line` color
- **Brass orb:** Top-left, 600×300px, blur 120px, 10% opacity
- **Teal orb:** Bottom-right, 500×250px, blur 100px, 10% opacity

---

## 9. HARD CONSTRAINTS (NON-NEGOTIABLE)

| # | Constraint | Enforcement |
|---|------------|-------------|
| 1 | **NO third-party logos** | All platform tiles use text-only; `data-logo-status="text-only"` |
| 2 | **NO "partner", "certified", "powered by", "endorsed"** | Copy review; lint rule |
| 3 | **"Superintelligence" = brand name only** | Never a capability claim |
| 4 | **NO hard-coded numbers** | All figures from `data/site.json` (build-time) |
| 5 | **NO ROI, testimonials, customer names, prices** | Until commercial approves |
| 6 | **All motion respects `prefers-reduced-motion`** | `useReducedMotion()` hook |
| 7 | **WCAG 2.2 AA contrast** | All text meets 4.5:1 (normal) / 3:1 (large) |
| 8 | **Light/Dark theme support** | CSS variables + `[data-theme="dark"]` |
| 9 | **All numbers from `release-manifest.json`** | Build-time pipeline only |
| 10 | **Plain-text platform names only** | `data-logo-status="text-only"` on every tile |

---

## 10. DATA PIPELINE (BUILD-TIME)

### 9.1 Input
- **File:** `release-manifest.json` (copied from agent-mesh-release root)

### 9.2 Script to Create: `scripts/build-data.js`
```javascript
// Input: release-manifest.json
// Output: 07_CODE/frontend/data/site.json
// Logic: Port from gtm/website/build_site.py

// Derive:
// - totals.kits, totals.agents, totals.intents
// - vendor AI agents governed: sum of native agents across all kits (94)
// - platform groups: map kit slug → owner (see build_site.py OWN map)
// - platform list per group: sorted alphabetically
```

### 9.3 Output: `07_CODE/frontend/data/site.json`
```json
{
  "release": "agent-mesh-1.0",
  "version": "1.0.5",
  "totals": { "kits": 23, "agents": 1200, "intents": 3546 },
  "hero": { ... },
  "proofStrip": [ { "value": "23", "label": "platforms" }, ... ],
  "features": [ { "title": "Native first", "body": "..." }, ... ],
  "platforms": [ { "owner": "HCLSoftware", "platforms": [...] }, ... ],
  "trust": [ { "group": "Identity", "description": "..." }, ... ],
  "stages": [ { "duration": "2–3 weeks", "title": "Assess", ... }, ... ]
}
```

**Rule:** Never hard-code `23`, `1200`, `94`, `30`, `23/23` in components. Import from `site.json`.

---

## 11. QUALITY BAR (DEFINITION OF DONE)

| Criterion | Target | Verification |
|-----------|--------|--------------|
| **WCAG 2.2 AA** | Contrast, keyboard nav, alt text, landmarks | axe-core / pa11y |
| **Lighthouse** | 95+ (Perf, A11y, Best Practices, SEO) | `npm run lighthouse` |
| **Fonts** | Self-hosted or preloaded with fallbacks | Network tab |
| **SVG Logos** | Inline or optimized | Bundle analysis |
| **SEO** | Title, meta, OG, Twitter, sitemap.xml, robots.txt, canonical | Meta tags check |
| **Forms** | "Book an Assess" → host form service | Form submission test |
| **Analytics** | None until consent; single documented hook | Code review |
| **Build** | `npm run build` passes, static export to `out/` | CI/CD |
| **Docker** | `docker compose up` → http://localhost:3000 | Local test |

---

## 11. DOCKER & DEPLOYMENT

### 10.1 Dockerfile (Multi-Stage)
```dockerfile
# Stage 1: deps (node:20-alpine, npm ci)
# Stage 2: builder (node:20-alpine, npm run build)
# Stage 3: runner (node:20-alpine, non-root user, health check on /)
EXPOSE 3000
CMD ["npm", "start"]
```

### 10.2 docker-compose.yml
```yaml
services:
  app:
    build: .
    container_name: orcasagent-gtm
    ports: ["3000:3000"]
    env_file: .env.local
    healthcheck:
      test: ["CMD", "wget", "--spider", "http://localhost:3000/"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### 10.3 Makefile Targets
```makefile
build: docker compose build
up: docker compose up -d
down: docker compose down
logs: docker compose logs -f app
ps: docker compose ps
shell: docker exec -it orcasagent-gtm sh
clean: docker compose down --rmi all --volumes --remove-orphans
dev: docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### 10.4 Environment
```bash
# .env.example
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
RESEND_API_KEY=
```

### 10.5 Deploy Commands
```bash
cd /home/orcas/Projects/app-orcasagent.com/07_CODE/frontend
npm run dev          # Dev server at localhost:3000
npm run build        # Static export to out/
docker compose build # Build image
docker compose up -d # Run container
```

---

## 12. CONTINUITY & CHECKPOINTS

All session context in `00_SESSION_CONTEXT/`:
- `context-engineering.md` — Rules for session start/end
- `session-log.md` — Append-only log
- `checkpoint-tracker.md` — CP-001 through CP-013
- `decisions-log.md` — DEC-001+ format

### Current Checkpoint Status
| ID | Checkpoint | Status |
|----|------------|--------|
| CP-001 | Project skeleton + context | ✅ |
| CP-005 | Tech stack selection | ✅ |
| CP-009 | MVP frontend build | ✅ (Hero done) |
| CP-011 | GitHub remote persistency | ✅ |
| CP-012 | GTM research + page plan | ✅ |
| CP-013 | Hero section with motion | ✅ |
| CP-002 | Competitor analysis | ⏳ |
| CP-003 | User personas | ⏳ |
| CP-004 | GTM strategy | ⏳ |
| CP-006 | Database schema | ⏳ |
| CP-007 | Brand + visuals | ⏳ |
| CP-008 | Marketing copy + SEO | ⏳ |
| CP-010 | Launch readiness | ⏳ |

---

## 13. EXECUTION RULES (FOR DEVELOPER)

1. **Read source files first** — `/tmp/agent-mesh-release/gtm/` before building
2. **Never hard-code numbers** — Use `data/site.json` (build-time)
3. **Never use vendor logos** — Text-only platform names
4. **Never say "partner", "certified", "powered by", "endorsed"**
5. **"Superintelligence" = brand name only** — Never a capability claim
7. **All motion respects `prefers-reduced-motion`**
8. **WCAG 2.2 AA contrast on ALL text**
9. **Build static export:** `npm run build` → `out/`
10. **Test Docker:** `docker compose build && docker compose up`
11. **Commit after each component** — Push to `origin/master`
12. **Update `00_SESSION_CONTEXT/checkpoint-tracker.md`** after each session
13. **Update `00_SESSION_CONTEXT/session-log.md`** after each session

---

## 13. NEXT IMMEDIATE TASKS (IN ORDER)

| Order | Task | Files to Create/Modify | Reference |
|-------|------|------------------------|-----------|
| 1 | **Nav Component** | `components/nav.tsx`, `app/layout.tsx` | `SITEMAP_AND_COPY.md` nav links |
| 2 | **Footer Component** | `components/footer.tsx` | Footer copy from spec |
| 3 | **ProofStrip + StatCard** | `components/proof-strip.tsx`, `components/stat-card.tsx` | `site.json` proofStrip |
| 4 | **ProblemStatement** | `components/problem-statement.tsx` | Spec copy |
| 5 | **FeatureColumns + FeatureColumn** | `components/feature-columns.tsx` | 3 features from spec |
| 6 | **PlatformGroup + PlatformTile** | `components/platform-group.tsx`, `components/platform-tile.tsx` | `site.json` platforms |
| 7 | **TrustGrid + TrustCard** | `components/trust-grid.tsx`, `components/trust-card.tsx` | 6 trust groups |
| 8 | **StageCards + StageCard** | `components/stage-cards.tsx`, `components/stage-card.tsx` | 4 stages |
| 9 | **ClosingCTA** | `components/closing-cta.tsx` | Spec copy |
| 10 | **Assemble Home Page** | `app/page.tsx` | All sections in order |
| 11 | **Legal Pages** | `app/legal/trademarks/page.tsx`, `app/privacy/page.tsx` | Spec copy |
| 12 | **SEO & Metadata** | `app/layout.tsx` metadata, `scripts/generate-sitemap.js` | `SITEMAP_AND_COPY.md` |
| 13 | **Contact Form** | `components/contact-form.tsx` + form backend | Privacy notice first |
| 14 | **Build Data Script** | `scripts/build-data.js` | Port from `build_site.py` |

---

## 14. GITHUB & WORKING ENVIRONMENT

| Item | Value |
|------|-------|
| **Repo** | `https://github.com/kmishra1204/app-orcasagent-com` |
| **Branch** | `master` |
| **Commits** | 9 (clean tree) |
| **Frontend Path** | `/home/orcas/Projects/app-orcasagent.com/07_CODE/frontend/` |
| **Dev Server** | `cd frontend && npm run dev` → `http://localhost:3000` |
| **Build** | `cd frontend && npm run build` → `out/` |
| **Docker** | `make build && make up` → `http://localhost:3000` |
| **Source of Truth** | `/tmp/agent-mesh-release/` (or clone `kmishra1204/agent-mesh-release`) |

---

## 15. ACCEPTANCE CRITERIA (FINAL DELIVERABLE)

A production-ready static marketing website at `http://localhost:3000` that:

- [ ] Renders all 3 V1 pages (`/`, `/legal/trademarks`, `/privacy`)
- [ ] Home page has all 8 sections in correct order with smooth scroll navigation
- [ ] Hero section matches motion spec (staggered entrance, pulsing orbs, breathing dots)
- [ ] All numbers match `release-manifest.json` (23, 1200, 94, 30, 23/23)
- [ ] 23 platform tiles render in 8 owner groups, text-only, no logos
- [ ] 6 trust cards render with correct descriptions
- [ ] 4 stage cards render with durations and exit gates
- [ ] Light/dark theme works via CSS variables
- [ ] `prefers-reduced-motion` disables all animations
- [ ] WCAG 2.2 AA contrast on all text
- [ ] `npm run build` passes, static export to `out/`
- [ ] `docker compose up` serves site on port 3000
- [ ] Lighthouse 95+ on all categories
- [ ] No third-party logos, no "partner" claims, no hard-coded numbers
- [ ] All copy matches `SITEMAP_AND_COPY.md` exactly
- [ ] Deployed to GitHub (`origin/master`)

---

## 16. SOURCE OF TRUTH QUICK REFERENCE

| Need | Go To |
|------|-------|
| **All numbers** | `release-manifest.json` |
| **Colors, fonts, voice, logos** | `gtm/brand/BRAND_GUIDE.md` |
| **Positioning, ICP, personas** | `gtm/playbook/GTM_PLAYBOOK.md` |
| **All copy, sitemap, SEO** | `gtm/website/SITEMAP_AND_COPY.md` |
| **Data pipeline logic** | `gtm/website/build_site.py` |
| **Visual prototype** | `gtm/website/site/index.html` |
| **Logo status** | `gtm/logos/logo-register.csv` |
| **Logo workflow** | `gtm/logos/LOGO_PERMISSIONS.md` |
| **Executive summary** | `gtm/executive/EXECUTIVE_BRIEF.md` |
| **Kit standards, labels** | `STANDARDS.md` |
| **Integration (MCP, A2A, UnO)** | `INTEGRATION.md` |
| **Deployment playbook** | `RELEASE_MANAGER_STARTER.md` |
| **Agent schema** | `schemas/agent.schema.json` |

---

## 16. CONTACT & ESCALATION

| Role | Contact |
|------|---------|
| Product Owner / Research Lead | Karuna (HCL Tech) — this project context |
| GTM Source Material | `kmishra1204/agent-mesh-release` (private) |
| GitHub Repo | `kmishra1204/app-orcasagent-com` |
| Continuity Context | `00_SESSION_CONTEXT/` in repo |

---

## END OF SPECIFICATION

**This document is the single source of truth for implementation.**  
All research is complete. All decisions are recorded. All constraints are explicit.  
Build the components in order. Test continuously. Commit frequently. Push to origin.

**Outcome:** A production-ready, static, accessible, motion-rich GTM website that feels like a mission control console for governed AI agents — not a brochure.

---

*Document Version: 1.0 | Generated: 2026-10-28 | Project: app.orcasagent.com*