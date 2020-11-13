import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import WoundLocation from './WoundLocation';
import NPC from '../../models/NPC';
import { updateWind } from '../../Redux/slice';
import { addWounds } from '../../Redux/wounds/woundsActions';

const styles = {
  woundLocations: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: 'rgba(119,136,153,0.2)',
    marginTop: 5,
    marginBottom: 5,
  },
};
class Wounds extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      woundsToAdd: 0,
      isMagicDamage: false,
    };
  }

  onUpdateWind = (event) => {
    this.props.dispatch(updateWind({ value: +event.target.value, index: this.props.index }));
  };

  onToggleMagic = () => this.setState((prevState) => ({ isMagicDamage: !prevState.isMagicDamage }));

  onWoundsToAddChange = (event) => {
    this.setState({ woundsToAdd: +event.target.value });
  };

  onAddWound = (locationKey) => {
    this.props.dispatch(
      addWounds(this.props.npc, {
        location: locationKey,
        wounds: this.state.woundsToAdd,
        isMagicDamage: this.state.isMagicDamage,
      }),
    );
    this.setState({ woundsToAdd: 0 });
  };

  renderWind() {
    return (
      <div>
        <span>Wind:</span>
        <input
          type="number"
          className="numeric-input-large"
          onChange={this.onUpdateWind}
          value={this.props.npc.currentWind}
        />
      </div>
    );
  }

  renderWoundsToAdd() {
    return (
      <div>
        <span>Add Wounds:</span>
        <input
          type="number"
          className="numeric-input"
          onChange={this.onWoundsToAddChange}
          value={this.state.woundsToAdd}
        />

        <span style={{ fontWeight: 'bold' }}>Magic</span>
        <input type="checkbox" value={this.state.isMagicDamage} onChange={this.onToggleMagic} />
      </div>
    );
  }

  renderWoundLocations() {
    const wounds = Object.keys(this.props.npc.wounds).map((key) => {
      return (
        <WoundLocation
          key={key}
          locationKey={key}
          woundLevel={this.props.npc.wounds[key]}
          onAddWound={this.onAddWound}
        />
      );
    });

    return (
      <Paper style={styles.woundLocations}>
        {wounds[0]}
        <div>
          {wounds[1]}
          {wounds[2]}
        </div>
        {wounds[3]}
        <div>
          {wounds[4]}
          {wounds[5]}
        </div>
      </Paper>
    );
  }

  render() {
    return (
      <div>
        {this.renderWind()}
        {this.renderWoundsToAdd()}
        {this.renderWoundLocations()}
      </div>
    );
  }
}

Wounds.propTypes = {
  npc: PropTypes.instanceOf(NPC).isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wounds);
