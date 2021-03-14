// index.js (src/components/MyScene/Box)

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
            // maybe skip spread to avoid doubling up props.sceneState
            ref={mesh}
            scale={[props.sceneState.board.scale.x, props.sceneState.board.scale.y, props.sceneState.board.scale.z]}
        >
            <boxBufferGeometry
                args={[props.sceneState.board.size.x, props.sceneState.board.size.y, props.sceneState.board.size.z]}
            />
            <meshStandardMaterial
                color={parseInt(props.sceneState.board.mesh.color.substr(1), 16)}
                metalness={props.sceneState.board.mesh.metal}
                roughness={props.sceneState.board.mesh.rough}
            />
        </mesh>
    )
};

export default Board;

// three.js ref
// BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
