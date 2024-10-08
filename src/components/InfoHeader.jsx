import { useContext } from 'react';
import GameContext from '../context/GameContext';

function InfoHeader() {
  let { totalRounds, currentRound, bank, currentTurnPlayer, diceRolls } = useContext(GameContext);

  return (
    <>
      <div
        style={{
          border: `1px solid black`,
          borderRadius: 5,
          marginBottom: 30,
          padding: '0.5rem 1rem',
        }}
      >
        <div
          style={{
            textAlign: 'left',
          }}
        >
          <span>
            Round {currentRound + 1}/{totalRounds}
          </span>
        </div>
        <div style={{ padding: '1rem' }}>
          <h2 style={{ fontSize: `4rem`, margin: 0, lineHeight: 1 }}>{bank}</h2>
          <p style={{ margin: 0 }}>round total</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span>Rolls: {diceRolls}</span>
          </div>
          <div>
            <span>Turn: {(currentTurnPlayer && currentTurnPlayer.name) ?? ''}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoHeader;
