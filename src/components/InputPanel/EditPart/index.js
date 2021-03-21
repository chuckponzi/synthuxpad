// index.js (src/components/InputPanel/EditPart)

//>>>>> PACKAGES <<<<<//
import React, { useState } from "react";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNTCION <<<<<//  
const EditPart = ({ onSceneDisp, sceneState }) => { 

    const [livepart, setLivePart] = useState(false) 

    //>>>>> Return <<<<<//
    return (
        <div
            id="EditPart-container"
            className="Base-block-flexCol"
        >
            <div className="Base-flexedCol-block">
                <h3>CLICK TO EDIT</h3>
                {sceneState.parts.map(item => {
                    return (
                        <p
                            onClick={() => setLivePart(item.id)}
                        >{item.id + " " + item.partName}</p>
                        )
                })}
            </div>
            {livepart || livepart === 0 ? (
                <div className="Base-flexedCol-block">
                    <h3>CURRENT</h3>
                    <p>{"Editing Part " + livepart}</p>
                    <p>{"Group: " + sceneState.parts[livepart]["type"]}</p>
                    <p>{"Part Name: " + sceneState.parts[livepart]["partName"]}</p>
                    <p>
                        {"Position: (" +
                        sceneState.parts[livepart]["position"]["x"] + "," +
                        sceneState.parts[livepart]["position"]["y"] + "," +
                        sceneState.parts[livepart]["position"]["z"] + ")"}
                    </p>
                </div>
            ) : (null)}            
        </div>
    );    
}

export default EditPart;




