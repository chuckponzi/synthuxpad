// index.js (src/components/MyScene)
// Version 0.1.0
// 27-January 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

//>>>>> NPM PACKAGES <<<<<//
import React from "react";

//>>>>> THREE OBJECTS <<<<<//
import { Canvas } from "react-three-fiber";

//>>>>> MY THREE COMPONENETS <<<<<//
import Board from "./Board";
import KnobModal from "./KnobModal";

//>>>>> STATIC PARTS CATALOG <<<<<//
import * as PARTS from "../parts";

//>>>>> SCSS STYLES <<<<<//
import "./styles.scss";

//>>>>> COMPONENT FUNCTION <<<<<//
const MyScene = (props) => {      

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
    //console.log("MyScene - props", props);
    //>>>>> Debug <<<<<//

    //>>>>> Return <<<<<//
    return (
        <div id="MyScene-container" >
            <div id="MyScene-wrap">
                <Canvas
                    camera={{ position: [0, 0, 100] }} 
                    // initial camera only

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
                        color={parseInt(props.fiber.light.ambient.color.substr(1), 16)}
                        intensity={props.fiber.light.ambient.intensity}
                    />
                    <spotLight
                        position={[props.fiber.light.spot.position.x,
                        props.fiber.light.spot.position.y,
                        props.fiber.light.spot.position.z]}
                        angle={props.fiber.light.spot.angle}
                        penumbra={props.fiber.light.spot.penumbra}
                    />
                    <pointLight
                        position={[props.fiber.light.point.position.x,
                        props.fiber.light.point.position.y,
                        props.fiber.light.point.position.z]}
                    />
                    <Board
                        fiber={props.fiber}
                        // better to deconstruct this rather than dump the entire variable
                        // once the "parameters" prop works in modal, copycat here
                        name="My Board"
                        visible={true}
                        position={[props.fiber.board.position.x,
                        props.fiber.board.position.y,
                        props.fiber.board.position.z]}
                    />
                    {/*<Knob
                        fiber={props.fiber}
                        name="Knob 1"
                        position={[props.fiber.knob.position.x, props.fiber.knob.position.y, props.fiber.board.position.z + props.fiber.board.size.z]}
                        rotation={[Math.PI/2, 0, 0]}
                        // old static knob, obsolete
                    />*/}
                    {props.partList.knobs.map((item, index) => {
                        // debug here //
                        //
                        // debug here //
                        return (
                            <KnobModal
                                name={"Knob " + index}
                                position={[item.position.x, item.position.y, props.fiber.board.position.z + props.fiber.board.size.z]}
                                rotation={[Math.PI / 2, 0, 0]}
                                parameters={{
                                    size: PARTS.catalog.knobs[item.id].size,
                                    mesh: PARTS.catalog.knobs[item.id].mesh,
                                }}
                            />
                        )                        
                    })}
                </Canvas>   
            </div>
                   
        </div>
    );    
};

export default MyScene;


// To Do List
// - Make it work!

// Version History
// 0.1.0
// - Brand spankin" new

// ref code

//Canvas will create a translucent WebGL - renderer with the following properties:
// antialias = true
// alpha = true
// powerPreference = "high-performance"
// setClearAlpha(0)
// A default perspective camera: fov: 75, near: 0.1, far: 1000, z: 5, lookAt: [0, 0, 0]
// A default orthographic camera if Canvas.orthographic is true: near: 0.1, far: 1000, z: 5, lookAt: [0, 0, 0]
// A default shadowMap if Canvas.shadowMap is true: type: PCFSoftShadowMap
// A default scene (into which all the JSX is rendered) and a raycaster.
// A wrapping container with a resize observer: scroll: true, debounce: { scroll: 50, resize: 0 }. It does not polyfill it (see Safari support)