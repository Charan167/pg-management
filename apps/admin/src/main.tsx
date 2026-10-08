import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/dm-sans";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/800.css";
import { App } from "./App";

const root = document.getElementById("root");
if (!root) throw new Error('Missing the admin app mount element "root".');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
