import { createTheme } from "@mui/material/styles";

import * as palette from "./palette";
import components from "./components";
import typography from "./typography";

const createCustomTheme = (themePreference: "dark" | "light") => {
  const theme = createTheme({
    palette: palette[themePreference],
    typography: typography(),
    components: components,
  });

  return theme;
};

export default createCustomTheme;
