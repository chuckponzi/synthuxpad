// index.js (src/components/InputPanel/EditPart)

//>>>>> PACKAGES <<<<<//
import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNTCION <<<<<//  
const EditPart = ({ onSceneDisp, sceneState }) => {  

    //>>>>> Return <<<<<//
    return (
        <div
            id="EditPart-container"
            className="Base-block-flexCol"
        >
            <div className="Base-flexedCol-block">
                <h3>EDIT A PART</h3>
                {sceneState.parts.map(item => {
                    return (
                        <p>{item.id + " " + item.partName}</p>
                        )
                })}
            </div>
            
        </div>
    );    
}

export default EditPart;




