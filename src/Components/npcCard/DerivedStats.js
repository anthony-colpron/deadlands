import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NPC from '../../models/NPC';
import { resolveStun, updateOtherModifiers } from '../../Redux/slice';

class DerivedStats extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      note: props.npc.note,
    };
  }

  updateOtherModifiers = (event) => {
    this.props.dispatch(updateOtherModifiers({ value: +event.target.value, index: this.props.index }));
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
  dispatch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect()(DerivedStats);
