// index.js (src/components/App)

//>>>>> NPM PACKAGES <<<<<//
import React, { useState, useReducer, useEffect } from "react";
import MyScene from "../MyScene";
import InputPanel from "../InputPanel";

//>>>>> DEFAULT DESIGN PARAMETERS <<<<<//
import { parameters } from "../../constants/initial";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> SCENE REDUCER <<<<<//
function paramRed(initState, action) {
    let newState;
    switch (action.type) {
        case "board":
            newState = {
                ...initState,
                [action.type]: action.data
            };
            return newState;
        case "light":
            newState = {
                ...initState,
                [action.type]: action.data
            };
            return newState;
        case "add":
            let list = initState.parts;
            if (!list) {
                list = [{
                    id: 1,
                    ...action.data
                }]
            } else {
                const count = initState.parts.length + 1;
                list.push({
                    id: count,
                    ...action.data
                });
            };            
            newState = {
                ...initState,
                parts: list
            };
            return newState;
        case "clear":
            newState = {
                ...initState,
                parts: false
            };
            return newState;
        default:
            newState = initState;
            console.log("reducer error", initState, action);
            return newState;
    };
};

//>>>>> COMPONENT FUNCTION <<<<<//
const App = () => {

    //>>>>> 1 - Scene Parameter Reducer <<<<<//
    const [scenestate, dispatchScene] = useReducer(paramRed, parameters);

    // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes //
    //
    // **Objective**
    // - This reducer is for all the required parts setup options
    // - For now this is limited to lighting and the board itself
    // 
    // **Comments**
    // - Cannot control the camera dynamically this way
    // - 
    //
    // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes //

    //>>>>> Debug <<<<<//
    //console.log(scenestate);
    //>>>>> Debug <<<<<//

    //>>>>> Return <<<<<//
    return (
        <div
            id="App-container"
            style={{ width: "100%", height: "auto" }}
        >    
            <div id="App-MyScene">
                <MyScene
                    sceneState={scenestate}
                />               
            </div>         
            <div id="App-InputPanel">
                <InputPanel
                    onSceneDisp={(e) => dispatchScene(e)}
                    sceneState={scenestate}
                />
            </div>
        </div>                
    );    
};

export default App;
