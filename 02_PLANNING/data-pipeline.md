# Data Pipeline Spec — app.orcasagent.com

> Build-time data pipeline. All figures come from `release-manifest.json` — never hard-coded.
> Ports logic from `agent-mesh-release/gtm/website/build_site.py`.

## Inputs
| File | Location | Purpose |
|------|----------|---------|
| `release-manifest.json` | root (copied from agent-mesh-release) | Release totals, kit list, versions, SHAs |
| `native-agents.json` | per-kit (from kit bundles) | Native AI agent counts per platform |
| `logo-register.csv` | `gtm/logos/` | Logo permission status (all "Not requested") |

## Outputs
| File | Location | Contents |
|------|----------|----------|
| `data/site.json` | `07_CODE/frontend/data/` | totals, kits grouped by owner, native agent count |

## Build-Time Derived Values
| Value | Derivation |
|-------|------------|
| platforms count | `release-manifest.json.totals.kits` |
| agents count | `release-manifest.json.totals.agents` |
| vendor AI agents governed | Sum of native agents across all kits (94) |
| hardening controls | 30 (H01–H30, from release notes) |
| kits validated | `totals.kits` / `totals.kits` (all PASS) |
| platform groups | Kit owner mapping (HCLSoftware, ServiceNow, Salesforce, etc.) |

## Constraint
Numbers must regenerate if `release-manifest.json` changes. No hard-coded `23`, `1200`, `94`, `30`, or `23/23` in components.
