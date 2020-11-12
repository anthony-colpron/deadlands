import { SkillCheckRoll } from '../Tools/gameUtils';

export interface Trait {
  level: number;
  diceType: number;
  dicePlus?: number;
}

export interface Traits {
  deftness: Trait;
  nimbleness: Trait;
  strength: Trait;
  quickness: Trait;
  vigor: Trait;
  cognition: Trait;
  knowledge: Trait;
  mien: Trait;
  smarts: Trait;
  spirit: Trait;
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

export const defaultTrait: Trait = {
  level: 2,
  diceType: 6,
};

export const defaultTraits: Traits = {
  deftness: { ...defaultTrait },
  nimbleness: { ...defaultTrait },
  strength: { ...defaultTrait },
  quickness: { ...defaultTrait },
  vigor: { ...defaultTrait },
  cognition: { ...defaultTrait },
  knowledge: { ...defaultTrait },
  mien: { ...defaultTrait },
  smarts: { ...defaultTrait },
  spirit: { ...defaultTrait },
};
