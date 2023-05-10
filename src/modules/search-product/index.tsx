import { ChangeEvent, useState } from "react";

import { ImageProperties } from "commons/models/ImageProperties";

import { postImageToVisualSearch } from "services/search-product";

import { InnerSearchProduct } from "./InnerSearchProduct";
import { getTags } from "./helpers";
import { getImagesSearch } from "services/image-search";

export const SearchProduct = () => {
  const [imageProperties, setImageProperties] = useState<
    ImageProperties | undefined
  >(undefined);

  const [dataResponse, setDataResponse] = useState<any | null>(null);

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

    const dataResponse = await postImageToVisualSearch(data);
    const tags = getTags(dataResponse);
    console.log(tags);
    const imageSearchResponse = await getImagesSearch(tags);
    setDataResponse(imageSearchResponse);
  };

  return (
    <>
      <InnerSearchProduct
        imageProperties={imageProperties}
        handleFileChange={handleFileChange}
        handleImage={handleImage}
        searchImage={searchImage}
        dataResponse={dataResponse}
      />
    </>
  );
};
