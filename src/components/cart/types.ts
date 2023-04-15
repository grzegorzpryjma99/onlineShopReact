import {Product} from "../products/types/types";

export interface Cart {
    products: CartProduct[]
    totalAmount: number
}

export interface CartProduct {
    product: Product
    quantity: number
    totalAmount: number
}