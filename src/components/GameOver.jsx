import { useContext } from 'react';
import GameContext from '../context/GameContext';
import { GameStatus } from '../utils/helpers';

function GameOver() {
  let { players, gameReset } = useContext(GameContext);
  const sortedPlayers = players.toSorted((a, b) => b.bank - a.bank);

  const handleClick = () => {
    gameReset();
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          gap: '0.5rem',
        }}
      >
        {sortedPlayers.map((player, idx) => {
          let medal = '';
          switch (idx) {
            case 0:
              medal = '🥇';
              break;
            case 1:
              medal = '🥈';
              break;
            case 2:
              medal = '🥉';
              break;
          }

          return (
            <div
              key={player.name}
              style={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(2, 1fr)',
                position: 'relative',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {idx <= 2 && (
                <span
                  style={{
                    position: 'absolute',
                    left: '-0.5rem',
                    transform: 'translate(-100%, 0)',
                  }}
                >
                  {medal}
                </span>
              )}
              <p style={{ margin: 0, textAlign: 'left' }}>{player.name}</p>
              <p style={{ margin: 0 }}>{player.bank}</p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '3rem',
        }}
      >
        <button onClick={() => handleClick()}>New Game</button>
        <button onClick={() => handleClick()}>Exit</button>
      </div>
    </>
  );
}

export default GameOver;
