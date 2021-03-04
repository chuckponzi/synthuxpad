// index.js (src/components/MyScene/Box)
// Version 0.1.0
// 5-February 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

import React, { useRef } from "react";

function Knob(props) {

    const mesh = useRef()

    //>>>>> Debug <<<<<//
    //
    //
    //>>>>> Debug <<<<<//
    
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={[1,1,1]}
        >
            <cylinderBufferGeometry
                args={[props.fiber.knob.size.rBot, props.fiber.knob.size.rTop, props.fiber.knob.size.h, 8, 16]}
            />
            <meshStandardMaterial
                color={0xff2052}
                metalness={0.5}
                roughness={0.5}
            />
        </mesh>
    )
};

export default Knob;

// three.js ref
// BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
