import { useState, useCallback } from "react";
import { Order } from "../../../commons/models/orders/Orders";
import { getOrder } from "services/Order";
import { Order as OrderView } from "./Order/index";
import { NoOrder as NoOrderView } from "./NoOrder";
import { Box, Button, TextField } from "@mui/material";

export const InnerOrder = () => {
  const [order, setOrder] = useState<Order | undefined>(undefined);
  const [orderId, setOrderId] = useState<string>("");

  /* Aqui es donde creo que estoy mal, ya que toda esta logica deberia estar escrita en el index */
  const handleFetchOrder = useCallback((orderId: string) => {
    getOrder(orderId)
      .then((resp) => {
        setOrder(resp);
      })
      .catch(() => {
        setOrder(undefined);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFetchOrder(orderId);
  };

  return (
    <div>
      <Box component={"form"} onSubmit={handleSubmit}>
        <TextField
          value={orderId}
          placeholder="Ingrese el ID"
          onChange={(e) => setOrderId(e.target.value)}
        ></TextField>
        <Button variant="contained" type="submit">Buscar</Button>
      </Box>
      {order !== undefined ? <OrderView order={order} /> : <NoOrderView />}
    </div>
  );
};
