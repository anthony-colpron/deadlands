/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shuffleDeck, copyObject } from '../Tools/functions';
import deck from '../Tools/deck';
import NPCs from '../DATA/NPCs';
import NPC from '../models/NPC';

import { MainState, UpdateNpcStatusAction, LoadNpcAction } from './types';
import { NPCStatuses } from '../models/enums';

const initialDeck = shuffleDeck(deck);

const initialState: MainState = {
  NPCs,
  loadedNPCs: [],
  deck: initialDeck,
};

const mainSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    shuffleActionDeck(state): void {
      state.deck = shuffleDeck(deck);
    },
    dealAction(state, action: PayloadAction<number>): void {
      state.deck = state.deck.slice(action.payload);
    },
    loadNPC(state, action: PayloadAction<LoadNpcAction>): void {
      const { listIndex, npcIndex } = action.payload;
      const npcToLoad = state.NPCs[listIndex].list[npcIndex];

      state.loadedNPCs.push(new NPC(npcToLoad));
    },
    updateNPCStatus(state, action: PayloadAction<UpdateNpcStatusAction>): void {
      const { woundPenalties, otherModifiers, stun, status, index } = action.payload;

      const mutatedLoadedNPC = copyObject(state.loadedNPCs[index]);

      mutatedLoadedNPC.woundPenalties = woundPenalties;
      mutatedLoadedNPC.otherModifiers = otherModifiers;
      mutatedLoadedNPC.stun = stun;
      mutatedLoadedNPC.status = status;

      state.loadedNPCs[index] = mutatedLoadedNPC;
    },
    removeNPC(state, action: PayloadAction<number>): void {
      state.loadedNPCs = state.loadedNPCs.filter((_value, index) => index !== action.payload);
    },
    resolveStun(state, action: PayloadAction<number>): void {
      const mutatedLoadedNPC = copyObject(state.loadedNPCs[action.payload]);

      mutatedLoadedNPC.stun -= 1;
      if (mutatedLoadedNPC.stun === 0) {
        mutatedLoadedNPC.status = NPCStatuses.Ok;
      }

      state.loadedNPCs[action.payload] = mutatedLoadedNPC;
    },
  },
});

export const { loadNPC, shuffleActionDeck, dealAction, updateNPCStatus, removeNPC, resolveStun } = mainSlice.actions;

export default mainSlice.reducer;
