import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { quickSortActions } from '../Tools/functions';
import { rollSkillCheck } from '../Tools/gameUtils';

import Action from './Action';
import { dealAction, resolveStun } from '../Redux/slice';

class RoundActions extends PureComponent {
  constructor() {
    super();
    this.state = { actions: [] };
    this.rollInitiative = this.rollInitiative.bind(this);
    this.resolveAction = this.resolveAction.bind(this);
  }

  rollInitiative() {
    const target = 5;
    let unsortedActions = [];

    let deck = this.props.deck.slice();

    this.props.loadedNPCs.forEach((NPC, index) => {
      console.log(NPC);
      if (NPC.status !== 'Winded' && NPC.status !== 'Dead') {
        const {
          traits: {
            quickness: { level, diceType, dicePlus = 0 },
          },
        } = NPC;

        let actionsNumber = 1;

        if (!NPC.singleAction) {
          const modifiers = 0 - NPC.woundPenalties + NPC.otherModifiers;
          const quicknessRoll = rollSkillCheck(level, diceType, target, dicePlus, modifiers);

          if (quicknessRoll.botch) {
            actionsNumber = 0;
          } else if (quicknessRoll.success) {
            actionsNumber = actionsNumber + 1 + quicknessRoll.raises;
          }

          if (actionsNumber > 5) {
            actionsNumber = 5;
          }
        }

        for (let i = 0; i < actionsNumber; i += 1) {
          unsortedActions = unsortedActions.concat({
            name: `${NPC.name} ( ${parseInt(index, 10) + 1} )`,
            card: deck[i],
            status: NPC.status,
            NPCindex: index,
          });
        }

        deck = deck.slice(actionsNumber);
      }
    });

    if (this.props.deck.length >= unsortedActions.length) {
      this.props.dealAction(unsortedActions.length);

      this.setState({ actions: quickSortActions(unsortedActions) });
    } else {
      alert('Insufficient cards, please shuffle the deck.');
    }
  }

  resolveAction(index, NPCindex, stunned) {
    if (stunned) {
      this.props.resolveStun(NPCindex);
    }

    this.setState((state) => {
      const newActions = state.actions.slice();
      newActions.splice(index, 1);
      return { actions: newActions };
    });
  }

  render() {
    const mappedActions = this.state.actions.map((item, index) => {
      return (
        <Action
          index={index}
          key={item.name + item.card.text}
          name={item.name}
          card={item.card.text}
          removeSelf={this.resolveAction}
          NPCindex={item.NPCindex}
        />
      );
    });

    return (
      <div className="round-actions">
        <button type="button" onClick={this.rollInitiative}>
          INITIATIVE!
        </button>
        <ul>{mappedActions}</ul>
      </div>
    );
  }
}

RoundActions.propTypes = {
  resolveStun: PropTypes.func.isRequired,
  dealAction: PropTypes.func.isRequired,
  deck: PropTypes.arrayOf({}).isRequired,
  loadedNPCs: PropTypes.arrayOf({}).isRequired,
};

const mapStateToProps = (state) => {
  return { deck: state.main.deck, loadedNPCs: state.main.loadedNPCs };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dealAction: (number) => dispatch(dealAction(number)),
    resolveStun: (index) => dispatch(resolveStun(index)),
  };
};

const ConnectedRoundActions = connect(mapStateToProps, mapDispatchToProps)(RoundActions);

export default ConnectedRoundActions;
