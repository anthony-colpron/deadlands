const legends = {
    name: 'Legends',
    list: [
        {
            name: 'El Diablo Negro',
            pace: 28,
            size: 11,
            wind: 16,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 12, dicePlus: 2 },
                strength: { level: 4, diceType: 12, dicePlus: 8 },
                quickness: { level: 3, diceType: 12 },
                vigor: { level: 3, diceType: 12, dicePlus: 2 },
                cognition: { level: 3, diceType: 10 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 2, diceType: 10 },
                smarts: { level: 3, diceType: 8 },
                spirit: { level: 2, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`]
                    },
                    dodge: {
                        level: 2
                    },
                    sneak: {
                        level: 3
                    },
                    swimmin: {
                        level: 4
                    }
                },
                mental: {
                    overawe: {
                        level: 4
                    },
                    search: {
                        level: 4
                    },
                    trackin: {
                        level: 3
                    }
                }

            },
            attacks: [
                'Hooves: STR+2d8, AP1',
                'Bite: STR+1d4',
                'Whinny: all animals fail guts check and flee',
                'Minimum 5 on surprise check. +2 Search and Tracking'
            ],
            note: 'Armor: 2'
        },
        {
            name: 'El Diablo Rojo',
            pace: 8,
            size: 6,
            wind: 18,
            thickSkinned: true,
            traits: {
                deftness: { level: 2, diceType: 10 },
                nimbleness: { level: 1, diceType: 8 },
                strength: { level: 3, diceType: 6 },
                quickness: { level: 4, diceType: 10 },
                vigor: { level: 3, diceType: 8 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 1, diceType: 8 },
                smarts: { level: 1, diceType: 8 },
                spirit: { level: 2, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 5,
                        concentrations: [`knife`, 'tomahawk']
                    },
                    horseRidin: {
                        level: 4
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['rifle']
                    },
                    sneak: {
                        level: 7
                    },
                    bow: {
                        level: 4
                    },
                    swimmin: {
                        level: 2,
                    },
                    filchin: {
                        level: 3
                    },
                    throwin: {
                        level: 4,
                        concentrations: ['balanced']
                    }
                },
                mental: {
                    academia: {
                        level: 4,
                        concentrations: ['occult']
                    },
                    areaKnowledge: {
                        level: 6,
                        concentrations: ['northern Mexico', 'western Confederacy']
                    },
                    faith: {
                        level: 5,
                        concentrations: ['black magic']
                    },
                    overawe: {
                        level: 5
                    },
                    scrutinize: {
                        level: 3
                    },
                    search: {
                        level: 4
                    },
                    survival: {
                        level: 6,
                        concentrations: ['desert', 'mountain']
                    },
                    trackin: {
                        level: 5
                    }
                }
            },
            attacks: [
                'Winchester 76: 4d8+2',
                'Tomahawk: STR+2d6',
                `Cloak o' evil 3 (-6 to hit) 10 rounds`,
                `Dark protection 2 (2 Armor) 10 rounds`,
                `Stun 2 (poisoned knife)`,
                `Forewarnin' 2`,
                `Scrye 3`,
                `Stormcall 2 (sandstorm)`
            ],
            note: 'Armor: -2 (Light armor). +2 jet stun. Level headed.'
        },
    ]
};

export default legends;