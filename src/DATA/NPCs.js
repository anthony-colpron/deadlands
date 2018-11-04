

const NPCs = [
    {
        name: 'Typical Bandit',
        pace: 8,
        size: 6,
        wind: 12,
        traits: {
            deftness: { level: 2, diceType: 8 },
            nimbleness: { level: 3, diceType: 6 },
            strength: { level: 2, diceType: 8 },
            quickness: { level: 2, diceType: 8 },
            vigor: { level: 3, diceType: 6 },
            cognition: { level: 2, diceType: 6 },
            knowledge: { level: 1, diceType: 6 },
            mien: { level: 3, diceType: 6 },
            smarts: { level: 2, diceType: 6 },
            spirit: { level: 1, diceType: 6 }
        },
        aptitudes: {
            corporeal: {
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
                }
            },
            mental: {
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

        },
        attacks: ['No weapon', 'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8']
    },
    {
        name: 'Jaguar Knight',
        pace: 8,
        size: 6,
        wind: 16,
        traits: {
            deftness: { level: 1, diceType: 8 },
            nimbleness: { level: 3, diceType: 8 },
            strength: { level: 2, diceType: 8 },
            quickness: { level: 2, diceType: 10 },
            vigor: { level: 3, diceType: 10 },
            cognition: { level: 3, diceType: 8 },
            knowledge: { level: 2, diceType: 6 },
            mien: { level: 1, diceType: 8 },
            smarts: { level: 3, diceType: 6 },
            spirit: { level: 3, diceType: 6 }
        },
        aptitudes: {
            corporeal: {
                fightin: {
                    level: 5,
                    concentrations: ['sword', `brawlin'`]
                },
                dodge: {
                    level: 2
                },
                sneak: {
                    level: 4
                }
            },
            mental: {
                guts: {
                    level: 4
                },
                scrutinize: {
                    level: 2
                },
                search: {
                    level: 3
                }
            }

        },
        attacks: ['No weapon', 'Macault: STR+2d6'],
        note: 'Light armor: -4'
    },
    {
        name: 'Alquezar',
        pace: 8,
        size: 6,
        wind: 22,
        traits: {
            deftness: { level: 2, diceType: 6 },
            nimbleness: { level: 2, diceType: 8 },
            strength: { level: 3, diceType: 6 },
            quickness: { level: 3, diceType: 8 },
            vigor: { level: 4, diceType: 10 },
            cognition: { level: 4, diceType: 8 },
            knowledge: { level: 1, diceType: 8 },
            mien: { level: 2, diceType: 10 },
            smarts: { level: 3, diceType: 8 },
            spirit: { level: 2, diceType: 12 }
        },
        aptitudes: {
            corporeal: {
                fightin: {
                    level: 6,
                    concentrations: ['knife']
                },
                throwin: {
                    level: 4,
                    concentrations: [`bolts o' doom`]
                },
                sneak: {
                    level: 5
                }
            },
            mental: {
                guts: {
                    level: 3
                },
                overawe: {
                    level: 4
                },
                scrutinize: {
                    level: 2
                },
                academia: {
                    level: 5,
                    concentrations: ['Aztec history']
                },
                faith: {
                    level: 5,
                    concentrations: ['black magic']
                }
            }
        },
        attacks: [`Bolts 'o doom : 4d8, Range: 5`, `Cloak o' evil: -8 to hit for 10 rounds`, 'Stun : TN7 1 hour, Range 5 MAX']
    },
    {
        name: 'Maze dragon',
        pace: 20,
        size: 24,
        wind: 99,
        cannotBeWinded: true,
        traits: {
            deftness: { level: 1, diceType: 4 },
            nimbleness: { level: 2, diceType: 10 },
            strength: { level: 5, diceType: 12, dicePlus: 4 },
            quickness: { level: 1, diceType: 10 },
            vigor: { level: 2, diceType: 12, dicePlus: 4 },
            cognition: { level: 2, diceType: 10 },
            knowledge: { level: 1, diceType: 4 },
            mien: { level: 1, diceType: 12 },
            smarts: { level: 1, diceType: 6 },
            spirit: { level: 1, diceType: 4 }
        },
        aptitudes: {
            corporeal: {
                fightin: {
                    level: 4,
                    concentrations: [`brawlin'`]
                },
                swimmin: {
                    level: 5
                },
                sneak: {
                    level: 5
                }
            },
            mental: {}

        },
        attacks: ['Teeth: STR+2d12', 'Swallow: on 2 raises. 4d6 to guts/round'],
        note: 'Armor: 1'
    },
    {
        name: 'Guardian Angel',
        pace: 8,
        size: 6,
        wind: 12,
        traits: {
            deftness: { level: 2, diceType: 6 },
            nimbleness: { level: 2, diceType: 8 },
            strength: { level: 2, diceType: 8 },
            quickness: { level: 2, diceType: 6 },
            vigor: { level: 2, diceType: 6 },
            cognition: { level: 2, diceType: 8 },
            knowledge: { level: 1, diceType: 6 },
            mien: { level: 1, diceType: 8 },
            smarts: { level: 2, diceType: 6 },
            spirit: { level: 2, diceType: 6 }
        },
        aptitudes: {
            corporeal: {
                fightin: {
                    level: 3,
                    concentrations: [`brawlin'`]
                },
                shootin: {
                    level: 2,
                    concentrations: ['pistol', 'shotgun', 'rifle']
                },
                sneak: {
                    level: 2
                }
            },
            mental: {
                guts: {
                    level: 3
                },
                overawe: {
                    level: 2
                },
                search: {
                    level: 3
                },
                streetwise: {
                    level: 3
                },
                faith: {
                    level: 4,
                    concentrations: ['Church of Lost Angels']
                }
            }

        },
        attacks: ['No weapon', 'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8']
    },
    {
        name: 'Avenging Angel',
        pace: 6,
        size: 6,
        wind: 16,
        traits: {
            deftness: { level: 3, diceType: 8 },
            nimbleness: { level: 3, diceType: 6 },
            strength: { level: 3, diceType: 6 },
            quickness: { level: 2, diceType: 8 },
            vigor: { level: 3, diceType: 8 },
            cognition: { level: 4, diceType: 8 },
            knowledge: { level: 3, diceType: 6 },
            mien: { level: 3, diceType: 8 },
            smarts: { level: 4, diceType: 6 },
            spirit: { level: 3, diceType: 8 }
        },
        aptitudes: {
            corporeal: {
                fightin: {
                    level: 4,
                    concentrations: ['sword']
                },
                dodge: {
                    level: 4
                },
                horseRidin: {
                    level: 3
                },
                shootin: {
                    level: 4,
                    concentrations: ['pistol']
                },
                throwin: {
                    level: 4,
                    concentrations: [`bolts o' doom`]
                }
            },
            mental: {
                academia: {
                    level: 3,
                    concentrations: ['occult']
                },
                guts: {
                    level: 4
                },
                overawe: {
                    level: 4
                },
                scrutinize: {
                    level: 3
                },
                search: {
                    level: 4
                },
                faith: {
                    level: 4,
                    concentrations: ['Church of Lost Angels']
                }
            }

        },
        attacks: ['No weapon', 'Sword: STR+2d8', 'Pistol: 3d6', `Bolts o' doom: 4d10, Range: 10`, 'Dark Protection: +3 armor, 8 rounds'],
        note: 'The voice (threatening) +2 overawe'
    },
    {
        name: 'Hog Dunston',
        pace: 8,
        size: 6,
        wind: 14,
        traits: {
            deftness: { level: 3, diceType: 10 },
            nimbleness: { level: 3, diceType: 8 },
            strength: { level: 2, diceType: 8 },
            quickness: { level: 2, diceType: 10 },
            vigor: { level: 3, diceType: 8 },
            cognition: { level: 2, diceType: 8 },
            knowledge: { level: 3, diceType: 6 },
            mien: { level: 4, diceType: 12 },
            smarts: { level: 2, diceType: 8 },
            spirit: { level: 2, diceType: 6 }
        },
        aptitudes: {
            corporeal: {
                climbin: {
                    level: 1
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
                    concentrations: ['pistol', 'shotgun', 'rifle']
                },
                throwin: {
                    level: 3,
                    concentrations: ['balanced', 'unbalanced']
                }
            },
            mental: {
                academia: {
                    level: 1,
                    concentrations: ['occult']
                },
                guts: {
                    level: 3
                },
                overawe: {
                    level: 5
                },
                persuasion: {
                    level: 3
                },
                scrutinize: {
                    level: 2
                },
                search: {
                    level: 3
                },
                streetwise: {
                    level: 2
                },
                professional: {
                    level: 3,
                    concentrations: ['law']
                }
            }

        },
        attacks: ['No weapon', 'Pistol: 3d6', 'Rifle: 4d8']
    },
    {
        name: 'Man of the grid',
        pace: 8,
        size: 6,
        wind: 14,
        traits: {
            deftness: { level: 2, diceType: 8 },
            nimbleness: { level: 3, diceType: 6 },
            strength: { level: 2, diceType: 8 },
            quickness: { level: 2, diceType: 8 },
            vigor: { level: 3, diceType: 8 },
            cognition: { level: 2, diceType: 6 },
            knowledge: { level: 1, diceType: 6 },
            mien: { level: 3, diceType: 6 },
            smarts: { level: 2, diceType: 6 },
            spirit: { level: 1, diceType: 6 }
        },
        aptitudes: {
            corporeal: {
                climbin: {
                    level: 1
                },
                fightin: {
                    level: 3,
                    concentrations: [`brawlin'`]
                },
                dodge: {
                    level: 2
                },
                horseRidin: {
                    level: 2
                },
                shootin: {
                    level: 4,
                    concentrations: ['pistol', 'shotgun', 'rifle']
                },
                sneak: {
                    level: 3
                }
            },
            mental: {
                guts: {
                    level: 3
                },
                overawe: {
                    level: 2
                },
                scrutinize: {
                    level: 2
                },
                search: {
                    level: 3
                },
                streetwise: {
                    level: 2
                }
            }

        },
        attacks: ['No weapon', 'Pistol: 3d6', 'Rifle: 4d8']
    },
    {
        name: 'Cerberus',
        pace: 8,
        size: 6,
        wind: 99,
        cannotBeWinded: true,
        cannotBeStunned: true,
        undead: true,
        woundsToKill: 'special',
        traits: {
            deftness: { level: 1, diceType: 4 },
            nimbleness: { level: 3, diceType: 8 },
            strength: { level: 3, diceType: 10 },
            quickness: { level: 3, diceType: 10 },
            vigor: { level: 2, diceType: 12 },
            cognition: { level: 3, diceType: 4 },
            knowledge: { level: 2, diceType: 6 },
            mien: { level: 2, diceType: 10 },
            smarts: { level: 3, diceType: 6 },
            spirit: { level: 2, diceType: 6 }
        },
        aptitudes: {
            corporeal: {
                fightin: {
                    level: 4,
                    concentrations: [`brawlin'`]
                },
                sneak: {
                    level: 3
                }
            },
            mental: {
                overawe: {
                    level: 4
                },
                search: {
                    level: 3
                },
                scrutinize: {
                    level: 3
                },
                trackin: {
                    level: 6
                },
                guts: {
                    level: 4
                }
            }

        },
        attacks: [
            'Bite: STR+1d8 x3 attacks',
            'Knockdown: in addition to bites. See book.'
        ]
    },
    {
        name: 'Pit Glom',
        pace: 8,
        size: 10,
        wind: 99,
        cannotBeWinded: true,
        cannotBeStunned: true,
        undead: true,
        woundsToKill: 'special',
        traits: {
            deftness: { level: 2, diceType: 6 },
            nimbleness: { level: 2, diceType: 8 },
            strength: { level: 2, diceType: 12, dicePlus: 2},
            quickness: { level: 2, diceType: 10 },
            vigor: { level: 2, diceType: 12, dicePlus: 2 },
            cognition: { level: 2, diceType: 10 },
            knowledge: { level: 1, diceType: 6 },
            mien: { level: 1, diceType: 12 },
            smarts: { level: 1, diceType: 6 },
            spirit: { level: 1, diceType: 8 }
        },
        aptitudes: {
            corporeal: {
                fightin: {
                    level: 6,
                    concentrations: [`brawlin'`, 'club']
                },
                sneak: {
                    level: 4
                }
            },
            mental: {
                overawe: {
                    level: 5
                }
            }

        },
        attacks: [
            'Claw: STR+1d6 x3 attacks',
            '**Max 2 attacks on 1 opponent'
        ],
        note: '10 wounds to guts to kill'
    },
    {
        name: 'Desert Thing',
        pace: 2,
        size: 12,
        wind: 18,
        traits: {
            deftness: { level: 3, diceType: 8 },
            nimbleness: { level: 1, diceType: 8 },
            strength: { level: 1, diceType: 12, dicePlus: 4},
            quickness: { level: 3, diceType: 10 },
            vigor: { level: 2, diceType: 12, dicePlus: 2 },
            cognition: { level: 2, diceType: 10 },
            knowledge: { level: 1, diceType: 4 },
            mien: { level: 1, diceType: 12 },
            smarts: { level: 1, diceType: 6 },
            spirit: { level: 1, diceType: 4 }
        },
        aptitudes: {
            corporeal: {
                fightin: {
                    level: 4,
                    concentrations: [`brawlin'`]
                },
                sneak: {
                    level: 4
                }
            },
            mental: {}
        },
        attacks: [
            'Bite: STR+1d10 x3 attacks',
            'Tentacles: STR, may attack with each of its 8 tentacles'
        ],
        note: 'Armor: Body 2, Tentacles 1. 8 feet diameter core.'
    },
    {
        name: 'El Diablo Negro',
        pace: 28,
        size: 11,
        wind: 16,
        traits: {
            deftness: { level: 1, diceType: 4 },
            nimbleness: { level: 3, diceType: 12,dicePlus: 2 },
            strength: { level: 4, diceType: 12, dicePlus: 8},
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
            strength: { level: 3, diceType: 6},
            quickness: { level: 4, diceType: 10 },
            vigor: { level: 3, diceType: 8},
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
            `Cloak o' evil 3 (-6 to hit)`,
            `Dark protection 2 (2 Armor)`,
            `Stun 2 (poisoned knife)`,
            `Forewarnin' 2`,
            `Scrye 3`,
            `Stormcall 2 (sandstorm)`
        ],
        note: 'Armor: -2 (Light armor). Level headed.'
    },
]

export default NPCs