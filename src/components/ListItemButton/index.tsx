import { ListItemButton, ListItemButtonProps, styled } from "@mui/material";
import {
  colorLightMongoose,
  colorMediumMongoose,
} from "commons/constants/colors";

interface StyledListItemButtonProps extends ListItemButtonProps {
  origin?: string;
  isActive?: boolean;
}
//this component is when we need to use a custom prop with a valor, for example if
// the component is reused but in we want to add different styles for the prop

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "origin" && prop !== "isActive",
})<StyledListItemButtonProps>(({ origin, isActive, ...props }) => ({
  ...(origin === "drawer" && {
    borderRadius: "20px",
    marginBottom: 4,
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: `0px 1px 10px 0px ${colorLightMongoose}`,
    },
    ...(isActive && {
      boxShadow: `0px 3px 10px 0px ${colorMediumMongoose}`,
    }),
  }),
}));

export default StyledListItemButton;
