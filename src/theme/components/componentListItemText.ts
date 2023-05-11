import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material/styles";
import { colorDarkestGray } from "commons/constants/colors";

const muiListItemText: {
  defaultProps?: ComponentsProps["MuiListItemText"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiListItemText"];
  variants?: ComponentsVariants["MuiListItemText"];
} = {
  styleOverrides: {
    primary: {
      fontFamily: "Poppins",
      fontWeight: "500",
      color: colorDarkestGray,
    },
  },
};

export default muiListItemText;
