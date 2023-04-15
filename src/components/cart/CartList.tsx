import React from 'react';
import CartListProduct from "./CartListProduct";
import {CartProduct} from "./types";

interface ProductCartProps {
    product: CartProduct[]
}

const CartList = (props: ProductCartProps) => (
    <div className='cart-list'>
        <div className='cart-headers'>
            <p className='list-one' style={{paddingLeft: '6em'}}>Product</p>
            <p className='list-two'>Price</p>
            <p className='list-three'>Quantity</p>
            <p className='list-four'>Total</p>
        </div>
        {props.product.length > 0 ? props.product.map((products: CartProduct) => {
            return <CartListProduct key={products.product.id} product={products.product} quantity={products.quantity}/>
        }) : <p className='empty-info'>Cart empty</p>}
    </div>
);

export default CartList;