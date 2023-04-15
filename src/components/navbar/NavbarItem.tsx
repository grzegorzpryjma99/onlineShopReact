import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";

interface NavbarItemProps {
    label: string,
    url: string
}

const NavbarItem = (props: NavbarItemProps) => {
    const navigate = useNavigate();

    return <div className='navItem'>
        <span
            onClick={() => navigate(`${props.url}`)}
            style={{color: 'black'}}>{props.label}
        </span>
    </div>
}

export default NavbarItem;