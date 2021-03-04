// initial.js (src/components/App/constants)
// Version 0.1.0
// 6-February 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

export const parameters = {
    board: {
        size: {
            x: 100,
            y: 100,
            z: 4,
        },
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: {
            x: 1,
            y: 1,
            z: 1
        },
        mesh: {
            color: "#c0c0c0",
            metal: 0.5,
            rough: 1.0,
        }
    },
    camera: {
        position: {
            x: 0,
            y: 0,
            z: 5
        }
    },
    light: {
        ambient: {
            intensity: 1.0,
            color: "#404040"
        },
        spot: {
            position: {
                x: 10,
                y: 10,
                z: 10
            },
            angle: 15,
            penumbra: 1
        },
        point: {
            position: {
                x: 0,
                y: 0,
                z: 0
            }
        }
    }
};
