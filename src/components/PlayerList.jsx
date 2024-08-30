import { useContext } from 'react';
import GameContext from '../context/GameContext';
import { checkIfAllPlayersAreBanked, playerTurnRotator } from '../utils/helpers';

function PlayersList() {
  let { players } = useContext(GameContext);

  return (
    <>
      <div
        className='players-list'
        style={{
          display: `flex`,
          flexFlow: `column`,
          gap: 8,
          marginBottom: 30,
        }}
      >
        {players.map((player) => {
          return (
            <PlayerListItem
              key={player.id}
              player={player}
            />
          );
        })}
      </div>
    </>
  );
}

const PlayerListItem = ({ player }) => {
  let { players, setPlayers, bank, currentTurnPlayer, setCurrentTurnPlayer, setCurrentRound } =
    useContext(GameContext);
  const isCurrent = (currentTurnPlayer && player.id === currentTurnPlayer.id) ?? false;
  const opacity = player.isBanked ? 0.4 : 1;

  const handleBankClick = () => {
    const currentPlayerIndex = players.findIndex((p) => p.id === player.id);
    let currentPlayer = players[currentPlayerIndex];
    currentPlayer = { ...currentPlayer, bank: player.bank + bank, isBanked: true };
    players[currentPlayerIndex] = currentPlayer;
    setPlayers([...players]);
    const allPlayersAreBanked = checkIfAllPlayersAreBanked(players);
    if (allPlayersAreBanked) {
      setCurrentRound((prev) => prev + 1);
    } else {
      if (isCurrent) {
        let currentPlayer = playerTurnRotator(players, currentTurnPlayer);
        setCurrentTurnPlayer(currentPlayer);
      }
    }
  };

  const diceIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 512'
      width={20}
      height={20}
      style={{ marginLeft: 4 }}
    >
      <path
        fill='currentColor'
        d='M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8l138.8 138.8c28.1 28.1 73.7 28.1 101.8 0l138.8-138.8c28.1-28.1 28.1-73.7 0-101.8zM200 224a24 24 0 1 1 48 0 24 24 0 1 1-48 0M96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m128 176a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-176a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-128-80a24 24 0 1 1 0-48 24 24 0 1 1 0 48m96 328c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8zm160-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48'
      />
    </svg>
  );

  return (
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `2fr 1fr 1fr`,
        gap: 16,
        opacity: opacity,
      }}
    >
      <span>
        {player.name}
        {isCurrent && diceIcon}
      </span>
      <span>{player.bank}</span>
      <button
        disabled={player.isBanked}
        onClick={() => handleBankClick()}
      >
        {player.isBanked ? '-' : 'Bank'}
      </button>
    </div>
  );
};

export default PlayersList;
