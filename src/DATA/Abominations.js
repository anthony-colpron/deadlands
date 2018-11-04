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
        }
    ]
};

export default abominations;