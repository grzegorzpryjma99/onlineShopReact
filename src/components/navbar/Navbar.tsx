import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarButton from "./NavbarButton";
import {useNavigate} from "react-router-dom";

const logo = process.env.PUBLIC_URL + "/logo.png";

const Navbar = () => {
    const navigate = useNavigate();

    return <div className='navbar'>
        <div className="navbarItemContainer">
            <img onClick={() => navigate(`/`)}
                 className='logo' src={logo} alt='logo aplikacji'/>
        </div>
        <div className='navbarItemContainer'>
            <NavbarItem label='Discover' url='/lista-produktow'/>
            <NavbarItem label='Home' url='/'/>
            <NavbarItem label='About us' url='/nasze-produkty'/>
        </div>
        <div className='navbarItemContainer'>
            <NavbarButton showBadge={false} url='/logowanie' piIconName='pi-user'/>
            <NavbarButton showBadge={true} url='/koszyk' piIconName='pi-shopping-cart'/>
        </div>
    </div>
}

export default Navbar;