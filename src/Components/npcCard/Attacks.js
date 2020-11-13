import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NPC from '../../models/NPC';
import { rollDices } from '../../Tools/gameUtils';
import { addLog } from '../../Redux/log/logReducer';
import { TraitsEnum } from '../../models/enums';

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

    const weaponDamage = `Weapon damage: ${sum} (${results})\n`;

    let strDamage = '';
    if (stats.addStrength) {
      const { diceRolls, result } = props.npc.rollTrait(TraitsEnum.Strength);
      strDamage = `Strength damage: ${result} (${diceRolls})\n`;
    }

    dispatch(addLog(`Hit Location: ${hitLocation}\n${weaponDamage}${strDamage}`));
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
