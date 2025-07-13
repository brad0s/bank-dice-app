import { useContext } from 'react';
import { GameContext } from './context/GameContext';
import { GameStatus } from './utils/helpers';
import Header from './components/Header';
import Setup from './components/Setup';
import GamePlay from './components/GamePlay';
import GameOver from './components/GameOver';
import Footer from './components/Footer';
import './App.css';

function App() {
  let { status } = useContext(GameContext);

  let screen;
  if (status === GameStatus.INIT) {
    screen = <Setup />;
  } else if (status === GameStatus.PLAYING) {
    screen = <GamePlay />;
  } else if (status === GameStatus.END) {
    screen = <GameOver />;
  }

  return (
    <>
      <Header />
      <main id='main'>{screen}</main>
      <Footer />
    </>
  );
}

export default App;
