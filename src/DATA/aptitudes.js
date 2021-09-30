import { TraitsEnum } from '../models/enums';

const aptitudes = {
  academia: {
    name: `Academia`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  alchemy: {
    name: `Alchemy`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  animalWranglin: {
    name: `Animal Wranglin'`,
    associatedTrait: TraitsEnum.Mien,
  },
  areaKnowledge: {
    name: `Area Knowledge`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  artillery: {
    name: `Artillery`,
    associatedTrait: TraitsEnum.Cognition,
  },
  arts: {
    name: `Arts`,
    associatedTrait: TraitsEnum.Cognition,
  },
  bluff: {
    name: `Bluff`,
    associatedTrait: TraitsEnum.Smarts,
  },
  bow: {
    name: `Bow`,
    associatedTrait: TraitsEnum.Deftness,
  },
  chi: {
    name: `Ch'i`,
    associatedTrait: TraitsEnum.Spirit,
  },
  climbin: {
    name: `Climbin'`,
    associatedTrait: TraitsEnum.Nimbleness,
  },
  demolition: {
    name: `Demolition`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  disguise: {
    name: `Disguise`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  dodge: {
    name: `Dodge`,
    associatedTrait: TraitsEnum.Nimbleness,
  },
  drivin: {
    name: `Drivin'`,
    associatedTrait: TraitsEnum.Nimbleness,
  },
  faith: {
    name: `Faith`,
    associatedTrait: TraitsEnum.Spirit,
  },
  fightin: {
    name: `Fightin'`,
    associatedTrait: TraitsEnum.Nimbleness,
  },
  filchin: {
    name: `Filchin'`,
    associatedTrait: TraitsEnum.Deftness,
  },
  gamblin: {
    name: `Gamblin'`,
    associatedTrait: TraitsEnum.Smarts,
  },
  guts: {
    name: `Guts`,
    associatedTrait: TraitsEnum.Spirit,
  },
  hexslinginSpirit: {
    name: `Hex Spirit`,
    associatedTrait: TraitsEnum.Spirit,
  },
  hexslinginMien: {
    name: `Hex Mien`,
    associatedTrait: TraitsEnum.Mien,
  },
  hexslinginCognition: {
    name: `Hex Cog`,
    associatedTrait: TraitsEnum.Cognition,
  },
  hexslinginSmarts: {
    name: `Hex Smarts`,
    associatedTrait: TraitsEnum.Smarts,
  },
  hexslinginKnowledge: {
    name: `Hex Know`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  horseRidin: {
    name: `Horse Ridin'`,
    associatedTrait: TraitsEnum.Nimbleness,
  },
  languages: {
    name: `Languages`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  leadership: {
    name: `Leadership`,
    associatedTrait: TraitsEnum.Mien,
  },
  lockpickin: {
    name: `Lockpickin'`,
    associatedTrait: TraitsEnum.Deftness,
  },
  madScience: {
    name: `Mad Science`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  medicine: {
    name: `Medicine`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  meditation: {
    name: `Meditation`,
    associatedTrait: TraitsEnum.Spirit,
  },
  overawe: {
    name: `Overawe`,
    associatedTrait: TraitsEnum.Mien,
  },
  performin: {
    name: `Performin'`,
    associatedTrait: TraitsEnum.Mien,
  },
  persuasion: {
    name: `Persuasion`,
    associatedTrait: TraitsEnum.Mien,
  },
  professional: {
    name: `Professional`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  quickDraw: {
    name: `Quick Draw`,
    associatedTrait: TraitsEnum.Quickness,
  },
  ridicule: {
    name: `Ridicule`,
    associatedTrait: TraitsEnum.Smarts,
  },
  ritual: {
    name: `Ritual`,
    associatedTrait: TraitsEnum.Spirit,
  },
  science: {
    name: `Science`,
    associatedTrait: TraitsEnum.Knowledge,
  },
  scrutinize: {
    name: `Scrutinize`,
    associatedTrait: TraitsEnum.Cognition,
  },
  search: {
    name: `Search`,
    associatedTrait: TraitsEnum.Cognition,
  },
  scroungin: {
    name: `Scroungin'`,
    associatedTrait: TraitsEnum.Smarts,
  },
  shootin: {
    name: `Shootin'`,
    associatedTrait: TraitsEnum.Deftness,
  },
  sleightOfHand: {
    name: `Sleight of Hand`,
    associatedTrait: TraitsEnum.Deftness,
  },
  sneak: {
    name: `Sneak`,
    associatedTrait: TraitsEnum.Nimbleness,
  },
  speedLoad: {
    name: `Speed-Load`,
    associatedTrait: TraitsEnum.Deftness,
  },
  streetwise: {
    name: `Streetwise`,
    associatedTrait: TraitsEnum.Smarts,
  },
  survival: {
    name: `Survival`,
    associatedTrait: TraitsEnum.Smarts,
  },
  swimmin: {
    name: `Swimmin'`,
    associatedTrait: TraitsEnum.Nimbleness,
  },
  swing: {
    name: 'Swing',
    associatedTrait: TraitsEnum.Nimbleness,
  },
  taleTellin: {
    name: `Tale-Tellin'`,
    associatedTrait: TraitsEnum.Mien,
  },
  teamster: {
    name: `Teamster`,
    associatedTrait: TraitsEnum.Nimbleness,
  },
  throwin: {
    name: `Throwin'`,
    associatedTrait: TraitsEnum.Deftness,
  },
  tinkerin: {
    name: `Tinkerin'`,
    associatedTrait: TraitsEnum.Smarts,
  },
  trackin: {
    name: `Trackin'`,
    associatedTrait: TraitsEnum.Cognition,
  },
  trade: {
    name: `Trade`,
    associatedTrait: TraitsEnum.Knowledge,
  },
};

export const attackAptitudes = [
  aptitudes.fightin,
  aptitudes.shootin,
  aptitudes.hexslinginSpirit,
  aptitudes.hexslinginCognition,
  aptitudes.hexslinginKnowledge,
  aptitudes.hexslinginSmarts,
  aptitudes.hexslinginMien,
  aptitudes.faith,
];

export default aptitudes;
