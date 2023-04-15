import {Cart} from "../components/cart/types";
import {Product} from "../components/products/types/types";
import {initialCartState, useCartContext} from "./CartProvider";


const useCart = (): {
    cart: Cart;
    addProductToCart: (product: Product, quantity: number) => void;
    updateQuantity: (product: Product, quantity: number) => void;
    removeProductFromCart: (id: number) => void;
    getCart: () => Cart;
    countProducts: () => number;
    clearCart: () => void;
} => {
    const {cart, setCart} = useCartContext();

    const addProductToCart = (product: Product, quantity: number) => {
        let amount = cart.totalAmount
        const productExists = cart.products.some((el) => el.product.id === product.id);
        if (!productExists) {
            amount = amount + product.price * quantity
            setCart({
                ...cart,
                products: [
                    ...cart.products,
                    {
                        product,
                        quantity,
                        totalAmount: product.price * quantity,
                    },
                ],
                totalAmount: amount
            });
        } else {
            const updatedProducts = cart.products.map((item) => {
                if (item.product.id === product.id) {
                    amount = amount + (quantity * item.product.price)
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                        totalAmount: (item.quantity + quantity) * item.product.price,
                    };
                } else {
                    return item;
                }
            });
            setCart({
                ...cart,
                products: updatedProducts,
                totalAmount: amount
            });
        }
    };

    const updateQuantity = (product: Product, quantity: number) => {
        let amount = cart.totalAmount
        const updatedProducts = cart.products.map((item) => {
            if (item.product.id === product.id) {
                amount = amount - item.totalAmount + (quantity * item.product.price)
                return {
                    ...item,
                    quantity,
                    totalAmount: quantity * item.product.price,
                };
            } else {
                return item;
            }
        });
        setCart({
            ...cart,
            products: updatedProducts,
            totalAmount: amount
        });
    };

    const removeProductFromCart = (id: number) => {
        const updatedProducts = cart.products.filter((item) => item.product.id !== id);
        const amount = updatedProducts.length > 0 ? (updatedProducts.map(item => item.totalAmount).reduce((accumulator, currentValue) => accumulator + currentValue)) : 0
        setCart({
            ...cart,
            products: updatedProducts,
            totalAmount: amount
        });
    };

    const getCart = (): Cart => {
        return cart;
    };

    const countProducts = (): number => {
        let counter: number = 0;
        if (cart) {
            cart.products.map((product) => (counter += product.quantity));
        }
        return counter;
    };

    const clearCart = () => {
        setCart(initialCartState);
    };

    return {
        cart,
        addProductToCart,
        updateQuantity,
        removeProductFromCart,
        getCart,
        countProducts,
        clearCart
    };
};

export default useCart;
