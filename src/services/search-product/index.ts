import axios from "axios";
import { extraerSepararPalabras, filtrarPalabras, eliminarPalabrasRepetidas } from "commons/functions/helpers";
import { colors, clothes } from "commons/constants/catalogs";


export const postImage = (data: FormData) => {
  let request = new XMLHttpRequest();
  const baseUri = "https://api.bing.microsoft.com/v7.0/images/visualsearch";

  request.open("POST", baseUri);

  request.send(data);

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const palabrasExtraidos = (extraerSepararPalabras(this.responseText));
      const palabrasFiltrados = (filtrarPalabras(palabrasExtraidos, colors, clothes));
      const tagsFinal = (eliminarPalabrasRepetidas(palabrasFiltrados));
      console.log(tagsFinal);
    }
  };
};
