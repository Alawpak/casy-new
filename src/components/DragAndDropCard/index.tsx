import styled from "@emotion/styled";
import { CardActionArea, CardProps } from "@mui/material";
import { colorMediumGray } from "commons/constants/colors";

const DragAndDropArea = styled(CardActionArea)<CardProps>(() => ({
  border: `3px solid ${colorMediumGray}`,
  borderRadius: "25px",
  borderStyle: "dashed",
}));

export default DragAndDropArea;
