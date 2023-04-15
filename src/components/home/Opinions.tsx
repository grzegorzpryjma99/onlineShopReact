import React from "react";
import SimpleOpinionCard from "./SimpleOpinionCard";

const Opinions = () => (
    <div className='listContainer' style={{background: 'rgba(86, 178, 128, 0.1)'}}>
        <h2 className='title-h2'>Testimonials</h2>
        <p className='description'>Some quotes from our happy customers</p>
        <div className='productList'>
            <SimpleOpinionCard firstName='Edoardo' lastName='xd' comment='Raccomended for everyone' rate={4}/>
            <SimpleOpinionCard firstName='Edoardo' lastName='xd' comment='Raccomended for everyone' rate={5}/>
            <SimpleOpinionCard firstName='Edoardo' lastName='xd' comment='Raccomended for everyone' rate={5}/>
        </div>
    </div>
);

export default Opinions;