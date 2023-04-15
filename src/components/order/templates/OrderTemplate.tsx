import React, {useRef, useState} from "react";
import ShoppingInfo from "../ShoppingInfo";
import {Steps} from "primereact/steps";
import ActionButton from "../../common/button/ActionButton";
import UnderlineButton from "../../common/button/UnderlineButton";
import OrderDetails from "../OrderDetails";
import {useFormik} from "formik";
import {Cart} from "../../cart/types";
import {Toast} from "primereact/toast";
import ShippingDetails from "../ShippingDetails";
import PaymentDetails from "../PaymentDetails";
import {Dialog} from "primereact/dialog";

import {useNavigate} from "react-router-dom";
import {FormikType} from "../../../lib/FormikUtils";
import {OrderInfo} from "../../../lib/types";
import useCart from "../../../service/useCart";
import {orderInfoValidationSchema} from "../../../lib/validation";

const logo = process.env.PUBLIC_URL + "/logo.png";
const items = [{label: 'Details'}, {label: 'Shipping'}, {label: 'Payment'}];

const renderStep = (activeTab: number, formik: FormikType<OrderInfo>) => {
    switch (activeTab) {
        case 0:
            return <OrderDetails formik={formik}/>;
        case 1:
            return <ShippingDetails formik={formik}/>
        case 2:
            return <PaymentDetails formik={formik}/>
    }
}

const OrderTemplate = () => {
    const navigate = useNavigate();
    const {cart, clearCart} = useCart();
    const toast = useRef<Toast>(null);
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const [products, setProducts] = useState<Cart>(cart)
    const [activeTab, setActiveTab] = useState(0)

    const formik = useFormik<OrderInfo>({
        initialValues: {
            details: {
                contact: '',
                shippingAddress: {
                    firstName: '',
                    lastName: '',
                    shippingNote: '',
                    street: '',
                    number: null,
                    city: '',
                    postalCode: '',
                    country: '',
                }
            },
            shipping: {
                shippingMethod: null
            },
            payment: {
                paymentMethod: null
            },
            couponCode: ''
        },
        validateOnChange: false,
        validationSchema: orderInfoValidationSchema,
        onSubmit: (data) => {
        }
    });

    const handleOrder = () => {
        formik.validateForm().then(errors => {
            if (errors.payment === undefined) {
                setDialogVisible(true)
                clearCart()
            }
        });
    }

    const handleChangeTab = (tabNumber: number) => {
        if (activeTab === 0) {
            formik.validateForm().then(errors => {
                if (errors.details === undefined) {
                    if (tabNumber === 1) {
                        setActiveTab(tabNumber)
                    }
                    if (tabNumber == 2) {
                        formik.validateForm().then(errors => {
                            if (errors.shipping === undefined) {
                                setActiveTab(tabNumber)
                            }
                        });
                    }
                }
            });
        }

        if (activeTab === 1) {
            if (tabNumber === 2) {
                formik.validateForm().then(errors => {
                    if (errors.shipping === undefined) {
                        setActiveTab(tabNumber)
                    }
                });
            }
            if (tabNumber == 0) {
                setActiveTab(tabNumber)
            }
        }

        if (activeTab === 2) {
            setActiveTab(tabNumber)
        }
    }

    const renderButton = (activeTab: number) => {
        switch (activeTab) {
            case 0:
                return <ActionButton style={{width: '100%'}} label='Go to Shipping'
                                     actionFunction={() => handleChangeTab(1)}/>
            case 1:
                return <ActionButton style={{width: '100%'}} label='Go to Payment'
                                     actionFunction={() => handleChangeTab(2)}/>
            case 2:
                return <ActionButton style={{width: '100%'}} actionFunction={handleOrder} label='Pay now'/>
        }
    }

    const renderBackButton = (activeTab: number) => {
        switch (activeTab) {
            case 0:
                return <UnderlineButton
                    divStyle={{
                        textAlign: 'left',
                        alignItems: 'center',
                        display: 'flex'
                    }}
                    url='/koszyk' label='Back to cart'/>
            case 1:
                return <UnderlineButton
                    divStyle={{
                        textAlign: 'left',
                        alignItems: 'center',
                        display: 'flex'
                    }}
                    label='Back to Details'
                    actionFunction={() => setActiveTab(0)}/>
            case 2:
                return <UnderlineButton
                    divStyle={{
                        textAlign: 'left',
                        alignItems: 'center',
                        display: 'flex'
                    }}
                    label='Back to Shipping'
                    actionFunction={() => setActiveTab(1)}/>
        }
    }

    return <>
        <div className='order-container'>
            <Toast ref={toast}/>
            <div className='order-steps-wrapper'>
                <div>
                    <img onClick={() => navigate(`/`)}
                         className='logo' src={logo} alt='logo'/>
                    <Steps model={items} activeIndex={activeTab} onSelect={(e) => handleChangeTab(e.index)}
                           readOnly={false}/>
                </div>
                <div className='order-step-content'>
                    {renderStep(activeTab, formik)}
                </div>
                <div className='order-button-wrapper'>
                    {renderBackButton(activeTab)}
                    {renderButton(activeTab)}
                </div>
            </div>
            <div className='order-summarize'>
                <ShoppingInfo formik={formik} products={products.products.map(products => products)}/>
            </div>
        </div>
        <Dialog className='dialog' closable={false}
                header="Info"
                visible={dialogVisible}
                onHide={() => {
                }}
                footer={<ActionButton url='/' style={{width: '25%'}} label={'Ok'}/>}>
            <p>Function not implemented, thanks for testing</p>
        </Dialog>
    </>
}

export default OrderTemplate;