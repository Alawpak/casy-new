import { Navigate, Route, Routes } from "react-router-dom";
import { Container, Grid } from "@mui/material";

export const AdminRoutes = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ mt: 2 }}>
      <Grid container alignContent="flex-start" flexWrap="nowrap">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Grid>
    </Container>
  );
};
