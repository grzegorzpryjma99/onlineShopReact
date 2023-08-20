import React, {useEffect, useState} from 'react';
import './styles/globals.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/navbar.css';
import './styles/product.css';
import './styles/cart.css';
import './styles/order.css';
import './styles/info.css';
import './styles/login.css';
import './styles/font.css';

import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {BrowserRouter} from "react-router-dom";
import CartProvider, {initialCartState} from "./service/CartProvider";
import Cookies from "js-cookie";
import {Cart} from "./components/cart/types";
import {AppRoutes} from "./AppRoutes";
import {Loader} from "./components/common/Loader";
import {BlockModal} from "./components/common/BlockModal";

config.autoAddCss = false;

function App() {

    const [cartState, setCartState] = useState<Cart | null>(null);

    useEffect(() => {
        const cookie = Cookies.get('cart');
        if (cookie) {
            const initialState = JSON.parse(cookie);
            setCartState(initialState);
        } else {
            setCartState(initialCartState);
        }
    }, []);

    return <>
        <BlockModal/>
        {cartState ? <CartProvider initialState={cartState}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </CartProvider> : <Loader/>}
    </>
}

export default App;
