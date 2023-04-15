import React, {createContext, useContext, useEffect, useState} from 'react';
import {Cart} from "../components/cart/types";
import Cookies from 'js-cookie';

type CartContextType = {
    cart: Cart;
    setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

interface CartProviderProps {
    children?: React.ReactNode;
    initialState: Cart
}

export const initialCartState: Cart = {products: [], totalAmount: 0};

const CartContext = createContext<CartContextType>({
    cart: initialCartState,
    setCart: () => {
    },
});

export const useCartContext = () => useContext(CartContext);

const CartProvider: React.FC<CartProviderProps> = ({initialState, children}) => {
    const [cart, setCart] = useState<Cart>(initialState);

    useEffect(() => {
        Cookies.set('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

