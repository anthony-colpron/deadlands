import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LOAD_NPC } from '../Redux/ACTIONS';

import NPCcard from './NPCcard';


class NPCsWindow extends PureComponent {

    constructor() {
        super()

        this.state = {selectedNPCIndex: 0, selectedNPCListIndex: 0}

    }

    loadNPC = () => {
        this.props.loadNPC(parseInt(this.state.selectedNPCListIndex, 10), parseInt(this.state.selectedNPCIndex, 10))
    }

    handleNPCListChange = (event) => {
        this.setState({selectedNPCListIndex: event.target.value, selectedNPCIndex: 0})
    }

    handleNPCChange = (event) => {
        this.setState({selectedNPCIndex: event.target.value})
    }

    render() {

        

        let mappedNPCListList = this.props.NPCs.map((list, index) => {
            return <option value={index}>{list.name}</option>
        })

        let mappedNPCList = this.props.NPCs[this.state.selectedNPCListIndex].list.map((npc, index) => {
            return <option value={index}>{npc.name}</option>
        })

        let mappedNPCCards = this.props.loadedNPCs.map((npc, index) => {
            return <NPCcard stats={npc} index={index} key={npc.name + index}/>
        })

        return (<div className='npcs-window'>
            <select value={this.state.selectedNPCListIndex} onChange={this.handleNPCListChange}>{mappedNPCListList}</select>&nbsp;
            <select value={this.state.selectedNPCIndex} onChange={this.handleNPCChange}>{mappedNPCList}</select>
            <button onClick={this.loadNPC}>Add NPC</button>
            <div className='npcs-container'>
                {mappedNPCCards}
            </div>
        </div>)
    }
}

let mapStateToProps = (state) => {
    return { NPCs: state.NPCs, loadedNPCs: state.loadedNPCs }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loadNPC: (listIndex, npcIndex) => dispatch({ type: LOAD_NPC, listIndex: listIndex, npcIndex: npcIndex })
    }
}

let ConnectedNPCsWindow = connect(mapStateToProps, mapDispatchToProps)(NPCsWindow)

export default ConnectedNPCsWindow;