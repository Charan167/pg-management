import request from "supertest";
import { describe, expect, it } from "vitest";
import { healthResponseSchema } from "@pg-management/shared";
import { createApp } from "./app";

describe("GET /health", () => {
  it("returns 200 with stable body", async () => {
    const res = await request(createApp()).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok", message: "API is available" });
  });

  it("returns JSON 404 for unknown routes", async () => {
    const res = await request(createApp()).get("/does-not-exist");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ status: "error", message: "Not Found" });
  });

  it("validates a valid health response", () => {
    expect(
      healthResponseSchema.safeParse({
        status: "ok",
        message: "API is available",
      }).success,
    ).toBe(true);
  });

  it("rejects an invalid health response", () => {
    expect(
      healthResponseSchema.safeParse({
        status: "error",
      }).success,
    ).toBe(false);
  });

  it("allows the admin origin and credentials", async () => {
    const res = await request(createApp())
      .get("/health")
      .set("Origin", "http://localhost:5173");

    expect(res.headers["access-control-allow-origin"]).toBe(
      "http://localhost:5173",
    );
    expect(res.headers["access-control-allow-credentials"]).toBe("true");
  });

  it("allows CORS preflight requests from the admin origin", async () => {
    const res = await request(createApp())
      .options("/health")
      .set("Origin", "http://localhost:5173")
      .set("Access-Control-Request-Method", "GET");

    expect(res.status).toBe(204);
    expect(res.headers["access-control-allow-origin"]).toBe(
      "http://localhost:5173",
    );
    expect(res.headers["access-control-allow-credentials"]).toBe("true");
    expect(res.headers["access-control-allow-methods"]).toContain("GET");
  });

  it("does not authorize an unapproved origin", async () => {
    const unauthorizedOrigin = "http://malicious.example";
    const res = await request(createApp())
      .get("/health")
      .set("Origin", unauthorizedOrigin);

    expect(res.headers["access-control-allow-origin"]).not.toBe(
      unauthorizedOrigin,
    );
  });
});
