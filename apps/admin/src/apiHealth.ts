
import { getApiBaseUrl } from "./apiConfig";

export type ApiHealthStatus = "available" | "unavailable";

export async function checkApiHealth(): Promise<ApiHealthStatus> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/health`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return "unavailable";
    }

    const data: unknown = await response.json();

    if (
      typeof data === "object" &&
      data !== null &&
      "status" in data &&
      data.status === "ok"
    ) {
      return "available";
    }

    return "unavailable";
  } catch {
    return "unavailable";
  }
}
