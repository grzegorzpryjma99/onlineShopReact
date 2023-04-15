import React from "react";
import {useNavigate} from "react-router-dom";

const logo = process.env.PUBLIC_URL + "/logo.png";

const Footer = () => {
    const navigate = useNavigate();

    return <div id="footer" className='footer'>
        <div className='footer-first-section'>
            <img className='footer-logo' src={logo} alt='logo'/>
            <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className='footer-second-section'>
            <div className='footer-details'>
                <p className='subline'>Discovery</p>
                <ul>
                    <li onClick={() => navigate(`/lista-produktow`)}>New season</li>
                    <li onClick={() => navigate(`/lista-produktow`)}>Most searched</li>
                    <li onClick={() => navigate(`/lista-produktow`)}>Most selled</li>
                </ul>
            </div>
            <div className='footer-details'>
                <p className='subline'>About</p>
                <ul>
                    <li onClick={() => navigate(`/`)}>Help</li>
                    <li onClick={() => navigate(`/`)}>Shipping</li>
                    <li onClick={() => navigate(`/`)}>Affiliate</li>
                </ul>
            </div>
            <div className='footer-details'>
                <p className='subline'>Info</p>
                <ul>
                    <li onClick={() => navigate(`/`)}>Contact us</li>
                    <li onClick={() => navigate(`/`)}>Privacy Policies</li>
                    <li onClick={() => navigate(`/`)}>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Footer;