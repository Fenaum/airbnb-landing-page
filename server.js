import express from "express";
import { createServer } from "vite";
import { resolve } from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProd = process.env.NODE_ENV === "production";

const startServer = async () => {
  const app = express();

  if (isProd) {
    app.use(express.static(resolve(__dirname, "dist")));
  } else {
    const vite = await createServer({ server: { middlewareMode: "true" } });
    app.use(vite.middlewares);
  }

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
};

startServer();
