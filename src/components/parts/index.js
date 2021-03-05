// parts.js (src/components/App/parts)

//>>>>> PARTS CATALOG <<<<<//
export const catalog = {
    knobs: [
        {
            name: "small",
            size: {
                rBot: 6,
                rTop: 6,
                h: 12
            },
            drill: {
                d: 3,
                tap: "M3 x 0.5"
            },
            mesh: {
                color: "#c0c0c0",
                metal: 0.5,
                rough: 1.0,
            },
            constraint: {
                rClear: 8,
            }
        },
        {
            name: "big",
            size: {
                rBot: 12,
                rTop: 12,
                h: 12
            },
            drill: {
                d: 4,
                tap: "M4 x 0.7"
            },
            mesh: {
                color: "#e30b1a",
                metal: 0.8,
                rough: 1.0,
            },
            constraint: {
                rClear: 10,
            }
        }
    ],
    switches: [
        {
            name: "vertical"
        },
        {
            name: "horizontal"
        }
    ]
};

//>>>>> PART GROUP LIST <<<<<//
export const groups = Object.keys(catalog);

//>>>>> DATA OBJECT REDUCED TO ARRAY OF ARRAYS FOR MENUS <<<<<//
export const names = groups.map(item => {
    let array = catalog[item].map(val => {
        return val.name;
    });
    return array;
});


