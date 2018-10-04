import { createStore } from 'redux';

import reducer from './REDUCER';
import { shuffleDeck } from '../Tools/functions';
import deck from '../Tools/deck';

import NPCs from '../DATA/NPCs';

let initialDeck = shuffleDeck(deck);


const store = createStore(reducer,
    {
        log: [],
        NPCs: NPCs,
        loadedNPCs: [],
        deck: initialDeck
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;