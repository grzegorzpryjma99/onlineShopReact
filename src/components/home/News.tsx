import React from "react";
import ActionButton from "../common/button/ActionButton";

const newsPlaceholder = process.env.PUBLIC_URL + "/newsPhoto.png";

const News = () => (
    <div className='news-container'>
        <div>
            <div>
                <h2 className='h2-title'>Clean and fragrant soy wax</h2>
                <span className='subline'>Made for your home and for your wellness</span>
            </div>
            <ul className='news-container-list'>
                <li>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
            </ul>
            <ActionButton style={{width: '40%', fontSize: '18px'}} url='/nasze-produkty' label='Learn more'/>
        </div>
        <div>
            <img src={newsPlaceholder} alt='zdjecie informacyjne'/>
        </div>
    </div>
);

export default News;