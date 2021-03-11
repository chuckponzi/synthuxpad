// Title: index.js (src/components/InputPanel/Formik/MySelect)

//>>>>> PACKAGES <<<<<//
import React from 'react';
import { Formik, useField } from 'formik';

//>>>>> SCSS STYLES <<<<<//
import "../../../../scss/base.scss";

//>>>>> Formik Standard <<<<<//
const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="Formik-MySelect-container">
            <label
                className='Formik-MySelect-label'
                htmlFor={props.id || props.name}
            >{label}</label>
            <select
                className="Formik-MySelect-root"
                {...field}
                {...props}
            >
                {props.optionList.map(item => {
                    return (<option>{item}</option>)                   
                })}
            </select>
            <span
                title={meta.error}
                className='Formik-MySelect-error'
            >{meta.touched && meta.error ? "\uD83D\uDEA8" : null}</span>
        </ div>
    );
};

//>>>>> EXPORT <<<<<//
export default MySelect;