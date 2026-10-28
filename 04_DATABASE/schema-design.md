# Database Schema Design — app.orcasagent.com

## Objective
Define data model for leads, users, content, analytics, and subscriptions.

## Tables (draft)

### leads
| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| id | UUID | No | PK |
| email | String | No | Unique |
| name | String | Yes | |
| company | String | Yes | |
| source | String | Yes | utm/channel |
| status | String | No | new, contacted, converted |
| created_at | Timestamp | No | |

### users
| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| id | UUID | No | PK |
| email | String | No | Unique |
| role | String | No | admin, viewer |
| created_at | Timestamp | No | |

### pages (CMS content)
| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| id | UUID | No | PK |
| slug | String | No | Unique |
| title | String | No | |
| body | JSONB | No | |
| published | Boolean | No | default false |

## Migrations
See `04_DATABASE/migrations/` for versioned SQL files.

## Notes
- [ ] Choose DB provider (Supabase, PlanetScale, Neon, etc.)
- [ ] Define auth strategy
- [ ] Plan seed data
