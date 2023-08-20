import React from "react";
import {Card} from "primereact/card";

export const BlockModal = () => {
    return <div className='mobile-modal global-center' style={{height: '100%', zIndex: '9999', position: 'fixed'}}>
        <Card title="Uwaga!" style={{height: '100%'}}>
            <p className="m-0">
                Przeprowadzenie testów na urządzeniu mobilnym jest niemożliwe. Aplikacja jest dostosowana jedynie dla
                przeglądarek o większej rozdzielczości.
            </p>
        </Card>
    </div>
}