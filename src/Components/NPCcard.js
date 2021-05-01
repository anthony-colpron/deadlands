import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Maximize';

import { removeNPC } from '../Redux/slice';

import Wounds from './npcCard/Wounds';
import TraitsAndAptitudes from './npcCard/TraitsAndAptitudes';
import DerivedStats from './npcCard/DerivedStats';
import NPC from '../models/NPC';
import Attacks from './npcCard/Attacks';
import { NPCStatuses } from '../models/enums';

const styles = {
  container: {
    maxWidth: 420,
    padding: 10,
    marginRight: 20,
    marginBottom: 20,
  },
  selectedContainer: {
    backgroundColor: 'rgba(170,108,57,0.3)',
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleButton: {
    marginTop: 5,
    marginRight: 5,
    fontSize: 12,
    minWidth: 0,
    lineHeight: 1,
  },
  fullInfosTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  IconButton: {
    backgroundColor: 'rgba(119,136,153,0.2)',
  },
  npcName: {
    margin: '0 5px 0 5px',
    fontWeight: 'bold',
  },
  display: {
    margin: 10,
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
      <div style={styles.topBar}>
        <div>
          <IconButton onClick={this.removeSelf} style={styles.IconButton} size="small">
            <DeleteIcon />
          </IconButton>
          <span style={styles.npcName}>
            {!this.state.collapsed && <span>{this.props.stats.name}</span>}
            <span>{` ( ${+this.props.index + 1} )`}</span>
          </span>
        </div>
        <IconButton size="small" style={styles.IconButton} onClick={this.toggleCollapsed}>
          {this.state.collapsed ? <MaximizeIcon /> : <MinimizeIcon />}
        </IconButton>
      </div>
    );
  }

  renderStatus() {
    return (
      <span style={{ fontWeight: 'bold' }}>
        {this.props.stats.status}
        {this.props.stats.status === NPCStatuses.Stunned ? ` x${this.props.stats.stun}` : null}
      </span>
    );
  }

  renderDisplay() {
    if (this.state.display === 'wounds') {
      return <Wounds npc={this.props.stats} index={this.props.index} />;
    }

    return (
      <>
        <TraitsAndAptitudes npc={this.props.stats} />
        <Attacks npc={this.props.stats} />
      </>
    );
  }

  renderFullInfo() {
    return (
      <div>
        <div style={styles.fullInfosTop}>
          <Button style={styles.toggleButton} size="small" variant="contained" onClick={this.toggleView}>
            {this.state.display === 'wounds' ? 'Display Stats' : 'Display Wounds'}
          </Button>
          <span style={{ fontWeight: 'bold' }}>Sleeve</span>
          <input type="checkbox" />
        </div>
        <div style={styles.display}>{this.renderDisplay()}</div>
        <DerivedStats npc={this.props.stats} index={this.props.index} />
      </div>
    );
  }

  render() {
    const containerStyle = this.props.isCurrent
      ? { ...styles.container, ...styles.selectedContainer }
      : styles.container;

    return (
      <Card style={containerStyle} elevation={3}>
        {this.renderTopBar()}
        {this.state.collapsed ? this.renderStatus() : this.renderFullInfo()}
      </Card>
    );
  }
}

NPCcard.propTypes = {
  stats: PropTypes.instanceOf(NPC).isRequired,
  removeSelf: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCurrent: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    isCurrent: state.main.currentNPCIndex === props.index,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSelf: (index) => dispatch(removeNPC(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NPCcard);
