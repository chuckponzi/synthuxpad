// index.js (src/components/InputPanel/AddPart)

//>>>>> PACKAGES <<<<<//
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";

//>>>>> FORMIK COMPONENT IMPORT <<<<<//
import MySelect from "../Formik/MySelect";

//>>>>> STATIC PARTS CATALOG <<<<<//
import { partGroups, partNames } from "../../../constants/catalog";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNCTION <<<<<//  
const AddPart = ({ onSceneDisp }) => {  

    //>>>>> Hooks <<<<<//
    const [activegroup, setActiveGroup] = useState(partGroups[0]);
    const [activenames, setActiveNames] = useState(partNames[0]);
    const [activepart, setActivePart] = useState(partNames[0][0]);    
    useEffect(() => {
        const activeIndex = partGroups.indexOf(activegroup);        
        setActiveNames(partNames[activeIndex]);
        setActivePart(partNames[activeIndex][0]);
    }, [activegroup]);
    
    //>>>>> Return JSX <<<<<//
    return (
        <div
            id="AddPart-container"
            className="Base-block-flexCol"
        >
            <div className="Base-flexedCol-block">
                <h3>ADD A PART</h3>
            </div>
            <div className="Base-flexedCol-block">
                <Formik
                    initialValues={{
                        group: partGroups[0],
                    }}  
                    
                >
                    {({
                        values,
                        setFieldValue,
                        handleChange
                    }) => (
                            <Form className="Formik-Form" >
                                <div className="Formik-formRow" >
                                    <MySelect
                                        className="Formik-MySelect"
                                        name="group"
                                        label="Part Family"
                                        optionList={partGroups}
                                        onChange={(e) => {
                                            setActiveGroup(e.target.value);
                                            handleChange(e);
                                        }}
                                    />  
                                </div>
                            </Form>
                        )}
                </ Formik>
            </div>
            <div className="Base-flexedCol-block">
                <Formik
                    initialValues={{
                        partname: partNames[0][0],
                    }}
                    onSubmit={(values) => {
                        onSceneDisp({
                            type: "add",
                            data: {
                                type: activegroup,
                                partName: activepart,
                                position: {
                                    x: 0,
                                    y: 0,
                                    z: 0
                                },
                                active: false
                            }
                        });
                    }} 
                >
                    {({
                        values,
                        setFieldValue,
                        handleChange
                    }) => (
                        <Form className="Formik-Form" >
                            <div className="Formik-formRow" >
                                <MySelect
                                    className="Formik-MySelect"
                                    name="partname"
                                    label="Part Name"
                                    optionList={activenames}
                                    onChange={(e) => {
                                        setActivePart(e.target.value);
                                        handleChange(e);
                                    }}
                                />
                            </div>
                            <div className="Formik-formRow" >
                                <button
                                    className="Base-button"
                                title="Add"
                                type="submit"
                                    >ADD PART</button>
                            </div>     
                        </Form>
                    )}
                </ Formik>
            </ div>
            <div className="Base-flexedCol-block" >
                <button
                    className="Base-button"
                    title="Clear"
                    onClick={() => {
                        onSceneDisp({
                            type: "clear",
                            data: {}
                        });
                    }}
                >CLEAR ALL PARTS</button>
            </div>     
        </div>
    );    
}

export default AddPart;




