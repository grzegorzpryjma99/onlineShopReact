import React, {CSSProperties} from "react";
import {classNames} from "primereact/utils";
import {FormField} from "./FormField";
import {RadioButton} from "primereact/radiobutton";
import {FormikType, isFormFieldInvalid} from "../../../lib/FormikUtils";
import {PickByType} from "../../../lib/TypeUtils";

interface RadioButtonFieldProps<T> {
    formik: FormikType<T>
    fieldName: keyof PickByType<T, string>
    field: keyof PickByType<T, string>
    subField: keyof PickByType<T, string>
    className?: string
    label: string
    btn: any,
    style?: CSSProperties
    shouldRenderErrorMessage: boolean
}

export const RadioButtonField = ({
                                     formik,
                                     fieldName,
                                     subField,
                                     field,
                                     className,
                                     label,
                                     btn,
                                     style,
                                     shouldRenderErrorMessage
                                 }: RadioButtonFieldProps<any>) => {
    return <FormField style={style} formik={formik} fieldName={fieldName} className={className} label={label}
                      shouldRenderErrorMessage={shouldRenderErrorMessage}>
        <RadioButton
            id={fieldName} name={fieldName}
            {...btn}
            checked={formik.values[field][subField] === btn.value}
            onChange={(e) => {
                formik.setFieldValue(fieldName, e.value);
            }}
            className={classNames('block', 'mr-1', {'p-invalid': isFormFieldInvalid(formik, fieldName)})}
        />
    </FormField>
}