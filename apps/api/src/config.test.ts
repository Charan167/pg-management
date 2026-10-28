import { describe, expect, it } from "vitest";
import { loadConfig } from "./config";

const databaseUrl =
  "postgresql://pgmanagement:local-password@127.0.0.1:5432/pg_management";

describe("API configuration", () => {
  it("returns typed settings with a default port and no required auth secrets", () => {
    expect(loadConfig({ DATABASE_URL: databaseUrl })).toEqual({
      DATABASE_URL: databaseUrl,
      PORT: 3000,
    });
  });

  it("converts an explicit port and accepts optional auth placeholders", () => {
    expect(
      loadConfig({
        DATABASE_URL: databaseUrl,
        PORT: "4000",
        ACCESS_TOKEN_SECRET: "access-placeholder",
        REFRESH_TOKEN_SECRET: "refresh-placeholder",
      }),
    ).toEqual({
      DATABASE_URL: databaseUrl,
      PORT: 4000,
      ACCESS_TOKEN_SECRET: "access-placeholder",
      REFRESH_TOKEN_SECRET: "refresh-placeholder",
    });
  });

  it("explains how to supply a missing database URL", () => {
    expect(() => loadConfig({})).toThrow(
      "DATABASE_URL: Set DATABASE_URL to a PostgreSQL URL",
    );
  });

  it.each([
    "",
    "not-a-url",
    "https://localhost/pg_management",
    "postgresql:///pg_management",
    "postgresql://localhost",
    "postgresql://localhost/",
    "postgresql://localhost:99999/pg_management",
    "postgresql://localhost/pg_management#fragment",
    " postgresql://localhost/pg_management",
  ])("rejects an invalid database URL (%s)", (value) => {
    expect(() => loadConfig({ DATABASE_URL: value })).toThrow(
      "DATABASE_URL: Set DATABASE_URL to a PostgreSQL URL",
    );
  });

  it("accepts the postgres alias and connection query parameters", () => {
    const value = "postgres://user:password@localhost:5432/db?sslmode=require";
    expect(loadConfig({ DATABASE_URL: value }).DATABASE_URL).toBe(value);
  });

  it.each(["", "abc", "0", "-1", "1.5", "65536"])(
    "rejects an invalid port (%s)",
    (PORT) => {
      expect(() => loadConfig({ DATABASE_URL: databaseUrl, PORT })).toThrow(
        "PORT: Set PORT to an integer from 1 to 65535",
      );
    },
  );

  it("does not include supplied secrets or URLs in validation errors", () => {
    let message = "";
    try {
      loadConfig({
        DATABASE_URL: "https://user:private-password@localhost/db",
        PORT: "private-port-value",
        ACCESS_TOKEN_SECRET: "private-access-secret",
        REFRESH_TOKEN_SECRET: "private-refresh-secret",
      });
    } catch (error) {
      message = (error as Error).message;
    }

    expect(message).toContain("Invalid API configuration");
    expect(message).toContain("DATABASE_URL");
    expect(message).toContain("PORT");
    expect(message).not.toMatch(/private-|https:\/\/user/);
  });
});
