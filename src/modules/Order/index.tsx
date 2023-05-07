import React from "react";
import { getOrder } from "services/Order";
import { InnerOrder } from "./views/InnerOrder";

/* Aqui es donde creo que estoy mal, ya que toda esta logica esta escrita en InnerOrder */

export const Order = () => {
  getOrder("8123")
    .then((resp) => {
      console.log(resp);
    })
    .catch(() => {
      console.log("Caso se encontro el pedido pe vos ija");
      //setOrder(undefined) is an idea
    })
    .finally(() => {
      console.log("moto taxi torito");
    });

  return <InnerOrder />;
};
