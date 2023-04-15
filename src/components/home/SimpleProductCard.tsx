import React from "react";
import {useNavigate} from "react-router-dom";
import {getImageById} from "../../lib/imageHelper";

interface SimpleProductCardProps {
    id: number
    name: string
    price: number
}

const SimpleProductCard = (props: SimpleProductCardProps) => {
    const navigate = useNavigate();

    return <div className='productCard'>
        <div onClick={() => navigate(`/produkt/${props.id}`)}>
            <img src={getImageById(props.id)}
                 alt='zdjecie produktu'
                 style={{
                     background: '#F7F8FA',
                     width: '100%',
                     objectFit: 'cover',
                     height: '100%'
                 }}
            />
            <div className='product-card-details'>
                <p className='subject' id='product-name'>{props.name}</p>
                <p className='mentor' id='product-price'>{props.price} PLN</p>
            </div>
        </div>
    </div>
}

export default SimpleProductCard;