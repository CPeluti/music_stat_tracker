import { middleware } from "#@middlewares/middleware.js";
import { Env } from "#@models/env.js";
import { PrismaClient } from "#prisma/client.js";
import express from "express";

export let env: Env;
export let app = express();

export const prisma = new PrismaClient();

// ... you will write your Prisma Client queries here
try {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  //Initialize env object
  env = Env.parse(process.env);
  //Initialize sequelize

  app = express();

  const port = process.env.PORT ?? "8080";

  app.get("/", middleware);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (e) {
  console.error("Error during initialization:", e);
  process.exit();
}
