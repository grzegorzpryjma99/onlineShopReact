import React from "react";
const backgroundImage = process.env.PUBLIC_URL + "/bg-image.png";

const HomeBanner = () => (
    <div className='banner'>
        <img className='bannerImage'
               src={backgroundImage}
               alt='Zdjecie w tle'
        />
    </div>
);

export default HomeBanner;