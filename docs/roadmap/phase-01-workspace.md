# Phase 1: Workspace

## Goal

Create a small, understandable monorepo in which the admin app and API run independently, share one validated contract, and each has one beginner-readable automated test.

## Publication

- Status: Published
- Parent specification issue: [#1](https://github.com/Charan167/pg-management/issues/1)
- Phase issues: [#2](https://github.com/Charan167/pg-management/issues/2), [#3](https://github.com/Charan167/pg-management/issues/3), [#4](https://github.com/Charan167/pg-management/issues/4), [#5](https://github.com/Charan167/pg-management/issues/5), [#6](https://github.com/Charan167/pg-management/issues/6), [#7](https://github.com/Charan167/pg-management/issues/7), [#8](https://github.com/Charan167/pg-management/issues/8), [#9](https://github.com/Charan167/pg-management/issues/9), [#10](https://github.com/Charan167/pg-management/issues/10), [#11](https://github.com/Charan167/pg-management/issues/11)

## Tickets

### 01 - Create the pnpm workspace

**GitHub issue:** [#2](https://github.com/Charan167/pg-management/issues/2)

**Blocked by:** None

**What to build:** Create the workspace structure for `apps/admin`, `apps/api`, and `packages/shared`, with root commands that make the project discoverable without adding application frameworks yet.

**Concepts introduced:** monorepo, workspace, package, root script.

**Acceptance criteria:**

- [ ] `pnpm-workspace.yaml` includes the app and package directories.
- [ ] The root package is private and declares the pnpm package manager.
- [ ] Each workspace has a minimal package manifest and clear name.
- [ ] `pnpm install` succeeds from the repository root.
- [ ] A short README section explains the workspace layout.

**Verify:** `pnpm install && pnpm list --depth 0 -r`

### 02 - Add shared TypeScript configuration

**GitHub issue:** [#3](https://github.com/Charan167/pg-management/issues/3)

**Blocked by:** 01

**What to build:** Configure strict TypeScript defaults that each workspace can extend, and add a root command that type-checks all current workspaces.

**Concepts introduced:** TypeScript configuration, strict mode, configuration inheritance.

**Acceptance criteria:**

- [ ] A shared base TypeScript configuration enables strict checking.
- [ ] Admin, API, and shared workspaces extend an appropriate shared configuration.
- [ ] Each workspace exposes a `typecheck` script.
- [ ] The root type-check command succeeds.

**Verify:** `pnpm typecheck`

### 03 - Create the Express application

**GitHub issue:** [#4](https://github.com/Charan167/pg-management/issues/4)

**Blocked by:** 02

**What to build:** Create a minimal Express API that starts locally, shuts down cleanly, and keeps application construction separate from network startup so it can be tested later.

**Concepts introduced:** Express application, HTTP server, port, graceful shutdown.

**Acceptance criteria:**

- [ ] The API has separate development and start commands.
- [ ] The listening port is configurable with a safe development default.
- [ ] Starting the API prints a concise local URL.
- [ ] SIGINT and SIGTERM stop the HTTP server cleanly.
- [ ] Type-checking remains green.

**Verify:** `pnpm --filter api dev`

### 04 - Add the API health endpoint

**GitHub issue:** [#5](https://github.com/Charan167/pg-management/issues/5)

**Blocked by:** 03

**What to build:** Add `GET /health` so a developer or frontend can verify that the API process is available.

**Concepts introduced:** HTTP route, status code, JSON response.

**Acceptance criteria:**

- [ ] `GET /health` returns HTTP 200.
- [ ] The response is a small stable JSON object indicating availability.
- [ ] Unknown routes return a consistent JSON 404 response.
- [ ] The endpoint contains no database dependency.

**Verify:** Start the API and request `http://localhost:<port>/health`.

### 05 - Add the first API test

**GitHub issue:** [#6](https://github.com/Charan167/pg-management/issues/6)

**Blocked by:** 04

**What to build:** Introduce Vitest and Supertest by testing the health endpoint without opening a real network port.

**Concepts introduced:** test runner, assertion, API integration test, test isolation.

**Acceptance criteria:**

- [ ] Vitest and Supertest are configured only where needed.
- [ ] One test verifies the health status and response body.
- [ ] One test verifies the JSON 404 behavior.
- [ ] The test does not start a real listening server.
- [ ] The API test command exits successfully.

**Verify:** `pnpm --filter api test`

### 06 - Create the React Admin application

**GitHub issue:** [#7](https://github.com/Charan167/pg-management/issues/7)

**Blocked by:** 02

**What to build:** Create a Vite, React, TypeScript, and React Admin app with a minimal placeholder data provider so the admin shell runs before business resources exist.

**Concepts introduced:** Vite, React Admin, data provider, single-page application.

**Acceptance criteria:**

- [ ] The admin app starts through a workspace development command.
- [ ] React Admin renders without runtime errors.
- [ ] A placeholder dashboard explains that no resources exist yet.
- [ ] The data provider fails unsupported operations clearly rather than silently.
- [ ] Type-checking remains green.

**Verify:** `pnpm --filter admin dev`

### 07 - Create the Material UI theme

**GitHub issue:** [#8](https://github.com/Charan167/pg-management/issues/8)

**Blocked by:** 06

**What to build:** Give the React Admin shell a restrained PG operations theme with readable typography, compact tables and forms, and consistent light-mode colors.

**Concepts introduced:** Material UI theme, component defaults, design tokens.

**Acceptance criteria:**

- [ ] React Admin uses one centralized Material UI theme.
- [ ] Navigation, forms, tables, buttons, focus states, and errors remain readable.
- [ ] Compact component defaults suit a repeated-use admin tool.
- [ ] The interface works at common laptop and mobile widths without overlapping text.
- [ ] No second component or styling system is introduced.

**Verify:** Run the admin app and inspect desktop and narrow viewport layouts.

### 08 - Connect the admin app to API health

**GitHub issue:** [#9](https://github.com/Charan167/pg-management/issues/9)

**Blocked by:** 04, 06

**What to build:** Show API availability on the dashboard through a small typed client request, including loading, available, and unavailable states.

**Concepts introduced:** browser request, environment variable, asynchronous UI state, API origin.

**Acceptance criteria:**

- [ ] The API base URL is read from a validated admin environment variable.
- [ ] The health request sends credentials in preparation for cookie authentication.
- [ ] The dashboard shows loading, available, and unavailable states.
- [ ] API failure does not crash the React Admin shell.
- [ ] Local development origins are documented.

**Verify:** Run both apps, then stop and restart the API while observing the dashboard state.

### 09 - Add the first shared Zod contract

**GitHub issue:** [#10](https://github.com/Charan167/pg-management/issues/10)

**Blocked by:** 02, 08

**What to build:** Define the health response in `packages/shared`, validate it in the API response path and admin client, and infer TypeScript types from the schema.

**Concepts introduced:** runtime validation, Zod schema, inferred type, shared API contract.

**Acceptance criteria:**

- [ ] The shared package exports a Zod schema for the health response.
- [ ] The API and admin import the schema through the workspace package.
- [ ] The admin rejects an invalid health payload with a useful unavailable state.
- [ ] No Prisma type or private server field enters the shared package.
- [ ] Build and type-check commands resolve the workspace package correctly.

**Verify:** `pnpm typecheck && pnpm --filter api test`

### 10 - Add the first admin component test

**GitHub issue:** [#11](https://github.com/Charan167/pg-management/issues/11)

**Blocked by:** 06, 08, 09

**What to build:** Introduce Vitest, React Testing Library, and the DOM test environment by testing the dashboard's API health states from the user's perspective.

**Concepts introduced:** component test, accessible query, mocked request, async assertion.

**Acceptance criteria:**

- [ ] The admin test environment supports React Testing Library.
- [ ] Tests verify loading, available, and unavailable states using visible or accessible output.
- [ ] Tests do not inspect private component state.
- [ ] The admin test command exits successfully.
- [ ] The root test command runs both API and admin tests.

**Verify:** `pnpm test`

## Phase Completion Checklist

- [ ] `pnpm install`, `pnpm typecheck`, and `pnpm test` pass from the root.
- [ ] API and admin development servers run independently.
- [ ] The admin dashboard reports API health.
- [ ] The shared contract is used at runtime by both apps.
- [ ] A beginner can follow the README to reproduce the setup.
