import HomeBanner from "../HomeBanner";
import HomeCard from "../HomeCard";
import PopularProductList from "../PopularProductList";
import News from "../News";
import Opinions from "../Opinions";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Product} from "../../products/types/types";
import {get} from "../../../lib/api/Api";

const HomeTemplate = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        get(`https://online-shop-api-kappa.vercel.app/api/products`)
            .then(res => setProducts(res))
    }, [])

    return <>
        <HomeBanner/>
        <HomeCard/>
        <div>
            <PopularProductList title='Products' description='Order it for you or for your beloved ones'
                                products={products}/>
            <p onClick={() => navigate(`/lista-produktow`)} className='description'>Show more...</p>
            <br/>
        </div>
        <News/>
        <Opinions/>
        <div>
            <PopularProductList title='Popular' description='Our top selling product that you may like'
                                products={products}/>
        </div>
    </>
}

export default HomeTemplate;