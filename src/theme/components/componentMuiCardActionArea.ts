import {
  ComponentsOverrides,
  ComponentsProps,
  Theme,
} from "@mui/material/styles";

const muiCardActionArea: {
  defaultProps?: ComponentsProps["MuiCardActionArea"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiCardActionArea"];
} = {
  styleOverrides: {
    focusHighlight: {
      background: "transparent",
    },
  },
  defaultProps: {
    disableTouchRipple: true,
  },
};

export default muiCardActionArea;
