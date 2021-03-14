// index.js (src/components/MyScene)

//>>>>> NPM PACKAGES <<<<<//
import React from "react";

//>>>>> THREE OBJECTS <<<<<//
import { Canvas } from "react-three-fiber";

//>>>>> MY THREE COMPONENETS <<<<<//
import Board from "./Board";
import KnobModal from "./KnobModal";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNCTION <<<<<//
const MyScene = ({ sceneState }) => {      

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

    //>>>>> Debug <<<<<//
    console.log(sceneState);
    //>>>>> Debug <<<<<//

    //>>>>> Return <<<<<//
    return (
        <div id="MyScene-container" >
            <div id="MyScene-wrap">
                <Canvas
                    camera={{ position: [0, 0, 100] }} 
                    // initial camera only

                    // REFERENCE
                    //gl                            // Props that go into the default webGL-renderer
                    //raycaster                     // Props that go into the default raycaster
                    //shadowMap                     // Props that go into gl.shadowMap, can also be set true for PCFsoft
                    //colorManagement= true        // Auto sRGBEncoding encoding for all colors and textures + ACESFilmic
                    //vr= false                    // Switches renderer to VR mode, then uses gl.setAnimationLoop
                    //webgl1= false                // Forces THREE to WebGL1, instead of WebGL2 (default)
                    //concurrent= false            // Enables React concurrent mode
                    //resize= undefined            // Resize config, see react-use-measure's options
                    //orthographic= false          // Creates an orthographic camera if true
                    //noEvents= false              // Switch off raytracing and event support
                    //pixelRatio= undefined        // Default: 1. Use window.devicePixelRatio, or automatic: [min, max]
                    //invalidateFrameloop= false   // When true it only renders on changes, when false it's a game loop
                    //updateDefaultCamera= true    // Adjusts default camera on size changes
                    //onCreated                    // Callback when vdom is ready (you can block first render via promise)
                    //onPointerMissed              // Response for pointer clicks that have missed a target
                    //style
                    //className
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
                        // better to deconstruct this rather than dump the entire variable
                        // once the "parameters" prop works in modal, copycat here
                        name="My Board"
                        visible={true}
                        position={[sceneState.board.position.x,
                        sceneState.board.position.y,
                        sceneState.board.position.z]}
                    />
                    {/*
                    {props.partList.knobs.map((item, index) => {
                        // debug here //
                        //
                        // debug here //
                        return (
                            <KnobModal
                                name={"Knob " + index}
                                position={[item.position.x, item.position.y, sceneState.board.position.z + sceneState.board.size.z]}
                                rotation={[Math.PI / 2, 0, 0]}
                                parameters={{
                                    size: partCatalog.knobs[item.id].size,
                                    mesh: partCatalog.knobs[item.id].mesh,
                                }}
                            />
                        )                        
                    })}
                    */}
                </Canvas>   
            </div>
                   
        </div>
    );    
};

export default MyScene;

// Fiber Docs Ref
// Canvas will create a translucent WebGL - renderer with the following properties:
// antialias = true
// alpha = true
// powerPreference = "high-performance"
// setClearAlpha(0)
// A default perspective camera: fov: 75, near: 0.1, far: 1000, z: 5, lookAt: [0, 0, 0]
// A default orthographic camera if Canvas.orthographic is true: near: 0.1, far: 1000, z: 5, lookAt: [0, 0, 0]
// A default shadowMap if Canvas.shadowMap is true: type: PCFSoftShadowMap
// A default scene (into which all the JSX is rendered) and a raycaster.
// A wrapping container with a resize observer: scroll: true, debounce: { scroll: 50, resize: 0 }. It does not polyfill it (see Safari support)