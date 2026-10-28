# Backend Placeholder

Backend/API layer for app.orcasagent.com (if applicable per tech stack).

## Suggested Structure
```
backend/
├── routes/
│   ├── leads.ts          # Lead capture endpoint
│   └── contact.ts        # Contact form endpoint
├── services/
│   ├── email.ts          # Resend/SendGrid integration
│   └── crm.ts            # CRM integration
├── db/
│   ├── client.ts         # Database client
│   └── migrations/       # Versioned SQL migrations
└── package.json
```

## Notes
- Many GTM sites are static/frontend-only (no backend needed)
- Decide in CP-005 whether a backend is required
- If static-only, use frontend API routes or serverless functions
