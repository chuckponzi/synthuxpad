// index.js (src/components/InputPanel/AddPart)
// Version 0.1.0
// 5-February 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

//>>>>> PACKAGES <<<<<//
import React, { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";

//>>>>> FORMIK COMPONENT IMPORT <<<<<//
import MySelect from "../Formik/MySelect";

//>>>>> STATIC PARTS CATALOG <<<<<//
import * as PARTS from "../../parts";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNTCION <<<<<//  
const AddPart = (props) => {  

    const groupOptions = PARTS.groups;
    const namesOptions = PARTS.names;

    let activeGroupRef = useRef(groupOptions[0]);
    let activeNamesRef = useRef(namesOptions[0]);
    let activePartRef = useRef(namesOptions[0][0]);
    const [activegroup, setActiveGroup] = useState(groupOptions[0]);
    const [activepart, setActivePart] = useState(namesOptions[0][0])
    const [activenames, setActiveNames] = useState(namesOptions[0]);
    useEffect(() => {
        const activeGroup = activegroup;
        const activeIndex = groupOptions.indexOf(activeGroup);        
        setActiveNames(namesOptions[activeIndex]);
        setActivePart(namesOptions[activeIndex][0]);
    }, [activegroup]);

    
    //useEffect(() => {
    //    const activePart = activepart;
    //    console.log({
    //        action: "add",
    //        context: {
    //            type: activeGroupRef.current,
    //            name: activePart
    //        }
    //    });
    //}, [activepart]);

    activeGroupRef.current = activegroup;
    activeNamesRef.current = activenames;
    activePartRef.current = activepart;

    console.log("group", activegroup);
    console.log("groupref", activeGroupRef.current);
    console.log("names", activenames);
    console.log("namesref", activeNamesRef.current);
    console.log("part", activepart);
    console.log("partref", activePartRef.current);
    
    
    
    //>>>>> Return <<<<<//
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
                                type: activeGroupRef.current,
                                name: values.partname
                            }
                        });
                    }} 
                >
                    <Form>
                        <MySelect
                            name="partname"
                            optionList={activeNamesRef.current}
                        />
                        <button
                            title="Add"
                            type="submit"
                        >
                            <span role="img" >ADD</span>
                        </button>
                    </Form>
                </ Formik>
            </ div>
        </div>
    );    
}

export default AddPart;

// To Do List
// - map available parts in Formik Form by type and index

// Version History
// -


