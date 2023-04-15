import React, {CSSProperties, useCallback} from "react";
import {useNavigate} from "react-router-dom";

interface ActionBorderButtonProps {
    icon?: JSX.Element
    url?: string
    label: string
    actionFunction?: () => void;
    style?: CSSProperties
    divStyle?: CSSProperties
    divClassName?: string
}

const ActionBorderButton = (props: ActionBorderButtonProps) => {
        const navigate = useNavigate();

        return <div className={props.divClassName} style={props.divStyle}>
            {!props.actionFunction && props.url
                ?
                <button onClick={() => navigate(`props.url`)}
                        style={props.style}
                        className='action-border-button'>{props.icon} {props.label}</button>
                : <button style={props.style}
                          onClick={props.actionFunction}
                          className='action-border-button'>{props.icon} {props.label}</button>}
        </div>
    }
;

export default ActionBorderButton;