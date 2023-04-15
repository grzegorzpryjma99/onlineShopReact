import React from "react";
import {RadioButtonField} from "../common/field/RadioButtonField";
import {OrderInfo, PaymentMethod} from "../../lib/types";
import {getFullAddress, paymentMethodToPrice} from "../../lib/Utils";
import {FormikType} from "../../lib/FormikUtils";

interface PaymentDetailsProps {
    formik: FormikType<OrderInfo>
}

const paymentButtons = [
    {
        name: 'Blik',
        value: PaymentMethod.BLIK,
    },
    {
        name: 'Bank transfer',
        value: PaymentMethod.BANK_TRANSFER,
    },
];

const PaymentDetails = (props: PaymentDetailsProps) => {
    let formik = props.formik;

    return <div className='order-details-wrapper'>
        <h2>Info</h2>
        <div className='ordering-sum-up'>
            <p className=''>Contact: {formik.values.details.contact || 'none'}</p>
            <p className=''>Address {getFullAddress(formik.values.details.shippingAddress)}</p>
            <p className=''>
                Shipping
                Note: {formik.values.details.shippingAddress.shippingNote ? formik.values.details.shippingAddress.shippingNote : 'none'}
            </p>
        </div>
        <div className='ordering-sum-up'>
            <p className=''>{formik.values.shipping.shippingMethod || 'none'}: {props.formik.values.shipping.shippingMethod !== null ? paymentMethodToPrice(props.formik.values.shipping.shippingMethod) : ''}</p>
        </div>
        <h2>Shipping method</h2>
        {paymentButtons.map((btn, i) => {
            return (
                <div key={i} className="radio-button-field">
                    <RadioButtonField
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            justifyContent: 'left'
                        }}
                        shouldRenderErrorMessage={false}
                        formik={formik} fieldName='payment.paymentMethod' field='payment' subField='paymentMethod'
                        label={btn.name} btn={btn}/>
                </div>
            );
        })}
    </div>
};

export default PaymentDetails;