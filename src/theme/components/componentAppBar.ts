import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material/styles";

const muiAppBar: {
  defaultProps?: ComponentsProps["MuiAppBar"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiAppBar"];
  variants?: ComponentsVariants["MuiAppBar"];
} = {
  styleOverrides: {
    root: {
      backgroundColor: "white",
      boxShadow: "0px 0px 0px 0px",
    },
  },
};

export default muiAppBar;
