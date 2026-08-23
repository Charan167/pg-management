# Phase 2: Database

## Goal

Introduce PostgreSQL and Prisma incrementally, with repeatable setup and isolated tests.

## Tickets

11. **Run PostgreSQL with Docker Compose** - Blocked by 01. Start a fixed PostgreSQL version with documented health and volume commands.
12. **Validate API environment configuration** - Blocked by 03, 11. Validate database and future authentication settings at startup.
13. **Initialize Prisma and connect PostgreSQL** - Blocked by 11, 12. Establish the first verified Prisma connection without business models.
14. **Add migration, seed, and reset commands** - Blocked by 13. Make development database setup repeatable.
15. **Isolate database state between tests** - Blocked by 14. Establish a safe integration-test cleanup strategy.

## Completion

- [ ] A beginner can start, migrate, seed, test, and reset PostgreSQL using documented commands.
- [ ] No production business model is introduced before its behavior ticket.
