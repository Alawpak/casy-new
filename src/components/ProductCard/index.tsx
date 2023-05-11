import { Card, CardProps, styled } from "@mui/material";
import {
  colorLightMongoose,
  colorMediumMongoose,
} from "commons/constants/colors";

export const ProductCard = styled(Card)<CardProps>(({ theme }) => ({
  boxShadow: `0px 8px 10px -1px ${colorLightMongoose}`,
  height: "280px",
  position: "relative",
  transition: "0.2s",
  "&:hover ": {
    transform: "scale(1.1)",
    boxShadow: `0px 8px 20px 0px ${colorMediumMongoose}`,
  },
}));
