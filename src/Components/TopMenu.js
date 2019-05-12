import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { SHUFFLE } from '../Redux/ACTIONS';
import AddNPC from './addNPC/AddNPC';

class TopMenu extends PureComponent {
  constructor() {
    super();

    this.state = {
      addNPCWindowIsOpen: false,
    };
  }

  toggleAddNPCWindow = () => {
    this.setState({ addNPCWindowIsOpen: !this.state.addNPCWindowIsOpen });
  }

  render () {
      return (
      <div>
        <div className='top-menu'>
          Cartes restantes : {this.props.deck.length}&nbsp;
          <button onClick={this.props.shuffleDeck}>Shuffle</button>&nbsp;
          <button onClick={this.toggleAddNPCWindow}>Add NPC</button>
        </div>
        {this.state.addNPCWindowIsOpen && <AddNPC />}
      </div>
      )
  }
}

let mapStateToProps = (state) => {
    return {deck: state.deck}
  }

  let mapDispatchToProps = (dispatch) => {
    return {shuffleDeck: () => dispatch({type: SHUFFLE})
    }
  }
  
  let ConnectedTopMenu = connect(mapStateToProps,mapDispatchToProps)(TopMenu);
  
  export default ConnectedTopMenu;