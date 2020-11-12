import _cloneDeep from 'lodash.clonedeep';
import { createAction, PrepareAction } from '@reduxjs/toolkit';
import NPC from '../../models/NPC';
import { AddWoundParams, AddWoundResult } from '../types';

export const addWounds = createAction<PrepareAction<AddWoundResult>>(
  'addWounds',
  (npc: NPC, params: AddWoundParams) => {
    const { wounds, location, isMagicDamage } = params;
    const woundedNPC = _cloneDeep(npc);
    const { windResult, stunResult } = woundedNPC.addWounds(location, wounds, isMagicDamage);

    return { payload: { woundedNPC, windResult, stunResult } };
  },
);
