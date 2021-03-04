// index.js (src/components/App)
// Version 0.1.0
// 27-January 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

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
            break;
        case "light":
            // keep this one
            newState = {
                ...initState,
                [action.type]: action.data
            };
            return newState;
            break;
        case "knob":
            // obsolete syntax
            // update for new part list
            newState = {
                ...initState,
                [action.type]: action.data
            };
            return newState;
            break;
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
    // 
    // 
    // 
    // **Comments**
    // - 
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
    // 
    // 
    // 
    // **Comments**
    // - not sure yet if this will be a useReducer or useState
    // - probably like the line reducer in chart app (add/delete/edit action types)
    // - leave static until form is done
    // - this should be empty at startup when it's done
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


// To Do List
// - Make it work!

// Version History
// 0.1.0
// - Brand spankin" new

// ref code