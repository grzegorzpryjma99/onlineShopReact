import React from "react";
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {FormField} from "./FormField";
import {FormikType, getValueByKey, isFormFieldInvalid} from "../../../lib/FormikUtils";
import {PickByType} from "../../../lib/TypeUtils";

interface TextFieldProps<T> {
    formik: FormikType<T>
    fieldName: keyof PickByType<T, string | undefined>
    minLength?: number
    maxLength?: number
    className?: string
    disabled?: boolean
    placeholder?: string
    shouldRenderErrorMessage: boolean
}

export const TextField = ({
                              formik,
                              fieldName,
                              minLength,
                              maxLength,
                              className,
                              disabled,
                              placeholder,
                              shouldRenderErrorMessage
                          }: TextFieldProps<any>) => {
    return <FormField formik={formik} fieldName={fieldName} className={className}
                      shouldRenderErrorMessage={shouldRenderErrorMessage}>
        <InputText id={fieldName} name={fieldName}
                   minLength={minLength} maxLength={maxLength}
                   placeholder={placeholder}
                   value={getValueByKey(formik.values, fieldName.toString()) || ""} onChange={formik.handleChange}
                   disabled={disabled}
                   className={classNames('block', 'w-full', {'p-invalid': isFormFieldInvalid(formik, fieldName)})}
        />
    </FormField>
}