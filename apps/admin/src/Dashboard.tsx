
import { useEffect, useState } from "react";
import { Title } from "react-admin";
import { checkApiHealth } from "./apiHealth";
import type { ApiHealthStatus } from "./apiHealth";

type HealthState = "loading" | ApiHealthStatus;

export function Dashboard() {
  const [healthStatus, setHealthStatus] =
    useState<HealthState>("loading");

  useEffect(() => {
    let active = true;

    const refreshHealth = async () => {
      const status = await checkApiHealth();

      if (active) {
        setHealthStatus(status);
      }
    };

    void refreshHealth();

    const interval = setInterval(() => {
      void refreshHealth();
    }, 5000);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  const statusMessage = {
    loading: "Checking API connection...",
    available: "API is available",
    unavailable: "API is unavailable",
  }[healthStatus];

  return (
    <section aria-labelledby="dashboard-heading">
      <Title title="PG Management" />

      <h1 id="dashboard-heading">PG Management</h1>

      <p>No business resources are configured yet.</p>

      <h2>Backend API Status</h2>

      <p role="status" aria-live="polite">
        {statusMessage}
      </p>
    </section>
  );
}
