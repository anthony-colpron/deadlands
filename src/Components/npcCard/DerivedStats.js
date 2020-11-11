import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NPC from '../../models/NPC';
import { resolveStun } from '../../Redux/slice';

class DerivedStats extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      note: props.npc.note,
    };
  }

  updateOtherModifiers = (event) => {
    const newOtherModifiers = +event.target.value;
    this.props.updateStatus(undefined, newOtherModifiers);
  };

  removeStun = () => {
    this.props.dispatch(resolveStun(this.props.index));
  };

  render() {
    return (
      <div>
        <span>{`Size: ${this.props.npc.size} Pace: ${this.props.npc.pace}`}</span>

        <span>Bullets:</span>
        <input type="number" className="numeric-input-wind" />
        <span>/</span>
        <input type="number" className="numeric-input-wind" />

        <span>{`Wound penalties: ${this.props.npc.woundPenalties}`}</span>
        <span>Other modifier:</span>
        {this.props.npc.otherModifiers > -1 && <span>+</span>}
        <input type="number" value={this.props.npc.otherModifiers} onChange={this.updateOtherModifiers} />

        <span>{`Status: ${this.props.npc.status}`}</span>
        {this.props.npc.status === 'Stunned' && (
          <button type="button" className="stun-button" onClick={this.removeStun}>
            {`x${this.props.npc.stun}`}
          </button>
        )}

        <span>Note:</span>
        <input type="text" value={this.state.note} onChange={(event) => this.setState({ note: event.target.value })} />
      </div>
    );
  }
}

DerivedStats.propTypes = {
  npc: PropTypes.instanceOf(NPC).isRequired,
  updateStatus: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect()(DerivedStats);
