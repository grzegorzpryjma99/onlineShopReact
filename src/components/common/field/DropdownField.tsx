import {classNames} from "primereact/utils";
import React from "react";
import {Dropdown} from "primereact/dropdown";
import {FormField} from "./FormField";
import {DropdownOption} from "../../../lib/baseTypes";
import {FormikType, isFormFieldInvalid} from "../../../lib/FormikUtils";
import {PickByType} from "../../../lib/TypeUtils";

type DropdownFieldProps<T, U, B> = ({
    type: 'SIMPLE'
    options: DropdownOption[]
} | {
    type: 'CUSTOM'
    options: T[]
    optionValue: keyof T & string
    optionLabel: keyof T & string
}) & {
    formik: FormikType<U>
    fieldName: string & keyof PickByType<U, string | null | undefined | boolean | B>
    className?: string
    disabled?: boolean
    loading?: boolean
    label?: string
    onChange?(value: string): void
    shouldRenderErrorMessage: boolean
}

export const DropdownField = <T, U, B>(props: DropdownFieldProps<T, U, B>) => {

    return <FormField formik={props.formik} fieldName={props.fieldName} className={props.className}
                      label={props.label || ''} shouldRenderErrorMessage={props.shouldRenderErrorMessage}>
        <Dropdown id={props.fieldName} options={props.options}
                  disabled={props.disabled || props.loading}
                  optionValue={props.type === "CUSTOM" ? props.optionValue : undefined}
                  optionLabel={props.type === "CUSTOM" ? props.optionLabel : undefined}
                  value={props.formik.values[props.fieldName]}
                  onChange={e => {
                      props.formik.handleChange(e);
                      if (props.onChange) {
                          props.onChange(e.target.value)
                      }
                  }}
                  className={classNames('w-full', {'p-invalid': isFormFieldInvalid(props.formik, props.fieldName)})}
        />
    </FormField>
}