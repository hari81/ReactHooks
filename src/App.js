import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props => {
  // const [state, setState] = useState({
  //   selectedCharacter: 1,
  //   side: 'light',
  //   destroyed: false
  // })

  // const sideHandler = side => {
  //   setState({...state, side: side });
  // };

  // const charSelectHandler = event => {
  //   const charId = event.target.value;
  //   setState( {...state, selectedCharacter: charId });
  // };

  // const destructionHandler = () => {
  //   setState( {...state, destroyed: true });
  // };
  const [side, setSide] = useState('light');
  const [selectedCharacter, setSelectedCharacter] = useState('1');
  const [destroyed, setDestroyed] = useState(false);

  const charSelectHandler = (event) => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  }

  const sideHandler = (color) => {
    setSide(color); 
  }

  const destructionHandler = () => {
    setDestroyed(true);
  }
  let content = (
    <React.Fragment>
      <CharPicker
        side={side}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(this,'light')}>
        Light Side
      </button>
      <button onClick={sideHandler.bind(this,'dark')}>Dark Side</button>
      {side === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
}


export default App;
