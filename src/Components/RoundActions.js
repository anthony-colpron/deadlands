import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DEAL_ACTION, RESOLVE_STUN } from '../Redux/ACTIONS';

import { quickSortActions } from '../Tools/functions'
import { rollSkillCheck } from '../Tools/functions'


import Action from './Action'


class RoundActions extends PureComponent {

    constructor() {
        super();
        this.state = { actions: [] }
        this.rollInitiative = this.rollInitiative.bind(this);
        this.resolveAction = this.resolveAction.bind(this);
    }

    rollInitiative() {


        const target = 5
        let unsortedActions = [];

        let deck = this.props.deck.slice();


        this.props.loadedNPCs.forEach(NPC => {

            if (NPC.status !== 'Winded' && NPC.status !== 'Dead') {
                let { traits: { quickness: { level, diceType, dicePlus = 0 } } } = NPC

                let modifiers = 0 - NPC.woundPenalties;
                let quicknessRoll = rollSkillCheck(level, diceType, target, dicePlus, modifiers)


                let actionsNumber = 1;

                if (quicknessRoll.botch) {
                    actionsNumber = 0;
                } else {
                    if (quicknessRoll.success) {
                        actionsNumber = actionsNumber + 1 + quicknessRoll.raises;
                    }
                }

                if (actionsNumber > 5) { actionsNumber = 5 }

                for (let i = 0; i < actionsNumber; i++) {
                    unsortedActions = unsortedActions.concat({ name: NPC.name + ' ( ' + (parseInt(NPC.index, 10) + 1) + ' )', card: deck[i], status: NPC.status, NPCindex: NPC.index })
                }

                deck = deck.slice(actionsNumber);

            }

        })

        if (this.props.deck.length >= unsortedActions.length) {
            this.props.dealAction(unsortedActions.length);

            this.setState({ actions: quickSortActions(unsortedActions) })
        } else {
            alert('Insufficient cards, please shuffle the deck.');
        }


    }

    resolveAction(index, NPCindex, stunned) {

        let newActions = this.state.actions.slice();

        newActions.splice(index, 1);

        if (stunned) {
            this.props.resolveStun(NPCindex)
        }

        this.setState({ actions: newActions })
    }


    render() {

        let mappedActions = this.state.actions.map((item, index) => {

            return (<Action
                index={index}
                key={item.name + item.card.text}
                name={item.name}
                card={item.card.text}
                removeSelf={this.resolveAction} 
                NPCindex={item.NPCindex}/>)
        })

        return (<div>
            <button onClick={this.rollInitiative}>INITIATIVE!</button>
            <ol>{mappedActions}</ol>
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    return { deck: state.deck, loadedNPCs: state.loadedNPCs }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dealAction: (number) => dispatch({ type: DEAL_ACTION, number: number }),
        resolveStun: (index) => dispatch({type: RESOLVE_STUN, index: index})
    }
}

let ConnectedRoundActions = connect(mapStateToProps, mapDispatchToProps)(RoundActions)

export default ConnectedRoundActions;