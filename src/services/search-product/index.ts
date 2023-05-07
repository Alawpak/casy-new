import axios from "axios";
import {
  extraerSepararPalabras,
  filtrarPalabras,
  eliminarPalabrasRepetidas,
} from "commons/functions/helpers";
import { colors, clothes } from "commons/constants/catalogs";

const BASE_URL = "https://api.bing.microsoft.com/v7.0/images/visualsearch";

export const postImageToVisualSearch = async (data: FormData) => {
  try {
    const response = await axios.post(BASE_URL, data);
    if (response.status === 200 && response.data) {
      const palabrasExtraidos = extraerSepararPalabras(response.data);
      const palabrasFiltrados = filtrarPalabras(
        palabrasExtraidos,
        colors,
        clothes
      );
      const tagsFinal = eliminarPalabrasRepetidas(palabrasFiltrados);
      console.log(tagsFinal);
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};
