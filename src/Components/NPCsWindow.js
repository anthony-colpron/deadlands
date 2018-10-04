import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LOAD_NPC } from '../Redux/ACTIONS';

import NPCcard from './NPCcard';


class NPCsWindow extends PureComponent {

    loadNPC = (event) => {
        this.props.loadNPC(parseInt(event.target.value, 10))
    }

    render() {

        let mappedNPCButtons = this.props.NPCs.map((npc, index) => {
            return <button onClick={this.loadNPC} value={index}>Add {npc.name}</button>
        })

        let mappedNPCCards = this.props.loadedNPCs.map((npc, index) => {
            return <NPCcard stats={npc} key={npc.name + index}/>
        })

        return (<div>
            {mappedNPCButtons}
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
        loadNPC: (index) => dispatch({ type: LOAD_NPC, index: index })
    }
}

let ConnectedNPCsWindow = connect(mapStateToProps, mapDispatchToProps)(NPCsWindow)

export default ConnectedNPCsWindow;