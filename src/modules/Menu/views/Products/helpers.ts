import { Products as ProductsModel } from "commons/models/products/Products";

export const getUniqueProductByPropertyName = (products: ProductsModel[]) => {
  const uniqueNames = products.reduce(
    //uniqueArr es la variable acumuladora, obj el objeto iterado
    (uniqueArr: ProductsModel[], obj: ProductsModel) => {
      const { name, ...rest } = obj; // Extraemos la propiedad "Name" del objeto y guardamos el resto en la variable "rest"
      const existingObj = uniqueArr.find((o) => o.name === name); // Buscamos si ya existe un objeto con ese "Name"
      if (!existingObj) {
        uniqueArr.push({ name: name, ...rest }); // Si no existe, agregamos un nuevo objeto al arreglo "uniqueArr"
      } else {
        Object.assign(existingObj, rest); // Si ya existe, actualizamos las demás propiedades del objeto existente con los valores más recientes
      }
      return uniqueArr;
    },
    []
  );

  return uniqueNames;
};

export const getProductsByCategory = (
  products: ProductsModel[],
  categoryActive: string
) => {
  if (categoryActive === "Todos") {
    return [...products];
  }
  const productsFiltered: ProductsModel[] = products.filter(
    (product) => product.type === categoryActive
  );

  return [...productsFiltered];
};
