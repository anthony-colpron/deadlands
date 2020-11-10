import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DerivedStats extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      note: props.stats.note,
    };
  }

  updateOtherModifiers = (event) => {
    const newOtherModifiers = +event.target.value;
    this.props.updateStatus(undefined, newOtherModifiers);
  };

  removeStun = () => {
    this.props.updateStatus(undefined, undefined, undefined, this.props.stats.stun - 1);
  };

  render() {
    return (
      <div>
        <span>{`Size: ${this.props.stats.size} Pace: ${this.props.stats.pace}`}</span>

        <span>Bullets:</span>
        <input type="number" className="numeric-input-wind" />
        <span>/</span>
        <input type="number" className="numeric-input-wind" />

        <span>{`Wound penalties: ${this.props.stats.woundPenalties}`}</span>
        <span>Other modifier:</span>
        {this.props.stats.otherModifiers > -1 && <span>+</span>}
        <input type="number" value={this.props.stats.otherModifiers} onChange={this.updateOtherModifiers} />

        <span>{`Status: ${this.props.stats.status}`}</span>
        {this.props.stats.status === 'Stunned' && (
          <button type="button" className="stun-button" onClick={this.removeStun}>
            {`x${this.props.stats.stun}`}
          </button>
        )}

        <span>Note:</span>
        <input type="text" value={this.state.note} onChange={(event) => this.setState({ note: event.target.value })} />
      </div>
    );
  }
}

DerivedStats.propTypes = {
  stats: PropTypes.shape({
    size: PropTypes.number,
    pace: PropTypes.number,
    woundPenalties: PropTypes.number,
    otherModifiers: PropTypes.number,
    status: PropTypes.string,
    stun: PropTypes.number,
    note: PropTypes.string,
  }).isRequired,
  updateStatus: PropTypes.func.isRequired,
};

export default DerivedStats;
