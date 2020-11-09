const judgeEscort = {
  name: 'Judge Escort',
  list: [
    {
      name: 'Judge H.G. Neill',
      pace: 6,
      size: 6,
      wind: 12,
      traits: {
        deftness: { level: 4, diceType: 8 },
        nimbleness: { level: 2, diceType: 8 },
        strength: { level: 2, diceType: 6 },
        quickness: { level: 2, diceType: 8 },
        vigor: { level: 3, diceType: 6 },
        cognition: { level: 3, diceType: 10 },
        knowledge: { level: 3, diceType: 8 },
        mien: { level: 3, diceType: 8 },
        smarts: { level: 4, diceType: 6 },
        spirit: { level: 3, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 1,
          },
          fightin: {
            level: 1,
            concentrations: ['brawlin'],
          },
          dodge: {
            level: 2,
          },
          horseRidin: {
            level: 2,
          },
          quickDraw: {
            level: 2,
            concentrations: ['pistol'],
          },
          shootin: {
            level: 3,
            concentrations: ['pistol', 'rifle'],
          },
          sleightOfHand: {
            level: 5,
          },
          teamster: {
            level: 2,
          },
        },
        mental: {
          academia: {
            level: 3,
            concentrations: ['law'],
          },
          areaKnowledge: {
            level: 3,
            concentrations: ['New Mexico', 'Texas'],
          },
          bluff: {
            level: 4,
          },
          languages: {
            level: 2,
            concentrations: ['English', 'Spanish'],
          },
          gamblin: {
            level: 3,
          },
          guts: {
            level: 2,
          },
          overawe: {
            level: 3,
          },
          professional: {
            level: 3,
            concentrations: ['judge'],
          },
          scrutinize: {
            level: 3,
          },
          search: {
            level: 2,
          },
          streetwise: {
            level: 3,
          },
          taleTellin: {
            level: 4,
          },
          faith: {
            level: 4,
          },
        },
      },
      attacks: ['No weapon', 'Pistol: 3d6', 'Puppet 2', 'Sendin 1', 'Spook 3', 'Zombie 3'],
      notes: "The Stare, Born on Hallow's End",
    },
    {
      name: 'Veronica Callicutt',
      pace: 8,
      size: 5,
      wind: 12,
      traits: {
        deftness: { level: 4, diceType: 8 },
        nimbleness: { level: 3, diceType: 8 },
        strength: { level: 1, diceType: 6 },
        quickness: { level: 3, diceType: 6 },
        vigor: { level: 2, diceType: 6 },
        cognition: { level: 3, diceType: 10 },
        knowledge: { level: 3, diceType: 8 },
        mien: { level: 3, diceType: 8 },
        smarts: { level: 4, diceType: 6 },
        spirit: { level: 3, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 2,
          },
          fightin: {
            level: 1,
            concentrations: [`brawlin'`],
          },
          dodge: {
            level: 3,
          },
          horseRidin: {
            level: 4,
          },
          sleightOfHand: {
            level: 5,
          },
          shootin: {
            level: 1,
            concentrations: ['pistol'],
          },
          sneak: {
            level: 3,
          },
        },
        mental: {
          areaKnowledge: {
            level: 3,
            concentrations: ['local post'],
          },
          bluff: {
            level: 3,
          },
          guts: {
            level: 2,
          },
          overawe: {
            level: 4,
          },
          persuasion: {
            level: 2,
          },
          search: {
            level: 1,
          },
          streetwise: {
            level: 2,
          },
          faith: {
            level: 4,
          },
        },
      },
      attacks: ['No weapon', 'Derringer: 3d6', 'Hairpin: STR+1d4+poison'],
      notes: 'Scrawny (Size 5), Curse 5, Bloodthirsty',
    },
    {
      name: 'Joshua Norell',
      pace: 6,
      size: 6,
      wind: 28,
      thickSkinned: true,
      traits: {
        deftness: { level: 2, diceType: 8 },
        nimbleness: { level: 2, diceType: 8 },
        strength: { level: 4, diceType: 10 },
        quickness: { level: 1, diceType: 6 },
        vigor: { level: 3, diceType: 12 },
        cognition: { level: 2, diceType: 6 },
        knowledge: { level: 2, diceType: 8 },
        mien: { level: 1, diceType: 8 },
        smarts: { level: 2, diceType: 6 },
        spirit: { level: 2, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 1,
          },
          fightin: {
            level: 3,
            concentrations: ['brawlin'],
          },
          shootin: {
            level: 2,
            concentrations: ['shotgun'],
          },
          teamster: {
            level: 3,
          },
        },
        mental: {
          animalWranglin: {
            level: 2,
          },
          overawe: {
            level: 2,
          },
          tinkerin: {
            level: 2,
          },
        },
      },
      attacks: ['No weapon', 'Shotgun: *d6'],
      notes: 'Thick skinned, Tough as nail 5, Sand 2, Slowpoke 2',
    },
  ],
};

export default judgeEscort;
