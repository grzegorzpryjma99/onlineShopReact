import React from "react";
import SimpleProductCard from "./SimpleProductCard";
import {Product} from "../products/types/types";

interface PopularProductListProps {
    products: Product[]
    title: string
    description: string
}

const MAX_NUMBER_OF_PRODUCTS_TO_SHOW: number = 8

const PopularProductList = (props: PopularProductListProps) => (
    <div className='listContainer'>
        <h2 className='title-h2'>{props.title}</h2>
        <p className='description'>{props.description}</p>
        <div className='productList'>
            {props.products.slice(0, MAX_NUMBER_OF_PRODUCTS_TO_SHOW).map(product => {
                return <SimpleProductCard key={product.id}
                                          id={product.id}
                                          name={product.name}
                                          price={product.price}/>
            })}
        </div>
    </div>
);

export default PopularProductList;