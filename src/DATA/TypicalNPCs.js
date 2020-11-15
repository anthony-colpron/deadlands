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
        spirit: { level: 1, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 1,
          },
          fightin: {
            level: 3,
            concentrations: ['knife'],
          },
          dodge: {
            level: 2,
          },
          horseRidin: {
            level: 4,
          },
          shootin: {
            level: 2,
            concentrations: ['pistol', 'shotgun', 'rifle'],
          },
          sneak: {
            level: 3,
          },
        },
        mental: {
          gamblin: {
            level: 3,
          },
          guts: {
            level: 3,
          },
          overawe: {
            level: 2,
          },
          scroungin: {
            level: 3,
          },
          search: {
            level: 3,
          },
          survival: {
            level: 4,
            concentrations: ['plains'],
          },
        },
      },
      attacks: [
        { name: 'Pistol', stats: { numberOfDices: 3, diceType: 6 } },
        { name: 'Winchester 76', stats: { numberOfDices: 4, diceType: 8, plus: 2 } },
        { name: 'Bowie knife', stats: { numberOfDices: 1, diceType: 6, addStrength: true } },
      ],
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
        spirit: { level: 2, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 2,
          },
          fightin: {
            level: 3,
            concentrations: [`brawlin'`],
          },
          dodge: {
            level: 3,
          },
          horseRidin: {
            level: 3,
          },
          shootin: {
            level: 4,
            concentrations: ['pistol (officers)', 'rifle'],
          },
        },
        mental: {
          areaKnowledge: {
            level: 3,
            concentrations: ['local post'],
          },
          bluff: {
            level: 2,
          },
          guts: {
            level: 2,
          },
          overawe: {
            level: 3,
          },
          persuasion: {
            level: 2,
          },
          search: {
            level: 3,
          },
          streetwise: {
            level: 2,
          },
        },
      },
      attacks: ['No weapon', 'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8'],
    },
    {
      name: 'Typical Pirate',
      pace: 8,
      size: 6,
      wind: 12,
      traits: {
        deftness: { level: 3, diceType: 6 },
        nimbleness: { level: 3, diceType: 6 },
        strength: { level: 2, diceType: 6 },
        quickness: { level: 3, diceType: 6 },
        vigor: { level: 3, diceType: 6 },
        cognition: { level: 2, diceType: 6 },
        knowledge: { level: 1, diceType: 6 },
        mien: { level: 3, diceType: 6 },
        smarts: { level: 2, diceType: 6 },
        spirit: { level: 1, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 1,
          },
          fightin: {
            level: 4,
            concentrations: ['knife', 'sword', 'brawlin'],
          },
          dodge: {
            level: 2,
          },
          swimmin: {
            level: 3,
          },
          drivin: {
            level: 2,
            concentrations: ['boat'],
          },
          shootin: {
            level: 3,
            concentrations: ['pistol', 'shotgun', 'rifle'],
          },
          sneak: {
            level: 3,
          },
        },
        mental: {
          gamblin: {
            level: 3,
          },
          guts: {
            level: 3,
          },
          overawe: {
            level: 2,
          },
          scroungin: {
            level: 3,
          },
          search: {
            level: 3,
          },
          survival: {
            level: 4,
            concentrations: ['great maze'],
          },
        },
      },
      attacks: ['No weapon', 'Sword: STR + 2d8', 'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8'],
    },
    {
      name: `Kang's Pirate`,
      pace: 8,
      size: 6,
      wind: 12,
      traits: {
        deftness: { level: 2, diceType: 6 },
        nimbleness: { level: 2, diceType: 8 },
        strength: { level: 2, diceType: 8 },
        quickness: { level: 3, diceType: 6 },
        vigor: { level: 3, diceType: 6 },
        cognition: { level: 1, diceType: 8 },
        knowledge: { level: 1, diceType: 6 },
        mien: { level: 3, diceType: 6 },
        smarts: { level: 2, diceType: 6 },
        spirit: { level: 2, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 1,
          },
          fightin: {
            level: 4,
            concentrations: ['sword', 'martial arts: eagle claw'],
          },
          dodge: {
            level: 2,
          },
          swimmin: {
            level: 3,
          },
          drivin: {
            level: 2,
            concentrations: ['boat'],
          },
          shootin: {
            level: 3,
            concentrations: ['pistol', 'rifle'],
          },
          sneak: {
            level: 3,
          },
        },
        mental: {
          gamblin: {
            level: 2,
          },
          guts: {
            level: 3,
          },
          ridicule: {
            level: 2,
          },
          streetwise: {
            level: 3,
          },
          search: {
            level: 3,
          },
          survival: {
            level: 4,
            concentrations: ['great maze'],
          },
        },
      },
      attacks: ['No weapon: STR + 1d6', 'Sword: STR + 2d8', 'Pistol: 3d6', 'Rifle: 4d8'],
    },
    {
      name: 'Typical Texas Ranger',
      pace: 10,
      size: 6,
      wind: 12,
      traits: {
        deftness: { level: 2, diceType: 12 },
        nimbleness: { level: 2, diceType: 10 },
        strength: { level: 3, diceType: 8 },
        quickness: { level: 4, diceType: 10 },
        vigor: { level: 4, diceType: 6 },
        cognition: { level: 1, diceType: 8 },
        knowledge: { level: 1, diceType: 6 },
        mien: { level: 3, diceType: 6 },
        smarts: { level: 2, diceType: 6 },
        spirit: { level: 3, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 1,
          },
          fightin: {
            level: 3,
            concentrations: [`brawlin'`, 'knife'],
          },
          dodge: {
            level: 2,
          },
          horseRidin: {
            level: 2,
          },
          quickDraw: {
            level: 3,
            concentrations: ['pistol'],
          },
          shootin: {
            level: 4,
            concentrations: ['pistol', 'rifle'],
          },
          sneak: {
            level: 2,
          },
        },
        mental: {
          areaKnowledge: {
            level: 4,
            concentrations: ['Texas'],
          },
          bluff: {
            level: 2,
          },
          guts: {
            level: 4,
          },
          languages: {
            level: 2,
            concentrations: ['spanish'],
          },
          overawe: {
            level: 4,
          },
          leadership: {
            level: 3,
          },
          search: {
            level: 2,
          },
          survival: {
            level: 3,
            concentrations: ['desert'],
          },
          trackin: {
            level: 2,
          },
        },
      },
      attacks: ['No weapon', 'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8'],
    },
    {
      name: 'Typical Indian Brave',
      pace: 10,
      size: 6,
      wind: 16,
      traits: {
        deftness: { level: 3, diceType: 8 },
        nimbleness: { level: 2, diceType: 10 },
        strength: { level: 3, diceType: 8 },
        quickness: { level: 4, diceType: 6 },
        vigor: { level: 3, diceType: 8 },
        cognition: { level: 2, diceType: 6 },
        knowledge: { level: 2, diceType: 6 },
        mien: { level: 2, diceType: 8 },
        smarts: { level: 3, diceType: 6 },
        spirit: { level: 2, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 1,
          },
          bow: {
            level: 3,
          },
          fightin: {
            level: 3,
            concentrations: [`brawlin'`, 'war club'],
          },
          dodge: {
            level: 2,
          },
          horseRidin: {
            level: 2,
          },
          shootin: {
            level: 3,
            concentrations: ['rifle'],
          },
          sneak: {
            level: 2,
          },
        },
        mental: {
          guts: {
            level: 2,
          },
          overawe: {
            level: 2,
          },
          search: {
            level: 2,
          },
          survival: {
            level: 4,
            concentrations: ['home environment'],
          },
          trackin: {
            level: 2,
          },
          faith: {
            level: 2,
          },
        },
      },
      attacks: ['No weapon', 'War club: STR + 1d6, +1 DB', 'Bow: STR + 1d6', 'Rifle: 4d8'],
      notes: ['Fleet footed, Stubborn'],
    },
  ],
};

export default typicalNPCs;
