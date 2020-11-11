import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import RollButton from './RollButton';
import aptitudesList from '../../DATA/aptitudes';
import NPC from '../../models/NPC';

const TraitsAndAptitudes = (props) => {
  const [singleRollModifier, setSingleRollModifer] = useState(0);
  const resetSingleRollModifier = useCallback(() => setSingleRollModifer(0));

  const mapRollCollection = (collection, isAptitude = false) => {
    return Object.keys(collection).map((key) => {
      const { level } = collection[key];
      const trait = isAptitude ? props.npc.traits[aptitudesList[key].associatedTrait] : collection[key];
      const { dicePlus, diceType } = trait;

      return (
        <RollButton
          label={key}
          level={level}
          diceType={diceType}
          dicePlus={dicePlus}
          modifiers={props.npc.allModifiers + singleRollModifier}
          onRolled={resetSingleRollModifier}
        />
      );
    });
  };

  return (
    <div>
      {mapRollCollection(props.npc.traits)}
      {mapRollCollection(props.npc.aptitudes.corporeal, true)}
      {mapRollCollection(props.npc.aptitudes.mental, true)}
      <span>Single roll modifier:</span>
      {singleRollModifier > -1 && <span>+</span>}
      <input type="number" value={singleRollModifier} onChange={(event) => setSingleRollModifer(+event.target.value)} />
    </div>
  );
};

TraitsAndAptitudes.propTypes = {
  npc: PropTypes.instanceOf(NPC).isRequired,
};

export default TraitsAndAptitudes;
