import React, {useCallback, useEffect, useState} from "react";
import {Badge} from "primereact/badge";
import {useNavigate} from "react-router-dom";
import useCart from "../../service/useCart";

interface NavbarButtonProps {
    piIconName: string
    url?: string
    showBadge: boolean
}

const NavbarButton = (props: NavbarButtonProps) => {
    const navigate = useNavigate();

    const {countProducts} = useCart();
    const [productCounter, setProductCounter] = useState<number>(countProducts);

    useEffect(() => {
        setProductCounter(countProducts);
    }, [countProducts])

    return <>
        {props.url
            ? <div className=''>
                <button onClick={() => navigate(`${props.url}`)}
                        className='navbar-button'>
                    <i className={`pi ${props.piIconName} p-overlay-badge`} style={{fontSize: '1.6rem'}}>
                        {props.showBadge && productCounter !== 0 && <Badge value={productCounter}/>}
                    </i>
                </button>
            </div>
            : <div className=''>
                <button className='navbar-button'>{props.piIconName}</button>
            </div>
        }
    </>
}

export default NavbarButton;