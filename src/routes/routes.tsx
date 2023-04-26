import { ThemeProvider } from "@mui/material";

import { Route, Routes } from "react-router-dom";

import useTheme from "../theme/useTheme";

import { AdminRoutes } from "../layouts/admin/routes";
import { ClientRoutes } from "../layouts/client/routes";

export const AppRouter = () => {
  const theme = useTheme("light");

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="login" element={<AdminRoutes />} />
        <Route path="/*" element={<ClientRoutes />} />
      </Routes>
    </ThemeProvider>
  );
};
