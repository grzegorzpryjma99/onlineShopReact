import React from "react";
import {useNavigate} from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    return <button className='underline-subline' style={{padding: "1em 0em 0em 1em"}} onClick={() => navigate(-1)}>
        <i className={`pi pi-arrow-left`} style={{fontSize: '1.6rem'}}/>
    </button>
}