## Workspace Layout

This repository uses pnpm workspaces to manage multiple packages in one repository.

- `apps/admin` - Admin application.
- `apps/api` - API application.
- `packages/shared` - Shared code that can be used by the applications.

The workspace configuration is defined in `pnpm-workspace.yaml`.

## Run PostgreSQL Locally

Install Docker with Docker Compose v2 and start the Docker daemon. If you use
Docker Desktop with WSL 2, enable integration for your distro in
**Settings > Resources > WSL Integration**. Check both tools:

```bash
docker info
docker compose version
```

Run these commands from the repository root. Port `5432` must be free; stop
another local PostgreSQL instance if Docker reports that the port is in use.

```bash
docker compose up -d
docker compose ps
```

Compose downloads the PostgreSQL image (the packaged database software) and
starts a container (a running instance). The `postgres:18` tag pins major version
18 while allowing maintenance updates when you pull the image. PostgreSQL 18 is
a stable release, supported through November 2030, and supported by Prisma
ORM 7. Future major-version changes require owner approval and a data migration
or an intentional local reset. See the [PostgreSQL support policy](https://www.postgresql.org/support/versioning/)
and [Prisma compatibility list](https://www.prisma.io/docs/orm/v7/reference/supported-databases).

The healthcheck repeatedly tests whether PostgreSQL accepts TCP connections.
Startup can take a few seconds; repeat `docker compose ps` until the service
shows `healthy`. Check readiness directly using the tool inside the container:

```bash
docker compose exec postgres pg_isready -h 127.0.0.1 -U pgmanagement -d pg_management
```

Expected output includes `127.0.0.1:5432 - accepting connections`. You do not need
PostgreSQL tools installed on your host.

The database is available only on the host's loopback address, `127.0.0.1:5432`.
Its database name is `pg_management`, its username is `pgmanagement`, and its
password is `pg_management_dev`. These are local development credentials. The
connection URL for the later API configuration and Prisma tickets is:

```text
postgresql://pgmanagement:pg_management_dev@127.0.0.1:5432/pg_management
```

Application code does not connect to PostgreSQL yet.

### Operate the Database

| Task | Command |
| --- | --- |
| Start in the background | `docker compose up -d` |
| Check status and health | `docker compose ps` |
| Follow database logs | `docker compose logs -f postgres` |
| Stop and keep containers and data | `docker compose stop` |
| Resume stopped containers | `docker compose start` |
| Remove containers and keep data | `docker compose down` |
| List this project's volumes | `docker volume ls --filter label=com.docker.compose.project=pg-management` |

Press Ctrl+C to stop following logs; PostgreSQL keeps running.

The named volume `postgres_data` stores database files outside the container.
Compose prefixes its name with the project name, normally producing
`pg-management_postgres_data`. Data survives both stop/start and down/up.
The volume mounts at `/var/lib/postgresql`, the
[PostgreSQL 18 image's required location](https://hub.docker.com/_/postgres).
Initialization settings such as the database name, username, and password only
apply when the volume is empty; changing them does not update an existing database.

### Reset All Local Database Data

**This deletes all database data in this Compose project's volume.** To create
a fresh database with the configured credentials:

```bash
docker compose down -v
docker compose up -d
docker compose ps
```

Wait for `healthy` again. Ordinary `docker compose down` preserves the volume;
the `-v` flag removes it.

## Run the Admin Application

Use Node.js 22.12 or newer. The repository pins its pnpm version in the root
`package.json`. From the repository root, install dependencies and start the app:

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm --filter admin dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). The app
runs independently of the API and shows a placeholder dashboard. Business
resources are not configured yet; the placeholder data provider rejects all
operations with an error naming the operation and resource.

Check types, build the app, and serve the build locally:

```bash
corepack pnpm typecheck
corepack pnpm --filter admin build
corepack pnpm --filter admin preview
```

Preview normally runs at `http://localhost:4173`. It is for inspecting the build
locally, not production hosting.

Corepack comes with Node.js 22 and downloads the declared pnpm version when
needed. If that pnpm version is already on your PATH, you can use `pnpm` directly
in these commands.

## Connect the Admin App to API Health

The React Admin app runs at `http://localhost:5173`, and the Express API runs
at `http://localhost:3000`. Start them in separate terminals from the repository
root:

```bash
pnpm --filter @pg-management/admin dev
pnpm --filter @pg-management/api dev
```

The admin dashboard checks the API by sending `GET /health` to the API base
URL. That base URL is set by `VITE_API_URL`, which defaults to
`http://localhost:3000`. To use a different API URL for local development,
provide the variable when starting the admin app:

```bash
VITE_API_URL=http://localhost:3001 pnpm --filter @pg-management/admin dev
```

The admin app and API use different origins because they run on different ports.
Browsers therefore require the API to allow the admin origin through CORS. The
request is also credentialed so browser credentials can be sent; the API must
allow credentials and use the specific admin origin rather than a wildcard.
The dashboard shows a loading state while checking, then indicates whether the
API is available or unavailable. It refreshes the health check automatically.
