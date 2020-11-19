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
        spirit: { level: 3, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          fightin: {
            level: 5,
            concentrations: ['jaws'],
          },
          sneak: {
            level: 2,
          },
        },
        mental: {},
      },
      attacks: [{ name: 'Jaws: STR + 1d8', stats: { numberOfDices: 1, diceType: 8, addStrength: true } }],
      note: 'Armor: 1',
    },
    {
      name: 'Wolf',
      pace: 20,
      size: 6,
      wind: 18,
      traits: {
        deftness: { level: 1, diceType: 4 },
        nimbleness: { level: 3, diceType: 10 },
        strength: { level: 2, diceType: 8 },
        quickness: { level: 2, diceType: 8 },
        vigor: { level: 3, diceType: 10 },
        cognition: { level: 2, diceType: 6 },
        knowledge: { level: 1, diceType: 6 },
        mien: { level: 3, diceType: 6 },
        smarts: { level: 1, diceType: 6 },
        spirit: { level: 3, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          fightin: {
            level: 4,
            concentrations: ['brawlin'],
          },
          sneak: {
            level: 2,
          },
        },
        mental: {
          overawe: {
            level: 2,
          },
          search: {
            level: 3,
          },
          trackin: {
            level: 5,
          },
        },
      },
      attacks: ['Bite: STR + 1d6', 'Claws: STR'],
      note: '',
    },
  ],
};

export default animals;
