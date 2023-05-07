import { useEffect, useState } from "react";

import { getDesserts } from "services/Menu";
import { Products } from "commons/models/products/Products";
import { arrayValidation } from "commons/functions/helpers";
import { InnerMenu } from "./views/InnerMenu";

export const Menu = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getDesserts()
      .then((resp) => {
        if (resp && arrayValidation(resp.data)) {
          setProducts(resp.data);
        }
      })
      .catch(() => {
        setProducts([]);
      });
  }, []);

  return (
    <>{products.length > 0 ? <InnerMenu products={products} /> : <> </>}</>
  );
};
