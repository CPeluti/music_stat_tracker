import { env } from "#@index.js";
import { sign, verify } from "jsonwebtoken";
import * as z from "zod";

export const Payload = z.object({
  exp: z.number(),
  iat: z.number(),
  name: z.string(),
});

export type Payload = z.infer<typeof Payload>;

export function generateJWT(payload: object, expiresIn?: number): string {
  let time = env.JWT_EXPIRES_IN;
  if (expiresIn != undefined) time = expiresIn;
  return sign(payload, env.JWT_SECRET, { expiresIn: time });
}

export function validateJWT(jwt: string, signer: string): boolean {
  try {
    const parsedToken = verify(jwt, env.JWT_SECRET, { complete: true });
    const payload = Payload.parse(parsedToken.payload);
    return payload.name == signer;
  } catch (e) {
    console.error("Fail to validate JWT", e);
  }
  return false;
}
