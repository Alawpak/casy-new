import { Box, Button, Grid } from "@mui/material";
import { ImageProperties } from "commons/models/ImageProperties";

type Props = {
  handleImage: (image?: File) => void;
  imageProperties: ImageProperties;
  searchImage: (image: File) => void;
};

export const PreviewImage = ({
  handleImage,
  imageProperties,
  searchImage,
}: Props) => {
  const { name, file, src } = imageProperties;
  return (
    <Grid
      item
      container
      md={12}
      pl={3}
      alignItems={"center"}
      justifyContent="center"
    >
      <Box component="img" src={src} maxHeight="150px" />
      <Grid item container justifyContent="center" columnSpacing={2}>
        <Grid item xs={6}>
          <Button variant="contained" onClick={() => handleImage()} fullWidth>
            Eliminar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            onClick={() => searchImage(file)}
            fullWidth
          >
            BUSCAR
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
