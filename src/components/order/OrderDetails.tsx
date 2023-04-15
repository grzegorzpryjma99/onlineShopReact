import React from "react";
import {TextField} from "../common/field/TextField";
import {FormikType} from "../../lib/FormikUtils";
import {OrderInfo} from "../../lib/types";

interface OrderDetailsProps {
    formik: FormikType<OrderInfo>
}

const OrderDetails = (props: OrderDetailsProps) => {
    return <div className='order-details-wrapper'>
        <h2 className='order-header'>Contact</h2>
        <TextField formik={props.formik} placeholder='Email or mobile phone number' fieldName='details.contact'
                   shouldRenderErrorMessage={true}/>
        <h2 className='order-header'>Shipping Address</h2>
        <TextField formik={props.formik} placeholder='Name' fieldName='details.shippingAddress.firstName'
                   shouldRenderErrorMessage={true}/>
        <TextField formik={props.formik} placeholder='Second Name' fieldName='details.shippingAddress.lastName'
                   shouldRenderErrorMessage={true}/>
        <TextField formik={props.formik} placeholder='Address' fieldName='details.shippingAddress.street'
                   shouldRenderErrorMessage={true}/>
        <TextField formik={props.formik} placeholder='Number' fieldName='details.shippingAddress.number'
                   shouldRenderErrorMessage={true}/>
        <TextField formik={props.formik} placeholder='City' fieldName='details.shippingAddress.city'
                   shouldRenderErrorMessage={true}/>
        <TextField formik={props.formik} placeholder='Postal Code' fieldName='details.shippingAddress.postalCode'
                   shouldRenderErrorMessage={true}/>
        <TextField formik={props.formik} placeholder='Country' fieldName='details.shippingAddress.country'
                   shouldRenderErrorMessage={true}/>
        <TextField formik={props.formik} placeholder='Shipping note (optional)'
                   fieldName='details.shippingAddress.shippingNote' shouldRenderErrorMessage={true}/>
    </div>
}

export default OrderDetails;