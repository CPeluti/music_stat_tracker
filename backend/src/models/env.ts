import * as z from "zod";

export const Env = z.object({
  JWT_EXPIRES_IN: z.coerce.number(),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number(),
});

export type Env = z.infer<typeof Env>;
