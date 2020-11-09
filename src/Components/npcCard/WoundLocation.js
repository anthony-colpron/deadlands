import React from 'react';
import PropTypes from 'prop-types';

const WoundLocation = (props) => {
  return (
    <div>
      <span>{`${props.locationLabel}: ${props.woundLevel}`}</span>
      <button type="button" onClick={props.onAddWound}>
        Add
      </button>
    </div>
  );
};

WoundLocation.propTypes = {
  locationLabel: PropTypes.string.isRequired,
  woundLevel: PropTypes.number.isRequired,
  onAddWound: PropTypes.func.isRequired,
};

export default WoundLocation;
