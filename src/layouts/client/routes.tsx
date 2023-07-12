import { Navigate, Route, Routes } from "react-router-dom";

import { Grid } from "@mui/material";

import { Home } from "modules/home";
import { SearchProduct } from "modules/search-product";

import { Header } from "./components/Header";
import { Color } from "modules/color";

/**
 * In full pages, just add height 100% on the grid item
 */

export const ClientRoutes = () => {
  return (
    <>
      <Header />
      <Grid container direction="column" width={"100%"} mt="33px">
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
