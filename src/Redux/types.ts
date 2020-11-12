import { WoundLocationKeys } from '../models/enums';
import { StunRollResult } from '../models/interfaces';
import NPC from '../models/NPC';

type Deck = { order: number; text: string }[];

export type MainState = {
  NPCs: any;
  loadedNPCs: NPC[];
  deck: Deck;
};

export type LoadNpcAction = { listIndex: number; npcIndex: number };

export type AddWoundParams = {
  wounds: number;
  location: WoundLocationKeys;
  isMagicDamage?: boolean;
};

export type AddWoundResult = {
  woundedNPC: NPC;
  windResult?: number;
  stunResult?: StunRollResult;
};

export type UpdateNumericValueAction = { index: number; value: number };
