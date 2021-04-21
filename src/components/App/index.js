// index.js (src/components/App)

//>>>>>>>>>> NPM PACKAGES <<<<<//
import React, { useState, useReducer, useEffect } from "react";
import MyScene from "../MyScene";
import InputPanel from "../InputPanel";

//>>>>>>>>>> DEFAULT DESIGN PARAMETERS <<<<<//
import { parameters } from "../../constants/initial";

//>>>>>>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>>>>>>> SCENE REDUCER <<<<<//
function paramRed(initState, action) {
    let newState;
    let newParts;
    let newActive;
    let newClicked;
    let newUi;
    let i;
    let partCount;
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
            newParts = initState.parts;
            newParts.push(action.data);
            newActive = initState.ui.active;
            newActive.push(false);
            newState = {
                ...initState,
                parts: newParts,
                ui: {
                    ...initState.ui,
                    active: newActive
                }
            };
            return newState;
        case "clear":
            newState = {
                ...initState,
                ui: {
                    ...initState.ui,
                    clicked: [],
                    active: []
                },
                parts: []
            };
            return newState;
        case "clicked":
            newClicked = initState.ui.clicked;
            newClicked.push({
                camera: action.data.camera,
                distance: action.data.distance,
                face: action.data.face,
                object: action.data.object,
                point: action.data.point,
                ray: action.data.ray,
                unprojectedPoint: action.data.unprojectedPoint,
                uv: action.data.uv,
            });
            newState = {
                ...initState,
                ui: {
                    ...initState.ui,
                    clicked: newClicked
                }
            };
            return newState;
        case "active-on":

            newActive = [];
            partCount = initState.ui.active.length;
            for (i = 0; i < partCount; i++) {
                i === action.data ?
                    newActive.push(true) :
                    newActive.push(false);
            };

            newState = {
                ...initState,
                ui: {
                    clicked: initState.ui.clicked,
                    active: newActive
                }
            };

            return newState;

        case "active-off":
           
            partCount = initState.ui.active.length;
            newActive = Array(partCount).fill(false);

            newState = {
                ...initState,
                ui: {
                    clicked: initState.ui.clicked,
                    active: newActive
                }
            };

            return newState;

        default:
            newState = initState;
            console.log("reducer error", initState, action);
            return newState;
    };
};

//>>>>>>>>>> COMPONENT FUNCTION <<<<<//
const App = () => {

    //>>>>>>>>>> 1 - Scene Parameter Reducer <<<<<//
    const [scenestate, dispatchScene] = useReducer(paramRed, parameters);

    // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes //
    //
    // **Objective**
    // - This reducer is for all the required parts setup options
    // - For now this is limited to lighting and the board itself
    // 
    // **Comments**
    // - Cannot control the camera dynamically here
    // - 
    //
    // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes //

    //>>>>>>>>>> Debug <<<<<//
    console.log("App - scenestate", scenestate);
    //>>>>>>>>>> Debug <<<<<//

    //>>>>>>>>>> JSX Return <<<<<//
    return (
        <div
            id="App-container"
            style={{ width: "100%", height: "auto" }}
        >    
            <div id="App-MyScene">
                <MyScene
                    onSceneDisp={(e) => dispatchScene(e)}
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

//>>>>>>>>>> EXPORT <<<<<<<<<<//
export default App;
