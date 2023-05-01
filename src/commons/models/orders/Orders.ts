import { ProductDetail } from "../product-detail/ProductDetail";

export interface Order {
  orderId: string;
  order: ProductDetail[];
  total: number;
}

export type OrdersResponse = {
  data: Order[];
};
