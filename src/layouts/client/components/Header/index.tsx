import { AppBar, Button, Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { HideOnScroll } from "components/HideOnScroll";

export const Header = () => {
  const navigate = useNavigate();

  const ColorButton = () => navigate("color");
  const SearchButton = () => navigate("search-product");
  const HomeButton = () => navigate("home");

  return (
    <HideOnScroll>
      <AppBar>
        <Grid container columnSpacing={3}>
          <Grid item>Logo</Grid>
          <Grid item>
            <Button variant="outlined" onClick={HomeButton} color="error">
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={SearchButton} color="error">
              Search
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={ColorButton} color="error">
              Color
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </HideOnScroll>
  );
};
