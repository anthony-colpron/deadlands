import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { getStyleForWound } from './styles';

const WoundLocationsEnum = {
  head: 'Head',
  leftArm: 'Left Arm',
  rightArm: 'Right Arm',
  guts: 'Guts',
  leftLeg: 'Left Leg',
  rightLeg: 'Right Leg',
};

const styles = {
  button: {
    textTransform: 'none',
    minWidth: 0,
    lineHeight: 1.3,
    marginRight: 6,
    marginBottom: 5,
    fontSize: 11,
    fontWeight: 'bold',
  },
};

const WoundLocation = (props) => {
  const label = WoundLocationsEnum[props.locationKey];
  const onAddWound = useCallback(() => props.onAddWound(props.locationKey));
  const styleForWound = getStyleForWound(props.woundLevel);
  return (
    <Button style={{ ...styles.button, ...styleForWound }} size="small" variant="outlined" onClick={onAddWound}>
      {`${label}: ${props.woundLevel}`}
    </Button>
  );
};

WoundLocation.propTypes = {
  locationKey: PropTypes.string.isRequired,
  woundLevel: PropTypes.number.isRequired,
  onAddWound: PropTypes.func.isRequired,
};

export default WoundLocation;
