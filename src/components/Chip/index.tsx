import { Chip as MuiChi, ChipProps } from "@mui/material";

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
        backgroundColor: "gray",
        boxShadow: `0px 0px 0px 0px `,
        width: "100%",
        "&: hover": {
          backgroundColor: "white",
          boxShadow: `0px 0px 0px 0px `,
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