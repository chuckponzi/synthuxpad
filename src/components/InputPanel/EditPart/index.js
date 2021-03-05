// index.js (src/components/InputPanel/EditPart)

//>>>>> PACKAGES <<<<<//
import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

//>>>>> FORMIK COMPONENT IMPORT <<<<<//
import MyInput from "../Formik/MyInput";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNTCION <<<<<//  
const EditPart = (props) => {  
    
    //>>>>> Return <<<<<//
    return (
        <div
            id="KnobInput-container"
            className="Base-block-flexCol"
        >
            <div className="Base-flexedCol-block">
                <h3>EDIT A PART</h3>
            </div>
            <div className="Base-flexedCol-block">  
                <Formik>
                    <Form>
                    </Form>
                </Formik>
            </div>
            {/* original static version below - keep for reference */}
            {/*<div className="Base-flexedCol-block">                    
                <Formik
                    initialValues={{
                        x: initParam.position.x,
                        y: initParam.position.y,
                        rBot: initParam.size.rBot,
                        rTop: initParam.size.rTop,
                        h: initParam.size.h,
                    }}
                    validationSchema={Yup.object({
                        x: Yup.number()
                            .required("Required"),
                        y: Yup.number()
                            .required("Required"),
                        rBot: Yup.number()
                            .required("Required"),
                        rTop: Yup.number()
                            .required("Required"),
                        h: Yup.number()
                            .required("Required"),                        
                    })}
                    onSubmit={(values) => {
                        props.onDispatch({
                            type: 'knob',
                            data: {                                
                                position: {
                                    x: values.x,
                                    y: values.y
                                },
                                size: {
                                    rBot: values.rBot,
                                    rTop: values.rTop,
                                    h: values.h
                                }
                            }
                        });
                    }}    
                >        
                    <Form className="Formik-Form" >                        
                        <div className="Formik-formRow" >
                            <MyInput    
                                className="Formik-MyInput"
                                title="X"
                                label="X"
                                name="x"
                                type="number" 
                            />
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Y"
                                label="Y"
                                name="y"
                                type="number"
                            />
                        </div> 
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Bottom Radius"
                                label="Ro"
                                name="rBot"
                                type="number"
                            />
                        </div>  
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Top Radius"
                                label="Rf"
                                name="rTop"
                                type="number"
                            />
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Height"
                                label="Height"
                                name="h"
                                type="number"
                            />
                        </div>  
                        <div className="Formik-formRow" >
                            <button
                                title="Update"
                                type="submit"                                            
                            >
                                <span role="img" >UPDATE</span>
                            </button>
                        </div>                          
                    </Form>
                </Formik>
            </div>*/}       
        </div>
    );    
}

export default EditPart;




