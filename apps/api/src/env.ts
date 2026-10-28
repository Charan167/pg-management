import { resolve } from "node:path";
import { loadEnvFile } from "node:process";
import { loadConfig } from "./config";

try {
  loadEnvFile(resolve(__dirname, "../.env"));
} catch (error) {
  if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
    throw new Error("Unable to read apps/api/.env. Check its file permissions.");
  }
}

export const config = loadConfig(process.env);
