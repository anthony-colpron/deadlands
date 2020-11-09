import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import RollButton from './RollButton';
import aptitudesList from '../../DATA/aptitudes';

const TraitsAndAptitudes = (props) => {
  const [singleRollModifier, setSingleRollModifer] = useState(0);
  const resetSingleRollModifier = useCallback(() => setSingleRollModifer(0));

  const mapRollCollection = (collection, isAptitude = false) => {
    return Object.keys(collection).map((key) => {
      const { level } = collection[key];
      const trait = isAptitude ? props.traits[aptitudesList[key].associatedTrait] : collection[key];
      const { dicePlus, diceType } = trait;

      return (
        <RollButton
          label={key}
          level={level}
          diceType={diceType}
          dicePlus={dicePlus}
          modifiers={props.globalModifiers + singleRollModifier}
          onRolled={resetSingleRollModifier}
        />
      );
    });
  };

  return (
    <div>
      {mapRollCollection(props.traits)}
      {mapRollCollection(props.aptitudes.corporeal, true)}
      {mapRollCollection(props.aptitudes.mental, true)}
      <span>{`Single roll modifier: ${singleRollModifier > -1 ? '+' : ''}`}</span>
      <input type="number" value={singleRollModifier} onChange={(event) => setSingleRollModifer(+event.target.value)} />
    </div>
  );
};

TraitsAndAptitudes.propTypes = {
  traits: PropTypes.shape({}).isRequired,
  aptitudes: PropTypes.shape({
    corporeal: PropTypes.shape({}),
    mental: PropTypes.shape({}),
  }).isRequired,
  globalModifiers: PropTypes.number.isRequired,
};

export default TraitsAndAptitudes;
