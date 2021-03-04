// Title: index.js (src/components/InputPanel/Formik/MySelect)
// Version: 0.1.0
// Date: 1-March 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

//>>>>> PACKAGES <<<<<//
import React from 'react';
import { Formik, useField } from 'formik';

//>>>>> SCSS STYLES <<<<<//
import "../../../../scss/base.scss";

//>>>>> Formik Standard <<<<<//
const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            {/*<label
                className='Formik-MyInput-label'
                htmlFor={props.id || props.name}
            >{label}</label>
            <input className='Formik-MyInput-root' {...field} {...props} />
            <span
                title={meta.error}
                className='Formik-MyInput-error'
            >{meta.touched && meta.error ? "\uD83D\uDEA8" : null}</span>*/}
            <select {...field} {...props} >
                {props.optionList.map(item => {
                    return (<option >{item}</option>)                   
                })}
            </select>
        </ div>
    );
};

//>>>>> EXPORT <<<<<//
export default MySelect;