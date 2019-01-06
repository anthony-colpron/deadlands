const allies = {
    name: 'Allies',
    list: [
        {
            name: 'Suitcase Lee',
            pace: 12,
            size: 6,
            wind: 18,
            traits: {
                deftness: { level: 2, diceType: 10 },
                nimbleness: { level: 2, diceType: 12 },
                strength: { level: 4, diceType: 12 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 3, diceType: 10 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 3, diceType: 8 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 3, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    bow: {
                        level: 4
                    },
                    fightin: {
                        level: 6,
                        concentrations: ['wing chun']
                    },
                    swimmin: {
                        level: 1,
                    }
                },
                mental: {
                    chi: {
                        level: 5
                    },
                    guts: {
                        level: 4
                    },
                    persuasion: {
                        level: 4
                    },
                    languages: {
                        level: 2,
                        concentrations: ['cantonese', 'english']
                    }
                }
            },
            attacks: [
            'No weapon: STR+1d6',
            'Abundance of pecking birds 4',
            'Closing the gate 4',
            'Step back to ward off monkey 4',
            'Weapon of opportunity 5'
            ]
        },
        {
            name: `Seymour 'Spicy' Farnham`,
            pace: 12,
            size: 6,
            wind: 24,
            traits: {
                deftness: { level: 2, diceType: 10 },
                nimbleness: { level: 2, diceType: 12 },
                strength: { level: 4, diceType: 6 },
                quickness: { level: 4, diceType: 10 },
                vigor: { level: 3, diceType: 6 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 2, diceType: 8 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 1, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 3,
                    },
                    drivin: {
                        level: 3,
                        concentrations: ['boat']
                    },
                    fightin: {
                        level: 4,
                        concentrations: ['Sword']
                    },
                    shootin: {
                        level: 3,
                        concentrations: ['Shotgun, Automatics']
                    },
                    sneak: {
                        level: 3
                    },
                    swimmin: {
                        level: 3,
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 3,
                        concentrations: ['Great Maze']
                    },
                    gamblin: {
                        level: 2,
                    },
                    guts: {
                        level: 3
                    },
                    overawe: {
                        level: 2,
                    },
                    search: {
                        level: 2,
                    },
                    tinkerin: {
                        level: 3,
                    }
                }
            },
            attacks: [
            'No weapon',
            'Sword: STR + 2d8',
            'Shotgun: *d6',
            'Boat Gatling Gun: X * 3d8',
            ]
        },
        {
            name: 'Doc Holliday',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 2, diceType: 10 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 6 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 3, diceType: 6 },
                cognition: { level: 3, diceType: 8 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 2, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    dodge: {
                        level: 4
                    },
                    fightin: {
                        level: 2,
                        concentrations: [`brawlin'`]
                    },
                    horseRidin: {
                        level: 4
                    },
                    quickDraw: {
                        level: 6,
                        concentrations: ['pistol']
                    },
                    shootin: {
                        level: 6,
                        concentrations: ['pistol', 'shotgun']
                    },
                    sneak: {
                        level: 4
                    },
                    sleightOfHand: {
                        level: 3
                    }
                },
                mental: {
                    bluff: {
                        level: 4
                    },
                    gamblin: {
                        level: 6
                    },
                    guts: {
                        level: 5
                    },
                    medicine: {
                        level: 2,
                        concentrations: ['general']
                    },
                    overawe: {
                        level: 5
                    },
                    persuasion: {
                        level: 2
                    },
                    professional: {
                        level: 4,
                        concentrations: ['dentistry']
                    },
                    languages: {
                        level: 2,
                        concentrations: ['latin', 'english']
                    },
                    scrutinize: {
                        level: 3
                    },
                    search: {
                        level: 2
                    },
                    hexslingin: {
                        level: 7
                    }
                }

            },
            attacks: [
            'No weapon', 'Double-Action Peacemakers x2',
            `Helpin' hand`, 'Hunch', 'Missed me!', 'Phantom fingers', 'Private eye', 'Soul blast', 'Trinkets',
            'Geyser', 'Ghost rider',
            'Dead shot', 'Ghost bullets', `Hail o' lead`, 'Liberated Ammo', 'Long shot', `Smokewagon Lightin'`, 'Two-Gun Mojo'
            ]
        }
    ]
};

export default allies;