import { useState } from "react";
import { DrawerDesktop } from "./DrawerDesktop";

type Props = {
  categories: string[];
  handleCategoryActive: (newCategory: string) => void;
  handleDrawer: () => void;
  categoryActive: string;
  open: boolean;
};

export const Drawer = ({
  categories,
  handleCategoryActive,
  handleDrawer,
  categoryActive,
  open,
}: Props) => {
  return (
    <DrawerDesktop
      handleDrawer={handleDrawer}
      open={open}
      categories={categories}
      handleCategoryActive={handleCategoryActive}
      categoryActive={categoryActive}
    />
  );
};
