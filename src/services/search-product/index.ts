import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.bing.microsoft.com/v7.0/images/visualsearch";

export const postImage = (data: FormData) => {
  let request = new XMLHttpRequest();

  request.open("POST", BASE_URL);

  request.send(data);

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  };
};

export const postImageToVisualSearch = async (data: FormData) => {
  try {
    const response = await axios.post(BASE_URL, data);
    if (response.status === 200 && response.data) return response.data;
    return response;
  } catch (error) {
    console.error(error);
  }
};
