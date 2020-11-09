import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Wounds extends PureComponent {
  constructor() {
    super();

    this.state = {
      woundsToAdd: 0,
    };
  }


  renderWoundsToAdd() {
    return (
      <div>
        <span>Add Wounds:</span>
        <input type="number" onChange=
      </div>
    );
  }

  render() {
    return <div />;
  }
}

Wounds.propTypes = {
          wounds: PropTypes.shape({}).isRequired,
};

export default Wounds;
