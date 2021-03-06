import { SHUFFLE, DEAL_ACTION, LOAD_NPC, UPDATE_NPC_STATUS, RESOLVE_STUN, REMOVE_NPC } from "./ACTIONS";
import { shuffleDeck } from '../Tools/functions'
import deck from '../Tools/deck';


export default function reducer (state, action) {

    if (action.type === SHUFFLE) {
        let newDeck = shuffleDeck(deck);

        return {...state, deck: newDeck};
    }

    if (action.type === DEAL_ACTION) {

        let newDeck = state.deck.slice(action.number)

        return {...state, deck: newDeck}
    }

    if (action.type === LOAD_NPC) {

        let newNPC = JSON.parse(JSON.stringify(state.NPCs[action.listIndex].list[action.npcIndex]))

        //newNPC.index = state.loadedNPCs.length;
        newNPC.woundPenalties = 0;
        newNPC.otherModifiers = 0;
        newNPC.stun = 0;
        newNPC.status = 'Ok';

        return {...state, loadedNPCs: state.loadedNPCs.concat(newNPC)}
    }

    if (action.type === UPDATE_NPC_STATUS) {

        let newLoadedNPCs = JSON.parse(JSON.stringify(state.loadedNPCs));

        let {woundPenalties, otherModifiers, stun, status, index} = action;

        newLoadedNPCs[index].woundPenalties = woundPenalties;
        newLoadedNPCs[index].stun = stun;
        newLoadedNPCs[index].status = status;
        newLoadedNPCs[index].otherModifiers = otherModifiers;

        return {...state, loadedNPCs: newLoadedNPCs}

    }

    if (action.type === REMOVE_NPC) {
        
        let newLoadedNPCs = JSON.parse(JSON.stringify(state.loadedNPCs));
        let {index} = action;

        newLoadedNPCs.splice(index, 1);

        return {...state, loadedNPCs: newLoadedNPCs}
    }

    if (action.type === RESOLVE_STUN) {
        let newLoadedNPCs = JSON.parse(JSON.stringify(state.loadedNPCs));

        let {index} = action;
        newLoadedNPCs[index].stun -= 1;
        if (newLoadedNPCs[index].stun === 0) {
            newLoadedNPCs[index].status = 'Ok';
        }

        return {...state, loadedNPCs: newLoadedNPCs}
    }

    return state
}

