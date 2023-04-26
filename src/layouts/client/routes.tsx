import { Navigate, Route, Routes } from "react-router-dom";

import { Grid } from "@mui/material";

import { Home } from "modules/home";
import { SearchProduct } from "modules/search-product";

import { Header } from "./components/Header";
import { Color } from "modules/color";

export const ClientRoutes = () => {
  return (
    <>
      <Header />
      <Grid
        container
        direction="column"
        sx={{ width: "100%", p: 0, m: 0, mt: "33px" }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="color" element={<Color />} />
          <Route path="search-product" element={<SearchProduct />} />
        </Routes>
      </Grid>
    </>
  );
};
