import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { rollSkillCheck } from '../../Tools/gameUtils';
import { addLog } from '../../Redux/log/logReducer';

const commonButtonStyles = {
  textTransform: 'none',
  minWidth: 0,
  lineHeight: 1.3,
  marginRight: 6,
  marginBottom: 5,
};

const styles = {
  traitButton: {
    ...commonButtonStyles,
    fontSize: 11,
  },
  aptitudeButton: {
    ...commonButtonStyles,
    fontSize: 10,
  },
  tooltip: {
    tooltip: {
      backgroundColor: 'black',
    },
    tooltipPlacementTop: {
      margin: '6px',
    },
  },
};

const StyledTooltip = withStyles(styles.tooltip)(Tooltip);

const RollButton = ({ label, level, diceType, dicePlus, modifiers, onRolled, isAptitude }) => {
  const dispatch = useDispatch();

  const rollDice = () => {
    const roll = rollSkillCheck(level, diceType, undefined, dicePlus, modifiers);
    const { result, diceRolls, botch, note } = roll;
    dispatch(addLog(`${label}\nResult: ${result} (Modifiers: ${modifiers})\nDices: ${diceRolls} ${botch ? note : ''}`));
    onRolled();
  };

  return (
    <StyledTooltip
      title={`${level}d${diceType}${dicePlus > 0 ? `+${dicePlus}` : ''}`}
      placement="top-end"
      enterDelay={0}
    >
      <Button
        style={isAptitude ? styles.aptitudeButton : styles.traitButton}
        variant={isAptitude ? 'outlined' : 'contained'}
        size="small"
        color={isAptitude ? 'inherit' : 'primary'}
        onClick={rollDice}
      >
        {label}
      </Button>
    </StyledTooltip>
  );
};

RollButton.propTypes = {
  isAptitude: PropTypes.bool.isRequired,
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
