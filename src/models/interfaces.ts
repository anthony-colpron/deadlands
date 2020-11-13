import { SkillCheckRoll } from '../Tools/gameUtils';
import { TraitsEnum } from './enums';

export interface Trait {
  level: number;
  diceType: number;
  dicePlus?: number;
}

export interface Traits {
  [TraitsEnum.Deftness]: Trait;
  [TraitsEnum.Nimbleness]: Trait;
  [TraitsEnum.Strength]: Trait;
  [TraitsEnum.Quickness]: Trait;
  [TraitsEnum.Vigor]: Trait;
  [TraitsEnum.Cognition]: Trait;
  [TraitsEnum.Knowledge]: Trait;
  [TraitsEnum.Mien]: Trait;
  [TraitsEnum.Smarts]: Trait;
  [TraitsEnum.Spirit]: Trait;
}

export interface Aptitude {
  level: number;
  concentrations?: string[];
}

export interface Aptitudes {
  corporeal: {
    [key: string]: Aptitude;
  };
  mental: {
    [key: string]: Aptitude;
  };
}

export type StunRollResult = {
  vigorRoll: SkillCheckRoll;
  target: number;
  modifiers: number;
};

export type Attack = {
  name: string;
  stats?: {
    numberOfDices: number;
    diceType: number;
    addStrength?: boolean;
  };
};

export const defaultTrait: Trait = {
  level: 2,
  diceType: 6,
};

export const defaultTraits: Traits = {
  [TraitsEnum.Deftness]: { ...defaultTrait },
  [TraitsEnum.Nimbleness]: { ...defaultTrait },
  [TraitsEnum.Strength]: { ...defaultTrait },
  [TraitsEnum.Quickness]: { ...defaultTrait },
  [TraitsEnum.Vigor]: { ...defaultTrait },
  [TraitsEnum.Cognition]: { ...defaultTrait },
  [TraitsEnum.Knowledge]: { ...defaultTrait },
  [TraitsEnum.Mien]: { ...defaultTrait },
  [TraitsEnum.Smarts]: { ...defaultTrait },
  [TraitsEnum.Spirit]: { ...defaultTrait },
};
