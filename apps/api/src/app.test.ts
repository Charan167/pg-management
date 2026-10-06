import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "./app";

// ponytail: exact toEqual locks #5 contract; Zod validation lives in ticket 09
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
});
