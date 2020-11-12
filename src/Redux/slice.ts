/* eslint-disable no-param-reassign */

import _cloneDeep from 'lodash.clonedeep';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shuffleDeck } from '../Tools/functions';
import deck from '../Tools/deck';
import NPCs from '../DATA/NPCs';
import NPC from '../models/NPC';

import { MainState, LoadNpcAction, UpdateNumericValueAction, AddWoundResult } from './types';
import { getNPCIndex } from './utils';
import { addWounds } from './wounds/woundsActions';

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
    removeNPC(state, action: PayloadAction<number>): void {
      state.loadedNPCs = state.loadedNPCs.filter((_value, index) => index !== action.payload);
    },
    resolveStun(state, action: PayloadAction<number>): void {
      const mutatedLoadedNPC = _cloneDeep(state.loadedNPCs[action.payload]);

      mutatedLoadedNPC.stun -= 1;

      state.loadedNPCs[action.payload] = mutatedLoadedNPC;
    },
    updateWind(state, action: PayloadAction<UpdateNumericValueAction>): void {
      const { index, value } = action.payload;

      const mutatedLoadedNPC = _cloneDeep(state.loadedNPCs[index]);
      mutatedLoadedNPC.currentWind = value;

      state.loadedNPCs[index] = mutatedLoadedNPC;
    },
    updateOtherModifiers(state, action: PayloadAction<UpdateNumericValueAction>): void {
      const { index, value } = action.payload;

      const mutatedLoadedNPC = _cloneDeep(state.loadedNPCs[index]);
      mutatedLoadedNPC.otherModifiers = value;

      state.loadedNPCs[index] = mutatedLoadedNPC;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addWounds, (state, action: PayloadAction<AddWoundResult>) => {
      const { woundedNPC } = action.payload;

      const index = getNPCIndex(state.loadedNPCs, woundedNPC);

      state.loadedNPCs[index] = woundedNPC;
    });
  },
});

export const {
  loadNPC,
  shuffleActionDeck,
  dealAction,
  removeNPC,
  resolveStun,
  updateWind,
  updateOtherModifiers,
} = mainSlice.actions;

export default mainSlice.reducer;
