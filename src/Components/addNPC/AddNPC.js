import React, { PureComponent } from 'react';
import Trait from './Trait';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    zIndex: 1001,
  },
  window: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderWith: 2,
    borderStyle: 'ridge',
    borderColor: '#462A16',
    padding: 2,
    width: 800,
    height: 600,
  },
};

const traits = ['D', 'N', 'S', 'Q', 'V', 'C', 'K', 'Sm', 'M', 'Sp'];

class AddNPC extends PureComponent {
  render() {
    const mappedTraits = traits.map((trait) => <Trait title={trait} />);

    return (
      <div style={styles.container}>
        <div style={styles.window}>
          {mappedTraits}
        </div>
      </div>
    )
  }
}

export default AddNPC;