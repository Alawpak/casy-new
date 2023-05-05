import { InputData } from "commons/models/InputData";

export const extraerSepararPalabras = (inputString: string): string => {
  const input: InputData = JSON.parse(inputString);
  const names: string[] = [];

  input.tags.forEach((tag) => {
    tag.actions.forEach((action) => {
      if (action.data && action.data.value) {
        action.data.value.forEach((value) => {
          names.push(value.name);
        });
      }
    });
  });

  const cNames = names.join(" ");
  const entrada = cNames.replace(/[^a-zA-Z\s]/g, " ");
  const palabras = entrada.split(/\s+/);
  return palabras.join(", ");
};

export const filtrarPalabras = (
  input: string,
  palabras1: string[],
  palabras2: string[] = []
): string => {
  const palabras = input.split(",");

  const palabrasFiltradas = palabras.filter((palabra) => {
    return (
      palabras1.includes(palabra.trim()) || palabras2.includes(palabra.trim())
    );
  });
  return palabrasFiltradas.join(", ");
};

export const eliminarPalabrasRepetidas = (input: string): string => {
  const palabras = input.split(",");
  const contador: { [palabra: string]: number } = {};

  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i].trim();
    if (palabra.length > 0) {
      if (palabra in contador) {
        contador[palabra]++;
      } else {
        contador[palabra] = 1;
      }
    }
  }

  const palabrasOrdenadas = Object.keys(contador).sort(
    (a, b) => contador[b] - contador[a]
  );
  const palabrasRepetidas = palabrasOrdenadas.slice(0, 3);
  return palabrasRepetidas.join(", ");
};
