import { Grid, Paper } from "@mui/material";
import { Products as ProductsModel } from "commons/models/products/Products";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { getProductsByCategory } from "./helpers";
import { ProductsContainer } from "./ProductsContainer";

type Props = {
  products: ProductsModel[];
  categoryActive: string;
};

export const Products = ({ products, categoryActive }: Props) => {
  const [productsFiltered, setProductsFiltered] = useState<ProductsModel[]>([]);

  useEffect(() => {
    setProductsFiltered(getProductsByCategory(products, categoryActive));
  }, [categoryActive, products]);

  return (
    <Paper sx={{ width: "100%" }} elevation={0}>
      <Grid container direction="column" p={3}>
        <Grid item>
          <Banner categoryActive={categoryActive} />
        </Grid>
        <Grid item>
          {productsFiltered.length > 0 ? (
            <ProductsContainer products={productsFiltered} />
          ) : (
            <> </>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};
