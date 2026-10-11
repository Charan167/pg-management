
import cors from "cors";
import express from "express";
import { healthResponseSchema } from "@pg-management/shared";

export const createApp = () => {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    }),
  );

  app.use(express.json());

  app.get("/health", (_req, res) => {
    const healthResponse = healthResponseSchema.parse({
      status: "ok",
      message: "API is available",
    });

    res.status(200).json(healthResponse);
  });

  app.use((_req, res) => {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  });

  return app;
};
