import { middleware } from "#middlewares/middleware.js";
import express from "express";

export const app = express();
const port = process.env.PORT ?? "8080";

app.get("/", middleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
