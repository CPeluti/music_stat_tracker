import { prisma } from "#@index.js";
import { describe, expect, it } from "vitest";

describe("Prisma", () => {
  it("Should get the default text", async () => {
    const allUsers = await prisma.user.findMany();
    expect(allUsers).toStrictEqual([]);
  });
});
