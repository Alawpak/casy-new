import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Grid } from "@mui/material";

import { SearchProduct } from "modules/search-product";

import { Header } from "./components/Header";
import { Color } from "modules/color";
import { Menu } from "modules/Menu";

export const ClientRoutes = () => {
  const location = useLocation();
  const isSearchPath = location.pathname === "/search-product";

  return (
    <>
      <Header />
      <Grid
        container
        direction={isSearchPath ? "column" : "row"}
        flexWrap={isSearchPath ? "wrap" : "nowrap"}
        sx={{ width: "100%", p: 0, m: 0, mt: "60px" }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Menu />} />
          <Route path="color" element={<Color />} />
          <Route path="search-product" element={<SearchProduct />} />
        </Routes>
      </Grid>
    </>
  );
};
