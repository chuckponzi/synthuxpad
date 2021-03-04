// index.js (src/components/MyScene/Box)
// Version 0.1.0
// 28-January 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

import React, { useRef } from "react";

function Board(props) {

    const mesh = useRef()

    //>>>>> Debug <<<<<//
    //
    //
    //>>>>> Debug <<<<<//
    
    return (
        <mesh
            {...props}
            // above passes position, rotation etc.
            // see https://threejs.org/docs/index.html#api/en/core/Object3D
            // should take any of these props
            // geometry and material should be as below
            // they are args in mesh(args)
            // maybe skip spread to avoid doubling up props.fiber
            ref={mesh}
            scale={[props.fiber.board.scale.x, props.fiber.board.scale.y, props.fiber.board.scale.z]}
        >
            <boxBufferGeometry
                args={[props.fiber.board.size.x, props.fiber.board.size.y, props.fiber.board.size.z]}
            />
            <meshStandardMaterial
                color={parseInt(props.fiber.board.mesh.color.substr(1), 16)}
                metalness={props.fiber.board.mesh.metal}
                roughness={props.fiber.board.mesh.rough}
            />
        </mesh>
    )
};

export default Board;

// three.js ref
// BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
