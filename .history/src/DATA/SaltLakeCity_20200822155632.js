const saltLakeCity = {
    name: 'Salt Lake City',
    list: [
        {
            name: 'Bolton Trash',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 3, diceType: 8 },
                strength: { level: 2, diceType: 12, dicePlus: 4 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 3, diceType: 10 },
                cognition: { level: 3, diceType: 6 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 3, diceType: 6 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`, 'spear']
                    },
                    dodge: {
                        level: 3
                    },
                    shootin: {
                        level: 3,
                        concentrations: ['pistol']
                    },
                    sneak: {
                        level: 2,
                    },
                },
                mental: {
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    search: {
                        level: 1
                    },
                    streetwise: {
                        level: 1,
                    },
                }

            },
            attacks: ['Piston Arm: Rel 18', 'Spear: STR + 2d6', 'Chest brace: Armor 3', 'Abdo armor: 2' ],
            notes: ''
        },
        {
            name: 'Keith Trash',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 3, diceType: 10 },
                quickness: { level: 3, diceType: 6 },
                vigor: { level: 3, diceType: 10 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 3, diceType: 6 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`, 'buzzsaw']
                    },
                    dodge: {
                        level: 2
                    },
                    shootin: {
                        level: 1,
                        concentrations: ['pistol']
                    },
                    sneak: {
                        level: 1,
                    },
                },
                mental: {
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    search: {
                        level: 1
                    },
                    streetwise: {
                        level: 1,
                    },
                }

            },
            attacks: ['No weapon', 'Buzzsaw: STR + 3d8 Rel 18'],
            notes: ''
        },
        {
            name: 'Zeppy Trash',
            pace: 10,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 2, diceType: 10 },
                strength: { level: 3, diceType: 12, dicePlus: 2 },
                quickness: { level: 3, diceType: 6 },
                vigor: { level: 3, diceType: 8 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 3, diceType: 6 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`, 'spiked club']
                    },
                    dodge: {
                        level: 2
                    },
                    shootin: {
                        level: 1,
                        concentrations: ['pistol']
                    },
                    sneak: {
                        level: 1,
                    },
                },
                mental: {
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    search: {
                        level: 1
                    },
                    streetwise: {
                        level: 1,
                    },
                }

            },
            attacks: ['Piston Arm: Rel 18', 'Spiked club: STR + 2d6', 'Double motivatored Legs. Rel 17'],
            notes: ''
        },
        {
            name: 'Bounty Hunter Leader',
            pace: 10,
            size: 6,
            wind: 12,
            traits: {
                deftness: { level: 2, diceType: 12 },
                nimbleness: { level: 2, diceType: 10 },
                strength: { level: 3, diceType: 8 },
                quickness: { level: 4, diceType: 8 },
                vigor: { level: 4, diceType: 6 },
                cognition: { level: 1, diceType: 8 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 3, diceType: 6 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 3, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`, 'knife']
                    },
                    dodge: {
                        level: 2
                    },
                    horseRidin: {
                        level: 3
                    },
                    quickDraw: {
                        level: 2,
                        concentrations: ['pistol'],
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'automatics']
                    },
                    sneak: {
                        level: 4
                    },
                },
                mental: {
                    bluff: {
                        level: 3
                    },
                    guts: {
                        level: 3,
                    },
                    overawe: {
                        level: 4
                    },
                    leadership: {
                        level: 3
                    },
                    search: {
                        level: 2
                    },
                    streetwise: {
                        level: 4,
                    },
                    survival: {
                        level: 3,
                        concentrations: ['desert'],
                    },
                }

            },
            attacks: ['Gatling Pistol 3d6 *', 'DA Peacemaker: 3d6'],
            note: '',
        },
        {
            name: 'Bounty Hunter',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 3, diceType: 8 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 3, diceType: 6 },
                vigor: { level: 3, diceType: 8 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 3, diceType: 6 },
                mien: { level: 3, diceType: 6 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    dodge: {
                        level: 3
                    },
                    horseRidin: {
                        level: 3
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['rifle', 'pistol']
                    },
                    sneak: {
                        level: 3,
                    },
                },
                mental: {
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    persuasion: {
                        level: 2
                    },
                    search: {
                        level: 3
                    },
                    streetwise: {
                        level: 3,
                    },
                }

            },
            attacks: ['DA Peace Maker: 3d6'],
            notes: ''
        },
        {
            name: 'Slicer Muldoon',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 3, diceType: 10 },
                nimbleness: { level: 3, diceType: 12 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 3, diceType: 12 },
                vigor: { level: 3, diceType: 10 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 3, diceType: 6 },
                mien: { level: 3, diceType: 10 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 2, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 5,
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`, 'knife', 'sword']
                    },
                    dodge: {
                        level: 3
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol']
                    },
                    throwin: {
                        level: 4,
                        concentrations: ['balanced', 'unbalanced']
                    },
                    sneak: {
                        level: 4,
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 4,
                        concentrations: ['Steel sky']
                    },
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    persuasion: {
                        level: 2
                    },
                    search: {
                        level: 3
                    },
                    streetwise: {
                        level: 3,
                    },
                }

            },
            attacks: ['DA Peace Maker: 3d6'],
            notes: ''
        },
    ]
};

export default saltLakeCity;