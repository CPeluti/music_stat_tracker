import { app } from "#index.js";
// sum.spec.ts
import request from "supertest";
import { describe, expect, it } from "vitest";

describe("sum function", () => {
  it("Should get the default text", async () => {
    const res = (await request(app).get("/")).text;
    expect(res).toBe("teste");
  });
});
