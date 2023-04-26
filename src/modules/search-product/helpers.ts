import { postImage } from "services/search-product";

export const searchImage = (image: File) => {
  if (!image) return;
  let data = new FormData();
  data.append("image", image);

  postImage(data);
};
