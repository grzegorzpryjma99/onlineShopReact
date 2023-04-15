import React, {useCallback, useState} from "react";
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";
import UnderlineButton from "../common/button/UnderlineButton";
import {Product} from "../products/types/types";
import {useNavigate} from 'react-router-dom';
import useCart from "../../service/useCart";
import {getImageById} from "../../lib/imageHelper";

interface ProductCartProps {
    product: Product
    quantity: number
}

const CartListProduct = (props: ProductCartProps) => {
    const navigate = useNavigate();
    const [value, setValue] = useState<number>(props.quantity);
    const {updateQuantity, removeProductFromCart} = useCart();

    const updateProduct = (quantity: number) => {
        updateQuantity(props.product, quantity)
    }

    return <div className='cart-product-container'>
        <div className='list-one'>
            <img
                onClick={() => navigate(`/produkt/${props.product.id}`)}
                src={getImageById(props.product.id)}
                alt='Zdjecie produktu'
            />
            <div className='cart-product-container-product-action'>
                <h3 onClick={useCallback(() => navigate(`/produkt/${props.product.id}`, {replace: true}), [navigate])}>{props.product.name}</h3>
                <UnderlineButton label='Remove' actionFunction={() => removeProductFromCart(props.product.id)}/>
            </div>
        </div>
        <div className='list-two'>
            <p>{props.product.price} PLN</p>
        </div>
        <div className='list-three'>
            <InputNumber value={value}
                         className='count-input'
                         onValueChange={(e: InputNumberValueChangeEvent) => {
                             setValue(e.value || 1)
                             updateProduct(e.value || 1)
                         }}
                         showButtons
                         inputStyle={{
                             width: '48px',
                             borderTopColor: 'rgb(86, 178, 128)',
                             borderBottomColor: 'rgb(86, 178, 128)',
                             textAlign: 'center'
                         }}
                         min={1}
                         buttonLayout="horizontal"
                         incrementButtonIcon="pi pi-plus"
                         decrementButtonIcon="pi pi-minus"/>
        </div>
        <div className='list-four'>
            {(props.product.price * props.quantity).toFixed(2)} PLN
        </div>
    </div>
}

export default CartListProduct;