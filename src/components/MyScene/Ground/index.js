// index.js (src/components/MyScene/Ground)

import React from "react";

function Ground({ object, geometry, material }) {

    //const mesh = useRef()

    //>>>>> Debug <<<<<//
    //
    //
    //>>>>> Debug <<<<<//
    
    return (
        <mesh
            visible={true}
            castShadow={false}
            receiveShadow={true}
            rotation={object.rotation}
            position={object.position}
        >
            <planeBufferGeometry
                attach="geometry"
                args={geometry.args}
            />
            <meshStandardMaterial
                attach="material"
                color={material.color}
                metalness={material.metal}
            />
        </mesh>
    )
};

export default Ground;



