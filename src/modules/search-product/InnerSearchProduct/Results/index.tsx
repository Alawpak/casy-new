import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {
  dataResponse: any | null;
};

export const Results = ({ dataResponse }: Props) => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    if (!dataResponse) return;
    setImages(dataResponse.value);
  }, [dataResponse]);

  console.log(images);

  return (
    <Grid item container>
      <Grid item xs={12}>
        Resultados
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        {images.map(({ thumbnailUrl, contentUrl, thumbnail }): any => (
          <Grid
            item
            container
            justifyContent="center"
            xs={12}
            sm={6}
            md={4}
            lg={3}
            p={1}
            key={thumbnailUrl}
          >
            <Box
              component="img"
              height={thumbnail.height}
              width={thumbnail.width}
              maxHeight={"300px"}
              maxWidth={"200px"}
              src={thumbnailUrl}
              onClick={() => {
                window.open(contentUrl);
              }}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
