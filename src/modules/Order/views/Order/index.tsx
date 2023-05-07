import { Order as OrderModel } from "../../../../commons/models/orders/Orders";

type Props = {
  order: OrderModel;
};

export const Order = ({ order }: Props) => {
  const orders = order.order;

  const showOrders = () => {
    return orders.map((ord) => {
      return (
        <div key={ord.id}>
          <h3>Id: {ord.id}</h3>
          <h3>Nombre: {ord.name}</h3>
          <img src={ord.img} height={100} alt={ord.name} />
          <h3>Descripcion: {ord.description}</h3>
          <h3>Tamaño: {ord.size}</h3>
          <h3>Precio: {ord.price}</h3>
          <hr />
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Order ID: {order.orderId}</h1>
      <h1>Ordenes:</h1>
      {showOrders()}
      <h2>Total: {order.total}</h2>
    </div>
  );
};
