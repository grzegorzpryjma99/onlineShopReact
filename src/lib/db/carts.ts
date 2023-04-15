import {Cart} from "../../components/cart/types";
import {ProductCategory} from "../../components/products/types/types";


export const carts: Cart[] = [
    {
        products: [
            {
                product: {
                    id: 2,
                    name: "Produkt1",
                    description: "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
                    price: 99,
                    category: ProductCategory.HOME
                },
                quantity: 1,
                totalAmount: 99
            }
        ],
        totalAmount: 0
    }
]