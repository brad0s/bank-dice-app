import { useContext } from 'react';
import { GameContext } from './context/GameContext';
import Setup from './components/Setup';
import { GameStatus } from './utils/helpers';
import './App.css';
import GamePlay from './components/GamePlay';
import Header from './components/Header';

function App() {
  let { status } = useContext(GameContext);

  let screen;
  if (status === GameStatus.INIT) {
    screen = <Setup />;
  } else if (status === GameStatus.PLAYING) {
    screen = <GamePlay />;
  }

  // return <>{screen}</>;
  return (
    <>
      <Header />
      {screen}
    </>
  );
}

export default App;
