import { createSelector } from '@reduxjs/toolkit';

export const logSelector = createSelector(
  (state: any) => state.logs,
  (logs: string[]) => logs,
);
