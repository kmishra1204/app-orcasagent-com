# Tech Stack — app.orcasagent.com

## Objective
Select framework, CMS, hosting, styling, and deployment pipeline.

## Decision Matrix (fill before choosing)

| Layer | Option A | Option B | Option C | Selected | Rationale |
|-------|----------|----------|----------|----------|-----------|
| Framework | Next.js | Astro | Remix | | |
| CMS | Sanity | Contentful | Static MDX | | |
| Styling | Tailwind CSS | CSS Modules | Styled Components | | |
| Hosting | Docker container (local) | Vercel | AWS Amplify | Docker container (local) | Local container per requirement |
| Analytics | Plausible | Google Analytics | PostHog | | |
| Forms | Resend | Formspree | Web3Forms | | |
| CI/CD | GitHub Actions | Vercel Auto | CircleCI | | |

## Selected Stack (CP-005 decided)
- **Framework:** Next.js
- **CMS:** Static MDX
- **Styling:** Tailwind CSS
- **Hosting:** Docker container (local)
- **Deploy:** `docker compose up`
