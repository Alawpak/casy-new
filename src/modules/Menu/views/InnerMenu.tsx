import { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import { Products as ProductsModel } from "commons/models/products/Products";

import { Drawer } from "./Drawer";
import { Products } from "./Products";

type Props = {
  products: ProductsModel[];
};

const getCategories = (products: ProductsModel[]) => {
  const uniqueTypes: string[] = [...new Set(products.map((item) => item.type))];
  //with Set we can get a new array without elements repeats,
  return ["Todos", ...uniqueTypes];
};

export const InnerMenu = ({ products }: Props) => {
  const [categoryActive, setCategoryActive] = useState<string>("Todos");
  const [categories, setCategories] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    setCategories(getCategories(products));
  }, [products]);

  const handleCategoryActive = (newCategory: string) =>
    setCategoryActive(newCategory);

  const handleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <Grid
        item
        component="nav"
        ml={2}
        sx={{
          transition: "0.2s",
          width: drawerOpen ? "300px" : "80px",
        }}
      >
        <Drawer
          handleDrawer={handleDrawer}
          open={drawerOpen}
          categories={categories}
          handleCategoryActive={handleCategoryActive}
          categoryActive={categoryActive}
        />
      </Grid>
      <Grid
        item
        container
        sx={{
          transition: "0.2s",
        }}
        pl={1.5}
      >
        <Grid item container>
          <Grid item sm={12}>
            <Products products={products} categoryActive={categoryActive} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </>
  );
};
