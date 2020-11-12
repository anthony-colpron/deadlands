import { WoundLocationKeys } from '../models/enums';
import NPC from '../models/NPC';

type Deck = { order: number; text: string }[];

export type MainState = {
  NPCs: any;
  loadedNPCs: NPC[];
  deck: Deck;
  log: string[];
};

export type LoadNpcAction = { listIndex: number; npcIndex: number };

export type AddWoundAction = {
  wounds: number;
  location: WoundLocationKeys;
  isMagicDamage?: boolean;
  index: number;
};

export type UpdateNumericValueAction = { index: number; value: number };
