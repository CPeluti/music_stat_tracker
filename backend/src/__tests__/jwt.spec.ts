import { generateJWT, validateJWT } from "#@util/jwt.js";
import { describe, expect, it } from "vitest";

describe("Express App", () => {
  it("Should get a text when serializing an object", () => {
    const jwt = generateJWT({ nome: "teste" });
    expect(jwt).toBeTypeOf("string");
  });
  it("Should generate a valid token", () => {
    const jwt = generateJWT({ name: "teste" });
    expect(validateJWT(jwt, "teste")).toBeTruthy();
  });
  it("Should generate expired token", () => {
    const jwt = generateJWT({ name: "teste" }, 0);
    expect(validateJWT(jwt, "teste")).toBeFalsy();
  });
});
