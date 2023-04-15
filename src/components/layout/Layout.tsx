import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface PublicLayoutProps {
    title: string;
    children?: React.ReactNode
}

export const Layout = (props: PublicLayoutProps) => {
    return <>
        <title>{props.title}</title>
        <nav>
            <Navbar/>
        </nav>
        <main>
            {props.children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
}