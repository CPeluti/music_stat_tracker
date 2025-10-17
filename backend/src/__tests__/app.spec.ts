import { app } from "#@index.js";
import request from "supertest";
import { describe, expect, it } from "vitest";

describe("Express App", () => {
  it("Should get the default text", async () => {
    const res = (await request(app).get("/")).text;
    expect(res).toBe("teste");
  });
});
