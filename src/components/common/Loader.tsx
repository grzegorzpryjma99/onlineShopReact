import React, {CSSProperties} from "react";
import {ProgressSpinner} from "primereact/progressspinner";

interface LoaderProps {
    style?: CSSProperties
}

export const Loader = (props: LoaderProps) => {
    return <div style={props.style} className='global-center'>
        <ProgressSpinner/>
    </div>
}