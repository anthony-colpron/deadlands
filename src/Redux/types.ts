import { NPCStatuses, WoundLocationKeys } from '../models/enums';
import NPC from '../models/NPC';

type Deck = { order: number; text: string }[];

export type MainState = {
  NPCs: any;
  loadedNPCs: NPC[];
  deck: Deck;
};

export type LoadNpcAction = { listIndex: number; npcIndex: number };

export type UpdateNpcStatusAction = {
  woundPenalties: number;
  otherModifiers: number;
  stun: number;
  status: NPCStatuses;
  index: number;
};

export type AddWoundAction = {
  wounds: number;
  location: WoundLocationKeys;
  isMagicDamage?: boolean;
  index: number;
};
