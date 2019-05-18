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
            name: 'Walking dead',
            pace: 8,
            size: 6,
            wind: 99,
            cannotBeWinded: true,
            cannotBeStunned: true,
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
            name: 'Slow Walking dead',
            pace: 8,
            size: 6,
            wind: 99,
            cannotBeWinded: true,
            cannotBeStunned: true,
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
    ]
};

export default abominations;