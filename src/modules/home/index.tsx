import { Button, Typography, Grid, Stack, Box, CardMedia } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Home = () => {
  return (
    <Grid container width={"100%"} height={"100%"}>
      <Grid
        item
        container
        xs={12}
        md={6}
        pl={"20px"}
        pt={"10px"}
        direction={"column"}
        justifyContent={"center"}
      >
        <Typography variant="label" align="left" paddingBottom={2}>
          Gelatinas con un amor profundo
        </Typography>
        <Typography variant="h5" align="left" paddingBottom={3}>
          No dejes para manana lo que puedes comerte hoy...
        </Typography>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#F9C3FF",
            width: "100px",
          }}
        >
          <Typography style={{ color: "black" }}>Productos</Typography>
        </Button>
      </Grid>
      <Grid item container xs={12} md={6} pt={"10px"} justifyContent={"center"}>
        <Box
          sx={{ maxWidth: "100%", height: "auto" }}
          component={"img"}
        />
      </Grid>
      <Grid item container xs={12} justifyContent={"flex-end"}>
        <Stack direction="row">
          <IconButton color="secondary">
            <CallIcon />
          </IconButton>
          <IconButton color="secondary">
            <FacebookIcon />
          </IconButton>
          <IconButton color="secondary">
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};