const abominations = {
    name: 'Abominations',
    list: [
        {
            name: 'Desert Thing',
            pace: 2,
            size: 12,
            wind: 18,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 1, diceType: 8 },
                strength: { level: 1, diceType: 12, dicePlus: 4 },
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
            name: 'Walking Dead',
            pace: 8,
            size: 6,
            wind: 12,
            undead: true,
            woundsToKill: 'special',
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 3, diceType: 8 },
                quickness: { level: 2, diceType: 10 },
                vigor: { level: 2, diceType: 8 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 1, diceType: 6 },
                smarts: { level: 1, diceType: 6 },
                spirit: { level: 1, diceType: 4 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1,
                    },
                    dodge: {
                        level: 2,
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    shootin: {
                        level: 2,
                        concentrations: ['pistol', 'rifle', 'shotgun'],
                    },
                    sneak: {
                        level: 3,
                    },
                    swimmin: {
                        level: 1,
                    },
                },
                mental: {
                    overawe: {
                        level: 5
                    }
                }

            },
            attacks: [
                'Bite: STR',
                'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8',
            ],
            note: 'Maim head to kill',
        },
        {
            name: 'Veteran Walking Dead',
            pace: 8,
            size: 6,
            wind: 12,
            undead: true,
            woundsToKill: 'special',
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 10 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 2, diceType: 8 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 1, diceType: 12 },
                smarts: { level: 1, diceType: 6 },
                spirit: { level: 1, diceType: 4 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2,
                    },
                    dodge: {
                        level: 3,
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`]
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'rifle', 'shotgun'],
                    },
                    sneak: {
                        level: 3,
                    },
                    swimmin: {
                        level: 2,
                    },
                },
                mental: {
                    overawe: {
                        level: 5
                    },
                    ridicule: {
                        level: 1,
                    },
                    search: {
                        level: 3,
                    },
                }

            },
            attacks: [
                'Bite: STR',
                'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8',
            ],
            note: 'Maim head to kill',
        },
        {
            name: 'Slow Walking dead',
            pace: 8,
            size: 6,
            wind: 12,
            undead: true,
            woundsToKill: 'special',
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 3, diceType: 8 },
                quickness: { level: 2, diceType: 6 },
                vigor: { level: 2, diceType: 8 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 1, diceType: 12 },
                smarts: { level: 1, diceType: 6 },
                spirit: { level: 1, diceType: 4 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    shootin: {
                        level: 2,
                        concentrations: ['pistol', 'rifle', 'shotgun'],
                    },
                    sneak: {
                        level: 3,
                    },
                    swimmin: {
                        level: 1,
                    },
                },
                mental: {
                    overawe: {
                        level: 5
                    }
                }

            },
            attacks: [
                'Bite: STR',
                'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8',
            ],
            note: 'Maim head to kill',
        },
        {
            name: 'Werewolf',
            pace: 24,
            size: 6,
            wind: 16,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 2, diceType: 12, dicePlus: 4 },
                strength: { level: 2, diceType: 12 },
                quickness: { level: 4, diceType: 12, dicePlus: 4 },
                vigor: { level: 2, diceType: 10 },
                cognition: { level: 2, diceType: 12 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 3, diceType: 10 },
                smarts: { level: 1, diceType: 6 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 6,
                        concentrations: [`brawlin'`]
                    },
                    dodge: {
                        level: 4,
                    },
                    sneak: {
                        level: 3,
                    },
                },
                mental: {
                    overawe: {
                        level: 5
                    }
                }

            },
            attacks: [
                'Bite: STR, Claws: STR + 1d6',
                'Infection',
            ],
            note: 'Weakness: silver',
        },
        {
            name: 'Small Terrantula',
            pace: 6,
            size: 1,
            wind: 8,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 2, diceType: 10 },
                strength: { level: 1, diceType: 4, dicePlus: -2 },
                quickness: { level: 2, diceType: 8 },
                vigor: { level: 1, diceType: 4 },
                cognition: { level: 1, diceType: 4 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 1, diceType: 4 },
                smarts: { level: 1, diceType: 4 },
                spirit: { level: 1, diceType: 4 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 1,
                        concentrations: [`brawlin'`]
                    },
                    sneak: {
                        level: 3,
                    },
                    climbin: {
                        level: 2,
                    },
                },
                mental: {
                }
            },
            attacks: [
                'Bite: 1d4 + Poison',
                'Poison: Vigor TN 5 : Paralyze 1d6 hours',
            ],
            note: '',
        },
        {
            name: 'Large Terrantula',
            pace: 10,
            size: 6,
            wind: 12,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 2, diceType: 12 },
                strength: { level: 3, diceType: 8 },
                quickness: { level: 2, diceType: 10 },
                vigor: { level: 3, diceType: 6 },
                cognition: { level: 1, diceType: 6 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 2, diceType: 4 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`]
                    },
                    sneak: {
                        level: 4,
                    },
                    climbin: {
                        level: 2,
                    },
                },
                mental: {
                }
            },
            attacks: [
                'Bite: STR + Poison (Vigor TN9)',
                'Poison: 1d6. Fail: 2d6 to guts and location per round',
            ],
            note: '',
        },
        {
            name: 'Mutated Rat',
            pace: 16,
            size: 3,
            wind: 10,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 2, diceType: 6 },
                strength: { level: 1, diceType: 6 },
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
                        level: 4,
                        concentrations: [`brawlin'`]
                    },
                    sneak: {
                        level: 5,
                    },
                    climbin: {
                        level: 2,
                    },
                },
                mental: {
                    overawe: {
                        level: 5,
                    },
                }
            },
            attacks: [
                'Bite: STR + disease',
                'Disease: Vigor TN9: Ghost Rock Fever',
                'Terror 9 on first sight',
            ],
            note: '',
        },
        {
            name: 'Baby Rattler',
            pace: 20,
            size: 4,
            wind: 12,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 6 },
                strength: { level: 3, diceType: 6 },
                quickness: { level: 3, diceType: 6 },
                vigor: { level: 3, diceType: 6 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 2, diceType: 8 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    sneak: {
                        level: 7,
                    },
                },
                mental: {
                    overawe: {
                        level: 5,
                    },
                }
            },
            attacks: [
                'Bite: STR',
            ],
            note: '',
        },
        {
            name: 'Small Salt Rattler',
            pace: 6,
            size: 10,
            cannnotBeWinded: true,
            cannotBeStunned: true,
            wind: 99,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 6 },
                strength: { level: 6, diceType: 12, dicePlus: 10 },
                quickness: { level: 2, diceType: 6 },
                vigor: { level: 4, diceType: 12, dicePlus: 10 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 2, diceType: 10 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 1, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    sneak: {
                        level: 2,
                    },
                },
                mental: {
                    overawe: {
                        level: 2,
                    },
                }
            },
            attacks: [
                'Bite: STR + 2d20',
                'Surprise',
            ],
            note: 'Armor 1',
        },
        {
            name: 'Mojave Rattler',
            pace: 6,
            size: 16,
            cannnotBeWinded: true,
            cannotBeStunned: true,
            wind: 99,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 6 },
                strength: { level: 6, diceType: 12, dicePlus: 16 },
                quickness: { level: 2, diceType: 6 },
                vigor: { level: 4, diceType: 12, dicePlus: 16 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 2, diceType: 10 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 1, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    sneak: {
                        level: 2,
                    },
                },
                mental: {
                    overawe: {
                        level: 2,
                    },
                }
            },
            attacks: [
                'Bite: STR + 2d20',
                'Surprise',
            ],
            note: 'Armor 1',
        },
        {
            name: 'Catamount',
            pace: 18,
            size: 9,
            wind: 18,
            cannotBeStunned: true,
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 3, diceType: 12 },
                strength: { level: 4, diceType: 12 },
                quickness: { level: 2, diceType: 12, dicePlus: 2 },
                vigor: { level: 2, diceType: 10 },
                cognition: { level: 3, diceType: 10 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 2, diceType: 10 },
                smarts: { level: 3, diceType: 6 },
                spirit: { level: 3, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 5,
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`]
                    },
                    sneak: {
                        level: 6,
                    },
                    swimmin: {
                        level: 1,
                    },
                },
                mental: {
                    bluff: {
                        level: 3,
                    },
                    guts: {
                        level: 3,
                    },
                    overawe: {
                        level: 4,
                    },
                    search: {
                        level: 4,
                    },
                    trackin: {
                        level: 3,
                    },
                }
            },
            attacks: [
                'Bite: STR + 1d4, Claw: STR + 1d6',
                'Caterwaul',
                'Leaping',
            ],
        },
        {
            name: 'Specter',
            pace: 8,
            size: 6,
            traits: {
                deftness: { level: 3, diceType: 6 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 3, diceType: 10 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 3, diceType: 6 },
                mien: { level: 2, diceType: 8 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 2, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                },
                mental: {
                    overawe: {
                        level: 3,
                    },
                }
            },
            attacks: [
                'Fear Attack',
                'Incorporeal Attack',
            ],
        },
    ]
};

export default abominations;