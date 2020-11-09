import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const WoundLocationsEnum = {
  head: 'Head',
  leftArm: 'Left Arm',
  rightArm: 'Right Arm',
  guts: 'Guts',
  leftLeg: 'Left Leg',
  rightLeg: 'Right Leg',
};

const WoundLocation = (props) => {
  const label = WoundLocationsEnum[props.locationKey];
  const onAddWound = useCallback(() => props.onAddWound(props.locationKey));

  return (
    <div>
      <span>{`${label}: ${props.woundLevel}`}</span>
      <button type="button" onClick={onAddWound}>
        Add
      </button>
    </div>
  );
};

WoundLocation.propTypes = {
  locationKey: PropTypes.string.isRequired,
  woundLevel: PropTypes.number.isRequired,
  onAddWound: PropTypes.func.isRequired,
};

export default WoundLocation;
