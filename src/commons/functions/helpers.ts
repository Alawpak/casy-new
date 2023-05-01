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