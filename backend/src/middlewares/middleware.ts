import { RequestHandler } from "express";

export const middleware: RequestHandler = (req, res) => {
  res.send("teste");
  console.log("Response Sent");
};
