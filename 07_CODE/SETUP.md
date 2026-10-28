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

## Container Local Development (Hosting Decision)
This project is deployed as a **Docker container locally** per the tech stack decision.

### Quick Start
```bash
# 1. Copy environment example
cp .env.example .env.local
# Edit .env.local with your values

# 2. Build and run
make build      # or: docker compose build
make up         # or: docker compose up -d

# 3. Verify
open http://localhost:3000

# 4. Manage
make logs       # follow logs
make ps         # list containers
make down       # stop containers
make shell      # exec into running container
```

### Makefile Targets
| Target | Command | Description |
|--------|---------|-------------|
| `make build` | `docker compose build` | Build the Docker image |
| `make up` | `docker compose up -d` | Start container in detached mode |
| `make down` | `docker compose down` | Stop and remove containers |
| `make logs` | `docker compose logs -f app` | Follow container logs |
| `make ps` | `docker compose ps` | List running containers |
| `make shell` | `docker exec -it orcasagent-gtm sh` | Shell into running container |
| `make clean` | `docker compose down --rmi all --volumes` | Full cleanup |

### Health Check
The container includes a health check on `http://localhost:3000/`. Use `docker compose ps` to verify status.

## Deployment Targets (decided — CP-005)
- **Primary:** Docker container (local)
- **Optional:** Vercel / Netlify / AWS Amplify (for cloud deployment later)

## CI/CD (pending)
GitHub Actions for lint → test → build → deploy on push to `main`.
