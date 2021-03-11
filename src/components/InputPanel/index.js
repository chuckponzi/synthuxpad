// index.js (src/components/InputPanel)
// Version 0.1.0
// 30-January 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

//>>>>> PACKAGES <<<<<//
import React from "react";

//>>>>> LOCAL COMPNENT IMPORT <<<<<//
import BoardInput from "./BoardInput";
import EditPart from "./EditPart";
import AddPart from "./AddPart";
import LightInput from "./LightInput";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNTCION <<<<<//  
const InputPanel = (props) => {  
    
    //>>>>> Return <<<<<//
    return (
        <div id="InputPanel-container" >
            <div id="InputPanel-BoardInput" >
                <BoardInput
                    initParam={props.initParam}
                    onDispatch={props.onDispatch}
                />
            </div>                           
            <div id="InputPanel-LightInput">
                <LightInput
                    initParam={props.initParam}
                    onDispatch={props.onDispatch}
                />
            </div>
            <div id="InputPanel-AddPart" >
                <AddPart
                    initParam={props.initParam}
                    onDispatch={props.onDispatch}
                />
            </div> 
            <div id="InputPanel-EditPart" >
                <EditPart
                    initParam={props.initParam}
                    onDispatch={props.onDispatch}
                    partList={props.partList}
                />
            </div> 
            
        </div>
    );    
}

//>>>>> EXPORT <<<<<//
export default InputPanel;

// To Do List
// - 

// Version History
// -


