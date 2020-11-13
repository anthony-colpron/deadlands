import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeNPC } from '../Redux/slice';

import Wounds from './npcCard/Wounds';
import TraitsAndAptitudes from './npcCard/TraitsAndAptitudes';
import DerivedStats from './npcCard/DerivedStats';
import NPC from '../models/NPC';
import Attacks from './npcCard/Attacks';

const styles = {
  container: {
    maxWidth: 400,
    border: '1px solid black',
    padding: 10,
  },
};

class NPCcard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      display: 'stats',
      collapsed: false,
    };
  }

  removeSelf = () => {
    if (window.confirm('Are you sure you want to remove this NPC?')) {
      this.props.removeSelf(this.props.index);
    }
  };

  toggleCollapsed = () => {
    if (this.state.collapsed === true) {
      this.setState({ collapsed: false });
    } else {
      this.setState({ collapsed: true });
    }
  };

  toggleView = () => {
    if (this.state.display === 'wounds') {
      this.setState({ display: 'stats' });
    } else {
      this.setState({ display: 'wounds' });
    }
  };

  renderTopBar() {
    return (
      <div>
        <button type="button" onClick={this.removeSelf} className="remove-npc-button">
          X
        </button>
        {!this.state.collapsed && <span>{this.props.stats.name}</span>}
        <span>{` ( ${+this.props.index + 1} ) `}</span>
        <button type="button" onClick={this.toggleCollapsed}>
          {this.state.collapsed ? '□' : '_'}
        </button>
        <br />
      </div>
    );
  }

  renderStatus() {
    return (
      <span>
        {this.props.stats.status}
        {this.props.stats.status === 'Stunned' ? ` x${this.props.stats.stun}` : null}
      </span>
    );
  }

  renderDisplay() {
    if (this.state.display === 'wounds') {
      return <Wounds npc={this.props.stats} index={this.props.index} />;
    }

    return (
      <div>
        <TraitsAndAptitudes npc={this.props.stats} />
        <Attacks npc={this.props.stats} />
      </div>
    );
  }

  renderFullInfo() {
    return (
      <div>
        <button type="button" onClick={this.toggleView}>
          {this.state.display === 'wounds' ? 'Display Stats' : 'Display Wounds'}
        </button>
        &nbsp;&nbsp;
        <span style={{ fontWeight: 'bold' }}>Sleeve</span>
        <input type="checkbox" />
        {this.renderDisplay()}
        <DerivedStats npc={this.props.stats} index={this.props.index} />
      </div>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        {this.renderTopBar()}
        {this.state.collapsed ? this.renderStatus() : this.renderFullInfo()}
      </div>
    );
  }
}

NPCcard.propTypes = {
  stats: PropTypes.instanceOf(NPC).isRequired,
  removeSelf: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSelf: (index) => dispatch(removeNPC(index)),
  };
};

export default connect(undefined, mapDispatchToProps)(NPCcard);
