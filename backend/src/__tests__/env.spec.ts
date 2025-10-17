// import request from "supertest";
import { Env } from "#@models/env.js";
import { describe, expect, it } from "vitest";

describe("Test Env", () => {
  it("Should parse properly", () => {
    const env = Env.parse(process.env);
    expect(env).toBeTruthy();
  });
});
