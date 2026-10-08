// Visual tokens adapted from Minimal Dashboard Free (MIT).
// Source: https://mui.com/store/items/minimal-dashboard-free/
// Repo: https://github.com/minimal-ui-kit/material-kit-react (v3.0.0)
// Subset port: palette, typography, shape, and component defaults for the
// React Admin shell only. Layouts, routes, pages, and demo sections were
// intentionally not copied (see issue #8).

import { alpha, createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    sidebar: { width: number; closedWidth: number };
  }
  interface ThemeOptions {
    sidebar?: { width?: number; closedWidth?: number };
  }
}

const pxToRem = (px: number) => `${px / 16}rem`;

const PRIMARY_FONT = '"DM Sans Variable", "DM Sans", system-ui, sans-serif';
const SECONDARY_FONT = `"Barlow", ${PRIMARY_FONT}`;

const grey = {
  50: "#FCFDFD",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#1C252E",
  900: "#141A21",
} as const;

const ramps = {
  primary: {
    lighter: "#D0ECFE",
    light: "#73BAFB",
    main: "#1877F2",
    dark: "#0C44AE",
    darker: "#042174",
    contrastText: "#FFFFFF",
  },
  secondary: {
    lighter: "#EFD6FF",
    light: "#C684FF",
    main: "#8E33FF",
    dark: "#5119B7",
    darker: "#27097A",
    contrastText: "#FFFFFF",
  },
  info: {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#FFFFFF",
  },
  success: {
    lighter: "#D3FCD2",
    light: "#77ED8B",
    main: "#22C55E",
    dark: "#118D57",
    darker: "#065E49",
    contrastText: "#FFFFFF",
  },
  warning: {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: "#1C252E",
  },
  error: {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#FFFFFF",
  },
} as const;

const typography: ThemeOptions["typography"] = {
  fontFamily: PRIMARY_FONT,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    "@media (min-width:600px)": { fontSize: pxToRem(52) },
    "@media (min-width:900px)": { fontSize: pxToRem(58) },
    "@media (min-width:1200px)": { fontSize: pxToRem(64) },
  },
  h2: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    "@media (min-width:600px)": { fontSize: pxToRem(40) },
    "@media (min-width:900px)": { fontSize: pxToRem(44) },
    "@media (min-width:1200px)": { fontSize: pxToRem(48) },
  },
  h3: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    "@media (min-width:600px)": { fontSize: pxToRem(26) },
    "@media (min-width:900px)": { fontSize: pxToRem(30) },
    "@media (min-width:1200px)": { fontSize: pxToRem(32) },
  },
  h4: { fontWeight: 700, lineHeight: 1.5, fontSize: pxToRem(20) },
  h5: { fontWeight: 700, lineHeight: 1.5, fontSize: pxToRem(18) },
  h6: { fontWeight: 600, lineHeight: 28 / 18, fontSize: pxToRem(17) },
  subtitle1: { fontWeight: 600, lineHeight: 1.5, fontSize: pxToRem(16) },
  subtitle2: { fontWeight: 600, lineHeight: 22 / 14, fontSize: pxToRem(14) },
  body1: { lineHeight: 1.5, fontSize: pxToRem(16) },
  body2: { lineHeight: 22 / 14, fontSize: pxToRem(14) },
  caption: { lineHeight: 1.5, fontSize: pxToRem(12) },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "none",
  },
};

function baseOptions(mode: "light" | "dark"): ThemeOptions {
  const isLight = mode === "light";
  return {
    palette: {
      mode,
      ...ramps,
      common: { black: "#000000", white: "#FFFFFF" },
      grey,
      divider: isLight ? alpha(grey[500], 0.2) : alpha("#FFFFFF", 0.16),
      text: isLight
        ? { primary: grey[800], secondary: grey[600], disabled: grey[500] }
        : { primary: "#FFFFFF", secondary: grey[500], disabled: grey[600] },
      background: isLight
        ? { paper: "#FFFFFF", default: grey[100] }
        : { paper: grey[800], default: grey[900] },
      action: isLight
        ? {
            active: grey[600],
            hover: alpha(grey[500], 0.08),
            selected: alpha(grey[500], 0.16),
            disabled: alpha(grey[500], 0.8),
            disabledBackground: alpha(grey[500], 0.24),
          }
        : {
            active: grey[500],
            hover: alpha("#FFFFFF", 0.08),
            selected: alpha("#FFFFFF", 0.16),
            disabled: alpha("#FFFFFF", 0.4),
            disabledBackground: alpha("#FFFFFF", 0.12),
          },
    },
    typography,
    shape: { borderRadius: 8 },
    sidebar: { width: 280, closedWidth: 88 },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 8, fontWeight: 700, textTransform: "none" },
          sizeLarge: { minHeight: 48 },
        },
      },
      MuiTextField: { defaultProps: { size: "small" } },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 8,
            "&.Mui-focused": {
              boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.24)}`,
            },
          }),
          notchedOutline: ({ theme }) => ({
            borderColor: alpha(
              isLight
                ? theme.palette.grey[500]
                : theme.palette.common.white,
              0.2,
            ),
          }),
        },
      },
      MuiTable: { defaultProps: { size: "small" } },
      MuiTableCell: {
        styleOverrides: {
          head: ({ theme }) => ({
            fontSize: pxToRem(14),
            fontWeight: 600,
            color: theme.palette.text.secondary,
            backgroundColor: isLight ? grey[200] : alpha("#FFFFFF", 0.04),
          }),
        },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 16,
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: { root: { backgroundImage: "none" } },
      },
      MuiAppBar: { styleOverrides: { root: { boxShadow: "none" } } },
    },
  };
}

export const pgLightTheme = createTheme(baseOptions("light"));
export const pgDarkTheme = createTheme(baseOptions("dark"));
