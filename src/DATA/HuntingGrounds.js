const huntingGrounds = {
    name: 'Hunting Grounds',
    list: [
        {
            name: 'Uwannami',
            pace: 8,
            size: 8,
            wind: 18,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 3, diceType: 8 },
                quickness: { level: 2, diceType: 8 },
                vigor: { level: 2, diceType: 8 },
                cognition: { level: 3, diceType: 10 },
                knowledge: { level: 2, diceType: 10 },
                mien: { level: 4, diceType: 8 },
                smarts: { level: 3, diceType: 12 },
                spirit: { level: 4, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 5,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 2
                    }
                },
                mental: {
                    overawe: {
                        level: 5,
                    },
                    ridicule: {
                        level: 2,
                    },
                },
            },
            attacks: ['Water Sword: STR + 2d8, DB: 2', 'Water spear: STR + 2d6, DB: 3',
                'Mold Water: See desc'],
            note: ''
        },
        {
            name: 'Wakinyan',
            pace: 12,
            size: 50,
            wind: 99,
            traits: {
                deftness: { level: 4, diceType: 10 },
                nimbleness: { level: 3, diceType: 12 },
                strength: { level: 4, diceType: 10 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 6, diceType: 12 },
                cognition: { level: 3, diceType: 10 },
                knowledge: { level: 3, diceType: 12 },
                mien: { level: 5, diceType: 12 },
                smarts: { level: 3, diceType: 12 },
                spirit: { level: 4, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 2,
                        concentrations: ['brawlin']
                    },
                },
                mental: {
                    overawe: {
                        level: 1,
                    },
                    ridicule: {
                        level: 5,
                    },
                },
            },
            attacks: ['Lightning Strike: 3d10 to guts', 'Fire Portal'],
            note: ''
        },
        {
            name: 'Buffalo Spirit',
            pace: 20,
            size: 12,
            wind: 26,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 6 },
                strength: { level: 2, diceType: 12, dicePlus: 4 },
                quickness: { level: 3, diceType: 6 },
                vigor: { level: 2, diceType: 12, dicePlus: 4 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 4, diceType: 8 },
                mien: { level: 3, diceType: 8 },
                smarts: { level: 3, diceType: 8 },
                spirit: { level: 4, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 2,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 2
                    }
                },
                mental: {
                    overawe: {
                        level: 2,
                    },
                    ridicule: {
                        level: 2,
                    },
                },
            },
            attacks: ['Hooves: STR ', 'Horns: STR + 1d6'],
            note: ''
        },
        {
            name: 'Waka Tatanka',
            pace: 20,
            size: 14,
            wind: 30,
            traits: {
                deftness: { level: 1, diceType: 4 },
                nimbleness: { level: 3, diceType: 8 },
                strength: { level: 2, diceType: 12, dicePlus: 4 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 3, diceType: 12, dicePlus: 6 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 4, diceType: 8 },
                mien: { level: 3, diceType: 8 },
                smarts: { level: 3, diceType: 8 },
                spirit: { level: 4, diceType: 12 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 2
                    }
                },
                mental: {
                    overawe: {
                        level: 4,
                    },
                    ridicule: {
                        level: 2,
                    },
                },
            },
            attacks: ['Hooves: STR ', 'Horns: STR + 1d6'],
            note: 'Chips: 3 blanches'
        },
        {
            name: 'Lesser manitou',
            pace: 6,
            size: 3,
            wind: 12,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 3, diceType: 6 },
                strength: { level: 1, diceType: 6 },
                quickness: { level: 5, diceType: 10 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 1, diceType: 4 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 2,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 2
                    }
                },
                mental: {
                    overawe: {
                        level: 2,
                    },
                    ridicule: {
                        level: 1,
                    },
                    guts: {
                        level: 1,
                    },
                },
            },
            attacks: ['Claws: STR / Teeth: STR', 'Swarm'],
            note: ''
        },
        {
            name: 'Lesser manitous swarm',
            pace: 6,
            size: 3,
            wind: 60,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 3, diceType: 6 },
                strength: { level: 1, diceType: 6 },
                quickness: { level: 5, diceType: 10 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 1, diceType: 4 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 2,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 2
                    }
                },
                mental: {
                    overawe: {
                        level: 2,
                    },
                    ridicule: {
                        level: 1,
                    },
                    guts: {
                        level: 1,
                    },
                },
            },
            attacks: ['Claws: STR / Teeth: STR', 'Swarm'],
            note: ''
        },
        {
            name: 'Normal manitou',
            pace: 8,
            size: 8,
            wind: 18,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 4, diceType: 8 },
                strength: { level: 3, diceType: 8 },
                quickness: { level: 5, diceType: 10 },
                vigor: { level: 3, diceType: 8 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 1, diceType: 8 },
                mien: { level: 4, diceType: 10 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 2, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 4
                    }
                },
                mental: {
                    overawe: {
                        level: 4,
                    },
                    ridicule: {
                        level: 3,
                    },
                    guts: {
                        level: 4,
                    },
                },
            },
            attacks: ['Claws: STR+1d6', 'Rend'],
            note: ''
        },
        {
            name: 'Greater manitou',
            pace: 12,
            size: 12,
            wind: 26,
            traits: {
                deftness: { level: 4, diceType: 10 },
                nimbleness: { level: 3, diceType: 12 },
                strength: { level: 3, diceType: 12, dicePlus: 4 },
                quickness: { level: 4, diceType: 8 },
                vigor: { level: 4, diceType: 10 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 1, diceType: 10 },
                mien: { level: 4, diceType: 12, dicePlus: 2 },
                smarts: { level: 3, diceType: 8 },
                spirit: { level: 4, diceType: 12, dicePlus: 4 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 6,
                        concentrations: ['brawlin']
                    },
                    sneak: {
                        level: 4
                    }
                },
                mental: {
                    overawe: {
                        level: 8,
                    },
                    ridicule: {
                        level: 5,
                    },
                    guts: {
                        level: 8,
                    },
                },
            },
            attacks: ['Razor Claws: STR+2d6 (ignores armour)', 'Rend', 'Warp Reality'],
            note: 'Armor 1'
        },
    ]
};

export default huntingGrounds;