import { Drawer } from "@mui/material";
import { DrawerContent } from "../DrawerContent";

type Props = {
  categories: string[];
  categoryActive: string;
  handleCategoryActive: (newCategory: string) => void;
  handleDrawer: () => void;
  open: boolean;
};

export const DrawerDesktop = ({
  categories,
  handleCategoryActive,
  handleDrawer,
  categoryActive,
  open,
}: Props) => {
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerContent
        handleDrawer={handleDrawer}
        open={open}
        categories={categories}
        handleCategoryActive={handleCategoryActive}
        categoryActive={categoryActive}
      />
    </Drawer>
  );
};
