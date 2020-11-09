import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Action extends PureComponent {
  render() {
    const NPC = this.props.loadedNPCs[this.props.NPCindex];

    const resolve = () => {
      this.props.removeSelf(this.props.index, this.props.NPCindex, NPC.status === 'Stunned');
    };

    if (NPC) {
      let status = '';

      if (NPC.status === 'Dead') {
        status = 'DEAD';
      } else if (NPC.status === 'Winded') {
        status = 'WINDED';
      } else if (NPC.status === 'Stunned') {
        status = `STUNNED x${NPC.stun}`;
      }

      return (
        <li>
          <strong className="card">{this.props.card}</strong>
          {` ${this.props.name} ${status} `}
          {this.props.index === 0 && (
            <button type="button" onClick={resolve}>
              Ok
            </button>
          )}
        </li>
      );
    }
    return '';
  }
}

Action.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  loadedNPCs: PropTypes.arrayOf({}).isRequired,
  NPCindex: PropTypes.number.isRequired,
  card: PropTypes.string.isRequired,
  removeSelf: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { loadedNPCs: state.loadedNPCs };
};

const ConnectedAction = connect(mapStateToProps)(Action);

export default ConnectedAction;
