import { useState } from 'react';

const dice1 = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64'
    />
  </svg>
);
const dice2 = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm352 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64'
    />
  </svg>
);
const dice3 = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64'
    />
  </svg>
);
const dice4 = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64'
    />
  </svg>
);
const dice5 = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64M96 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64'
    />
  </svg>
);
const dice6 = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160-160a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64'
    />
  </svg>
);

function DiceRoll() {
  const dice = [dice1, dice2, dice3, dice4, dice5, dice6];

  const rollDice = () => {
    const firstDie = Math.floor(Math.random() * 6);
    const secondDie = Math.floor(Math.random() * 6);
    return [dice[firstDie], dice[secondDie]];
  };

  const [diceRoll, setDiceRoll] = useState(null);
  const [isDiceRolling, setIsDiceRolling] = useState(false);

  // let opacity = isDiceRolling ? 0 : 1;

  const handleRollDiceClick = () => {
    if (isDiceRolling) return;
    setIsDiceRolling(true);
    setTimeout(() => {
      setDiceRoll(rollDice());
      setIsDiceRolling(false);
    }, 300);
  };

  return (
    <div
      className='dice-roll'
      style={{ marginTop: '30px' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          position: 'relative',
          minHeight: '3rem',
        }}
      >
        {isDiceRolling && (
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#d4d5e0',
              opacity: 0.7,
            }}
          >
            <small>
              <em>Rolling dice...</em>
            </small>
          </span>
        )}
        <div
          style={{
            flex: '0 1 100px',
            color: '#d4d5e0',
            opacity: isDiceRolling ? 0 : 1,
            transition: 'opacity 0.1s ease',
          }}
        >
          {diceRoll && diceRoll[0]}
        </div>
        <div
          style={{
            flex: '0 1 100px',
            color: '#d4d5e0',
            opacity: isDiceRolling ? 0 : 1,
            transition: 'opacity 0.1s ease',
          }}
        >
          {diceRoll && diceRoll[1]}
        </div>
      </div>
      <button
        onClick={handleRollDiceClick}
        disabled={isDiceRolling}
        style={{
          opacity: isDiceRolling ? 0.5 : 1,
        }}
      >
        Roll Dice
      </button>
    </div>
  );
}

export default DiceRoll;
