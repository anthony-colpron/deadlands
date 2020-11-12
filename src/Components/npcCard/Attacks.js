import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NPC from '../../models/NPC';
import { rollDices } from '../../Tools/gameUtils';
import { addLog } from '../../Redux/log/logReducer';

const AttackItem = ({ attack, onClick }) => {
  return (
    <MenuItem onClick={() => onClick(attack)} value={attack}>
      {attack.name || attack}
    </MenuItem>
  );
};

AttackItem.propTypes = {
  attack: PropTypes.shape({ name: PropTypes.string }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Attacks = (props) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const onOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const onCloseMenu = () => setAnchorEl(null);

  const onAttack = (attack) => {
    const { stats } = attack;
    if (!stats) onCloseMenu();

    const hitLocation = rollDices(1, 20, undefined, false).sum;
    const { sum, results } = rollDices(stats.numberOfDices, stats.diceType, undefined, true);
    // const strDamage = stats.addStrength ? rollDices()

    dispatch(addLog(`Hit Location: ${hitLocation}\nDamage: ${sum}\nDices: ${results}`));
    onCloseMenu();
  };

  return (
    <div>
      <Button onClick={onOpenMenu}>Attacks</Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onCloseMenu}>
        {props.npc.attacks.map((attack) => (
          <AttackItem attack={attack} onClick={onAttack} />
        ))}
      </Menu>
    </div>
  );
};

Attacks.propTypes = {
  npc: PropTypes.instanceOf(NPC).isRequired,
};

export default Attacks;
