// index.js (src/components/InputPanel/EditPart)

//>>>>> PACKAGES <<<<<//
import React, { useState, useEffect } from "react";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNTCION <<<<<//  
const EditPart = ({ onSceneDisp, sceneState }) => { 

    const [livepart, setLivePart] = useState(false); 
    useEffect(() => {
        const resetLive = () => {
            if (!sceneState.parts) {
                setLivePart(false);
            };
        };
        resetLive();
    }, [sceneState]);

    //>>>>> JSX Return <<<<<//
    return (
        <div
            id="EditPart-container"
            className="Base-block"
        >
            {sceneState.parts ? (
                <div className="Base-block-flexCol" >
                    <div className="Base-flexedCol-block" >
                        <h3>PART LIST - CLICK TO EDIT</h3>
                        {sceneState.parts.map((item, index) => {
                            return (
                                <p
                                    className="EditPart-link"
                                    onClick={() => setLivePart(item.id - 1)}
                                >{index + " " + item.partName}</p>
                            )
                        })}
                    </div>
                    <div className="Base-flexedCol-block" >
                        {livepart || livepart === 0 ? (
                            <div className="Base-block-flexCol" >
                                <h3>SELECTED PART</h3>
                                <p>{"Editing Part " + (livepart+1)}</p>
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
                </div>
            ) : (null)}            
        </div>
    );    
}

export default EditPart;




