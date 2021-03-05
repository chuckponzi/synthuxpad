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
        <div>
            {/* this is incomplete - needs styles, labels, etc */}
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