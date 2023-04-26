declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label: true;
    smallLabel: true;
    title: true;
    smallTitle: true;
    bottonLabel: true;
  }
}

const typography = () => ({
  fontSize: 12,
  fontFamily: "Noto Sans",
  h1: {},
  h2: {},
  h4: {},
  button: {},
  overline: {},
  h5: {},
  h6: {},
  caption: {},
  h3: {},
  subtitle1: {},
  subtitle2: {},
  body1: {},
  body2: {},
  label: {},
  smallLabel: {},
  smallTitle: {},
  title: {},
  buttonLabel: {},
});

export default typography;
