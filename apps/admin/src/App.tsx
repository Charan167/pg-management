import { Admin } from "react-admin";
import { Dashboard } from "./Dashboard";
import { dataProvider } from "./dataProvider";
import { pgDarkTheme, pgLightTheme } from "./theme";

export function App() {
  // A function child enables the dashboard shell with zero resources;
  // omitting children shows React Admin's welcome screen instead.
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      disableTelemetry
      theme={pgLightTheme}
      darkTheme={pgDarkTheme}
      defaultTheme="light"
    >
      {() => []}
    </Admin>
  );
}
