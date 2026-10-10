
import { getApiBaseUrl } from "./apiConfig";
import { healthResponseSchema } from "@pg-management/shared";

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

    return healthResponseSchema.safeParse(data).success
      ? "available"
      : "unavailable";
  } catch {
    return "unavailable";
  }
}
