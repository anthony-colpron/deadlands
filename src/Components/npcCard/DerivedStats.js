import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import NPC from '../../models/NPC';
import { resolveStun, updateOtherModifiers } from '../../Redux/slice';
import { getStyleForWound } from './styles';
import { NPCStatuses } from '../../models/enums';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginRight: 5,
  },
  values: {
    fontWeight: 'bold',
  },
  woundPenalties: {
    padding: 3,
    borderRadius: 4,
  },
  stunContainer: {
    marginTop: 3,
  },
  stunButton: {
    minWidth: 0,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 1.3,
    padding: 1,
  },
};

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
      <div style={styles.container}>
        <div>
          <span style={styles.text}>{`Size: ${this.props.npc.size} Pace: ${this.props.npc.pace}`}</span>
          <span style={styles.text}>Bullets:</span>
          <input type="number" className="numeric-input-large" />
          <span>/</span>
          <input type="number" className="numeric-input-large" />
        </div>

        <div>
          <span style={styles.text}>
            {`Wound penalties: `}
            <span
              style={{ ...styles.values, ...styles.woundPenalties, ...getStyleForWound(this.props.npc.woundPenalties) }}
            >
              {this.props.npc.woundPenalties}
            </span>
          </span>
          <span style={styles.text}>Other modifier:</span>
          {this.props.npc.otherModifiers > -1 && <span>+</span>}
          <input
            type="number"
            className="numeric-input"
            value={this.props.npc.otherModifiers}
            onChange={this.updateOtherModifiers}
          />
        </div>

        <div style={styles.stunContainer}>
          <span style={styles.text}>
            <span style={styles.text}>Status:</span>
            <span style={styles.values}>{this.props.npc.status}</span>
          </span>
          {this.props.npc.status === NPCStatuses.Stunned && (
            <Button style={styles.stunButton} size="small" variant="outlined" onClick={this.removeStun}>
              {`x${this.props.npc.stun}`}
            </Button>
          )}
        </div>

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
