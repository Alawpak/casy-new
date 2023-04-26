import { ChangeEvent, useState } from "react";

import { ImageProperties } from "commons/models/ImageProperties";

import { postImage } from "services/search-product";

import { InnerSearchProduct } from "./InnerSearchProduct";

export const SearchProduct = () => {
  const [imageProperties, setImageProperties] = useState<
    ImageProperties | undefined
  >(undefined);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files) {
      handleImage(e.target.files[0]);
    } else handleImage();
  };

  const handleImage = (image?: File) => {
    if (image) {
      const objectURL = URL.createObjectURL(image);
      setImageProperties({ name: image.name, src: objectURL, file: image });
    } else {
      setImageProperties(undefined);
    }
  };

  const searchImage = async (image: File) => {
    if (!image) return;
    let data = new FormData();
    data.append("image", image);

    const response = await postImage(data);
    console.log(response)
  };

  return (
    <>
      <InnerSearchProduct
        imageProperties={imageProperties}
        handleFileChange={handleFileChange}
        handleImage={handleImage}
        searchImage={searchImage}
      />
    </>
  );
};
