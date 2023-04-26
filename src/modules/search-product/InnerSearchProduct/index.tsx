import { Grid } from "@mui/material";
import { ChangeEvent } from "react";
import { UploadImage } from "./UploadImage";
import { ImageProperties } from "commons/models/ImageProperties";
import { PreviewImage } from "./PreviewImage";

type Props = {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImage: (image?: File) => void;
  imageProperties?: ImageProperties;
  searchImage: (image: File) => void;
};

export const InnerSearchProduct = ({
  handleFileChange,
  handleImage,
  imageProperties,
  searchImage,
}: Props) => {
  return (
    <Grid container item height="100%" p={8} alignItems="center">
      <Grid container height="100%">
        {/* Subir producto y pre-visualización */}

        {imageProperties ? (
          <PreviewImage
            handleImage={handleImage}
            imageProperties={imageProperties}
            searchImage={searchImage}
          />
        ) : (
          <UploadImage
            handleFileChange={handleFileChange}
            handleImage={handleImage}
          />
        )}
      </Grid>
    </Grid>
  );
};
