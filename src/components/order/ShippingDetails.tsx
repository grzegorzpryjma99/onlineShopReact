import React from "react";
import {RadioButtonField} from "../common/field/RadioButtonField";
import {FormikType} from "../../lib/FormikUtils";
import {OrderInfo, ShippingMethod} from "../../lib/types";
import {getFullAddress} from "../../lib/Utils";

interface ShippingDetailsProps {
    formik: FormikType<OrderInfo>
}

const shippingButtons = [
    {
        name: 'Free Shipping',
        value: ShippingMethod.FREE_SHIPPING,
        price: "Free"
    },
    {
        name: 'Self Picking',
        value: ShippingMethod.SELF_PICKUP,
        price: 'Free'
    },
    {
        name: 'Standard Shipping',
        value: ShippingMethod.STANDARD_SHIPPING,
        price: '9.99 PLN'
    },
];

const ShippingDetails = (props: ShippingDetailsProps) => {
    let formik = props.formik;

    return <div className='order-details-wrapper'>
        <h2>Shipping Info</h2>
        <div className='ordering-sum-up'>
            <p className=''>Contact: {formik.values.details.contact || 'none'}</p>
            <p className=''>Address {getFullAddress(formik.values.details.shippingAddress)}</p>
            <p className=''>
                Shipping
                Note: {formik.values.details.shippingAddress.shippingNote ? formik.values.details.shippingAddress.shippingNote : 'none'}
            </p>
        </div>
        <h2>Shipping method</h2>
        {shippingButtons.map((btn, i) => {
            return (
                <div key={i} className="radio-button-field">
                    <RadioButtonField
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            justifyContent: 'left'
                        }}
                        shouldRenderErrorMessage={false}
                        formik={formik} fieldName='shipping.shippingMethod' field='shipping' subField='shippingMethod'
                        label={btn.name} btn={btn}/>
                    <p className='description'>{btn.price}</p>
                </div>
            );
        })}
    </div>
};

export default ShippingDetails;