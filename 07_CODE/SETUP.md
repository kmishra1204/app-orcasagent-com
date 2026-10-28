# Development Environment Setup — app.orcasagent.com

## Prerequisites
- Node.js 18+ (or Bun/Deno per tech stack decision)
- Git (already initialized)
- Code editor (VS Code recommended with Prettier + ESLint extensions)

## Local Development Steps

### 1. Clone / Open
```bash
cd /home/orcas/Projects/app-orcasagent.com
```

### 2. Install Dependencies (after tech stack selection)
```bash
# Example for Next.js
npm install next react react-dom
npm install -D tailwindcss postcss autoprefixer eslint prettier
```

### 3. Environment Variables
Create `.env.local` (never commit):
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=optional
```

### 4. Run Dev Server
```bash
npm run dev    # or equivalent per stack
```

### 5. Lint & Format
```bash
npx prettier --write .
npx eslint .
```

## Pre-Commit Hooks (recommended)
Install `husky` + `lint-staged` to run Prettier + ESLint on commit.

## Deployment Targets (pending — CP-005)
- Vercel / Netlify / AWS Amplify / Self-hosted

## CI/CD (pending)
GitHub Actions for lint → test → build → deploy on push to `main`.
