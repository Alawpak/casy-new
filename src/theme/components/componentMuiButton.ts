import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material/styles";
import {
  colorBlack,
  colorDarkMongoose,
  colorDarkestMongoose,
  colorMediumMongoose,
  colorMongoose,
} from "commons/constants/colors";

const muiButton: {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
  variants?: ComponentsVariants["MuiButton"];
} = {
  defaultProps: {
    disableTouchRipple: true,
  },
  styleOverrides: {},
  variants: [
    {
      props: { variant: "contained" },
      style: {
        fontFamily: "Poppins",
        transition: "0.2s",
        fontWeight: "bold",
        fontSize: "14px",
        borderRadius: "16px",
        backgroundColor: colorDarkestMongoose,
        boxShadow: `0px 0px 0px 0px ${colorBlack}`,
        "&: hover": {
          backgroundColor: colorMongoose,
          transform: "scale(1.1)",
          boxShadow: `0px 3px 6px 0px ${colorMediumMongoose}`,
        },
      },
    },
    {
      props: { variant: "outlined" },
      style: {
        fontFamily: "Poppins",
        transition: "0.2s",
        fontWeight: "500",
        fontSize: "14px",
        color: colorDarkestMongoose,
        borderRadius: "16px",
        backgroundColor: "transparent",
        borderColor: colorDarkMongoose,
        boxShadow: `0px 0px 0px 0px ${colorBlack}`,
        "&: hover": {
          backgroundColor: "transparent",
          transform: "scale(1.1)",
          borderColor: colorDarkestMongoose,
        },
      },
    },
    {
      props: { variant: "text" },
      style: {
        ".MuiDrawer-paper": {
          borderRadius: "30px",
        },
      },
    },
  ],
};

export default muiButton;
