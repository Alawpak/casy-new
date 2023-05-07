import { ProductsResponse } from "commons/models/products/Products";
import { products } from "./__mocks__/products";

export const getDesserts = (): Promise<ProductsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
};