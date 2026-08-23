# PG Management

## Agent skills

### Issue tracker

Issues for this repository are tracked in GitHub Issues. The repository remote must be configured before creating issues with `gh`. See `docs/agents/issue-tracker.md`.

### Domain docs

This is a single-context domain. Read `CONTEXT.md` before changing domain terminology and read relevant ADRs under `docs/adr/`. See `docs/agents/domain.md`.

## Project Rules

- Keep domain language aligned with `CONTEXT.md`.
- Preserve the distinction between Person, Application, Reservation, Tenancy, Charge, Payment, Receipt, Reservation Amount, and Security Deposit.
- Do not design database tables or persistence details while refining the conceptual domain model.
- Finalized financial records are corrected through linked transactions, not edited or deleted.
