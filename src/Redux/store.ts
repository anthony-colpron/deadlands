import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import mainReducer from './slice';
import logReducer from './log/logReducer';

const reducer = combineReducers({
  main: mainReducer,
  logs: logReducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware(),
});

export default store;
