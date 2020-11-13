import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import RollButton from './RollButton';
import aptitudesList from '../../DATA/aptitudes';
import NPC from '../../models/NPC';
import { TraitsEnum } from '../../models/enums';

const styles = {
  container: {
    marginTop: 5,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

const corporealTraits = [
  TraitsEnum.Deftness,
  TraitsEnum.Nimbleness,
  TraitsEnum.Quickness,
  TraitsEnum.Strength,
  TraitsEnum.Vigor,
];

const TraitsAndAptitudes = (props) => {
  const [singleRollModifier, setSingleRollModifer] = useState(0);
  const resetSingleRollModifier = useCallback(() => setSingleRollModifer(0));

  const mapRollCollection = (collection, selectedKeys, isAptitude = false) => {
    const keys = selectedKeys || Object.keys(collection);

    return (
      <div style={styles.buttonsContainer}>
        {keys.map((key) => {
          const { level } = collection[key];
          const trait = isAptitude ? props.npc.traits[aptitudesList[key].associatedTrait] : collection[key];
          const { dicePlus, diceType } = trait;
          const label = isAptitude ? aptitudesList[key].name : key.slice(0, 6).toUpperCase();
          return (
            <RollButton
              isAptitude={isAptitude}
              label={label}
              level={level}
              diceType={diceType}
              dicePlus={dicePlus}
              modifiers={props.npc.allModifiers + singleRollModifier}
              onRolled={resetSingleRollModifier}
            />
          );
        })}
      </div>
    );
  };

  const corporealTraitsKeys = Object.keys(props.npc.traits).filter((key) => corporealTraits.includes(key));
  const mentalTraitsKeys = Object.keys(props.npc.traits).filter((key) => !corporealTraits.includes(key));

  return (
    <div style={styles.container}>
      {mapRollCollection(props.npc.traits, corporealTraitsKeys)}
      {mapRollCollection(props.npc.aptitudes.corporeal, undefined, true)}
      {mapRollCollection(props.npc.traits, mentalTraitsKeys)}
      {mapRollCollection(props.npc.aptitudes.mental, undefined, true)}
      <span>Single roll modifier:</span>
      {singleRollModifier > -1 && <span>+</span>}
      <input
        type="number"
        className="numeric-input"
        value={singleRollModifier}
        onChange={(event) => setSingleRollModifer(+event.target.value)}
      />
    </div>
  );
};

TraitsAndAptitudes.propTypes = {
  npc: PropTypes.instanceOf(NPC).isRequired,
};

export default TraitsAndAptitudes;
