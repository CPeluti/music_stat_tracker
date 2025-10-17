import { env } from "#index.js";
import { sign } from "jsonwebtoken";

export function generateJWT(payload: object): string {
  return sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
}
