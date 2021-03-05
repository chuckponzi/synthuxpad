// index.js (src/components/MyScene/KnobModal)

import React, { useRef } from "react";

function KnobModal(props) {

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
                args={[props.parameters.size.rBot, props.parameters.size.rTop, props.parameters.size.h, 16, 32]}
            />
            <meshStandardMaterial
                color={props.parameters.mesh.color}
                metalness={props.parameters.mesh.metal}
                roughness={props.parameters.mesh.rough}
            />
        </mesh>
    )
};

export default KnobModal;

