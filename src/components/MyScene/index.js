//------------------------------------------------------------------------------------//
// Title: index.js (src/components/MyScene)

//>>>>>>>>>> NPM PACKAGES <<<<<<<<<<//
import React, { useState, useEffect} from "react";

//>>>>>>>>>> THREE OBJECTS <<<<<<<<<<//
import { Canvas } from "react-three-fiber";

//>>>>>>>>>> MY THREE COMPONENTS <<<<<<<<<<//
import Board from "./Board";
import Ground from "./Ground";
import BackDrop from "./BackDrop";
import KnobModal from "./KnobModal";

//>>>>>>>>>> PART CATALOG <<<<<<<<<<//
import { partGroups, partCatalog, initPartList } from "../../constants/catalog";

//>>>>>>>>>> SCSS STYLES <<<<<<<<<<//
import "./styles.scss";

//>>>>>>>>>> COMPONENT FUNCTION - MyScene <<<<<<<<<<//
const MyScene = ({ sceneState, onSceneDisp }) => { 

    const [partlist, setPartList] = useState(initPartList);
    useEffect(() => {

        const updatePartList = () => {
            const partQty = sceneState.parts.length;
            if (partQty > 0) {
                const knobList = sceneState.parts.filter(item => item.type === partGroups[0]);
                const sliderList = sceneState.parts.filter(item => item.type === partGroups[1]);
                setPartList({
                    [partGroups[0]]: knobList,
                    [partGroups[1]]: sliderList
                });
                // standardize this for any length set               
            } else { 
                setPartList(initPartList);
            };
        };
        updatePartList();

    }, [sceneState]);
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Notes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//             
    //
    // **Objective**
    // - deconstruct SceneState parts list for each modal map
    // 
    // **Comments**
    // - 
    //
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Notes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<// 

    //>>>>>>>>>> Debug <<<<<<<<<<//
    //console.log("sceneState", sceneState);
    //console.log("partlist", partlist);
    //>>>>>>>>>> Debug <<<<<<<<<<//

    //>>>>>>>>>> JSX Return <<<<<<<<<<//
    return (
        <div id="MyScene-container" >
            <div id="MyScene-wrap">
                <Canvas
                    camera={{ position: [-50, -50, 100] }}
                >
                    {/* RENDER LIGHTING */}
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

                    {/* RENDER SURROUNDINGS */}
                    <Ground
                        object={{
                            position: [0, 0, 0],
                            rotation: [0, 0, 0]
                        }}
                        geometry={{ args: [2000, 2000, 8, 8] }}
                        material={{ color: "#67e5e2", metal: 0.1, rough: 0}}                       
                    />
                    <BackDrop
                        object={{
                            position: [0, sceneState.board.size.y*.5+10, 0],
                            rotation: [Math.PI / 2, 0, 0]
                        }}
                        geometry={{ args: [1000, 100, 8, 8] }}
                        material={{ color: "white", metal: 0.1, rough: 0 }} 
                    />

                    {/* RENDER BOARD */}
                    <Board
                        sceneState={sceneState}
                        name="My Board"
                        visible={true}
                        position={[sceneState.board.position.x,
                        sceneState.board.position.y,
                        sceneState.board.position.z]}
                    />                    

                    {/* RENDER KNOBS */}
                    {partlist[partGroups[0]].map((item, index) => {
                        return (
                            <KnobModal
                                name={"Knob " + index}
                                position={[item.position.x, item.position.y,
                                sceneState.board.position.z +
                                sceneState.board.size.z]}
                                rotation={[Math.PI / 2, 0, 0]}
                                visible={true}
                                parameters={{
                                    size: partCatalog[partGroups[0]][item.catalogId].size,
                                    mesh: partCatalog[partGroups[0]][item.catalogId].mesh,
                                }}
                                onClick={(e) => {
                                    onSceneDisp({
                                        type: "clicked",
                                        data: e
                                    });
                                }}
                            />
                        )    
                    })}      

                    {/* RENDER SLIDERS (USE KNOB FOR NOW) */}
                    {partlist[partGroups[1]].map((item, index) => {
                        return (
                            <KnobModal
                                name={"Slider " + index}
                                position={[item.position.x, item.position.y,
                                sceneState.board.position.z +
                                sceneState.board.size.z]}
                                rotation={[Math.PI / 2, 0, 0]}
                                visible={true}
                                parameters={{
                                    size: partCatalog[partGroups[1]][item.catalogId].size,
                                    mesh: partCatalog[partGroups[1]][item.catalogId].mesh,
                                }}
                            />
                        )
                    })}      
                    
                </Canvas>   
            </div>
                   
        </div>
    );    
};

//>>>>> EXPORT <<<<<//
export default MyScene;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Notes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//             
//
// **Comments**
// - camera prop for <Canvas> is initial only. Can't change it dynamically here
// 
//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Notes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//  

//------------------------------------------------------------------------------------//