// parts.js (src/components/App/parts)

//>>>>> PARTS CATALOG <<<<<//
export const partCatalog = {
    "Rotary Knobs": [
        {
            name: "OKW Tuning Knob - A1412441",
            partnum: "A1412441",
            size: {
                rBot: 6,
                rTop: 6,
                h: 7.2
            },
            drill: {
                d: 4,
                tap: "M4 x 0.7"
            },
            mesh: {
                color: "#c0c0c0",
                metal: 0.5,
                rough: 1.0,
            },
            constraint: {
                rClear: 8,
                rEdge: 8
            }
        },
        {
            name: "OKW Tuning Knob - A1324260",
            partnum: "A1324260",
            size: {
                rBot: 12.15,
                rTop: 12.15,
                h: 12
            },
            drill: {
                d: 6,
                tap: "M6 x 1"
            },
            mesh: {
                color: "#050505",
                metal: 0.5,
                rough: 1.0,
            },
            constraint: {
                rClear: 13,
                rEdge: 13,
            }
        }        
    ],
    "Sliders": [
        {
            name: "Type 1 Slider",
            partnum: "00001",
            size: {
                rBot: 4,
                rTop: 4,
                h: 12,
                w: 50
            },
            drill: {
                d: 4,
                tap: "M4 x 0.7"
            },
            mesh: {
                color: "#c0c0c0",
                metal: 0.5,
                rough: 1.0,
            },
            constraint: {
                rClear: 8,
                rEdge: 8
            }
        },
        {
            name: "Type 2 Slider",
            partnum: "00002",
            size: {
                rBot: 6,
                rTop: 6,
                h: 14,
                w: 75
            },
            drill: {
                d: 6,
                tap: "M6 x 1"
            },
            mesh: {
                color: "#c0c0c0",
                metal: 0.5,
                rough: 1.0,
            },
            constraint: {
                rClear: 10,
                rEdge: 10
            }
        },
    ]
};

//>>>>> PART GROUP LIST <<<<<//
export const partGroups = Object.keys(partCatalog);

//>>>>> DATA OBJECT REDUCED TO ARRAY OF ARRAYS FOR MENUS <<<<<//
export const partNames = partGroups.map(item => {
    let array = partCatalog[item].map(val => {
        return val.name;
    });
    return array;
});


