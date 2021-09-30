import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NPC from '../../models/NPC';
import { addLog } from '../../Redux/log/logReducer';

const AttackItem = ({ index, attack, onClick }) => {
  return (
    <MenuItem onClick={() => onClick(index)} value={attack}>
      {attack.name || attack}
    </MenuItem>
  );
};

AttackItem.propTypes = {
  index: PropTypes.number.isRequired,
  attack: PropTypes.shape({ name: PropTypes.string }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Attacks = (props) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [armor, setArmor] = useState(0);

  const onChangeArmor = (event) => setArmor(+event.target.value);
  const onOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const onCloseMenu = () => setAnchorEl(null);

  const onAttack = (attackIndex) => {
    const damageRoll = props.npc.rollDamage(attackIndex, armor);
    if (!damageRoll) {
      onCloseMenu();
      return;
    }

    const { sum, results, extraDices, plus } = damageRoll.weaponDamage;
    const plusDamage = plus ? `+${plus}` : '';

    const weaponDamage = `Weapon damage: ${sum} (${results})${plusDamage}\n  If extra damage: (${extraDices})\n`;

    let strDamage = '';
    if (damageRoll.strengthDamage) {
      const { diceRolls, result } = damageRoll.strengthDamage;
      strDamage = `Strength damage: ${result} (${diceRolls})\n`;
    }

    dispatch(addLog(`${weaponDamage}${strDamage}`));
    onCloseMenu();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" size="small" onClick={onOpenMenu}>
        Attacks
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onCloseMenu}>
        {props.npc.attacks.map((attack, index) => (
          <AttackItem key={attack.name || attack} attack={attack} index={index} onClick={onAttack} />
        ))}
      </Menu>
      <span> VS Armor: </span>
      <input type="number" className="numeric-input" value={armor} onChange={onChangeArmor} />
    </div>
  );
};

Attacks.propTypes = {
  npc: PropTypes.instanceOf(NPC).isRequired,
};

export default Attacks;
