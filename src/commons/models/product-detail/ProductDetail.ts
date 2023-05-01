export type ProductDetail = {
    img: string,    //img maybe will be in the code
    id: string,
    name: string,
    type: string,
    smallDescription: string,
    description: string,
    size: string,
    price: number,
    isDisp: boolean,
    readyForDelivery: string,
}

export type ProductDetailResponse = {
    data: ProductDetail[],
}