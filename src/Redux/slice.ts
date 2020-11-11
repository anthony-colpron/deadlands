/* eslint-disable no-param-reassign */

import _cloneDeep from 'lodash.clonedeep';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shuffleDeck } from '../Tools/functions';
import deck from '../Tools/deck';
import NPCs from '../DATA/NPCs';
import NPC from '../models/NPC';

import { MainState, UpdateNpcStatusAction, LoadNpcAction, AddWoundAction, UpdateWindAction } from './types';

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

      const mutatedLoadedNPC = _cloneDeep(state.loadedNPCs[index]);

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
      const mutatedLoadedNPC = _cloneDeep(state.loadedNPCs[action.payload]);

      mutatedLoadedNPC.stun -= 1;

      state.loadedNPCs[action.payload] = mutatedLoadedNPC;
    },
    addWounds(state, action: PayloadAction<AddWoundAction>): void {
      const { index, wounds, location, isMagicDamage } = action.payload;

      const mutatedLoadedNPC = _cloneDeep(state.loadedNPCs[index]);
      mutatedLoadedNPC.addWounds(location, wounds, isMagicDamage);

      state.loadedNPCs[index] = mutatedLoadedNPC;
    },
    updateWind(state, action: PayloadAction<UpdateWindAction>): void {
      const { index, wind } = action.payload;

      const mutatedLoadedNPC = _cloneDeep(state.loadedNPCs[index]);
      mutatedLoadedNPC.currentWind = wind;

      state.loadedNPCs[index] = mutatedLoadedNPC;
    },
  },
});

export const {
  loadNPC,
  shuffleActionDeck,
  dealAction,
  updateNPCStatus,
  removeNPC,
  resolveStun,
  addWounds,
  updateWind,
} = mainSlice.actions;

export default mainSlice.reducer;
