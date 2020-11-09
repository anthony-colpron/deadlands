import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SHUFFLE } from '../Redux/ACTIONS';

class TopMenu extends PureComponent {
  render() {
    return (
      <div className="top-menu">
        {`Cartes restantes : ${this.props.deck.length} `}
        <button type="button" onClick={this.props.shuffleDeck}>
          Shuffle
        </button>
      </div>
    );
  }
}

TopMenu.propTypes = {
  deck: PropTypes.arrayOf({}).isRequired,
  shuffleDeck: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { deck: state.deck };
};

const mapDispatchToProps = (dispatch) => {
  return { shuffleDeck: () => dispatch({ type: SHUFFLE }) };
};

const ConnectedTopMenu = connect(mapStateToProps, mapDispatchToProps)(TopMenu);

export default ConnectedTopMenu;
