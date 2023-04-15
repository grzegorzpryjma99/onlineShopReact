import React from "react";
import {CartProduct} from "../cart/types";
import {useNavigate} from "react-router-dom";
import {getImageById} from "../../lib/imageHelper";

interface BuyingProductInfoProps {
    cartProduct: CartProduct
}

const OrderProductInfo = (props: BuyingProductInfoProps) => {
    const navigate = useNavigate();

    return <div className='buying-product-info-wrapper'>
        <img onClick={() => navigate(`/produkt/${props.cartProduct.product.id}`)}
             src={getImageById(props.cartProduct.product.id)} alt='zdjecie produktu'/>
        <div>
            <h2>{props.cartProduct.product.name}</h2>
            <span>{props.cartProduct.quantity} {props.cartProduct.quantity === 1 ? 'piece' : 'pieces'}</span>
            <p className='price'>{props.cartProduct.totalAmount.toFixed(2)} PLN</p>
        </div>
    </div>
}

export default OrderProductInfo;