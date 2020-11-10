import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WoundLocation from './WoundLocation';

class Wounds extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      woundsToAdd: 0,
      isMagicDamage: false,
    };
  }

  onUpdateWind = (event) => {
    this.props.onUpdateWind(+event.target.value);
  };

  onToggleMagic = () => this.setState((prevState) => ({ isMagicDamage: !prevState.isMagicDamage }));

  onWoundsToAddChange = (event) => {
    this.setState({ woundsToAdd: +event.target.value });
  };

  onAddWound = (locationKey) => {
    this.props.onAddWound(locationKey, this.state.woundsToAdd, this.state.isMagicDamage);
    this.setState({ woundsToAdd: 0 });
  };

  renderWind() {
    return (
      <div>
        <span>Wind:</span>
        <input type="number" onChange={this.onUpdateWind} value={this.props.wind} />
      </div>
    );
  }

  renderWoundsToAdd() {
    return (
      <div>
        <span>Add Wounds:</span>
        <input type="number" onChange={this.onWoundsToAddChange} value={this.state.woundsToAdd} />

        <span style={{ fontWeight: 'bold' }}>Magic</span>
        <input type="checkbox" value={this.state.isMagicDamage} onChange={this.onToggleMagic} />
      </div>
    );
  }

  renderWoundLocations() {
    return (
      <div>
        {Object.keys(this.props.wounds).map((key) => {
          return (
            <WoundLocation
              key={key}
              locationKey={key}
              woundLevel={this.props.wounds[key]}
              onAddWound={this.onAddWound}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderWind()}
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
  wind: PropTypes.number.isRequired,
  onUpdateWind: PropTypes.func.isRequired,
};

export default Wounds;
