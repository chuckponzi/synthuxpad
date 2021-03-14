// index.js (src/components/InputPanel/LightInput)

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
const LightInput = ({ onSceneDisp }) => {  

    const initLight = parameters.light;
    
    //>>>>> JSX Return <<<<<//
    return (
        <div
            id="LightInput-container"
            className="Base-block-flexCol"
        >
            <div className="Base-flexedCol-block">
                <h3>LIGHT PARAMETERS</h3>
            </div>
            <div className="Base-flexedCol-block">                    
                <Formik
                    initialValues={{
                        aIntensity: initLight.ambient.intensity,
                        aColor: initLight.ambient.color,
                        sPositionX: initLight.spot.position.x,
                        sPositionY: initLight.spot.position.y,
                        sPositionZ: initLight.spot.position.z,                         
                        sAngle: initLight.spot.angle,
                        sPenumbra: initLight.spot.penumbra,
                        pPositionX: initLight.point.position.x,
                        pPositionY: initLight.point.position.y,
                        pPositionZ: initLight.point.position.z,
                    }}
                    validationSchema={Yup.object({
                        aIntensity: Yup.number()
                            .required("Required")
                            .min(0, "Min 0.0")
                            .max(1, "Max 1.0"),
                        aColor: Yup.string()
                            .matches(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, "Invalid Color")
                            .required("Required"), 
                        sPositionX: Yup.number()
                            .required("Required"),
                        sPositionY: Yup.number()
                            .required("Required"),
                        sPositionZ: Yup.number()
                            .required("Required"),
                        sAngle: Yup.number()
                            .required("Required"),
                        sPenumbra: Yup.number()
                            .required("Required"),
                        pPositionX: Yup.number()
                            .required("Required"),
                        pPositionY: Yup.number()
                            .required("Required"),
                        pPositionZ: Yup.number()
                            .required("Required"),
                    })}
                    onSubmit={(values) => {
                        onSceneDisp({
                            type: 'light',
                            data: { 
                                ambient: {
                                    intensity: values.aIntensity,
                                    color: values.aColor,
                                },
                                spot: {
                                    position: {
                                        x: values.sPositionX,
                                        y: values.sPositionY,
                                        z: values.sPositionZ
                                    },
                                    angle: values.sAngle,
                                    penumbra: values.sPenumbra,
                                },
                                point: {
                                    position: {
                                        x: values.pPositionX,
                                        y: values.pPositionY,
                                        z: values.pPositionZ
                                    },
                                }
                            }
                        });
                    }}    
                >        
                    <Form className="Formik-Form" >                           
                        <div className="Formik-formRow" >
                            <h4>AMBIENT</h4>
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput  
                                className="Formik-MyInput"
                                title="Intensity"
                                label="Intensity"
                                name="aIntensity"
                                type="number" 
                            />
                        </div>      
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Color"
                                label="Color"
                                name="aColor"
                                type="string"
                            />
                        </div>   
                        <div className="Formik-formRow" >
                            <h4>SPOT</h4>
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="X"
                                label="X"
                                name="sPositionX"
                                type="number"
                            />
                        </div>   
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Y"
                                label="Y"
                                name="sPositionY"
                                type="number"
                            />
                        </div>   
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Z"
                                label="Z"
                                name="sPositionZ"
                                type="number"
                            />
                        </div>   
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Angle"
                                label="Angle"
                                name="sAngle"
                                type="number"
                            />
                        </div> 
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Penumbra"
                                label="Penumbra"
                                name="sPenumbra"
                                type="number"
                            />
                        </div> 
                        <div className="Formik-formRow" >
                            <h4>POINT</h4>
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="X"
                                label="X"
                                name="pPositionX"
                                type="number"
                            />
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Y"
                                label="Y"
                                name="pPositionY"
                                type="number"
                            />
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Z"
                                label="Z"
                                name="pPositionZ"
                                type="number"
                            />
                        </div>   
                        <div className="Formik-formRow" >
                            <button
                                className="Base-button"
                                title="Update"
                                type="submit"                                            
                            >UPDATE LIGHTING</button>
                        </div>                       
                    </Form>
                </Formik>
            </div>        
        </div>
    );    
}

export default LightInput;



