// index.js (src/components/InputPanel/BoardInput)

//>>>>> PACKAGES <<<<<//
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//>>>>> FORMIK COMPONENT IMPORT <<<<<//
import MyInput from "../Formik/MyInput";

//>>>>> DEFAULT DESIGN PARAMETERS <<<<<//
import { parameters } from "../../../constants/initial";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNTCION <<<<<//  
const BoardInput = ({ onSceneDisp }) => {  

    const initBoard = parameters.board;
    
    //>>>>> JSX Return <<<<<//
    return (
        <div
            id="BoardInput-container"
            className="Base-block-flexCol"
        >
            <div className="Base-flexedCol-block">
                <h3>BOARD PARAMETERS</h3>
            </div>
            <div className="Base-flexedCol-block">                    
                <Formik
                    initialValues={{
                        length: initBoard.size.x,
                        width: initBoard.size.y,
                        height: initBoard.size.z,
                        color: initBoard.mesh.color,
                        metal: initBoard.mesh.metal,
                        rough: initBoard.mesh.rough,
                    }}
                    validationSchema={Yup.object({
                        length: Yup.number()
                            .required("Required")
                            .min(0, "Min 0.0")
                            .max(100, "Max 100.0"),
                        width: Yup.number()
                            .required("Required")
                            .min(0, "Min 0.0")
                            .max(100, "Max 100.0"),
                        height: Yup.number()
                            .required("Required")
                            .min(0, "Min 0.0")
                            .max(10, "Max 10.0"),
                        color: Yup.string()
                            .matches(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, "Invalid Color")
                            .required("Required"),      
                        metal: Yup.number()
                            .required("Required")
                            .min(0, "Min 0.0")
                            .max(1, "Max 1.0"),
                        rough: Yup.number()
                            .required("Required")
                            .min(0, "Min 0.0")
                            .max(1, "Max 1.0"),
                    })}
                    onSubmit={(values) => {
                        onSceneDisp({
                            type: 'board',
                            data: {
                                size: {
                                    x: values.length,
                                    y: values.width,
                                    z: values.height
                                },
                                position: {
                                    x: 0,
                                    y: 0,
                                    z: 0
                                },
                                scale: {
                                    x: 1,
                                    y: 1,
                                    z: 1
                                },
                                mesh: {
                                    color: values.color,
                                    metal: values.metal,
                                    rough: values.rough,
                                }
                            }
                        });
                    }}    
                >        
                    <Form className="Formik-Form" >                        
                        <div className="Formik-formRow" >
                            <MyInput    
                                className="Formik-MyInput"
                                title="Length"
                                label="L"
                                name="length"
                                type="number" 
                            />
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Width"
                                label="W"
                                name="width"
                                type="number"
                            />
                        </div>  
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Height"
                                label="H"
                                name="height"
                                type="number"
                            />
                        </div>                          
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Color"
                                label="Color"
                                name="color"
                                type="text"
                            />
                        </div> 
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Metal"
                                label="Metal"
                                name="metal"
                                type="number"
                            />
                        </div> 
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Roughness"
                                label="Roughness"
                                name="rough"
                                type="number"
                            />
                        </div> 
                        <div className="Formik-formRow" >
                            <button
                                className="Base-button"
                                title="Update"
                                type="submit"                                            
                            >UPDATE BOARD</button>
                        </div>                          
                    </Form>
                </Formik>
            </div>        
        </div>
    );    
}

export default BoardInput;

