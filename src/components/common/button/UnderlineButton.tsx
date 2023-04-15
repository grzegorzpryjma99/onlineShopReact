import React, {CSSProperties, useCallback} from "react";
import {useNavigate} from "react-router-dom";

interface UnderlineButtonProps {
    icon?: JSX.Element
    url?: string
    label: string
    actionFunction?: () => void;
    style?: CSSProperties
    divStyle?: CSSProperties
}

const UnderlineButton = (props: UnderlineButtonProps) => {
    const navigate = useNavigate();

    return <div style={props.divStyle}>
        {!props.actionFunction && props.url
            ?
            <button
                onClick={() => navigate(`${props.url}`)}
                style={props.style}
                className='underline-subline'>
                {props.icon} {props.label}
            </button>

            : <button style={props.style} onClick={props.actionFunction}
                      className='underline-subline'>{props.icon} {props.label}</button>}
    </div>
}

export default UnderlineButton;