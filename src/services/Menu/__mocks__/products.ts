import { ProductsResponse } from "commons/models/products/Products";
import Socks from "assets/socks.jpg";
import BlueJeansRasg from "assets/blueJeansRasg.jpg";
import BlueJeansBord from "assets/blueJeansBord.jpg";
import ShirtPainted from "assets/shirtPainted.jpg";
import SkeletonHoodie from "assets/skeletonHoodie.jpg";

export const products: ProductsResponse = {
  data: [
    {
      id: "100",
      img: ShirtPainted,
      name: "Camisa pintada a mano",
      type: "Camisas",
      smallDescription: "Camisa pintada a mano con estilo graffiti",
      size: "Small",
      price: 400,
      isDisp: 0,
    },
    {
      id: "103",
      img: BlueJeansBord,
      name: "Blue jeans bordados",
      type: "Jeans",
      smallDescription:
        "Jeans azules bordados con bordados de flores en las bolsas",
      size: "Small",
      price: 150,
      isDisp: 0,
    },
    {
      id: "106",
      img: BlueJeansRasg,
      name: "Blue jeans rasgados",
      type: "Jeans",
      smallDescription: "Blue jeans rasgados en distintas partes",
      size: "Small",
      price: 160,
      isDisp: 0,
    },
    {
      id: "107",
      img: SkeletonHoodie,
      name: "Skeleton Hoodie",
      type: "Hoodies",
      smallDescription: "Hoodie negra oversize pintada con tecnica de cloro",
      size: "Small",
      price: 120,
      isDisp: 0,
    },
    {
      id: "108",
      img: Socks,
      name: "Calcetas bordadas",
      type: "Calcetas bordadas",
      smallDescription: "Calcetas nike bordadas con flores",
      size: "Small",
      price: 17,
      isDisp: 0,
    },
  ],
};
