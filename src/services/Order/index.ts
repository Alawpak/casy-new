import { Order } from "commons/models/orders/Orders";
import { orders } from "./__mocks__/orders";

export const getOrder = (orderId: string): Promise<Order | undefined> => {
  const tempOrder = orders.data.find((order) => order.orderId === orderId);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tempOrder);
    }, 200);
  });
};