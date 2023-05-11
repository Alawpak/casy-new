import {
  ComponentsOverrides,
  ComponentsProps,
  Theme,
} from "@mui/material/styles";

const muiChip: {
  defaultProps?: ComponentsProps["MuiChip"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiChip"];
} = {
  styleOverrides: {
    root: {},
  },
};

export default muiChip;
