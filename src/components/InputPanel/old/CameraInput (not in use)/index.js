// index.js (src/components/InputPanel/CameraInput)
// Version 0.1.0
// 27-January 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

//>>>>> PACKAGES <<<<<//
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//>>>>> FORMIK COMPONENT IMPORT <<<<<//
import MyInput from "../Formik/MyInput";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNTCION <<<<<//  
const BoardInput = (props) => {  
    
    //>>>>> Return <<<<<//
    return (
        <div
            id="CameraInput-container"
            className="Base-block-flexCol"
        >
            <div className="Base-flexedCol-block">
                <h3>CAMERA PARAMETERS</h3>
            </div>
            <div className="Base-flexedCol-block">                    
                <Formik
                    initialValues={{
                        x: 0,
                        y: 0,
                        z: 5
                    }}
                    validationSchema={Yup.object({
                        x: Yup.number()
                            .required("Required"),
                        y: Yup.number()
                            .required("Required"),
                        z: Yup.number()
                            .required("Required"),
                    })}
                    onSubmit={(values) => {
                        props.onDispatch({
                            type: 'camera',
                            data: {
                                position: {
                                    x: values.x,
                                    y: values.y,
                                    z: values.z
                                },
                            }
                        });
                    }}    
                >        
                    <Form>    
                        <div>
                        <div>
                            <MyInput
                                title="X"
                                label="X"
                                name="x"
                                type="number"
                            />
                        </div>
                        <div>
                            <MyInput
                                title="Y"
                                label="Y"
                                name="y"
                                type="number"
                            />
                        </div>
                        <div>
                            <MyInput
                                title="Z"
                                label="Z"
                                name="z"
                                type="number"
                            />
                        </div>                          
                            <div>
                                <button
                                    title="Update"
                                    type="submit"                                            
                                >
                                    <span>UPDATE</span>
                                </button>
                            </div>
                        </div>  
                    </Form>
                </Formik>
            </div>        
        </div>
    );    
}

export default BoardInput;

// To Do List
// - 

// Version History
// -


