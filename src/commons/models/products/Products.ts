
export type Products = {
    img: string,    //img maybe will be in the code
    id: string,
    name: string,
    type: string,
    smallDescription: string,
    size: string,   //siempre small
    price: number,  //desde tal precio
    isDisp: number, //chip if there are disp
}

export type ProductsResponse = {
    data: Products[],
}