const typicalNPCs = {
    name: 'Typical NPCs',
    list: [
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
            name: 'Typical Soldier',
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
                        concentrations: ['pistol (officers)', 'rifle']
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 3,
                        concentrations: ['local post']
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
                        level: 2,
                    }
                }

            },
            attacks: ['No weapon', 'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8']
        }
    ]
};

export default typicalNPCs;