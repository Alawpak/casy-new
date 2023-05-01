import { Navigate, Route, Routes } from "react-router-dom";

import { Grid } from "@mui/material";

import { Home } from "modules/home";
import { SearchProduct } from "modules/search-product";

import { Header } from "./components/Header";
import { Color } from "modules/color";

import { Contact } from "modules/contact";
import { Menu } from "modules/Menu";
import { Order } from "modules/Order";

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
          <Route path="contact" element={<Contact/>}/>
          <Route path="menu" element = {<Menu/>}/>
          <Route path="order" element = {<Order/>}/>
          <Route path="color" element={<Color />} />
          <Route path="search-product" element={<SearchProduct />} />
        </Routes>
      </Grid>
    </>
  );
};
