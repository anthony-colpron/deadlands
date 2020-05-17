const forbiddenGod = {
    name: 'Forbidden God',
    list: [
        {
            name: 'Rat Swarm',
            pace: 4,
            size: 1,
            wind: 5,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 1, diceType: 6 },
                strength: { level: 1, diceType: 4 },
                quickness: { level: 1, diceType: 12 },
                vigor: { level: 1, diceType: 4 },
                cognition: { level: 1, diceType: 6 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 1, diceType: 4 },
                smarts: { level: 1, diceType: 4 },
                spirit: { level: 1, diceType: 4 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`]
                    },
                },
                mental: {}
            },
            attacks: [
                'Bite: STR',
            ],
        },
        {
            name: 'Zombie Steer',
            pace: 8,
            size: 8,
            wind: 18,
            undead: true,
            woundsToKill: 'special',
            traits: {
                deftness: { level: 1, diceType: 8 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 12 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 2, diceType: 12 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 2, diceType: 4 },
                smarts: { level: 1, diceType: 4 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: [`brawlin'`]
                    },
                },
                mental: {
                }
            },
            attacks: [
                'Gore: STR+2d6',
            ],
            note: 'Maim head to kill',
        },
        {
            name: 'Heartless Spaniard',
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
                        concentrations: [`brawlin'`, 'Rapier']
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
                'Rusted Rapier: 1d8 + STR, Reliability 16',
            ],
            note: 'Maim head to kill, Armored Areas: 1. Destroyed after 1 hit',
        },
        {
            name: 'Tlaxcalan Zombie',
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
            ],
            note: 'Maim head to kill',
        },
        {
            name: 'Diego De Velasco',
            pace: 8,
            size: 6,
            wind: 20,
            undead: true,
            woundsToKill: 'special',
            traits: {
                deftness: { level: 1, diceType: 10 },
                nimbleness: { level: 3, diceType: 10 },
                strength: { level: 2, diceType: 12, dicePlus: 2 },
                quickness: { level: 2, diceType: 10 },
                vigor: { level: 4, diceType: 12 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 3, diceType: 8 },
                smarts: { level: 1, diceType: 12 },
                spirit: { level: 4, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 6,
                        concentrations: [`brawlin'`, 'Rapier']
                    },
                    sneak: {
                        level: 2,
                    },
                    swimmin: {
                        level: 2,
                    },
                },
                mental: {
                    search: {
                        level: 3,
                    },
                    trackin: {
                        level: 6,
                    },
                }

            },
            attacks: [
                'Bite: STR',
                'Rapier: STR + 1d8, Always hits Gizzards',
            ],
            note: 'Maim head to kill, Armored Areas: 1, Destroyed after 1 hit'
        },
        {
            name: 'Pohqui The Medecine Woman',
            pace: 8,
            size: 6,
            wind: 14,
            undead: true,
            woundsToKill: 'special',
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 5, diceType: 12 },
                strength: { level: 3, diceType: 8 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 2, diceType: 8 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 4, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 5,
                        concentrations: [`brawlin'`]
                    },
                    dodge: {
                        level: 8,
                    },
                    sneak: {
                        level: 4,
                    },
                },
                mental: {
                }
            },
            attacks: [
                'Hold: STR vs STR',
                'Curse: SPR vs SPR: -2 all rolls for 1h',
            ],
            note: 'Maim head to kill',
        },
    ]
};

export default forbiddenGod;