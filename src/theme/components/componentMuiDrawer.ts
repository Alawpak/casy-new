import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material/styles";
import { colorMediumMongoose } from "commons/constants/colors";

const muiDrawer: {
  defaultProps?: ComponentsProps["MuiDrawer"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiDrawer"];
  variants?: ComponentsVariants["MuiDrawer"];
} = {
  defaultProps: {
    PaperProps: {
      elevation: 0,
    },
  },
  styleOverrides: {
    paper: {
      height: "100%",
      paddingLeft: 15,
      paddingRight: 15,
      position: "static",
      borderRight: "transparent",
      overflowX: "hidden",
      boxShadow: `0px 5px 5px 0px ${colorMediumMongoose}`,
    },
  },
  variants: [
    {
      props: { variant: "permanent" },
      style: {
        ".MuiDrawer-paper": {
          borderRadius: "30px",
        },
      },
    },
  ],
};

export default muiDrawer;
