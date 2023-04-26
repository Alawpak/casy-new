import { Components, Theme } from "@mui/material";
import muiCardActionArea from "./components/componentMuiCardActionArea";
const components: Components<Omit<Theme, "components">> = {
  MuiCardActionArea: muiCardActionArea,
};

export default components;
