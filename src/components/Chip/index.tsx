import { Chip as MuiChi, ChipProps } from "@mui/material";
import {
  colorBlack,
  colorDarkestMongoose,
  colorMongoose,
} from "commons/constants/colors";

interface Props extends ChipProps {
  origin?: "productCard";
}

const Chip = ({ origin, ...props }: Props) => {
  const getStyles = () => {
    if (origin === "productCard") {
      const styles = {
        color: "white",
        fontFamily: "Poppins",
        transition: "0.2s",
        fontWeight: "bold",
        fontSize: "14px",
        borderRadius: "16px",
        backgroundColor: colorDarkestMongoose,
        boxShadow: `0px 0px 0px 0px ${colorBlack}`,
        width: "100%",
        "&: hover": {
          backgroundColor: colorMongoose,
          boxShadow: `0px 0px 0px 0px ${colorBlack}`,
          cursor: "pointer",
        },
      };
      if (props.color === "secondary") {
        styles.color = "white";
        return styles;
      }
      return styles;
    }
  };

  return <MuiChi sx={getStyles()} {...props} />;
};

export default Chip;
