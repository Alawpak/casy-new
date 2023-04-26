import axios from "axios";

const BASE_URL = "https://api.bing.microsoft.com/v7.0/images/visualsearch";

export const postImageToVisualSearch = async (data: FormData) => {
  try {
    const response = await axios.post(BASE_URL, data);
    if (response.status === 200 && response.data) return response.data;
    return null;
  } catch (error) {
    console.error(error);
  }
};
