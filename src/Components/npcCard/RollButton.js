import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { rollSkillCheck } from '../../Tools/gameUtils';
import { addLog } from '../../Redux/log/logReducer';

const RollButton = ({ label, level, diceType, dicePlus, modifiers, onRolled }) => {
  const dispatch = useDispatch();

  const rollDice = () => {
    const roll = rollSkillCheck(level, diceType, undefined, dicePlus, modifiers);
    const { result, diceRolls, botch, note } = roll;
    dispatch(
      addLog(
        `${label.toUpperCase()}\nResult: ${result} (Modifiers: ${modifiers})\nDices: ${diceRolls} ${botch ? note : ''}`,
      ),
    );
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
