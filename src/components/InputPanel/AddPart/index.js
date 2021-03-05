// index.js (src/components/InputPanel/AddPart)

//>>>>> PACKAGES <<<<<//
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";

//>>>>> FORMIK COMPONENT IMPORT <<<<<//
import MySelect from "../Formik/MySelect";

//>>>>> STATIC PARTS CATALOG <<<<<//
import * as PARTS from "../../parts";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNCTION <<<<<//  
const AddPart = () => {  

    //>>>>> <select /> Arrays <<<<<//
    const groupOptions = PARTS.groups;
    const namesOptions = PARTS.names;

    //>>>>> Hooks <<<<<//
    const [activegroup, setActiveGroup] = useState(groupOptions[0]);
    const [activenames, setActiveNames] = useState(namesOptions[0]);
    const [activepart, setActivePart] = useState(namesOptions[0][0]);    
    useEffect(() => {
        const activeIndex = groupOptions.indexOf(activegroup);        
        setActiveNames(namesOptions[activeIndex]);
        setActivePart(namesOptions[activeIndex][0]);
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
            <div>
                <Formik
                    initialValues={{
                        group: groupOptions[0],
                    }}                    
                >
                    {({
                        values,
                        setFieldValue,
                        handleChange
                    }) => (
                            <Form>
                                <MySelect
                                    name="group"
                                    optionList={groupOptions}
                                    onChange={(e) => {
                                        setActiveGroup(e.target.value);
                                        handleChange(e);
                                    }}
                                />

                                
                            </Form>
                        )}
                </ Formik>
            </div>
            <div>
                <Formik
                    initialValues={{
                        partname: namesOptions[0][0],
                    }}
                    onSubmit={(values) => {
                        console.log({
                            action: "add",
                            context: {
                                type: activegroup,
                                partName: activepart
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
                            <MySelect
                                name="partname"
                                optionList={activenames}
                                onChange={(e) => {
                                    setActivePart(e.target.value);
                                    handleChange(e);
                                }}
                            />
                                <button
                                    className="Base-button"
                                title="Add"
                                type="submit"
                            >ADD PART</button>
                        </Form>
                    )}
                </ Formik>
            </ div>
        </div>
    );    
}

export default AddPart;




