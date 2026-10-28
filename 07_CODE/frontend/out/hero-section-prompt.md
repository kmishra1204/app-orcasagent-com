# Prompt: Hero Section — Agentic Mesh Ecosystem (Superintelligence Service)

> Source: detailed build instruction for the hero section. Derived from `agent-mesh-release` GTM kit (cloned to `/tmp/agent-mesh-release`). Target file: `07_CODE/frontend/components/hero-section.tsx`.

---

## Role

You are a creative lead designing the hero section of a B2B enterprise GTM website for **Superintelligence Service** — the governed agent fabric layer sitting on top of **Agent Mesh Release 1.0.5**.

The site must feel like a **mission control console** for AI agents across 23 enterprise platforms: part security dashboard, part command center, part living organism. Not a landing page — a **control surface**.

---

## Core Concept

> **One governed agent fabric across your platforms.**

The hero tells a 3-second story:
1. **Scale** — 23 platforms, 1,200 governed agents, 94 vendor-native AI agents already mapped.
2. **Control** — Native-first, shadow mode, human approval (L1), kill switch per agent.
3. **Connection** — HCL Universal Orchestrator (UnO) conducts cross-platform workflows under the strictest rule of every platform involved.

It is **not** "magic AI." It is **governed, evidenced, native** AI.

---

## Visual Language (from `BRAND_GUIDE.md`)

| Token | Hex (Light) | Hex (Dark) | Role |
|-------|-------------|------------|------|
| Ink | `#0F1D2E` | `#E8EDF4` | Primary text, outlines |
| Brass | `#9A6410` | `#E2A64A` | Accent, CTAs, core signal (one per view) |
| Teal | `#0D7A72` | `#3CC4B8` | Status "pass", live indicators |
| Rose | `#B4235A` | `#F06C9B` | Risks, gaps, warnings only |
| Paper | `#F2F4F7` | `#0B1420` | Page background |
| Line | `#D9DFE7` | `#24344A` | Borders, rules |

**Typography:**
- Display: Bricolage Grotesque 700–800 (headlines)
- Body: IBM Plex Sans 400–600
- Data/Labels: IBM Plex Mono 400–500, uppercase, letter-spacing 0.12–0.14em

**Hard constraints:**
- No third-party logos. All platform tiles are **text-only** (`data-logo-status="text-only"`).
- Never say "partner," "certified," "powered by," or "endorsed."
- "Superintelligence" is a brand name — never a capability claim.
- All numbers trace to `release-manifest.json` — never hard-coded.

---

## Motion & Interaction (Framer Motion)

### Entrance sequence (staggered, spring-based)
```
t+0.0s  Eyebrow: fade-in + slide-up 6px
t+0.1s  Headline: fade-up 20px + scale 0.98 → 1.0
t+0.2s  Subhead: fade-up 20px
t+0.4s  CTAs: staggered slide-up 10px (primary first, ghost second)
t+0.6s  Proof strip: pop-in scale 0.9 → 1.0 with teal pulse dots
```

### Background atmosphere
- **Two glowing orbs** behind the hero: brass (top-left), teal (bottom-right), blurred 100–120px, opacity 10%, slowly pulsing scale 1.0 → 1.05 → 1.0 over 6 seconds.
- **Subtle grid noise** or very faint mesh lines (opacity 3%) suggesting a fabric/grid underneath.
- **Scroll reveal:** hero stays pinned briefly, then sections below fade up as they enter viewport.

### CTA micro-interactions
- Primary (brass fill): scale 1.02 on hover, shadow `0 0 0 12px rgba(154,100,16,0.25)`, press scale 0.95.
- Ghost (outline): background fills paper-light on hover, text shifts to ink.
- Both: focus-visible ring teal, offset 2px, accessible.

### Live data pulse (proof strip)
Each stat card has a tiny teal dot that **breathes** (opacity 0.4 → 1 → 0.4, 3s loop) to suggest "live system, not static marketing."

---

## Copy & Messaging

