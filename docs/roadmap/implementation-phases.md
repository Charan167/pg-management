# PG Management Implementation Roadmap

This roadmap preserves the beginner-sized implementation plan derived from the [V1 specification](../specs/pg-management-v1.md). Publish one phase at a time so later tickets can incorporate lessons from completed work.

## Technology Baseline

- Monorepo: pnpm workspaces without Turborepo
- Admin: React Admin, Vite, React, TypeScript, Material UI
- API: Node.js, Express, TypeScript
- Database: PostgreSQL in Docker Compose
- ORM: Prisma
- Shared contracts: Zod
- Authentication: access and refresh JWTs in secure HTTP-only cookies, credentialed CORS, and CSRF protection
- Tests: Vitest, Supertest, React Testing Library, and a small Playwright suite

## Publication Rules

1. The V1 specification is the parent GitHub issue.
2. Publish only the current phase.
3. Publish tickets in dependency order and link real blocker issues.
4. Apply `ready-for-agent` to agent-ready tickets.
5. Record issue URLs in the corresponding phase document.
6. Do not publish the next phase until its prerequisites are complete or close to complete.

## Phases

| Phase | Tickets | Status | GitHub publication | Document |
|---|---:|---|---|---|
| 1. Workspace | 1-10 | Published | Specification [#1](https://github.com/Charan167/pg-management/issues/1); tickets [#2-#11](https://github.com/Charan167/pg-management/issues/2) | [Phase 1](phase-01-workspace.md) |
| 2. Database | 11-15 | Planned | Not published | [Phase 2](phase-02-database.md) |
| 3. Authentication | 16-27 | Planned | Not published | [Phase 3](phase-03-authentication.md) |
| 4. Organizations and Properties | 28-35 | Planned | Not published | [Phase 4](phase-04-organizations-properties.md) |
| 5. Rooms | 36-44 | Planned | Not published | [Phase 5](phase-05-rooms.md) |
| 6. People and Applications | 45-54 | Planned | Not published | [Phase 6](phase-06-people-applications.md) |
| 7. Offers and Reservations | 55-61 | Planned | Not published | [Phase 7](phase-07-offers-reservations.md) |
| 8. Tenancies | 62-70 | Planned | Not published | [Phase 8](phase-08-tenancies.md) |
| 9. Billing | 71-79 | Planned | Not published | [Phase 9](phase-09-billing.md) |
| 10. Payments | 80-89 | Planned | Not published | [Phase 10](phase-10-payments.md) |
| 11. Notice and Move-out | 90-98 | Planned | Not published | [Phase 11](phase-11-notice-moveout.md) |
| 12. Settlement and Audit | 99-107 | Planned | Not published | [Phase 12](phase-12-settlement-audit.md) |
| 13. Final Validation | 108-113 | Planned | Not published | [Phase 13](phase-13-final-validation.md) |

## Phase Completion Rule

A phase is complete when its acceptance criteria pass, its automated tests are green, its documentation reflects the implemented workflow, and no unresolved blocker prevents the next phase from starting.
