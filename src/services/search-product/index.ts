import axios from "axios";

export const postImage = (data: FormData) => {
  let request = new XMLHttpRequest();
  const baseUri = "https://api.bing.microsoft.com/v7.0/images/visualsearch";

  request.open("POST", baseUri);

  request.send(data);

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  };
};
