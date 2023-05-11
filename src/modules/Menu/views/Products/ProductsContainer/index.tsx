import { Grid, Paper } from "@mui/material";

import { Products as ProductsModel } from "commons/models/products/Products";
import { ProductCard } from "./ProductCard/Index";

type Props = {
  products: ProductsModel[];
};

export const ProductsContainer = ({ products }: Props) => {
  return (
    <Paper sx={{ width: "100%" }} elevation={0}>
      <Grid container mb={2} mt={2} spacing={4} justifyContent="center">
        {products.map(({ img, name, smallDescription, price }, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard
              img={img}
              title={name}
              price={price}
              smallDescription={smallDescription}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
