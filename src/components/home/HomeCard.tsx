import React from "react";
import ActionButton from "../common/button/ActionButton";

const HomeCard = () => (
    <div className='bannerCard'>
        <h2 className='h2-title'>The nature candle</h2>
        <p className='description'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure
            moments </p>
        <div>
            <ActionButton style={{width: '40%', fontSize: '18px'}} url='/lista-produktow'
                          label='Discovery our collection'/>
        </div>
    </div>
);

export default HomeCard;