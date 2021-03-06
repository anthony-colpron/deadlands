const gomorra = {
    name: 'Gomorra',
    list: [
        {
            name: 'Katie Karl',
            pace: 8,
            size: 6,
            wind: 16,
            traits: {
                deftness: { level: 2, diceType: 12 },
                nimbleness: { level: 3, diceType: 8 },
                strength: { level: 3, diceType: 6 },
                quickness: { level: 4, diceType: 10 },
                vigor: { level: 2, diceType: 8 },
                cognition: { level: 4, diceType: 12 },
                knowledge: { level: 2, diceType: 10 },
                mien: { level: 3, diceType: 10 },
                smarts: { level: 4, diceType: 8 },
                spirit: { level: 2, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2
                    },
                    fightin: {
                        level: 4,
                        concentrations: ['brawlin', 'club']
                    },
                    dodge: {
                        level: 3
                    },
                    horseRidin: {
                        level: 4
                    },
                    quickDraw: {
                        level: 5,
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'rifle']
                    },
                    sneak: {
                        level: 2
                    }
                },
                mental: {
                    academia: {
                        level: 4,
                        concentrations: ['occult']
                    },
                    areaKnowledge: {
                        level: 3,
                        concentrations: ['Texas']
                    },
                    gamblin: {
                        level: 3
                    },
                    guts: {
                        level: 2
                    },
                    languages: {
                        level: 2,
                        concentrations: ['Comanche']
                    },
                    leadership: {
                        level: 4,
                    },
                    persuasion: {
                        level: 4
                    },
                    scroungin: {
                        level: 3
                    },
                    search: {
                        level: 4
                    },
                    survival: {
                        level: 4,
                        concentrations: ['plains']
                    },
                    trackin: {
                        level: 3,
                    },
                }

            },
            attacks: ['No weapon', 'DA Peacemaker: 3d6', 'Club: STR + 1d4'],
            note: 'Brave, Nerves of Steel',
        },
        {
            name: 'Zeke Beauchamp',
            pace: 8,
            size: 7,
            wind: 16,
            thickSkinned: true,
            traits: {
                deftness: { level: 2, diceType: 10 },
                nimbleness: { level: 3, diceType: 8 },
                strength: { level: 4, diceType: 10 },
                quickness: { level: 2, diceType: 6 },
                vigor: { level: 5, diceType: 10 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 3, diceType: 10 },
                smarts: { level: 1, diceType: 6 },
                spirit: { level: 3, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`sword`]
                    },
                    dodge: {
                        level: 3
                    },
                    teamster: {
                        level: 2
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'rifle']
                    },
                    sneak: {
                        level: 2
                    },
                    throwin: {
                        level: 2,
                        concentrations: ['axe']
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 4,
                        concentrations: ['Florida Everglades']
                    },
                    animalWranglin: {
                        level: 4,
                    },
                    guts: {
                        level: 3
                    },
                    search: {
                        level: 3
                    },
                    survival: {
                        level: 3,
                        concentrations: ['swamp']
                    },
                    trackin: {
                        level: 4,
                    },
                }

            },
            attacks: ['No weapon', 'Machete: STR + 1d8', 'Winchester 76: 4d8 +2'],
            note: 'Brave, Brawny, Thick skinned'
        },
        {
            name: 'Tombstone Frank',
            pace: 8,
            size: 6,
            wind: 12,
            undead: true,
            thickSkinned: true,
            sand: 2,
            traits: {
                deftness: { level: 2, diceType: 10 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 3, diceType: 6 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 4, diceType: 6 },
                cognition: { level: 2, diceType: 6 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 3, diceType: 10 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 3, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    fightin: {
                        level: 3,
                        concentrations: ['brawlin']
                    },
                    horseRidin: {
                        level: 4
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'shotgun', 'rifle']
                    },
                    speedLoad: {
                        level: 3,
                    },
                    sneak: {
                        level: 1
                    }
                },
                mental: {
                    animalWranglin: {
                        level: 2,
                    },
                    gamblin: {
                        level: 3
                    },
                    guts: {
                        level: 5
                    },
                    ridicule: {
                        level: 2
                    },
                    search: {
                        level: 3
                    },
                }

            },
            attacks: ['No weapon', 'DA PEacemaker: 3d6', 'Spook 2', 'Jinx 2', 'Ghost 3'],
            note: 'Grit: 1, Sand 2, Thick skinned',
        },
        {
            name: 'Danny Hamilton',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 2, diceType: 12 },
                nimbleness: { level: 2, diceType: 10 },
                strength: { level: 3, diceType: 8 },
                quickness: { level: 4, diceType: 10 },
                vigor: { level: 4, diceType: 6 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 3, diceType: 6 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 2, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`, 'bayonnet']
                    },
                    dodge: {
                        level: 4
                    },
                    horseRidin: {
                        level: 3
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'shotgun']
                    },
                    speedLoad: {
                        level: 2,
                    },
                    sneak: {
                        level: 2
                    },
                    throwin: {
                        level: 2,
                        concentrations: ['balanced'],
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 2,
                        concentrations: ['Arizona']
                    },
                    academia: {
                        level: 3,
                        concentrations: ['occult']
                    },
                    guts: {
                        level: 4
                    },
                    persuasion: {
                        level: 3
                    },
                    search: {
                        level: 2
                    },
                    streetwise: {
                        level: 3,
                    },
                    survival: {
                        level: 2,
                        concentrations: ['desert'],
                    },
                    trackin: {
                        level: 2,
                    },
                }

            },
            attacks: ['No weapon', 'DA Peacemaker: 3d6', 'Winchester 76: 4d8 +2',
                'Rifle Butt: STR + 1d6, DR: 1', 'Bayonet: STR + 2d6, DR: 2', 'MKII grenades: 3d12', 'Groin Shot', 'Unarm'],
            note: 'Grit: 1, Brave, Keen',
        },
        {
            name: 'Bobo Leveux',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 3, diceType: 8 },
                strength: { level: 1, diceType: 6 },
                quickness: { level: 3, diceType: 10 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 4, diceType: 10 },
                knowledge: { level: 1, diceType: 8 },
                mien: { level: 4, diceType: 8 },
                smarts: { level: 3, diceType: 12 },
                spirit: { level: 2, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    dodge: {
                        level: 2
                    },
                    filchin: {
                        level: 3,
                    },
                    horseRidin: {
                        level: 2
                    },
                    shootin: {
                        level: 2,
                        concentrations: ['pistol']
                    },
                    swimmin: {
                        level: 2,
                    },
                    sleightOfHand: {
                        level: 4,
                    },
                    sneak: {
                        level: 3
                    },
                },
                mental: {
                    academia: {
                        level: 3,
                        concentrations: ['occult']
                    },
                    guts: {
                        level: 4,
                    },
                    languages: {
                        level: 2,
                        concentrations: ['french']
                    },
                    performin: {
                        level: 2,
                        concentrations: ['oratory']
                    },
                    search: {
                        level: 3
                    },
                    streetwise: {
                        level: 5,
                    },
                    medicine: {
                        concentrations: ['general'],
                        level: 2,
                    },
                    taleTellin: {
                        level: 2,
                    },
                    hexslinginSpirit: {
                        level: 4,
                    },
                    hexslinginSmarts: {
                        level: 4,
                    },
                    hexslinginCognition: {
                        level: 4,
                    },
                    hexslinginKnowledge: {
                        level: 4,
                    },
                },
            },
            attacks: ['No weapon', 'Derringer 3d6',
            'Diversion', 'Helpin hand', 'Hunch', 'Missed Me',
            'Soul Blast', 'Phantom fingers', 'Quicksand'],
            notes: 'Grit 2'
        },
        {
            name: 'Los Ojos Del Dios',
            pace: 8,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 6 },
                strength: { level: 1, diceType: 6 },
                quickness: { level: 3, diceType: 6 },
                vigor: { level: 3, diceType: 6 },
                cognition: { level: 3, diceType: 12 },
                knowledge: { level: 2, diceType: 4 },
                mien: { level: 3, diceType: 8 },
                smarts: { level: 2, diceType: 6 },
                spirit: { level: 3, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    fightin: {
                        level: 1,
                        concentrations: [`knife`]
                    },
                    dodge: {
                        level: 2
                    },
                    horseRidin: {
                        level: 1
                    },
                    sneak: {
                        level: 1
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 3,
                        concentrations: ['Chihuahua']
                    },
                    academia: {
                        level: 3,
                        concentrations: ['occult']
                    },
                    guts: {
                        level: 4
                    },
                    languages: {
                        level: 1,
                        concentrations: ['english']
                    },
                    trade: {
                        level: 3,
                        concentrations: ['farming'],
                    },
                    persuasion: {
                        level: 3
                    },
                    search: {
                        level: 2
                    },
                    scrutinize: {
                        level: 4,
                    },
                    survival: {
                        level: 5,
                        concentrations: ['desert'],
                    },
                    faith: {
                        level: 6,
                        concentrations: ['catholicism']
                    },
                }

            },
            attacks: ['No weapon', 'Bowie Knife: STR + 1d6', 'Censure', 'Empathy', 'Expose', 'Guide', 'Sentinel'],
            note: 'Blind'
        },
        {
            name: 'Richard Sawyer',
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
                spirit: { level: 3, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`, 'knife', 'bayonet']
                    },
                    dodge: {
                        level: 2
                    },
                    horseRidin: {
                        level: 3
                    },
                    quickDraw: {
                        level: 2,
                        concentrations: ['pistol'],
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'shotgun', 'rifle']
                    },
                    sneak: {
                        level: 2
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 4,
                        concentrations: ['Texas']
                    },
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2,
                    },
                    overawe: {
                        level: 4
                    },
                    leadership: {
                        level: 3
                    },
                    search: {
                        level: 2
                    },
                    survival: {
                        level: 3,
                        concentrations: ['desert'],
                    },
                }

            },
            attacks: ['No weapon', 'DA Peacemaker: 3d6', 'DB Shotgun: *d6', 'Winchester 76: 4d8', 'Bayonet: STR + 2d6'],
            note: '3 chips blanches',
        },
        {
            name: 'Joe Everett',
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
                spirit: { level: 3, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`, 'knife']
                    },
                    dodge: {
                        level: 2
                    },
                    horseRidin: {
                        level: 3
                    },
                    quickDraw: {
                        level: 2,
                        concentrations: ['pistol'],
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol', 'automatics']
                    },
                    sneak: {
                        level: 2
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 4,
                        concentrations: ['Texas']
                    },
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2,
                    },
                    overawe: {
                        level: 4
                    },
                    leadership: {
                        level: 3
                    },
                    search: {
                        level: 2
                    },
                    survival: {
                        level: 3,
                        concentrations: ['desert'],
                    },
                }

            },
            attacks: ['No weapon', 'Pistol: 3d6', 'Gatling Gun 3d8 *'],
            note: '3 chips blanches',
        },
        {
            name: 'Ryan Leonard',
            pace: 8,
            size: 6,
            wind: 12,
            traits: {
                deftness: { level: 2, diceType: 6 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 8 },
                quickness: { level: 2, diceType: 8 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 3, diceType: 6 },
                mien: { level: 1, diceType: 10 },
                smarts: { level: 3, diceType: 10 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    shootin: {
                        level: 2,
                        concentrations: ['pistol']
                    },
                },
                mental: {
                    areaKnowledge: {
                        level: 3,
                        concentrations: ['Gomorra'],
                    },
                    bluff: {
                        level: 5,
                    },
                    guts: {
                        level: 1,
                    },
                    persuasion: {
                        level: 3,
                    },
                    ridicule: {
                        level: 4,
                    },
                    streetwise: {
                        level: 4,
                    },
                }

            },
            attacks: ['No weapon', 'DA Peacemaker: 3d6'],
        },
        {
            name: `Jack Picky Moore`,
            pace: 6,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 3, diceType: 10 },
                nimbleness: { level: 4, diceType: 6 },
                strength: { level: 1, diceType: 6 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 4, diceType: 10 },
                knowledge: { level: 1, diceType: 8 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 4, diceType: 10 },
                spirit: { level: 3, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    lockpickin: {
                        level: 3,
                    },
                    filchin: {
                        level: 3,
                    },
                    sleightOfHand: {
                        level: 3,
                    },
                    fightin: {
                        level: 2,
                        concentrations: ['knife']
                    },
                    horseRidin: {
                        level: 2,
                    },
                    shootin: {
                        level: 2,
                        concentrations: ['pistol']
                    },
                    sneak: {
                        level: 4,
                    },
                },
                mental: {
                    academia: {
                        level: 2,
                        concentrations: ['history']
                    },
                    gamblin: {
                        level: 2,
                    },
                    guts: {
                        level: 2
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
                        level: 1,
                    },
                },
            },
            attacks: [
            'No weapon',
            'Knife: STR + 1d4',
            'Pistol: 3d6',
            'Derringer: 3d6',
            ]
        },
        {
            name: `Boomie Williams`,
            pace: 10,
            size: 6,
            wind: 14,
            traits: {
                deftness: { level: 3, diceType: 8 },
                nimbleness: { level: 4, diceType: 10 },
                strength: { level: 1, diceType: 6 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 4, diceType: 8 },
                knowledge: { level: 1, diceType: 8 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 4, diceType: 6 },
                spirit: { level: 3, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 2,
                        concentrations: ['knife']
                    },
                    horseRidin: {
                        level: 3,
                    },
                    shootin: {
                        level: 2,
                        concentrations: ['pistol']
                    },
                    throwin: {
                        level: 3,
                        concentrations: ['balanced', 'unbalanced'],
                    },
                    sneak: {
                        level: 4,
                    },
                },
                mental: {
                    demolition: {
                        level: 3,
                    },
                    guts: {
                        level: 2
                    },
                    scroungin: {
                        level: 3,
                    },
                    search: {
                        level: 3,
                    },
                    streetwise: {
                        level: 1,
                    },
                },
            },
            attacks: [
            'No weapon',
            'Knife: STR + 1d4',
            'Pistol: 3d6',
            'Dynamite x 6',
            ]
        },
        {
            name: 'Adam Hart',
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
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    dodge: {
                        level: 3
                    },
                    horseRidin: {
                        level: 3
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['shotgun', 'rifle']
                    },
                    sneak: {
                        level: 1,
                    },
                },
                mental: {
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    persuasion: {
                        level: 2
                    },
                    search: {
                        level: 3
                    },
                }

            },
            attacks: ['No weapon', 'DB Shotgun: *d6', 'Spencer Carbine: 4d8'],
            notes: 'Fat, mais pas Big Un'
        },
        {
            name: 'Brian Hart',
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
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    dodge: {
                        level: 3
                    },
                    horseRidin: {
                        level: 3
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['shotgun', 'rifle']
                    },
                    sneak: {
                        level: 1,
                    },
                },
                mental: {
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    persuasion: {
                        level: 2
                    },
                    search: {
                        level: 3
                    },
                }

            },
            attacks: ['No weapon', 'DB Shotgun: *d6', 'Spencer Carbine: 4d8']
        },
        {
            name: 'Sweetrock Guard',
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
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 2
                    },
                    fightin: {
                        level: 3,
                        concentrations: [`brawlin'`]
                    },
                    dodge: {
                        level: 3
                    },
                    horseRidin: {
                        level: 3
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['shotgun', 'rifle']
                    },
                    sneak: {
                        level: 1,
                    },
                },
                mental: {
                    bluff: {
                        level: 2
                    },
                    horseRidin: {
                        level: 2,
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 3
                    },
                    persuasion: {
                        level: 2
                    },
                    search: {
                        level: 3
                    },
                }

            },
            attacks: ['No weapon', 'DB Shotgun: *d6', 'Spencer Carbine: 4d8']
        },
        {
            name: 'Big Jake',
            pace: 8,
            size: 5,
            wind: 12,
            traits: {
                deftness: { level: 2, diceType: 10 },
                nimbleness: { level: 3, diceType: 8 },
                strength: { level: 2, diceType: 6 },
                quickness: { level: 2, diceType: 8 },
                vigor: { level: 3, diceType: 6 },
                cognition: { level: 3, diceType: 10 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 3, diceType: 6 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 1, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1
                    },
                    drivin: {
                        level: 4,
                        concentrations: ['boat'],
                    },
                    filchin: {
                        level: 4,
                    },
                    lockpickin: {
                        level: 2
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['pistol']
                    },
                    sneak: {
                        level: 2,
                    },
                    swimmin: {
                        level: 4,
                    },
                },
                mental: {
                    ridicule: {
                        level: 2
                    },
                    scroungin: {
                        level: 2
                    },
                    scrutinize: {
                        level: 4
                    },
                    trade: {
                        level: 4,
                        concentrations: ['dock worker']
                    },
                }

            },
            attacks: ['No weapon', 'Pistol: 3d6', 'Spencer Carbine: 4d8'],
            note: 'Scrawny (Size 5), Big ears'
        },
        {
            name: 'Scooter',
            pace: 10,
            size: 7,
            wind: 28,
            traits: {
                deftness: { level: 3, diceType: 10 },
                nimbleness: { level: 3, diceType: 10 },
                strength: { level: 4, diceType: 12 },
                quickness: { level: 2, diceType: 8 },
                vigor: { level: 4, diceType: 12 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 1, diceType: 6 },
                mien: { level: 1, diceType: 6 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 2, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    fightin: {
                        level: 4,
                        concentrations: [`knife`]
                    },
                    shootin: {
                        level: 5,
                        concentrations: ['rifle']
                    },
                    speedLoad: {
                        level: 3,
                        concentrations: ['rifle']
                    },
                    swimmin: {
                        level: 3,
                    }
                },
                mental: {
                    survival: {
                        level: 2
                    },
                    search: {
                        level: 3
                    },
                    trackin: {
                        level: 2
                    },
                    trade: {
                        level: 3,
                        concentrations: ['dock worker']
                    },
                }

            },
            attacks: ['No weapon', 'Modified Remington 1871: 6d10', 'Bowie Knife: STR + 1d6'],
            note: 'Brawny (Size 7), Nevers of steel, Tough as nail 5'
        },
        {
            name: 'Little Running Bear',
            pace: 10,
            size: 7,
            wind: 20,
            traits: {
                deftness: { level: 4, diceType: 10 },
                nimbleness: { level: 4, diceType: 10 },
                strength: { level: 3, diceType: 12 },
                quickness: { level: 2, diceType: 10 },
                vigor: { level: 4, diceType: 12 },
                cognition: { level: 5, diceType: 8 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 2, diceType: 6 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 3, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    bow: {
                        level: 5,
                    },
                    climbin: {
                        level: 3,
                    },
                    dodge: {
                        level: 2,
                    },
                    drivin: {
                        level: 4,
                        concentrations: ['boat'],
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`knife`, 'war club', 'brawlin', 'tomahawk']
                    },
                    horseRidin: {
                        level: 4,
                    },
                    shootin: {
                        level: 2,
                        concentrations: ['rifle', 'pistol']
                    },
                    sneak: {
                        level: 4,
                    },
                    swimmin: {
                        level: 3,
                    }
                },
                mental: {
                    bluff: {
                        level: 2
                    },
                    guts: {
                        level: 2
                    },
                    overawe: {
                        level: 4
                    },
                    survival: {
                        level: 3,
                        concentrations: ['forests']
                    },
                    search: {
                        level: 3
                    },
                    trackin: {
                        level: 3
                    },
                    trade: {
                        level: 3,
                        concentrations: ['fishing']
                    },
                    faith: {
                        level: 4,
                    },
                }

            },
            attacks: ['No weapon', 'War club: STR + 1d6 (1 DB)', 'Warcry: 4d6',
            'Paint: 4d8', 'Strength of the bear', 'Wilderness walk'],
            note: 'Brawny (Size 7), Brave, Shaman',
        },
        {
            name: 'John Bloody Knife',
            pace: 10,
            size: 6,
            wind: 30,
            traits: {
                deftness: { level: 4, diceType: 10 },
                nimbleness: { level: 3, diceType: 10 },
                strength: { level: 4, diceType: 10 },
                quickness: { level: 5, diceType: 8 },
                vigor: { level: 2, diceType: 12 },
                cognition: { level: 2, diceType: 8 },
                knowledge: { level: 2, diceType: 6 },
                mien: { level: 1, diceType: 6 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 3, diceType: 8 }
            },
            aptitudes: {
                corporeal: {
                    bow: {
                        level: 3,
                    },
                    climbin: {
                        level: 2,
                    },
                    dodge: {
                        level: 2,
                    },
                    fightin: {
                        level: 4,
                        concentrations: [`knife`, 'war club']
                    },
                    horseRidin: {
                        level: 2,
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['rifle']
                    },
                    sneak: {
                        level: 4,
                    },
                },
                mental: {
                    guts: {
                        level: 4
                    },
                    languages: {
                        level: 2,
                        concentrations: ['english'],
                    },
                    overawe: {
                        level: 2
                    },
                    survival: {
                        level: 5,
                        concentrations: ['great plains']
                    },
                    search: {
                        level: 1
                    },
                    trackin: {
                        level: 4
                    },
                },
            },
            attacks: ['No weapon', 'Tomahawk: STR + 2d6', 'Bowie Knife: STR + 1d6',
            'Winchester 73: 4d8', 'Bow: STR + 1d6'],
            note: 'Brave, Nerves of Steel, Tough as nail 5'
        },
        {
            name: 'Reverend Simon McPherson',
            pace: 6,
            size: 6,
            wind: 16,
            traits: {
                deftness: { level: 2, diceType: 8 },
                nimbleness: { level: 3, diceType: 6 },
                strength: { level: 1, diceType: 6 },
                quickness: { level: 2, diceType: 6 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 3, diceType: 10 },
                knowledge: { level: 4, diceType: 8 },
                mien: { level: 3, diceType: 8 },
                smarts: { level: 2, diceType: 8 },
                spirit: { level: 5, diceType: 10 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1,
                    },
                    dodge: {
                        level: 1,
                    },
                    shootin: {
                        level: 2,
                        concentrations: ['shotgun']
                    },
                    sneak: {
                        level: 2,
                    },
                },
                mental: {
                    academia: {
                        level: 4,
                        concentrations: ['theology'],
                    },
                    guts: {
                        level: 2
                    },
                    performin: {
                        level: 4,
                        concentrations: ['sermons'],
                    },
                    professional: {
                        level: 4,
                        concentrations: ['minister'],
                    },
                    search: {
                        level: 2
                    },
                    scrutinize: {
                        level: 2
                    },
                    faith: {
                        level: 5,
                        concentrations: ['Baptist'],
                    },
                },
            },
            attacks: ['No weapon', 'Shotgun: *d6 (+2 to hit)', 'Chastise',
            'Consecrate armament', 'Inspiration', 'Smite', 'Wrath'],
            note: 'The Voice: Grating'
        },
        {
            name: 'Erik Zarkov',
            pace: 10,
            size: 8,
            wind: 12,
            traits: {
                deftness: { level: 3, diceType: 10 },
                nimbleness: { level: 2, diceType: 8 },
                strength: { level: 2, diceType: 6 },
                quickness: { level: 3, diceType: 8 },
                vigor: { level: 2, diceType: 6 },
                cognition: { level: 2, diceType: 10 },
                knowledge: { level: 3, diceType: 10 },
                mien: { level: 4, diceType: 6 },
                smarts: { level: 3, diceType: 12 },
                spirit: { level: 4, diceType: 6 }
            },
            aptitudes: {
                corporeal: {
                    climbin: {
                        level: 1,
                    },
                    dodge: {
                        level: 3,
                    },
                    fightin: {
                        level: 2,
                        concentrations: ['gun butt'],
                    },
                    shootin: {
                        level: 4,
                        concentrations: ['Ray gun, flamethrower, pistol, dynamite launcher']
                    },
                    sneak: {
                        level: 2,
                    },
                    speedLoad: {
                        level: 2,
                        concentrations: ['dynamite launcher'],
                    },
                },
                mental: {
                    artillery: {
                        level: 2,
                    },
                    guts: {
                        level: 2
                    },
                    science: {
                        level: 5,
                        concentrations: ['general', 'physics', 'engineering', 'physics'],
                    },
                    overawe: {
                        level: 4,
                    },
                    ridicule: {
                        level: 2,
                    },
                    search: {
                        level: 1
                    },
                    tinkerin: {
                        level: 4,
                    },
                },
            },
            attacks: ['No weapon', 'Detomizer: 4d12', 'Electrostatic gun: 1d4 wind/pump'],
            note: 'Armor 2, Rocket Pack, Fleet footed, Luck of the irish (4 chips)'
        },
    ]
};

export default gomorra;