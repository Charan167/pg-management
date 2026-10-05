import { createApp } from "./app";

const app = createApp();

const port = Number(process.env.PORT) || 3000;

const server = app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

const shutdown = () => {
  console.log("Shutting down API server...");

  server.close(() => {
    console.log("API server stopped.");
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
