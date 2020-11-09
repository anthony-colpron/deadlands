import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WoundLocation from './WoundLocation';

class Wounds extends PureComponent {
  constructor() {
    super();

    this.state = {
      woundsToAdd: 0,
    };
  }

  onWoundsToAddChange = (event) => {
    this.setState({ woundsToAdd: +event.target.value });
  };

  onAddWound = (locationKey) => {
    this.props.onAddWound(locationKey, this.state.woundsToAdd);
    this.setState({ woundsToAdd: 0 });
  };

  renderWoundsToAdd() {
    return (
      <div>
        <span>Add Wounds:</span>
        <input type="number" onChange={this.onWoundsToAddChange} value={this.state.woundsToAdd} />
      </div>
    );
  }

  renderWoundLocations() {
    return (
      <div>
        {Object.keys(this.props.wounds).map((key) => {
          return <WoundLocation locationKey={key} woundLevel={this.props.wounds[key]} onAddWound={this.onAddWound} />;
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <span>Wounds:</span>
        {this.renderWoundsToAdd()}
        {this.renderWoundLocations()}
      </div>
    );
  }
}

Wounds.propTypes = {
  wounds: PropTypes.shape({}).isRequired,
  onAddWound: PropTypes.func.isRequired,
};

export default Wounds;
