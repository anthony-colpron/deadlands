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
            pace: 12,
            size: 6,
            wind: 18,
            traits: {
                deftness: { level: 3, diceType: 10 },
                nimbleness: { level: 3, diceType: 12 },
                strength: { level: 3, diceType: 8 },
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
                        level: 5,
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
                        level: 3
                    },
                    guts: {
                        level: 4
                    },
                    overawe: {
                        level: 5
                    },
                    ridicule: {
                        level: 5
                    },
                    search: {
                        level: 4
                    },
                    streetwise: {
                        level: 3,
                    },
                }

            },
            attacks: ['Bowie knife: STR + 1d6', 'Saber: STR + 2d8', 'DA Peace Maker: 3d6'],
            notes: ''
        },
        {
            name: 'Killer Carl Bivens',
            pace: 10,
            size: 6,
            wind: 16,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 3, diceType: 10 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 3, diceType: 8 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 3, diceType: 6 },
                mien: { level: 3, diceType: 8 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 2, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 4,
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`, 'knife']
                    },
                    dodge: {
                        level: 3
                    },
                    shootin: {
                        level: 3,
                        concentrations: ['pistol']
                    },
                    sneak: {
                        level: 3,
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Steel sky']
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    ridicule: {
                        level: 2
                    },
                    search: {
                        level: 2
                    },
                    streetwise: {
                        level: 3,
                    },
                }

            },
            attacks: ['Bowie knife: STR + 1d6', 'DA Mormon pistol: 3d6'],
            notes: ''
        },
        {
            name: 'Lizzy The Pendulum Pitts',
            pace: 10,
            size: 6,
            wind: 16,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 3, diceType: 10 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 3, diceType: 8 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 3, diceType: 6 },
                mien: { level: 3, diceType: 8 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 2, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 4,
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`, 'knife']
                    },
                    dodge: {
                        level: 3
                    },
                    shootin: {
                        level: 3,
                        concentrations: ['pistol']
                    },
                    sneak: {
                        level: 3,
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Steel sky']
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    ridicule: {
                        level: 2
                    },
                    search: {
                        level: 2
                    },
                    streetwise: {
                        level: 3,
                    },
                }

            },
            attacks: ['Bowie knife: STR + 1d6', 'DA Mormon pistol: 3d6'],
            notes: ''
        },
        {
            name: 'Swinger Fan',
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
                        level: 2
                    },
                    fightin: {
                        level: 3,
                        concentrations: ['knife', 'brawlin']
                    },
                    dodge: {
                        level: 2
                    },
                    shootin: {
                        level: 1,
                        concentrations: ['pistol']
                    },
                    sneak: {
                        level: 3
                    }
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Steel Sky']
                    },
                    gamblin: {
                        level: 3
                    },
                    guts: {
                        level: 2
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
                }

            },
            attacks: ['No weapon', 'Knife: STR + 1d4', 'Broken Bottle: STR']
        },
        {
            name: 'Giant Rat',
            pace: 16,
            size: 3,
            wind: 10,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 6 },
                strength: { level: 1, diceType: 4 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 3, diceType: 6 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 2, diceType: 4 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 2, diceType: 4 },
                spirit: { level: 1, diceType: 4 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 3,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 5
                    }
                },
                mental: {
                    overawe: {
                        level: 3
                    },
                }

            },
            attacks: ['Bite: STR + Disease']
        },
        {
            name: 'Young Lurker',
            pace: 8,
            size: 3,
            singleAction: true,
            wind: 12,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 8 },
                strength: { level: 1, diceType: 6 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 3, diceType: 6 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 2, diceType: 4 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 2, diceType: 4 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 5
                    },
                    fightin: {
                        level: 3,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 5
                    }
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Steel Sky']
                    },
                    overawe: {
                        level: 2
                    },
                    trackin: {
                        level: 2,
                    }
                }

            },
            attacks: ['Bite: STR + 1d6', 'Claw: STR + 1d4']
        },
        {
            name: 'Lurker',
            pace: 10,
            size: 6,
            wind: 16,
            singleAction: true,
            cannotBeStunned: true,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 12 },
                strength: { level: 2, diceType: 6 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 3, diceType: 10 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 2, diceType: 4 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 10
                    },
                    fightin: {
                        level: 5,
                        concentrations: ['brawlin']
                    },
                    shootin: {
                        level: 5,
                        concentrations: ['Web']
                    },
                    sneak: {
                        level: 7
                    }
                },
                mental: {
                    areaKnowledge: {
                        level: 4,
                        concentrations: ['Steel Sky']
                    },
                    overawe: {
                        level: 3
                    },
                    trackin: {
                        level: 3,
                    }
                }

            },
            attacks: ['Claws: STR + 1d6 - x4', '1st Web: -4 Nimb, Quick, Deft, Pace.', '2nd Web: Book effect']
        },
    ]
};

export default saltLakeCity;