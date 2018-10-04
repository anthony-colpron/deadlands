import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

class Action extends PureComponent {



    render() {

        let NPC = this.props.loadedNPCs[this.props.NPCindex];

        let resolve = () => {
            this.props.removeSelf(this.props.index, this.props.NPCindex, NPC.status === 'Stunned');
        }

        return <li>
            {this.props.card + ' ' + this.props.name + ' ' + (NPC.status === 'Stunned' ? 'STUNNED x' + NPC.stun : '')}
            {this.props.index === 0 ? <button onClick={resolve}>Resolve</button> : ''}
        </li>
    }

}

let mapStateToProps = (state) => {
    return { loadedNPCs: state.loadedNPCs }
}


let ConnectedAction = connect(mapStateToProps)(Action)

export default ConnectedAction;