import { ChangeEvent, useRef } from "react";

import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import { ImageProperties } from "commons/models/ImageProperties";

import { dragOverHandler, onInputClick } from "./helpers";

type Props = {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImage: (image?: File) => void;
};

export const UploadImage = ({ handleFileChange, handleImage }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dropHandler = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (ev.dataTransfer.items) {
      // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // Si los elementos arrastrados no son ficheros, rechazarlos
        if (ev.dataTransfer.items[i].kind === "file") {
          let file = ev.dataTransfer.items[i].getAsFile();
          handleImage(file);
        }
      }
    } else {
      console.error("No hay items");
    }

    ev.stopPropagation();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Grid
        item
        container
        justifyContent="center"
        position="relative"
        border="1px solid black"
        height="100%"
      >
        <CardActionArea
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          onClick={handleClick}
        >
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            id="fileInput"
            ref={fileInputRef}
            onChange={handleFileChange}
            onClick={onInputClick}
          />
          <Grid item container xs={12} justifyContent="center">
            <CloudUploadOutlinedIcon />
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Typography>Drops your files here!</Typography>
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Typography>or click</Typography>
          </Grid>
        </CardActionArea>
      </Grid>
    </>
  );
};
