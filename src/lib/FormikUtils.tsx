import {FormikErrors, FormikTouched} from "formik/dist/types";
import React from "react";

export type FormikType<T> = {
    errors: FormikErrors<T>,
    touched: FormikTouched<T>,
    values: T,
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    },
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<FormikErrors<T>> | Promise<void>;
    setValues: (values: React.SetStateAction<T>, shouldValidate?: boolean | undefined) => Promise<FormikErrors<T>> | Promise<void>;
}

export const isFormFieldValid = <T, >(formik: FormikType<T>, name: keyof T) => {
    return !!(formik.touched[name] && formik.errors[name]);
}
export const isFormFieldInvalid = <T, >(formik: FormikType<T>, name: keyof T) => {
    return getValueByKey(formik.errors, name.toString());
    // return getErrorsInfoByKey(formik.touched, name.toString()) && getErrorsInfoByKey(formik.errors, name.toString());
    // return formik.touched[name] && formik.errors[name];
}

export const isFormFieldInvalid2 = <T, >(errors: FormikErrors<T>, touched: FormikTouched<T>, name: keyof T): boolean => {
    return !!(touched[name] && errors[name]);
}

function buildErrorMsg<T>(errors: FormikErrors<T>, name: keyof T) {
    // return <small className="p-error">{errors[name]}</small>;
    return <small className="p-error">{getValueByKey(errors, name.toString())}</small>;
}

export const getFormErrorMessage = <T, >(formik: FormikType<T>, name: keyof T) => {
    // return formik.errors.details.contact;
    return isFormFieldInvalid(formik, name) && buildErrorMsg(formik.errors, name);
};

//TODO: tymczasowe rozwiązanie, coś nie działa inaczej w react 18
export const getValueByKey = (o: any, s: string) => {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    let a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
        let k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

export const getFormErrorMessage2 = <T, >(errors: FormikErrors<T> | string | undefined, touched: FormikTouched<T> | undefined, name: keyof T): [isInvalid: boolean, errorMsg: JSX.Element] => {
    if (errors === undefined || touched === undefined || typeof errors === 'string') {
        return [false, <></>];
    }
    const invalid = isFormFieldInvalid2(errors, touched, name);
    const msg = invalid ? buildErrorMsg(errors, name) : <></>;
    return [invalid, msg];
};
