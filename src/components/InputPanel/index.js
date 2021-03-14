// index.js (src/components/InputPanel)

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
const InputPanel = ({ onSceneDisp, sceneState }) => {  
    
    //>>>>> Return <<<<<//
    return (
        <div id="InputPanel-container" >
            <div id="InputPanel-BoardInput" >
                <BoardInput
                    onSceneDisp={onSceneDisp}
                />
            </div>                           
            <div id="InputPanel-LightInput">
                <LightInput
                    onSceneDisp={onSceneDisp}
                />
            </div>
            <div id="InputPanel-AddPart" >
                <AddPart
                    onSceneDisp={onSceneDisp}
                />
            </div> 
            <div id="InputPanel-EditPart" >
                <EditPart
                    onSceneDisp={onSceneDisp}
                    sceneState={sceneState}
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


