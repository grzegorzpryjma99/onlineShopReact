import React from "react";

interface OrderLayoutProps {
    title: string;
    children?: React.ReactNode
}

export const OnlyContentLayout = (props: OrderLayoutProps) => {
    return <>
        <head>
            <title>{props.title}</title>
        </head>
        <main>
            {props.children}
        </main>
    </>
}