import React from 'react';
import PropTypes from 'prop-types';
import { rollSkillCheck } from '../../Tools/functions';

const RollButton = ({ label, level, diceType, dicePlus, modifiers, onRolled }) => {
  const rollDice = () => {
    const roll = rollSkillCheck(level, diceType, undefined, dicePlus, modifiers);
    alert(`Result: ${roll.result} (Modifiers: ${modifiers})\nDices: ${roll.diceRolls} ${roll.botch ? roll.note : ''}`);
    onRolled();
  };

  return (
    <div>
      <span>{`${label}: `}</span>
      <button type="button" onClick={rollDice}>
        {`${level}d${diceType}${dicePlus > 0 ? `+${dicePlus}` : ''}`}
      </button>
    </div>
  );
};

RollButton.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  diceType: PropTypes.number.isRequired,
  onRolled: PropTypes.func.isRequired,
  modifiers: PropTypes.number,
  dicePlus: PropTypes.number,
};

RollButton.defaultProps = {
  dicePlus: null,
  modifiers: 0,
};

export default RollButton;
