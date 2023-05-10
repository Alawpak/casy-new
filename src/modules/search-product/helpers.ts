import { clothes, colors } from "commons/constants/catalogs";
import {
  eliminarPalabrasRepetidas,
  extraerSepararPalabras,
  filtrarPalabras,
} from "commons/functions/helpers";

export const getTags = (data: any) => {
  const palabrasExtraidos = extraerSepararPalabras(data);
  const palabrasFiltrados = filtrarPalabras(palabrasExtraidos, colors, clothes);
  const tagsFinal = eliminarPalabrasRepetidas(palabrasFiltrados);

  return tagsFinal;
};
