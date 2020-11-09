const deadwoodOneShot = {
  name: 'Deadwood One Shot',
  list: [
    {
      name: 'Basic martial artist',
      pace: 8,
      size: 6,
      wind: 12,
      traits: {
        deftness: { level: 2, diceType: 6 },
        nimbleness: { level: 2, diceType: 8 },
        strength: { level: 2, diceType: 8 },
        quickness: { level: 2, diceType: 8 },
        vigor: { level: 2, diceType: 6 },
        cognition: { level: 2, diceType: 6 },
        knowledge: { level: 1, diceType: 6 },
        mien: { level: 1, diceType: 8 },
        smarts: { level: 1, diceType: 4 },
        spirit: { level: 1, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          fightin: {
            level: 3,
            concentrations: ['wing chun'],
          },
          sneak: {
            level: 2,
          },
          shootin: {
            level: 3,
            concentrations: ['pistol'],
          },
        },
        mental: {
          areaKnowledge: {
            level: 3,
            concentrations: ['Shan Fan'],
          },
          bluff: {
            level: 2,
          },
          gamblin: {
            level: 3,
          },
          guts: {
            level: 2,
          },
          languages: {
            level: 2,
            concentrations: ['english', 'cantonese'],
          },
          ridicule: {
            level: 2,
          },
          streetwise: {
            level: 4,
            concentrations: ['Chinese triads'],
          },
        },
      },
      attacks: ['No weapon: STR + 1d6', 'Sword: STR + 2d8'],
    },
    {
      name: 'Cho Wa Shu',
      pace: 12,
      size: 6,
      wind: 18,
      traits: {
        deftness: { level: 2, diceType: 6 },
        nimbleness: { level: 2, diceType: 12 },
        strength: { level: 4, diceType: 8 },
        quickness: { level: 4, diceType: 10 },
        vigor: { level: 2, diceType: 10 },
        cognition: { level: 3, diceType: 8 },
        knowledge: { level: 1, diceType: 6 },
        mien: { level: 2, diceType: 6 },
        smarts: { level: 3, diceType: 6 },
        spirit: { level: 1, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          fightin: {
            level: 4,
            concentrations: ['wing chun', 'sword'],
          },
          sneak: {
            level: 2,
          },
          bow: {
            level: 2,
          },
        },
        mental: {
          areaKnowledge: {
            level: 2,
            concentrations: ['Shan Fan'],
          },
          guts: {
            level: 2,
          },
          languages: {
            level: 2,
            concentrations: ['english', 'cantonese'],
          },
          overawe: {
            level: 2,
          },
          medicine: {
            level: 2,
            concentrations: ['Chinese traditional'],
          },
          chi: {
            level: 4,
          },
          meditation: {
            level: 2,
          },
        },
      },
      attacks: [
        'Fury fans the flames',
        'Hell Thundercalp',
        'Ten-foot punch',
        'Closing the gate',
        'Disarm',
        'Get up',
        'Flying kick',
        'Spinning kick',
      ],
      notes: 'Strain: 10',
    },
    {
      name: 'Deputy',
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
            concentrations: ['pistol', 'rifle'],
          },
        },
        mental: {
          areaKnowledge: {
            level: 3,
            concentrations: ['deadwood'],
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
      name: 'Frank Bryant',
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
            concentrations: ['knife', 'club'],
          },
          dodge: {
            level: 2,
          },
          horseRidin: {
            level: 3,
          },
          shootin: {
            level: 2,
            concentrations: ['pistol', 'shotgun'],
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
          scrutinize: {
            level: 2,
          },
          professional: {
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
      attacks: ['No weapon', 'Pistol: 3d6', 'Shotgun: *d6', 'Rifle: 4d8'],
    },
    {
      name: `Seth Bullock`,
      pace: 8,
      size: 6,
      wind: 14,
      traits: {
        deftness: { level: 2, diceType: 10 },
        nimbleness: { level: 3, diceType: 8 },
        strength: { level: 4, diceType: 6 },
        quickness: { level: 2, diceType: 10 },
        vigor: { level: 3, diceType: 8 },
        cognition: { level: 2, diceType: 8 },
        knowledge: { level: 3, diceType: 6 },
        mien: { level: 4, diceType: 12 },
        smarts: { level: 2, diceType: 8 },
        spirit: { level: 2, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          fightin: {
            level: 3,
            concentrations: [`brawlin'`],
          },
          horseRidin: {
            level: 2,
          },
          dodge: {
            level: 3,
          },
          drivin: {
            level: 2,
            concentrations: ['boat'],
          },
          shootin: {
            level: 4,
            concentrations: ['pistol', 'rifle'],
          },
        },
        mental: {
          areaKnowledge: {
            level: 2,
            concentrations: ['deadwood'],
          },
          guts: {
            level: 3,
          },
          overawe: {
            level: 5,
          },
          leadership: {
            level: 2,
          },
          streetwise: {
            level: 2,
          },
          search: {
            level: 3,
          },
          persuasion: {
            level: 3,
          },
        },
      },
      attacks: ['No weapon: STR', 'Pistol: 3d6', 'Rifle: 4d8'],
      notes: 'The stare +2 overawe',
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
    {
      name: 'Thunder People',
      pace: 10,
      size: 8,
      wind: 26,
      traits: {
        deftness: { level: 3, diceType: 8 },
        nimbleness: { level: 4, diceType: 10 },
        strength: { level: 6, diceType: 12 },
        quickness: { level: 3, diceType: 12 },
        vigor: { level: 5, diceType: 12 },
        cognition: { level: 4, diceType: 8 },
        knowledge: { level: 5, diceType: 10 },
        mien: { level: 6, diceType: 12, dicePlus: 4 },
        smarts: { level: 4, diceType: 6 },
        spirit: { level: 5, diceType: 12, dicePlus: 2 },
      },
      aptitudes: {
        corporeal: {
          fightin: {
            level: 5,
            concentrations: [`spear`, 'tomahawk'],
          },
          throwin: {
            level: 4,
            concentrations: [`spear`, 'tomahawk'],
          },
        },
        mental: {
          guts: {
            level: 5,
          },
          overawe: {
            level: 4,
          },
        },
      },
      attacks: [
        'No weapon: STR',
        'Spear: STR + 2d6, DB +3',
        'Tomahawk: STR + 2d6',
        'Overawe opposé: terror 9',
        '2 casts de speed of the wolf (+6d4 pace)',
      ],
      notes: ['War medicine: '],
    },
    {
      name: 'Sioux Shaman',
      pace: 6,
      size: 6,
      wind: 16,
      traits: {
        deftness: { level: 2, diceType: 6 },
        nimbleness: { level: 2, diceType: 6 },
        strength: { level: 1, diceType: 6 },
        quickness: { level: 1, diceType: 8 },
        vigor: { level: 3, diceType: 6 },
        cognition: { level: 2, diceType: 10 },
        knowledge: { level: 3, diceType: 8 },
        mien: { level: 2, diceType: 10 },
        smarts: { level: 3, diceType: 8 },
        spirit: { level: 4, diceType: 12 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 3,
          },
          fightin: {
            level: 3,
            concentrations: [`spear`],
          },
          horseRidin: {
            level: 2,
          },
          shootin: {
            level: 3,
            concentrations: ['rifle'],
          },
          sneak: {
            level: 3,
          },
        },
        mental: {
          areaKnowledge: {
            level: 3,
            concentrations: ['Dakotas'],
          },
          guts: {
            level: 3,
          },
          search: {
            level: 2,
          },
          scrutinize: {
            level: 2,
          },
          languages: {
            level: 2,
            concentrations: ['indians sign', 'english'],
          },
          medicine: {
            level: 3,
            concentrations: ['general'],
          },
          survival: {
            level: 3,
            concentrations: ['home environment'],
          },
          academia: {
            level: 3,
            concentrations: ['occult'],
          },
        },
      },
      attacks: ['No weapon', 'Spear: STR + 2d6, DB +3', 'Vision Quest + Summon Spirit'],
    },
    {
      name: 'Pole men',
      pace: 14,
      size: 6,
      wind: 99,
      cannotBeWinded: true,
      cannotBeStunned: true,
      undead: true,
      woundsToKill: 'special',
      traits: {
        deftness: { level: 3, diceType: 8 },
        nimbleness: { level: 5, diceType: 12 },
        strength: { level: 3, diceType: 8 },
        quickness: { level: 3, diceType: 10 },
        vigor: { level: 2, diceType: 6 },
        cognition: { level: 2, diceType: 8 },
        knowledge: { level: 1, diceType: 4 },
        mien: { level: 2, diceType: 8 },
        smarts: { level: 2, diceType: 6 },
        spirit: { level: 2, diceType: 6 },
      },
      aptitudes: {
        corporeal: {
          fightin: {
            level: 5,
            concentrations: [`brawlin'`],
          },
          sneak: {
            level: 4,
          },
        },
        mental: {},
      },
      attacks: ['Entanglin'],
      note: 'Maim head to kill',
    },
    {
      name: 'Devil Christ',
      pace: 8,
      size: 6,
      wind: 99,
      cannotBeWinded: true,
      cannotBeStunned: true,
      undead: true,
      woundsToKill: 'special',
      traits: {
        deftness: { level: 3, diceType: 8 },
        nimbleness: { level: 3, diceType: 8 },
        strength: { level: 3, diceType: 8 },
        quickness: { level: 3, diceType: 8 },
        vigor: { level: 4, diceType: 8 },
        cognition: { level: 2, diceType: 12, dicePlus: 2 },
        knowledge: { level: 3, diceType: 10 },
        mien: { level: 2, diceType: 10 },
        smarts: { level: 4, diceType: 12, dicePlus: 4 },
        spirit: { level: 3, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 3,
          },
          fightin: {
            level: 3,
            concentrations: [`brawlin'`],
          },
          horseRidin: {
            level: 3,
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
          areaKnowledge: {
            level: 4,
            concentrations: ['Deadwood', 'Dodge city'],
          },
          guts: {
            level: 4,
          },
          search: {
            level: 3,
          },
          scrutinize: {
            level: 4,
          },
          streetwise: {
            level: 5,
          },
          persuasion: {
            level: 4,
          },
          bluff: {
            level: 4,
          },
          languages: {
            level: 2,
            concentrations: ['indians sign', 'spanish', 'german'],
          },
          medicine: {
            level: 3,
            concentrations: ['general'],
          },
          survival: {
            level: 3,
            concentrations: ['mountain'],
          },
          academia: {
            level: 3,
            concentrations: ['occult', 'psychology'],
          },
        },
      },
      attacks: ['No weapon', 'Pistol: 3d6', 'Rifle: 4d8'],
      notes: ['2 chips rouges, 1 chip blanche, Purty, Luck of the irish, Nerves of steel'],
    },
  ],
};

export default deadwoodOneShot;
