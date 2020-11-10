/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shuffleDeck } from '../Tools/functions';
import deck from '../Tools/deck';
import NPCs from '../DATA/NPCs';
import NPC from '../models/NPC';

const initialDeck = shuffleDeck(deck);

type MainState = {
  NPCs: any;
  loadedNPCs: NPC[];
  deck: string[];
};

const initialState: MainState = {
  NPCs,
  loadedNPCs: [],
  deck: initialDeck,
};

const mainSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    shuffleDeck(state): void {
      state.deck = shuffleDeck(state.deck);
    },
    removeActionsFromDeck(state, action: PayloadAction<number>): void {
      state.deck = state.deck.slice(action.payload);
    },
    loadNPC(state, action: PayloadAction<{ listIndex: number; npcIndex: number }>): void {
      const { listIndex, npcIndex } = action.payload;
      const npcToLoad = state.NPCs[listIndex].list[npcIndex];

      state.loadedNPCs.push(new NPC(npcToLoad));
    },
  },
});

export const { loadNPC } = mainSlice.actions;

export default mainSlice.reducer;
