import HomeBanner from "../HomeBanner";
import HomeCard from "../HomeCard";
import PopularProductList from "../PopularProductList";
import News from "../News";
import Opinions from "../Opinions";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Product} from "../../products/types/types";
import {get} from "../../../lib/api/Api";
import {Loader} from "../../common/Loader";
import {webVitalActions} from "../../../utils/google-analytics/google-analytics-get-web-vitals";
import {googleAnalyticsActions} from "../../../utils/google-analytics/google-analytics-init";

const HomeTemplate = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        get(`https://online-shop-api-kappa.vercel.app/api/products`)
            .then(res => setProducts(res))
    }, [])

    useEffect(() => {
        webVitalActions.googleAnalyticsGetWebVitals("home");
        webVitalActions.sendDataToAnalytics("home");
        webVitalActions.sendDataToGAForWebVitalsReport("home");
        googleAnalyticsActions.initGoogleAnalytics("prj_lFc4Fj669YRTjIwwE5UqwmY1m6W7");
    }, []);

    return <>
        <HomeBanner/>
        <HomeCard/>
        <div>
            {products.length ?
                <PopularProductList title='Products' description='Order it for you or for your beloved ones'
                                    products={products}/>
                : <Loader style={{height: '55vh'}}/>}
            <p onClick={() => navigate(`/lista-produktow`)} className='description'>Show more...</p>
            <br/>
        </div>
        <News/>
        <Opinions/>
        <div>
            {products.length ?
                <PopularProductList title='Popular' description='Our top selling product that you may like'
                                    products={products}/>
                : <Loader style={{height: '55vh'}}/>}
        </div>
    </>
}

export default HomeTemplate;