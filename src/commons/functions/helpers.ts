export const extraerSepararPalabras = (input: any): string => {
  const names: string[] = [];

  input.tags.forEach((tag: any) => {
    tag.actions.forEach((action: any) => {
      if (action.data && action.data.value) {
        action.data.value.forEach((value: any) => {
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
  colors: string[],
  palabras2: string[] = []
): string => {
  const palabras = input.split(",");

  const palabrasFiltradas = palabras.filter((palabra) => {
    return (
      colors.includes(palabra.trim()) || palabras2.includes(palabra.trim())
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
  let palabrasRepetidas = palabrasOrdenadas.slice(0, 2);
  palabrasRepetidas = palabrasRepetidas.reverse();
  const finalQueries = [...palabrasRepetidas, "Reworked", "Pinterest"];
  console.log(finalQueries);
  return finalQueries.join("+");
};

export function arrayValidation(array: Array<any>) {
  return array && Array.isArray(array) && array.length;
}

export const changeWhiteSpacesForSign = (url: string) => {
  const x = url.replaceAll(" ", "-").toLowerCase();
  return x;
};
