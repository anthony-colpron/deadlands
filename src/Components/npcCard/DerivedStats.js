import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UPDATE_NPC_STATUS } from '../../Redux/ACTIONS';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { woundPenalties, stun, status, otherModifiers } = ownProps.stats;
  return {
    updateOtherModifiers: (newOtherModifiers) =>
      dispatch({
        type: UPDATE_NPC_STATUS,
        woundPenalties,
        stun,
        status,
        otherModifiers: newOtherModifiers,
        index: ownProps.index,
      }),
    removeStun: () =>
      dispatch({
        type: UPDATE_NPC_STATUS,
        woundPenalties,
        stun: stun - 1,
        status,
        otherModifiers,
        index: ownProps.index,
      }),
  };
};

class DerivedStats extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      note: props.stats.note,
    };
  }

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
        <input
          type="number"
          value={this.props.stats.otherModifiers}
          onChange={(event) => this.props.updateOtherModifiers(+event.target.value)}
        />

        <span>{`Status: ${this.props.stats.status}`}</span>
        {this.props.stats.status === 'Stunned' && (
          <button type="button" className="stun-button" onClick={this.props.removeStun}>
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
  updateOtherModifiers: PropTypes.func.isRequired,
  removeStun: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(DerivedStats);
