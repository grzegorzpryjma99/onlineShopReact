import React from 'react';
import SimpleProductCard from "../home/SimpleProductCard";
import {Product} from "./types/types";

interface PopularProductListProps {
    products: Product[]
}

const ProductList = (props: PopularProductListProps) => (
    <div className='product-list-container'>
        <div className='productList'>
            {props.products.length !== 0 ? props.products.map((product, key) => {
                return <SimpleProductCard key={key}
                                          id={product.id}
                                          name={product.name}
                                          price={product.price}/>
            }) : <p className='empty-info'>Products not found</p>}
        </div>
    </div>
);

export default ProductList;