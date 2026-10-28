# app.orcasagent.com — Code

> Frontend, backend, and shared implementation for the GTM marketing website.

## Tech Stack (pending — see `03_ARCHITECTURE/tech-stack.md`)
| Layer | Selection | Status |
|-------|-----------|--------|
| Framework | TBD | CP-005 |
| Styling | TBD | CP-005 |
| CMS | TBD | CP-005 |
| Hosting | Docker container (local) | CP-005 |

## Directory Layout

```
07_CODE/
├── frontend/          # Client application
│   ├── app/           # Routes / pages
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utilities, API clients
│   ├── styles/        # Global styles, CSS variables
│   └── public/        # Static assets (images, fonts, icons)
├── backend/           # Server/API (if applicable)
│   ├── routes/        # API endpoints
│   ├── services/      # Business logic
│   └── db/            # Database clients, migrations
└── shared/            # Types, constants, shared schemas
    ├── types.ts
    └── constants.ts
```

## Getting Started
1. Select tech stack → update `03_ARCHITECTURE/tech-stack.md` (CP-005)
2. Initialize framework in `07_CODE/frontend/`
3. Configure linting, formatting, pre-commit hooks
4. Deploy preview → `07_CODE/frontend/` to hosting

## Conventions
- All JSON specs: UTF-8
- Component naming: PascalCase (`HeroSection.tsx`)
- File naming: kebab-case for utilities (`format-date.ts`)
- Types in `shared/`, never duplicated across frontend/backend
