

const NPCs = [
    {
        name: 'Typical Bandit',
        pace: 8,
        size: 6,
        wind: 12,
        traits: {
            deftness: {level: 2, diceType: 8},
            nimbleness: {level: 3, diceType: 6},
            strength: {level: 2, diceType: 8},
            quickness: {level: 2, diceType: 8},
            vigor: {level: 3, diceType: 6},
            cognition: {level: 2, diceType: 6},
            knowledge: {level: 1, diceType: 6},
            mien: {level: 3, diceType: 6},
            smarts: {level: 2, diceType: 6},
            spirit: {level: 1, diceType: 6}
        },
        aptitudes: {
            climbin: {
                level: 1
            },
            fightin: {
                level: 3,
                concentrations: ['knife']
            },
            dodge: {
                level: 2 
            },
            horseRidin: {
                level: 4
            },
            shootin: {
                level: 2,
                concentrations: ['pistol', 'shotgun', 'rifle']
            },
            sneak: {
                level: 3
            },
            gamblin: {
                level: 3
            },
            guts: {
                level: 3
            },
            overawe: {
                level: 2
            },
            scroungin: {
                level: 3
            },
            search: {
                level: 3
            },
            survival: {
                level: 4,
                concentrations: ['plains']
            }

        }

        
    }
]

export default NPCs