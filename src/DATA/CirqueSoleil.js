const cirqueSoleil = {
  name: 'Cirque de la Lumière du Soleil',
  list: [
    {
      name: 'Clockwork Tarantula',
      pace: 8,
      size: 6,
      wind: 12,
      cannotBeWinded: true,
      cannotBeStunned: true,
      traits: {
        deftness: { level: 2, diceType: 8 },
        nimbleness: { level: 3, diceType: 8 },
        strength: { level: 4, diceType: 6 },
        quickness: { level: 3, diceType: 10 },
        vigor: { level: 2, diceType: 6 },
        cognition: { level: 2, diceType: 6 },
        knowledge: { level: 2, diceType: 4 },
        mien: { level: 1, diceType: 4 },
        smarts: { level: 1, diceType: 4 },
        spirit: { level: 1, diceType: 4 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 5,
          },
          fightin: {
            level: 4,
            concentrations: [`brawlin'`],
          },
          shootin: {
            level: 3,
            concentrations: ['acid'],
          },
          sneak: {
            level: 3,
          },
        },
        mental: {
          search: {
            level: 3,
          },
          trackin: {
            level: 3,
          },
        },
      },
      attacks: [
        { name: 'Acidic Bite', stats: { numberOfDices: 0, diceType: 4, addStrength: true } },
        { name: 'Acid Spray', stats: { numberOfDices: 4, diceType: 8 } },
      ],
      note: 'Armor: 1. If raise: Acidic Bite',
    },
  ],
};

export default cirqueSoleil;
