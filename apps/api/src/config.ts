import { z } from "zod";

const databaseUrlMessage =
  "Set DATABASE_URL to a PostgreSQL URL: postgresql://USER:PASSWORD@HOST:PORT/DATABASE.";
const portMessage = "Set PORT to an integer from 1 to 65535.";

const configSchema = z.object({
  DATABASE_URL: z.string({ error: databaseUrlMessage }).refine((value) => {
    try {
      const url = new URL(value);
      return (
        ["postgresql:", "postgres:"].includes(url.protocol) &&
        Boolean(url.hostname) &&
        url.pathname.length > 1 &&
        !url.hash &&
        !/\s/.test(value)
      );
    } catch {
      return false;
    }
  }, databaseUrlMessage),
  PORT: z.coerce
    .number({ error: portMessage })
    .int({ error: portMessage })
    .min(1, { error: portMessage })
    .max(65535, { error: portMessage })
    .default(3000),
  // Optional placeholders; authentication tickets will define strength and usage.
  ACCESS_TOKEN_SECRET: z.string().min(1).optional(),
  REFRESH_TOKEN_SECRET: z.string().min(1).optional(),
});

export type ApiConfig = z.infer<typeof configSchema>;

export function loadConfig(env: NodeJS.ProcessEnv): ApiConfig {
  const result = configSchema.safeParse(env);

  if (!result.success) {
    // Report only field names and validation messages, never environment values.
    const errors = result.error.issues.map(
      (issue) => `${issue.path.join(".")}: ${issue.message}`,
    );
    throw new Error(`Invalid API configuration:\n${errors.join("\n")}`);
  }

  return result.data;
}
