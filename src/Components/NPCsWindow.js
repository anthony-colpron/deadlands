import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadNPC } from '../Redux/slice';

import NPCcard from './NPCcard';

class NPCsWindow extends PureComponent {
  constructor() {
    super();

    this.state = { selectedNPCIndex: 0, selectedNPCListIndex: 0 };
  }

  loadNPC = () => {
    this.props.loadNPC(parseInt(this.state.selectedNPCListIndex, 10), parseInt(this.state.selectedNPCIndex, 10));
  };

  handleNPCListChange = (event) => {
    this.setState({ selectedNPCListIndex: event.target.value, selectedNPCIndex: 0 });
  };

  handleNPCChange = (event) => {
    this.setState({ selectedNPCIndex: event.target.value });
  };

  render() {
    const mappedNPCListList = this.props.NPCs.map((list, index) => {
      return <option value={index}>{list.name}</option>;
    });

    const mappedNPCList = this.props.NPCs[this.state.selectedNPCListIndex].list.map((npc, index) => {
      return <option value={index}>{npc.name}</option>;
    });

    const mappedNPCCards = this.props.loadedNPCs.map((npc, index) => {
      // eslint-disable-next-line react/no-array-index-key
      return <NPCcard stats={npc} index={index} key={npc.name + index} />;
    });

    return (
      <div className="npcs-window">
        <select value={this.state.selectedNPCListIndex} onChange={this.handleNPCListChange}>
          {mappedNPCListList}
        </select>
        &nbsp;
        <select value={this.state.selectedNPCIndex} onChange={this.handleNPCChange}>
          {mappedNPCList}
        </select>
        <button type="button" onClick={this.loadNPC}>
          Add NPC
        </button>
        <div className="npcs-container">{mappedNPCCards}</div>
      </div>
    );
  }
}

NPCsWindow.propTypes = {
  loadNPC: PropTypes.func.isRequired,
  loadedNPCs: PropTypes.arrayOf({}).isRequired,
  NPCs: PropTypes.arrayOf({}).isRequired,
};

const mapStateToProps = (state) => {
  return { NPCs: state.main.NPCs, loadedNPCs: state.main.loadedNPCs };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNPC: (listIndex, npcIndex) => dispatch(loadNPC({ listIndex, npcIndex })),
  };
};

const ConnectedNPCsWindow = connect(mapStateToProps, mapDispatchToProps)(NPCsWindow);

export default ConnectedNPCsWindow;
