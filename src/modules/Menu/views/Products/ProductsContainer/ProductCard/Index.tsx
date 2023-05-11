import { useNavigate } from "react-router-dom";
import { Box, CardActionArea, Grid, Typography } from "@mui/material";

import { ProductCard as StyledProductCard } from "components/ProductCard";

import { changeWhiteSpacesForSign } from "commons/functions/helpers";
import Chip from "components/Chip";

type Props = {
  img: string;
  title: string;
  price: number;
  smallDescription: string;
};

export const ProductCard = ({ img, title, price, smallDescription }: Props) => {
  const navigate = useNavigate();

  return (
    <CardActionArea
      disableRipple
      disableTouchRipple
      onClick={() => alert("Aun en desarrollo")}
    >
      <StyledProductCard elevation={4}>
        <Grid container justifyContent="center" p={2}>
          <Box height="120px" display="flex" alignItems="center">
            <Box component="img" src={img} width="90px" />
          </Box>

          <Grid item container pt={2}>
            <Grid item container xs={12} justifyContent="center">
              <Typography variant="smallTitle" textAlign="center">
                {title}
              </Typography>
            </Grid>
            <Grid item container xs={12} pt={1} justifyContent="center">
              <Typography variant="smallLabel" textAlign="center">
                {smallDescription}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          position="absolute"
          bottom="0"
          justifyContent="center"
          p={2}
        >
          <Chip
            label={`Desde: $${price}`}
            origin="productCard"
            color="primary"
          />
        </Grid>
      </StyledProductCard>
    </CardActionArea>
  );
};
