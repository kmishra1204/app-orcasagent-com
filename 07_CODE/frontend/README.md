# Frontend Placeholder

This is the entry point for the app.orcasagent.com frontend.

## Tech Stack Decision Pending
See `03_ARCHITECTURE/tech-stack.md` (CP-005) for framework selection.

## Suggested Structure (adapt per framework)
```
frontend/
├── app/
│   ├── page.tsx           # Landing page hero
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Pricing.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── ui/                # Primitive UI components
├── lib/
│   ├── utils.ts
│   └── api.ts
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
└── package.json
```

## Next Step
After CP-005 (tech stack), initialize the framework here and replace this placeholder.
