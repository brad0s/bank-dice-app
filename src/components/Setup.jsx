import { useContext } from 'react';
import { GameContext } from '../context/GameContext.jsx';
import { GameStatus } from '../utils/helpers.js';

let playerId = 1;

function GameSetupScreen() {
  let { totalRounds, setTotalRounds, players, setPlayers, setStatus, setCurrentTurnPlayer } =
    useContext(GameContext);

  const handleCurrentCheckedRoundChange = (e) => {
    setTotalRounds(e.target.value);
  };

  const radioInputs = [{ value: 10 }, { value: 15 }, { value: 20 }];

  const playerInputAdd = () => {
    playerId = playerId + 1;
    setPlayers([...players, { id: playerId, name: '', bank: 0, isBanked: false }]);
  };

  const playerInputRemove = (id) => {
    if (players.length <= 1) return;
    const newPlayerInputs = players.filter((player) => player.id !== id);
    setPlayers([...newPlayerInputs]);
  };

  const handlePlayerInput = (e, id) => {
    const currentPlayerIndex = players.findIndex((player) => player.id === id);
    const updatedPlayer = { ...players[currentPlayerIndex], name: e.target.value };
    const newPlayers = [...players];
    newPlayers[currentPlayerIndex] = updatedPlayer;
    setPlayers(newPlayers);
  };

  const validateForm = () => {
    let isValid = true;
    if (!totalRounds) {
      return false;
    }
    if (players.length <= 1) {
      return false;
    }
    return isValid;
  };

  const formSubmission = () => {
    setStatus(GameStatus.PLAYING);
    setCurrentTurnPlayer(players[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      formSubmission();
    }
  };

  return (
    <>
      <section className='Game-setup'>
        <h2>Setup</h2>
        <form
          action=''
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <fieldset>
            <p>Rounds</p>
            {radioInputs.map((radio) => (
              <RoundRadio
                key={radio.value}
                value={radio.value}
                checked={radio.checked}
                currentCheckedRound={totalRounds}
                onChange={handleCurrentCheckedRoundChange}
              />
            ))}
          </fieldset>
          <fieldset
            style={{
              display: 'flex',
              flexFlow: 'column',
              gap: 10,
            }}
          >
            <p>
              <span>Add Players</span>
              <small
                style={{
                  display: 'block',
                  fontStyle: 'italic',
                  fontSize: '0.75rem',
                }}
              >
                must have at least 2 players
              </small>
            </p>
            {players.map((player) => {
              return (
                <PlayerInput
                  key={player.id}
                  id={player.id}
                  name={player.name}
                  handleAdd={playerInputAdd}
                  handleRemove={playerInputRemove}
                  handlePlayerInput={handlePlayerInput}
                />
              );
            })}
          </fieldset>
          <button
            type='submit'
            style={{
              marginTop: '1rem',
            }}
          >
            Start
          </button>
        </form>
      </section>
    </>
  );
}

const RoundRadio = ({ value, checked, currentCheckedRound, onChange }) => {
  return (
    <div className='player-input'>
      <label>
        <input
          type='radio'
          name='rounds'
          id=''
          value={value}
          checked={currentCheckedRound == value}
          onChange={(e) => onChange(e)}
        />
        {value}
      </label>
    </div>
  );
};

const PlayerInput = ({ id, name, handleAdd, handleRemove, handlePlayerInput }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
      }}
    >
      <input
        type='text'
        name='player'
        id=''
        required
        value={name}
        onChange={(e) => handlePlayerInput(e, id)}
      />
      <div
        style={{
          display: 'flex',
          gap: 4,
        }}
      >
        <button
          type='button'
          aria-label='Add'
          // className={classes.button}
          onClick={() => handleAdd()}
          style={{
            padding: '0.2em',
            borderRadius: 4,
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            // className={classes.icon}
            style={{
              width: '0.75em',
              height: '0.75em',
            }}
          >
            <path
              fill='currentColor'
              d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z'
            />
          </svg>
        </button>
        <button
          type='button'
          aria-label='Remove'
          onClick={() => handleRemove(id)}
          style={{
            padding: '0.2em',
            borderRadius: 4,
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            style={{
              width: '0.75em',
              height: '0.75em',
            }}
          >
            <path
              fill='currentColor'
              d='M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GameSetupScreen;
