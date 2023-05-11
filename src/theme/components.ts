import { Components, Theme } from "@mui/material";
import muiAppBar from "./components/componentAppBar";
import muiListItemText from "./components/componentListItemText";
import muiListSubHeader from "./components/componentListSubHeader";
import muiButton from "./components/componentMuiButton";
import muiCardActionArea from "./components/componentMuiCardActionArea";
import muiChip from "./components/componentMuiChip";
import muiDrawer from "./components/componentMuiDrawer";

const components: Components<Omit<Theme, "components">> = {
  MuiDrawer: muiDrawer,
  MuiButton: muiButton,
  MuiCardActionArea: muiCardActionArea,
  MuiChip: muiChip,
  MuiListSubheader: muiListSubHeader,
  MuiListItemText: muiListItemText,
  MuiAppBar: muiAppBar,
};

export default components;
