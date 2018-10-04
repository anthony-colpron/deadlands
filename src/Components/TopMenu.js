import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { SHUFFLE } from '../Redux/ACTIONS';

class TopMenu extends PureComponent {


    render () {

        return (<div>Cartes restantes : {this.props.deck.length}
                <button onClick={this.props.shuffleDeck}>Shuffle</button>
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
  
  let ConnectedTopMenu = connect(mapStateToProps,mapDispatchToProps)(TopMenu)
  
  export default ConnectedTopMenu;