//------------------------------------------------------------------------------------//
// Title: index.js (src/components/MyScene)

//>>>>>>>>>> NPM PACKAGES <<<<<<<<<<//
import React from "react";

//>>>>>>>>>> THREE OBJECTS <<<<<<<<<<//
import { Canvas } from "react-three-fiber";

//>>>>>>>>>> MY THREE COMPONENETS <<<<<<<<<<//
import Board from "./Board";
import KnobModal from "./KnobModal";

//>>>>>>>>>> SCSS STYLES <<<<<<<<<<//
import "./styles.scss";

//>>>>>>>>>> COMPONENT FUNCTION - MyScene <<<<<<<<<<//
const MyScene = ({ sceneState }) => {      

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Notes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//             
    //
    // **Objective**
    // - Static part, re-renders only when sceneState changes
    // 
    // 
    // **Comments**
    // - camera prop for <Canvas> is initial only. Can't change it dynamically here
    // - <KnobModal> disabled while testing part list functions
    //
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Notes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<// 

    //>>>>>>>>>> Debug <<<<<<<<<<//
    //console.log("sceneState", sceneState)
    //>>>>>>>>>> Debug <<<<<<<<<<//

    //>>>>>>>>>> JSX Return <<<<<<<<<<//
    return (
        <div id="MyScene-container" >
            <div id="MyScene-wrap">
                <Canvas
                    camera={{ position: [0, 0, 100] }}
                >
                    <ambientLight
                        color={parseInt(sceneState.light.ambient.color.substr(1), 16)}
                        intensity={sceneState.light.ambient.intensity}
                    />
                    <spotLight
                        position={[sceneState.light.spot.position.x,
                        sceneState.light.spot.position.y,
                        sceneState.light.spot.position.z]}
                        angle={sceneState.light.spot.angle}
                        penumbra={sceneState.light.spot.penumbra}
                    />
                    <pointLight
                        position={[sceneState.light.point.position.x,
                        sceneState.light.point.position.y,
                        sceneState.light.point.position.z]}
                    />
                    <Board
                        sceneState={sceneState}
                        name="My Board"
                        visible={true}
                        position={[sceneState.board.position.x,
                        sceneState.board.position.y,
                        sceneState.board.position.z]}
                    />
                    {/*{props.partList.knobs.map((item, index) => {
                        // debug here //
                        //
                        // debug here //
                        return (
                            <KnobModal
                                name={"Knob " + index}
                                position={[item.position.x, item.position.y,
                                    sceneState.board.position.z +
                                    sceneState.board.size.z]}
                                rotation={[Math.PI / 2, 0, 0]}
                                parameters={{
                                    size: partCatalog.knobs[item.id].size,
                                    mesh: partCatalog.knobs[item.id].mesh,
                                }}
                            />
                        )                        
                    })}*/}
                </Canvas>   
            </div>
                   
        </div>
    );    
};

//>>>>> EXPORT <<<<<//
export default MyScene;

//------------------------------------------------------------------------------------//