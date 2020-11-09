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
        spirit: { level: 3, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          bow: {
            level: 4,
          },
          fightin: {
            level: 6,
            concentrations: ['wing chun'],
          },
          swimmin: {
            level: 1,
          },
        },
        mental: {
          chi: {
            level: 5,
          },
          guts: {
            level: 4,
          },
          persuasion: {
            level: 4,
          },
          languages: {
            level: 2,
            concentrations: ['cantonese', 'english'],
          },
        },
      },
      attacks: [
        'No weapon: STR+1d6',
        'Abundance of pecking birds 4',
        'Closing the gate 4',
        'Step back to ward off monkey 4',
        'Weapon of opportunity 5',
      ],
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
        spirit: { level: 1, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 3,
          },
          drivin: {
            level: 3,
            concentrations: ['boat'],
          },
          fightin: {
            level: 4,
            concentrations: ['Sword'],
          },
          shootin: {
            level: 3,
            concentrations: ['Shotgun, Automatics'],
          },
          sneak: {
            level: 3,
          },
          swimmin: {
            level: 3,
          },
        },
        mental: {
          areaKnowledge: {
            level: 3,
            concentrations: ['Great Maze'],
          },
          gamblin: {
            level: 2,
          },
          guts: {
            level: 3,
          },
          overawe: {
            level: 2,
          },
          search: {
            level: 2,
          },
          tinkerin: {
            level: 3,
          },
        },
      },
      attacks: ['No weapon', 'Sword: STR + 2d8', 'Shotgun: *d6', 'Boat Gatling Gun: X * 3d8'],
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
        spirit: { level: 2, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          dodge: {
            level: 4,
          },
          fightin: {
            level: 2,
            concentrations: [`brawlin'`],
          },
          horseRidin: {
            level: 4,
          },
          quickDraw: {
            level: 6,
            concentrations: ['pistol'],
          },
          shootin: {
            level: 6,
            concentrations: ['pistol', 'shotgun'],
          },
          sneak: {
            level: 4,
          },
          sleightOfHand: {
            level: 3,
          },
        },
        mental: {
          bluff: {
            level: 4,
          },
          gamblin: {
            level: 6,
          },
          guts: {
            level: 5,
          },
          medicine: {
            level: 2,
            concentrations: ['general'],
          },
          overawe: {
            level: 5,
          },
          persuasion: {
            level: 2,
          },
          professional: {
            level: 4,
            concentrations: ['dentistry'],
          },
          languages: {
            level: 2,
            concentrations: ['latin', 'english'],
          },
          scrutinize: {
            level: 3,
          },
          search: {
            level: 2,
          },
          hexslinginSpirit: {
            level: 7,
          },
          hexslinginMien: {
            level: 7,
          },
          hexslinginCognition: {
            level: 7,
          },
          hexslinginSmarts: {
            level: 7,
          },
          hexslinginKnowledge: {
            level: 7,
          },
        },
      },
      attacks: [
        'No weapon',
        'Double-Action Peacemakers x2',
        'Winchester 76',
        'Double barreled Shotgun',
        `Helpin' hand`,
        'Hunch',
        'Missed me!',
        'Phantom fingers',
        'Private eye',
        'Soul blast',
        'Trinkets',
        'Geyser',
        'Ghost rider',
        'Shadow Walk',
        'Dead shot',
        'Ghost bullets',
        `Hail o' lead`,
        'Liberated Ammo',
        'Long shot',
        `Smokewagon Lightin'`,
        'Two-Gun Mojo',
      ],
    },
    {
      name: `Big Nose Kate`,
      pace: 6,
      size: 6,
      wind: 14,
      traits: {
        deftness: { level: 3, diceType: 8 },
        nimbleness: { level: 4, diceType: 6 },
        strength: { level: 1, diceType: 6 },
        quickness: { level: 3, diceType: 6 },
        vigor: { level: 2, diceType: 6 },
        cognition: { level: 4, diceType: 10 },
        knowledge: { level: 1, diceType: 8 },
        mien: { level: 2, diceType: 10 },
        smarts: { level: 4, diceType: 10 },
        spirit: { level: 3, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          lockpickin: {
            level: 2,
          },
          fightin: {
            level: 2,
            concentrations: ['knife'],
          },
          shootin: {
            level: 3,
            concentrations: ['pistol'],
          },
          sneak: {
            level: 4,
          },
        },
        mental: {
          areaKnowledge: {
            level: 2,
            concentrations: ['Arizona', 'Kansas'],
          },
          bluff: {
            level: 3,
          },
          gamblin: {
            level: 2,
          },
          guts: {
            level: 2,
          },
          medicine: {
            level: 3,
            concentrations: ['general'],
          },
          overawe: {
            level: 3,
          },
          ridicule: {
            level: 2,
          },
          scroungin: {
            level: 3,
          },
          search: {
            level: 3,
          },
          scrutinize: {
            level: 3,
          },
          streetwise: {
            level: 3,
          },
        },
      },
      attacks: ['No weapon', 'Pistol: 3d6', 'Derringer: 3d6'],
    },
    {
      name: `Conan Asgard`,
      pace: 10,
      size: 7,
      wind: 20,
      thickSkinned: true,
      traits: {
        deftness: { level: 3, diceType: 8 },
        nimbleness: { level: 3, diceType: 10 },
        strength: { level: 3, diceType: 12 },
        quickness: { level: 4, diceType: 8 },
        vigor: { level: 4, diceType: 10 },
        cognition: { level: 3, diceType: 8 },
        knowledge: { level: 3, diceType: 8 },
        mien: { level: 2, diceType: 10 },
        smarts: { level: 2, diceType: 10 },
        spirit: { level: 3, diceType: 10 },
      },
      aptitudes: {
        corporeal: {
          dodge: {
            level: 3,
          },
          fightin: {
            level: 5,
            concentrations: ['axe', 'sword', 'spear'],
          },
          throwin: {
            level: 4,
            concentrations: ['balanced'],
          },
          sneak: {
            level: 2,
          },
        },
        mental: {
          guts: {
            level: 4,
          },
          overawe: {
            level: 3,
          },
          persuasion: {
            level: 2,
          },
          performin: {
            level: 4,
            concentrations: ['juggling'],
          },
          search: {
            level: 3,
          },
          scrutinize: {
            level: 3,
          },
        },
      },
      attacks: [
        'No weapon',
        'Axe x 2: 2d6 + STR, DB: 1',
        'Cavalry Sabers x 2: 2d8 + STR, DB: 2',
        'Spear: 2d6 + STR, DB: 3',
      ],
    },
    {
      name: `Larry Lawson`,
      pace: 10,
      size: 6,
      wind: 22,
      undead: true,
      woundsToKill: 'special',
      traits: {
        deftness: { level: 2, diceType: 6 },
        nimbleness: { level: 2, diceType: 8 },
        strength: { level: 2, diceType: 8 },
        quickness: { level: 3, diceType: 8 },
        vigor: { level: 4, diceType: 12, dicePlus: 2 },
        cognition: { level: 3, diceType: 10 },
        knowledge: { level: 3, diceType: 8 },
        mien: { level: 2, diceType: 8 },
        smarts: { level: 2, diceType: 10 },
        spirit: { level: 3, diceType: 8 },
      },
      aptitudes: {
        corporeal: {
          climbin: {
            level: 1,
          },
          fightin: {
            level: 2,
            concentrations: ['brawlin'],
          },
          horseRidin: {
            level: 3,
          },
          sneak: {
            level: 4,
          },
        },
        mental: {
          areaKnowledge: {
            level: 2,
            concentrations: ['Tombstone', 'Salt Lake City'],
          },
          arts: {
            level: 3,
            concentrations: ['drawing'],
          },
          bluff: {
            level: 4,
          },
          gamblin: {
            level: 3,
          },
          guts: {
            level: 4,
          },
          persuasion: {
            level: 2,
          },
          professional: {
            level: 4,
            concentrations: ['journalism'],
          },
          search: {
            level: 3,
          },
          scrutinize: {
            level: 3,
          },
          streetwise: {
            level: 2,
          },
          trackin: {
            level: 2,
          },
        },
      },
      attacks: ['No weapon', 'Ghost'],
    },
  ],
};

export default allies;
