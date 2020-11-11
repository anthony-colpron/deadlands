import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeNPC, updateNPCStatus } from '../Redux/slice';

import Wounds from './npcCard/Wounds';
import TraitsAndAptitudes from './npcCard/TraitsAndAptitudes';
import DerivedStats from './npcCard/DerivedStats';
import NPC from '../models/NPC';

class NPCcard extends PureComponent {
  constructor(props) {
    super(props);

    this.updateStatus = this.updateStatus.bind(this);

    this.state = {
      display: 'stats',
      collapsed: false,
    };
  }

  get globalModifiers() {
    return -this.props.stats.woundPenalties + this.props.stats.otherModifiers;
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

  updateStatus(
    wounds,
    otherModifiers = this.props.stats.otherModifiers,
    wind = this.state.wind,
    stun = this.props.stats.stun,
  ) {
    let { status } = this.props.stats;
    let highestWound = 0;

    const woundsToKill = this.props.stats.woundsToKill || 5;

    if (wounds) {
      const woundKeys = Object.keys(wounds);

      for (let i = 0; i < woundKeys.length; i += 1) {
        if (wounds[woundKeys[i]] > highestWound) {
          highestWound = wounds[woundKeys[i]];
        }
      }

      if (woundsToKill !== 'special') {
        if (wounds.head >= woundsToKill || (wounds.guts >= woundsToKill && !this.props.stats.undead)) {
          status = 'Dead';
        }
      }

      // TODO: refaire les checks de undead et thick skinned mieux.
      if (this.props.stats.undead) {
        highestWound -= 2;
        if (highestWound > 3) {
          highestWound = 3;
        }
      }
      if (this.props.stats.thickSkinned) {
        highestWound -= 1;
        if (highestWound > 4) {
          highestWound = 4;
        }
      }

      if (highestWound < 0) {
        highestWound = 0;
      }
    } else {
      highestWound = this.props.stats.woundPenalties;
    }

    if (status !== 'Dead') {
      if (wind <= 0) {
        status = 'Winded';
      } else if (stun > 0) {
        status = 'Stunned';
      } else {
        status = 'Ok';
      }
    }

    this.props.updateNPCStatus(highestWound, otherModifiers, status, stun, this.props.index);
  }

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
      <div className="traits">
        <TraitsAndAptitudes
          traits={this.props.stats.traits}
          aptitudes={this.props.stats.aptitudes}
          globalModifiers={this.globalModifiers}
        />
        <span>Damage:</span>
        <select>
          {this.props.stats.attacks.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
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
        <DerivedStats npc={this.props.stats} index={this.props.index} updateStatus={this.updateStatus} />
      </div>
    );
  }

  render() {
    return (
      <div className="npc-card">
        {this.renderTopBar()}
        {this.state.collapsed ? this.renderStatus() : this.renderFullInfo()}
      </div>
    );
  }
}

NPCcard.propTypes = {
  stats: PropTypes.instanceOf(NPC).isRequired,
  removeSelf: PropTypes.func.isRequired,
  updateNPCStatus: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNPCStatus: (woundPenalties, otherModifiers, status, stun, index) =>
      dispatch(
        updateNPCStatus({
          woundPenalties,
          otherModifiers,
          status,
          stun,
          index,
        }),
      ),
    removeSelf: (index) => dispatch(removeNPC(index)),
  };
};

export default connect(undefined, mapDispatchToProps)(NPCcard);
