const ShanFan = {
    name: 'Shan Fan',
    list: [
        {
            name: 'Triad rascal',
            pace: 8,
            size: 6,
            wind: 12,
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 2, diceType: 8 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 1, diceType: 10 },
                smarts: { level: 1, diceType: 4 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 3,
                        concentrations: ['wing chun']
                    },
                    sneak: {
                        level: 2
                    },
                    shootin: {
                        level: 3,
                        concentrations: ['pistol', 'rifle', 'shotgun']
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 3,
                        concentrations: ['Shan Fan'],
                    },
                    bluff: {
                        level: 2,
                    },
                    gamblin: {
                        level: 3,
                    },
                    guts: {
                        level: 2
                    },
                    languages: {
                        level: 2,
                        concentrations: ['english', 'cantonese'],
                    },
                    ridicule: {
                        level: 2,
                    },
                    streetwise: {
                        level: 4,
                        concentrations: ['Chinese triads'],
                    }
                }

            },
            attacks: ['No weapon: STR + 1d6', 'Pistol: 3d6', 'Shotgun: *d6'],
        },
        {
            name: 'Long haired Tony',
            pace: 8,
            size: 6,
            wind: 12,
            traits: {
                deftness: { level: 4, diceType: 10 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 3, diceType: 6 },
                quickness: { level: 3, diceType: 12 },
                vigor: { level: 2, diceType: 8 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 4, diceType: 8 },
                smarts: { level: 2, diceType: 12 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: ['brawlin']
                    },
                    horseRidin: {
                        level: 2
                    },
                    quickDraw: {
                        level: 4,
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'shotgun']
                    },
                    speedLoad: {
                        level: 4,
                    }
                },
                mental: {
                    areaKnowledge: {
                        level: 4,
                        concentrations: ['Shan Fan'],
                    },
                    search: {
                        level: 2,
                    },
                    guts: {
                        level: 4,
                    },
                    scrutinize: {
                        level: 2,
                    },
                    overawe: {
                        level: 4,
                    },
                    streetwise: {
                        level: 3,
                        concentrations: ['Shan Fan'],
                    }
                }

            },
            attacks: ['No weapon', 'Pistol: 3d6', 'Shotgun: *d6'],
        },
        {
            name: 'Jihua',
            pace: 12,
            size: 6,
            wind: 18,
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 12 },
                strength: { level: 4, diceType: 8 },
                quickness: { level: 4, diceType: 10 },
                vigor: { level: 2, diceType: 10 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 3, diceType: 6 },
                spirit: { level: 1, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: ['wing chun']
                    },
                    sneak: {
                        level: 2
                    },
                    bow: {
                        level: 2,
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Shan Fan'],
                    },
                    guts: {
                        level: 2
                    },
                    languages: {
                        level: 2,
                        concentrations: ['english', 'cantonese'],
                    },
                    overawe: {
                        level: 2,
                    },
                    medicine: {
                        level: 2,
                        concentrations: ['Chinese traditional'],
                    },
                    chi: {
                        level: 4,
                    },
                    meditation: {
                        level: 2,
                    },
                }

            },
            attacks: ['Fury fans the flames', 'Hell Thundercalp', 'Ten-foot punch', 'Closing the gate',
        'Disarm', 'Get up', 'Flying kick', 'Spinning kick'],
            notes: 'Strain: 10',
        },
        {
            name: 'Sun Xua',
            pace: 12,
            size: 6,
            wind: 18,
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 12 },
                strength: { level: 4, diceType: 8 },
                quickness: { level: 4, diceType: 10 },
                vigor: { level: 2, diceType: 10 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 3, diceType: 6 },
                spirit: { level: 1, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: ['wing chun']
                    },
                    sneak: {
                        level: 2
                    },
                    bow: {
                        level: 2,
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Shan Fan'],
                    },
                    guts: {
                        level: 2
                    },
                    languages: {
                        level: 2,
                        concentrations: ['english', 'cantonese'],
                    },
                    overawe: {
                        level: 2,
                    },
                    medicine: {
                        level: 2,
                        concentrations: ['Chinese traditional'],
                    },
                    chi: {
                        level: 4,
                    },
                    meditation: {
                        level: 2,
                    },
                }

            },
            attacks: ['Fury fans the flames', 'Hell Thundercalp', 'Ten-foot punch', 'Closing the gate',
        'Disarm', 'Get up', 'Flying kick', 'Spinning kick'],
            notes: 'Strain: 10',
        },
        {
            name: 'Wang Reng',
            pace: 8,
            size: 6,
            wind: 20,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 3, diceType: 6 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 4, diceType: 10 },
                cognition: { level: 4, diceType: 8 },
                knowledge: { level: 1, diceType: 8 },
                mien: { level: 2, diceType: 10 },
                smarts: { level: 3, diceType: 8 },
                spirit: { level: 2, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: ['wing chun']
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
                    ridicule: {
                        level: 4
                    },
                    scrutinize: {
                        level: 2
                    },
                    medicine: {
                        level: 3,
                        concentrations: ['Chinese traditional']
                    },
                    academia: {
                        level: 2,
                        concentrations: ['Chinese history']
                    },
                    faith: {
                        level: 5,
                        concentrations: ['black magic']
                    }
                }
            },
            attacks: [`Bolts 'o doom : 4d10, Range: 10`, `Cloak o' evil: -6 to hit for 10 rounds` ]
        },
        {
            name: 'Chinese Ogre',
            pace: 8,
            size: 8,
            wind: 20,
            traits: {
                deftness: { level: 2, diceType: 4 },
                nimbleness: { level: 3, diceType: 10 },
                strength: { level: 4, diceType: 12, dicePlus: 2 },
                quickness: { level: 1, diceType: 8 },
                vigor: { level: 3, diceType: 10 },
                cognition: { level: 1, diceType: 6 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 1, diceType: 6 },
                smarts: { level: 1, diceType: 6 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: ['brawlin', 'ogre weapon']
                    },
                },
                mental: {
                    guts: {
                        level: 6
                    },
                    overawe: {
                        level: 5
                    },
                }
            },
            attacks: [`No weapon: STR`, `Giant sword: STR + 4d6`]
        },
        {
            name: 'Niu Mowang Possession',
            pace: 10,
            size: 12,
            wind: 99,
            cannotBeWinded: true,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 3, diceType: 10 },
                strength: { level: 5, diceType: 12, dicePlus: 4 },
                quickness: { level: 3, diceType: 12 },
                vigor: { level: 4, diceType: 12, dicePlus: 2 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 2, diceType: 8 },
                mien: { level: 3, diceType: 12, dicePlus: 2 },
                smarts: { level: 2, diceType: 10 },
                spirit: { level: 3, diceType: 12 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 6,
                        concentrations: ['axe', 'brawlin']
                    },
                    shootin: {
                        level: 4,
                        concentrations: [`Fiery Breath`]
                    },
                },
                mental: {
                    guts: {
                        level: 5
                    },
                    overawe: {
                        level: 6
                    },
                    ridicule: {
                        level: 4,
                    },
                    scrutinize: {
                        level: 4,
                    },
                    persuasion: {
                        level: 4,
                    },
                    academia: {
                        level: 5,
                        concentrations: ['Occult']
                    },
                }
            },
            attacks: [`Bite: STR + 1d4`, `Axe: STR + 2d8`, 'Hoof: STR', 'Foery Breath: 3d10', 'Flaming Aura: Vigor TN 9 Wind',
        'Immunity Fire/Heat', 'Immunity Normal Attacks', 'Weakness: Holy'],
        notes: 'Armor: 2. No +2 to hit location (too tall)',
        },
        {
            name: 'Sun Wukong Possession',
            pace: 12,
            size: 6,
            wind: 24,
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 12 },
                strength: { level: 4, diceType: 12 },
                quickness: { level: 4, diceType: 12 },
                vigor: { level: 2, diceType: 12, dicePlus: 8 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 1, diceType: 8 },
                mien: { level: 2, diceType: 10 },
                smarts: { level: 3, diceType: 6 },
                spirit: { level: 3, diceType: 12 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 5,
                        concentrations: ['Monkey', 'Staff']
                    },
                    sneak: {
                        level: 2
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Hunting grounds'],
                    },
                    guts: {
                        level: 5
                    },
                    languages: {
                        level: 2,
                        concentrations: ['english', 'cantonese'],
                    },
                    overawe: {
                        level: 2,
                    },
                    medicine: {
                        level: 2,
                        concentrations: ['Chinese traditional'],
                    },
                    chi: {
                        level: 5,
                    },
                    meditation: {
                        level: 2,
                    },
                },
            },
            attacks: ['Staff: STR + 2d8', 'Monkey Goes to the Mountain', 'Step back to Ward off monkey', 'Devastating Ape Strike', 'Vengeance of the Angry Monkey',
            'Smoke Parts for Iron', 'Tiger Shakes its Mane', 'The Slittering Eel', 'Get up', 'Flying kick', 'Spinning kick'],
            notes: 'Strain: 20 | Weapon Def: 3',
        },
        {
            name: 'Ying-Ssi Chieh Tang',
            pace: 10,
            size: 6,
            wind: 18,
            traits: {
                deftness: { level: 3, diceType: 10 },
                nimbleness: { level: 2, diceType: 10 },
                strength: { level: 4, diceType: 18 },
                quickness: { level: 4, diceType: 10 },
                vigor: { level: 2, diceType: 10 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 3, diceType: 6 },
                spirit: { level: 1, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: ['Tan Tui']
                    },
                    sneak: {
                        level: 2
                    },
                    bow: {
                        level: 3,
                    },
                    throwin: {
                        level: 3,
                        concentrations: ['Unbalanced', 'Bullets']
                    }
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Shan Fan'],
                    },
                    guts: {
                        level: 4
                    },
                    languages: {
                        level: 2,
                        concentrations: ['english', 'cantonese'],
                    },
                    overawe: {
                        level: 2,
                    },
                    chi: {
                        level: 5,
                    },
                    meditation: {
                        level: 3,
                    },
                }

            },
            attacks: ['Flying Claw: STR + 2d6', 'Monkey goes to the mountain', 'Abundance of pecking birds',
            'Blood of gold', 'Crane guides the arrows', 'Seize the pearl of death', 'Sweep', 'Get up', 'Flying kick', 'Spinning kick'],
            notes: 'Strain: 10',
        },
        {
            name: 'Lu Fa Wong',
            pace: 8,
            size: 6,
            wind: 12,
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 2, diceType: 8 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 3, diceType: 10 },
                mien: { level: 1, diceType: 6 },
                smarts: { level: 3, diceType: 10 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 3,
                        concentrations: ['wing chun']
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 3,
                        concentrations: ['Shan Fan'],
                    },
                    bluff: {
                        level: 5,
                    },
                    guts: {
                        level: 2
                    },
                    languages: {
                        level: 2,
                        concentrations: ['english', 'cantonese'],
                    },
                    alchemy: {
                        level: 4,
                    },
                    science: {
                        level: 4,
                        concentrations: ['Physics', 'Chemistry'],
                    }
                }

            },
            attacks: ['No weapon: STR + 1d6'],
        },
        {
            name: '108 rider',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 2, diceType: 8 },
                vigor: { level: 2, diceType: 8 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 1, diceType: 8 },
                smarts: { level: 1, diceType: 8 },
                spirit: { level: 1, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 3,
                        concentrations: ['wing chun']
                    },
                    sneak: {
                        level: 2
                    },
                    shootin: {
                        level: 3,
                        concentrations: ['pistol', 'rifle']
                    },
                    bow: {
                        level: 4,
                    },
                    horseRidin: {
                        level: 4
                    },
                    teamster: {
                        level: 4
                    }
                },
                mental: {
                    areaKnowledge: {
                        level: 3,
                        concentrations: ['Shan Fan'],
                    },
                    bluff: {
                        level: 2,
                    },
                    gamblin: {
                        level: 3,
                    },
                    guts: {
                        level: 2
                    },
                    languages: {
                        level: 2,
                        concentrations: ['english', 'cantonese'],
                    },
                    ridicule: {
                        level: 2,
                    },
                    streetwise: {
                        level: 4,
                        concentrations: ['Chinese triads'],
                    }
                }

            },
            attacks: ['No weapon: STR + 1d6', 'Pistol: 3d6', 'Bow: STR + 1d6'],
        },
    ],
};

export default ShanFan;