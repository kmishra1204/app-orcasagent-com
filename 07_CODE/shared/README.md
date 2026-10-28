# Shared

Cross-cutting types, constants, and schemas shared between frontend and backend.

## Suggested Structure
```
shared/
├── types/
│   ├── lead.ts            # Lead form type
│   └── page.ts            # CMS page type
├── constants/
│   ├── site.ts            # Site metadata, URLs
│   └── navigation.ts      # Nav link definitions
└── schemas/
    └── lead.schema.ts     # Zod/Yup validation schema
```
