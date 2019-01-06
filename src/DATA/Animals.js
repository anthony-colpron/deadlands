const animals = {
    name: 'Animals',
    list: [
        {
            name: 'Shark',
            pace: 8,
            size: 10,
            wind: 16,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 3, diceType: 12, dicePlus: 2 },
                quickness: { level: 4, diceType: 8 },
                vigor: { level: 3, diceType: 10 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 1, diceType: 4 },
                mien: { level: 2, diceType: 4 },
                smarts: { level: 2, diceType: 4 },
                spirit: { level: 3, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 5,
                        concentrations: ['jaws']
                    },
                    sneak: {
                        level: 2
                    }
                },
                mental: {}

            },
            attacks: ['Jaws: STR + 1d8'],
            note: 'Armor: 1'
        },
    ]
};

export default animals;