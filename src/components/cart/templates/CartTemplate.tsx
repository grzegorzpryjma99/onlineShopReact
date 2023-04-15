import ActionButton from "../../common/button/ActionButton";
import CartList from "../CartList";
import UnderlineButton from "../../common/button/UnderlineButton";
import useCart from "../../../service/useCart";

const CartTemplate = () => {

    const {cart} = useCart();

    return <div className='cart-container'>
        <h2 className='h2-title'>Your cart items</h2>
        <UnderlineButton label='Back to shopping' url='/lista-produktow'/>
        <CartList product={cart?.products || []}/>
        <div className='cart-sum-up-container'>
            <p>Sub-total</p>
            <p>{cart.totalAmount.toFixed(2)} PLN</p>
            <div className='cart-sum-up-button'>
                <ActionButton style={{width: '50%', fontSize: '18px'}}
                              url={(cart?.products || []).length > 0 ? '/zakupy' : '/lista-produktow'}
                              label='Check-out'/>
            </div>
        </div>
    </div>

}

export default CartTemplate;