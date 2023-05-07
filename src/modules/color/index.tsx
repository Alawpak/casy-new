import { paletteColor } from "../../commons/constants/colors";
import { Grid, Box } from "@mui/material";

type Props = {
  colors: string[];
};

const ColorsComponent = ({ colors }: Props) => {
  return (
    <Grid item container xs={4} spacing={2}>
      {colors.map((color) => {
        return (
          <Grid item xs={12} key={color}>
            <Box
              sx={{
                width: "100%",
                height: "20px",
                backgroundColor: color,
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export const Color = () => {
  return (
    <Grid
      item
      container
      sx={{ width: "100%", height: "85vh" }}
      justifyContent="center"
      spacing={2}
    >
      {paletteColor.map((colors, index) => (
        <ColorsComponent colors={colors} key={index} />
      ))}
    </Grid>
  );
};
