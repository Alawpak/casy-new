export function arrayValidation(array: Array<any>) {
  return array && Array.isArray(array) && array.length;
}

/**Obtiene el nombre de un producto
* Pastel de moka
* Lo transforma a: "pastel-de-moka" funcional para agregarlo a una url en routes
*/
export const changeWhiteSpacesForSign = (url:string) => {
const x = url.replaceAll(" ", "-").toLowerCase();
return x;
}


/**Obtiene el nombre del producto formateado por la función de arriba
* "hola-mundo-asd"
* Lo transforma a: "Hola mundo asd"
*/
export const returnToOriginalUrlFormat = (url?:string) => {
if(!url) return
let name = url.replace(/-/g, " ");
name =  name.charAt(0).toUpperCase() + name.slice(1);
return name
}
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