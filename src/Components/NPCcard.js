import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { rollSkillCheck } from '../Tools/functions';
import { UPDATE_NPC_STATUS, REMOVE_NPC } from '../Redux/ACTIONS';

import Wounds from './npcCard/Wounds';
import TraitsAndAptitudes from './npcCard/TraitsAndAptitudes';
import DerivedStats from './npcCard/DerivedStats';

class NPCcard extends PureComponent {
  constructor(props) {
    super(props);

    this.addWounds = this.addWounds.bind(this);
    this.updateStatus = this.updateStatus.bind(this);

    this.state = {
      display: 'stats',
      collapsed: false,
      magicAttack: false,
      wounds: {
        head: 0,
        leftArm: 0,
        rightArm: 0,
        guts: 0,
        leftLeg: 0,
        rightLeg: 0,
      },
      wind: this.props.stats.wind,
    };
  }

  get globalModifiers() {
    return -this.props.stats.woundPenalties + this.props.stats.otherModifiers;
  }

  handleMagicAttack = () => {
    this.setState(({ magicAttack }) => {
      return { magicAttack: !magicAttack };
    });
  };

  onUpdateWind = (wind) => {
    this.updateStatus(undefined, undefined, wind);
    this.setState({ wind });
  };

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

  addWounds(location, woundsToAdd) {
    const canBeWinded = !(this.props.stats.cannotBeWinded || (this.props.stats.undead && !this.state.magicAttack));
    const canBeStunned = !(this.props.stats.cannotBeStunned || (this.props.stats.undead && !this.state.magicAttack));

    let newWind = this.state.wind;
    let newStun = this.props.stats.stun;

    const newWounds = JSON.parse(JSON.stringify(this.state.wounds));

    newWounds[location] += woundsToAdd;

    if (newWounds[location] < 0) {
      newWounds[location] = 0;
    }

    if (canBeWinded && woundsToAdd > -1) {
      if (woundsToAdd === 0) {
        newWind -= Math.ceil(Math.random() * 3);
      } else {
        for (let i = 0; i < woundsToAdd; i += 1) {
          newWind -= Math.ceil(Math.random() * 6);
        }
      }
      alert(`Wind lost :${this.state.wind - newWind}`);
    }

    if (canBeStunned && woundsToAdd > -1) {
      let target;

      switch (woundsToAdd) {
        case 0:
          target = 3;
          break;
        case 1:
          target = 5;
          break;
        case 2:
          target = 7;
          break;
        case 3:
          target = 9;
          break;
        case 4:
          target = 11;
          break;
        case 5:
          target = 13;
          break;
        default:
          target = 5;
          break;
      }

      const { level, diceType, dicePlus = 0 } = this.props.stats.traits.vigor;

      const sandTraitBonus = this.props.stats.sand ? this.props.stats.sand : 0;

      const modifiers = -this.props.stats.woundPenalties + this.props.stats.otherModifiers + sandTraitBonus;

      const vigorRoll = rollSkillCheck(level, diceType, target, dicePlus, modifiers);

      if (!vigorRoll.success && newStun < 2) {
        newStun += 1;
      }

      alert(
        `Stun roll:\n${vigorRoll.note}! Target: ${target}\nResult: ${vigorRoll.result} (Modifiers: ${modifiers})\nDices: ${vigorRoll.diceRolls}`,
      );
    }

    this.updateStatus(newWounds, undefined, newWind, newStun);

    this.setState(() => ({ wounds: newWounds, wind: newWind }));
  }

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
      return (
        <Wounds
          wounds={this.state.wounds}
          onAddWound={this.addWounds}
          wind={this.state.wind}
          onUpdateWind={this.onUpdateWind}
        />
      );
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
        <DerivedStats stats={this.props.stats} index={this.props.index} />
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
  stats: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    pace: PropTypes.number,
    woundPenalties: PropTypes.number,
    otherModifiers: PropTypes.number,
    status: PropTypes.string,
    stun: PropTypes.number,
    note: PropTypes.string,
    wind: PropTypes.number,
    undead: PropTypes.bool,
    cannotBeWinded: PropTypes.bool,
    cannotBeStunned: PropTypes.bool,
    thickSkinned: PropTypes.bool,
    traits: PropTypes.shape({
      vigor: PropTypes.shape({
        level: PropTypes.number,
        diceType: PropTypes.number,
        dicePlus: PropTypes.number,
      }),
    }),
    aptitudes: PropTypes.shape({}),
    attacks: PropTypes.arrayOf({}),
    sand: PropTypes.number,
    woundsToKill: PropTypes.number,
  }).isRequired,
  removeSelf: PropTypes.func.isRequired,
  updateNPCStatus: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNPCStatus: (woundPenalties, otherModifiers, status, stun, index) =>
      dispatch({
        type: UPDATE_NPC_STATUS,
        woundPenalties,
        otherModifiers,
        status,
        stun,
        index,
      }),
    removeSelf: (index) => dispatch({ type: REMOVE_NPC, index }),
  };
};

export default connect(undefined, mapDispatchToProps)(NPCcard);
