import { ProductsResponse } from "commons/models/products/Products";

export const products:ProductsResponse = {
    data: [
        {
            id: '100',
            img: '',
            name: 'Pastel de moka',
            type: 'Pasteles',
            smallDescription: 'Pastel sabor moka con distintos tama\u00F1o',
            size: 'Small', 
            price: 400, 
            isDisp: 0,
        },
        {
            id: '103',
            img: '',
            name: 'Gelatina mosaico',
            type: 'Gelatinas',
            smallDescription: 'Gelatina base de leche de mosaico',
            size: 'Small', 
            price: 150, 
            isDisp: 0,
        },
        {
            id: '106',
            img: '',
            name: 'Rompope con chimbo',
            type: 'Gelatinas',
            smallDescription: 'Gelatina base de leche sabor rompope con chimbo asies jaja',
            size: 'Small', 
            price: 160, 
            isDisp: 0,
        },
        {
            id: '107',
            img: '',
            name: 'Pay de limon',
            type: 'Pays',
            smallDescription: 'Un riko pay de limon siono',
            size: 'Small', 
            price: 120, 
            isDisp: 0,
        },
        {
            id: '108',
            img: '',
            name: 'Cupcake',
            type: 'Otros',
            smallDescription: 'Cumcake sabor albondigas',
            size: 'Small', 
            price: 17, 
            isDisp: 0
        },
    ]
}