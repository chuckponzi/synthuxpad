// index.js (src/components/InputPanel/AddPart)

//>>>>> PACKAGES <<<<<//
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";

//>>>>> FORMIK COMPONENT IMPORT <<<<<//
import MyInput from "../Formik/MyInput";
import MySelect from "../Formik/MySelect";

//>>>>> STATIC PARTS CATALOG <<<<<//
import { partCatalog, partGroups, partNames } from "../../../constants/catalog";

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
                                 
                        </Form>
                    )}
                </ Formik>
                <Formik
                    initialValues={{
                        posX: 0,
                        posY: 0,
                        posZ: 0
                    }}
                    onSubmit={(values) => {
                        const catalogSearch = partCatalog[activegroup].filter(item => item.name === activepart);
                        const catalogId = catalogSearch[0].catalogId;
                        // should always be length 1 unless there's a bug
                        // add an error catch later for redundancy
                        onSceneDisp({
                            type: "add",
                            data: {
                                type: activegroup,
                                partName: activepart,
                                position: {
                                    x: values.posX,
                                    y: values.posY,
                                    z: values.posZ
                                },
                                active: false,
                                catalogId: catalogId
                            }
                        });
                    }} 
                >
                    {({
                        values,
                        setFieldValue,
                        handleChange
                    }) => (
                    <Form>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="X"
                                label="X"
                                name="posX"
                                type="number"
                            />
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Y"
                                label="Y"
                                name="posY"
                                type="number"
                            />
                        </div>
                        <div className="Formik-formRow" >
                            <MyInput
                                className="Formik-MyInput"
                                title="Z"
                                label="Z"
                                name="posZ"
                                type="number"
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
                </Formik>
            </ div>
            <div className="Base-flexedCol-block" >
                <button
                    className="Base-button"
                    title="Clear"
                    onClick={() => {
                        onSceneDisp({
                            type: "clear",
                            data: false
                        });
                    }}
                >CLEAR ALL PARTS</button>
            </div>     
        </div>
    );    
}

export default AddPart;