| Element | Copy | Source |
|---------|------|--------|
| Eyebrow | `Superintelligence Service · Agent Mesh 1.0.5` | release-manifest.json |
| Headline | `One governed agent fabric across your platforms.` | GTM playbook |
| Headline emphasis | `your platforms` in brass, italic, normal font weight | brand rules |
| Subhead | `Run AI agents natively inside 23 enterprise platforms, under one policy, one audit trail and human approval, using the vendor AI you already license.` | SITEMAP_AND_COPY.md |
| CTA Primary | `Book an Assess workshop` → `#engage` | SITEMAP_AND_COPY.md |
| CTA Secondary | `How it works` → `#how` | SITEMAP_AND_COPY.md |
| Proof Stat 1 | `23` / `platforms` | release-manifest.json |
| Proof Stat 2 | `1,200` / `governed agents` | release-manifest.json |
| Proof Stat 3 | `94` / `vendor AI agents governed` | release-manifest.json |
| Proof Stat 4 | `30` / `hardening controls` | H01–H30 |
| Proof Stat 5 | `23/23` / `kits validated` | release-manifest.json |

---

## Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  [Nav: Logo mark | How it works | Platforms | Trust     │
│             | Engage | Book an Assess]                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Superintelligence Service · Agent Mesh 1.0.5           │  ← Eyebrow (mono, brass, uppercase)
│                                                         │
│  One governed agent fabric across                       │  ← Headline (display, 800, ink)
│  <em>your platforms</em>.                                │       "your platforms" in brass italic
│                                                         │
│  Run AI agents natively inside 23 enterprise...        │  ← Subhead (body, muted, max-width 60ch)
│                                                         │
│  [Book an Assess workshop]  [How it works]              │  ← CTAs (brass primary, ghost secondary)
│                                                         │
│  ● 23/23 kits validated   ● 1,200 governed agents       │  ← Proof strip (mono, small, teal dots)
│  ● Shadow mode by default                                                     │
│                                                         │
│  [Background: brass + teal blurred orbs, faint mesh]    │  ← Atmosphere
└─────────────────────────────────────────────────────────┘
```

---

## Innovation / Brilliance Factors

1. **Living system, not brochure:** The breathing teal dots and pulsing background orbs signal "this is running now," not "this is a static image."
2. **Console aesthetic:** Sticky nav, mono labels, hash-styled stats, ink/brass/teal palette — feels like infrastructure software, not a marketing page.
3. **Native-first honesty:** Copy says "using the vendor AI you already license" — positions the service as governance layer, not replacement.
4. **Evidence-first:** Every number comes from the release manifest. No invented ROI, no fake testimonials.
5. **Accessible motion:** `prefers-reduced-motion` respected; animations can be disabled. Focus rings visible. WCAG 2.2 AA contrast on all text.

---

## Technical Implementation Notes

- **Framework:** Next.js 15 App Router, static export (`output: 'export'`)
- **Motion:** Framer Motion (`motion.div`, `motion.h1`, `motion.p`, `motion.span`, `variants`, `whileHover`, `whileTap`)
- **Styling:** Tailwind CSS with CSS variables for brand tokens (light/dark theme support)
- **Fonts:** Self-hosted or preloaded Google Fonts (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono)
- **Data:** `data/site.json` — build-time pipeline from `release-manifest.json` (never hard-code `23`, `1200`, `94`, `30`)
- **Component:** `components/hero-section.tsx` — client component (`'use client'`) due to Framer Motion
- **File location:** `07_CODE/frontend/components/hero-section.tsx`

---

## Definition of Done

- [ ] Hero renders on `http://localhost:3000`
- [ ] Entrance animation fires on load (staggered, spring-based)
- [ ] Background orbs pulse slowly; proof strip dots breathe
- [ ] CTAs have hover/press/focus states
- [ ] Light/dark theme toggle works (CSS variables)
- [ ] `prefers-reduced-motion` disables animations gracefully
- [ ] All numbers match `release-manifest.json`
- [ ] No third-party logos, no "partner" claims
- [ ] `npm run build` passes (static export)

---

**Deliverable:** A single `hero-section.tsx` component that imports into `app/page.tsx`, uses `data/site.json` for all figures, and looks like a governed agent fabric control center — not a generic SaaS landing page.
