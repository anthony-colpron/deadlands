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
            name: 'Buffalo Spirit Alpha',
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
    ]
};

export default huntingGrounds;