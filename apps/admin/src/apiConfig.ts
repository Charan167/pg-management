
const DEFAULT_API_URL = "http://localhost:3000";

export function getApiBaseUrl(): string {
  const configuredUrl = import.meta.env.VITE_API_URL;

  if (!configuredUrl) {
    return DEFAULT_API_URL;
  }

  try {
    const url = new URL(configuredUrl);

    if (!["http:", "https:"].includes(url.protocol)) {
      throw new Error("Unsupported API URL protocol");
    }

    if (url.username || url.password) {
      throw new Error("API URL must not contain credentials");
    }

    if (url.search || url.hash) {
      throw new Error("API URL must not contain a query or fragment");
    }

    return url.href.replace(/\/$/, "");
  } catch {
    throw new Error(
      "Invalid VITE_API_URL. Provide a valid HTTP or HTTPS URL.",
    );
  }
}
