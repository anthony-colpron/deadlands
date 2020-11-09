import { createStore } from 'redux';

import reducer from './REDUCER';
import { shuffleDeck } from '../Tools/functions';
import deck from '../Tools/deck';

import NPCs from '../DATA/NPCs';

const initialDeck = shuffleDeck(deck);

const store = createStore(
  reducer,
  {
    log: [],
    NPCs,
    loadedNPCs: [],
    deck: initialDeck,
  },
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
