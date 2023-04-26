import { Grid } from "@mui/material";
import { ChangeEvent } from "react";
import { UploadImage } from "./UploadImage";
import { ImageProperties } from "commons/models/ImageProperties";
import { PreviewImage } from "./PreviewImage";
import { Results } from "./Results";

type Props = {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImage: (image?: File) => void;
  imageProperties?: ImageProperties;
  searchImage: (image: File) => void;
  dataResponse: null | any;
};

export const InnerSearchProduct = ({
  handleFileChange,
  handleImage,
  imageProperties,
  searchImage,
  dataResponse,
}: Props) => {
  return (
    <Grid container item height="100%" p={8} alignItems="center">
      <Grid container height="100%">
        {/* Subir producto y pre-visualización */}

        {!dataResponse ? (
          imageProperties ? (
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
          )
        ) : (
          <></>
        )}
        {dataResponse ? <Results dataResponse={dataResponse} /> : <></>}
      </Grid>
    </Grid>
  );
};
