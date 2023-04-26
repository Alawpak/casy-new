import { Grid } from "@mui/material";
import React from "react";

type Props = {
  dataResponse: any | null;
};

export const Results = ({ dataResponse }: Props) => {
  console.log(dataResponse);
  return (
    <Grid item container>
      <Grid item>Titulo</Grid>
      <Grid item>Resultados</Grid>
    </Grid>
  );
};
