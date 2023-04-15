import * as Yup from "yup";
import {OrderInfo, PaymentMethod, ShippingMethod} from "./types";

export const orderInfoValidationSchema: Yup.Schema<OrderInfo> = Yup.object().shape({
    details: Yup.object().shape({
        contact: Yup.string().required("Field required"),
        shippingAddress: Yup.object().shape({
            firstName: Yup.string().nullable().required("Field required"),
            lastName: Yup.string().nullable().required("Field required"),
            shippingNote: Yup.string(),
            street: Yup.string().nullable().required("Field required"),
            number: Yup.number().typeError("Must be a number").nullable().required("Field required"),
            city: Yup.string().nullable().required("Field required"),
            postalCode: Yup.string().nullable().required("Field required"),
            country: Yup.string().nullable().required("Field required"),
        })
    }),
    shipping: Yup.object().shape({
        shippingMethod: Yup.mixed<ShippingMethod>().nullable().oneOf(Object.values(ShippingMethod)).required(),
    }),
    payment: Yup.object().shape({
        paymentMethod: Yup.mixed<PaymentMethod>().nullable().oneOf(Object.values(PaymentMethod)).required(),
    }),
    couponCode: Yup.string()
});
