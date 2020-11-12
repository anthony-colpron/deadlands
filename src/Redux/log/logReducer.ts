import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addWounds } from '../wounds/woundsActions';
import { AddWoundResult } from '../types';
import { StunRollResult } from '../../models/interfaces';

const initialState: string[] = [];

const makeWindLog = (wind: number): string => `Wind lost : ${wind}`;
const makeStunLog = (stunResult: StunRollResult): string => {
  const { vigorRoll, target, modifiers } = stunResult;
  const { note, result, diceRolls } = vigorRoll;

  return `Stun roll:\n${note}! Target: ${target}\nResult: ${result} (Modifiers: ${modifiers})\nDices: ${diceRolls}`;
};

const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    addLog(logs, action: PayloadAction<string>): void {
      logs.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addWounds, (logs, action: PayloadAction<AddWoundResult>) => {
      const { windResult, stunResult } = action.payload;

      if (windResult) logs.push(makeWindLog(windResult));
      if (stunResult) logs.push(makeStunLog(stunResult));
    });
  },
});

export const { addLog } = logSlice.actions;

export default logSlice.reducer;
