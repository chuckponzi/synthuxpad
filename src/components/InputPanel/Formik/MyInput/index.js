// Title: index.js (src/components/InputPanel/Formik/MyInput)

//>>>>> PACKAGES <<<<<//
import React from 'react';
import { Formik, useField } from 'formik';

//>>>>> SCSS STYLES <<<<<//
import "../../../../scss/base.scss";

//>>>>> Formik Standard <<<<<//
const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='Formik-MyInput-container' >
            <label
                className='Formik-MyInput-label'
                htmlFor={props.id || props.name}
            >{label}</label>
            <input className='Formik-MyInput-root' {...field} {...props} />
            <span
                title={meta.error}
                className='Formik-MyInput-error'
            >{meta.touched && meta.error ? "\uD83D\uDEA8" : null}</span>
        </ div>
    );
};

//>>>>> EXPORT <<<<<//
export default MyInput;