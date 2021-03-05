// index.js (src/components/App)

//>>>>> NPM PACKAGES <<<<<//
import React, { useState, useReducer } from "react";
import MyScene from "../MyScene";
import InputPanel from "../InputPanel";

//>>>>> DEFAULT DESIGN PARAMETERS <<<<<//
import * as INIT from "./constants/initial";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> PARAMETERS REDUCER <<<<<//
function paramReducer(initState, action) {
    let newState;
    switch (action.type) {
        case "board":
            // keep this one
            newState = {
                ...initState,
                [action.type]: action.data
            };
            return newState;
        case "light":
            // keep this one
            newState = {
                ...initState,
                [action.type]: action.data
            };
            return newState;
        case "knob":
            // obsolete syntax
            // update for new part list
            newState = {
                ...initState,
                [action.type]: action.data
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

    //>>>>> 1 - Parameter Reducer <<<<<//
    const [fiber, dispatchFiber] = useReducer(paramReducer, INIT.parameters);

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

    //>>>>> 2 - Installed Parts <<<<<//
    const [partlist, setPartList] = useState({
        knobs : [
            {
                id: 0,
                position: { x: -20, y: -20 }
            },
            {
                id: 1,
                position: { x: 20, y: 20 }
            },
            {
                id: 1,
                position: { x: 20, y: -10 }
            }
        ],
        switches: false
    });

    // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes //
    //
    // **Objective**
    // - Add, delete, clear the part list
    // 
    // 
    // **Comments**
    // - useState to start, but this may be better as a useReducer with many parts
    //
    // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes // Notes //

    //>>>>> Debug <<<<<//
    // console.log("Hook - fiber", fiber);
    // console.log("Hook - partlist", partlist);
    //>>>>> Debug <<<<<//

    //>>>>> Return <<<<<//
    return (
        <div
            id="App-container"
            style={{ width: "100%", height: "auto" }}
        >    
            <div id="App-MyScene">
                <MyScene
                    fiber={fiber}
                    partList={partlist}
                />               
            </div>         
            <div id="App-InputPanel">
                <InputPanel
                    initParam={INIT.parameters}
                    onDispatch={(e) => dispatchFiber(e)}
                    onAddPart={(e) => console.log(e)}
                    partList={partlist}
                />
            </div>
        </div>                
    );    
};

export default App;
