import axios from "axios";
const BASE_URL = "https://api.bing.microsoft.com/v7.0/images/search";

export const getImagesSearch = async (terms: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: terms,
      },
    });
    if (response.status === 200 && response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
