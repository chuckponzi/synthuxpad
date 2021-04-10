// index.js (src/components/MyScene/KnobModal)

import React, { useRef } from "react";

function KnobModal(props) {

    const mesh = useRef()

    //>>>>> Debug <<<<<//
    //
    //
    //>>>>> Debug <<<<<//

    //console.log(props);
    
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={[1, 1, 1]}
        >
            <cylinderBufferGeometry
                args={[props.parameters.size.rTop,
                    props.parameters.size.rBot,
                    props.parameters.size.h,
                    16, 32, false]}
                // [radiusTop : Float, radiusBottom : Float, height : Float, 
                //  radialSegments : Integer, heightSegments : Integer, 
                //  openEnded : Boolean, thetaStart : Float, thetaLength : Float]
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

// Useful Property References

// <mesh /> <Object3D />
// https://threejs.org/docs/index.html?q=mesh#api/en/core/Object3D
// Pass as props from parent (dynamic) or set here (static)

// <cylinder /> <BufferGeometry />
// https://threejs.org/docs/index.html?q=cylinder#api/en/geometries/CylinderGeometry
// https://threejs.org/docs/index.html?q=cylinder#api/en/core/BufferGeometry