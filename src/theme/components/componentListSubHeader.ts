import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material/styles";
import { colorMediumGray } from "commons/constants/colors";

const muiListSubHeader: {
  defaultProps?: ComponentsProps["MuiListSubheader"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiListSubheader"];
  variants?: ComponentsVariants["MuiListSubheader"];
} = {
  styleOverrides: {
    root: {
      fontFamily: "Poppins",
      fontSize: "12px",
      color: colorMediumGray,
      paddingLeft: "5px",
    },
  },
};

export default muiListSubHeader;
