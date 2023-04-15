import React, {useRef} from "react";
import {InputText} from "primereact/inputtext";
import ActionButton from "../../common/button/ActionButton";
import UnderlineButton from "../../common/button/UnderlineButton";
import {Password} from "primereact/password";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ActionBorderButton from "../../common/button/ActionBorderButton";
import {Toast} from "primereact/toast";
import {useNavigate} from "react-router-dom";

const logo = process.env.PUBLIC_URL + "/logo.png";

const LoginTemplate = () => {
    const navigate = useNavigate();
    const toast = useRef<Toast>(null);

    const notImplementedFunction = () => {
        toast.current?.show({
            severity: 'warn',
            summary: 'Sorry',
            detail: 'Function not implemented :(',
            life: 3000,
        });
    }

    return <div className='global-center'>
        <Toast ref={toast}/>
        <div className='login-container'>
            <img onClick={() => navigate(`/`)}
                 className='logo' src={logo} alt='logo'/>
            <h2>Sign in</h2>
            <div className='login-inputs'>
                <InputText placeholder='Login'/>
                <Password feedback={false} inputStyle={{width: '100%'}} placeholder='Password'/>
                <ActionButton actionFunction={notImplementedFunction} style={{width: '100%', margin: 0}} label='Login'/>
            </div>
            <p className='description'>Or login with</p>
            <div className='login-buttons'>
                <ActionBorderButton actionFunction={notImplementedFunction}
                                    icon={<FontAwesomeIcon icon={faCartShopping}/>} divStyle={{width: '45%', margin: 0}}
                                    style={{width: '100%', margin: 0}} label='Facebook'/>
                <ActionBorderButton actionFunction={notImplementedFunction}
                                    icon={<FontAwesomeIcon icon={faCartShopping}/>} divStyle={{width: '45%', margin: 0}}
                                    style={{width: '100%', margin: 0}} label='Google'/>
            </div>
            <span className='shopping-info-section'/>
            <div className='login-register'>
                <p className='description'>Not a member? &nbsp;</p>
                <UnderlineButton actionFunction={notImplementedFunction} label='Sign up now'/>
            </div>
        </div>
    </div>
}

export default LoginTemplate;