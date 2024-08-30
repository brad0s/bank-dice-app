import { useContext, useEffect, useState } from 'react';
import GameContext from '../context/GameContext';

const diceInputs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'doubles'];

function DiceInputs() {
  let {
    players,
    setCurrentRound,
    bank,
    setBank,
    setPrevBank,
    setCurrentTurnIndex,
    diceRolls,
    setDiceRolls,
  } = useContext(GameContext);

  const handleDiceClick = (value) => {
    setCurrentTurnIndex((prev) => (prev + 1) % players.length);
    setDiceRolls((prev) => prev + 1);
    switch (value) {
      case 'doubles':
        setPrevBank(bank);
        setBank((prev) => prev * 2);
        break;
      case 7:
        if (diceRolls <= 2) {
          setPrevBank(bank);
          setBank((prev) => prev + value);
        } else {
          setCurrentRound((prev) => prev + 1);
        }
        break;
      default:
        setPrevBank(bank);
        setBank((prev) => prev + value);
        break;
    }
  };

  return (
    <div
      className='diceInput'
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(4, 1fr)`,
        gap: 8,
      }}
    >
      {diceInputs.map((diceInput) => {
        return (
          <DiceInput
            key={diceInput}
            input={diceInput}
            handleOnClick={handleDiceClick}
          />
        );
      })}
    </div>
  );
}

const DiceInput = ({ input, handleOnClick }) => {
  let { diceRolls } = useContext(GameContext);
  let [bgColor, setBgColor] = useState('none');

  useEffect(() => {
    // console.log(`DiceInput: ${input} rerender`);
    if (input === 7 && diceRolls > 2) {
      setBgColor('red');
    } else {
      setBgColor('none');
    }
  }, [diceRolls]);
  // console.log(bgColor);

  return (
    <div>
      <button
        onClick={() => handleOnClick(input)}
        style={{
          width: `100%`,
          backgroundColor: bgColor,
        }}
        disabled={input === 'doubles' && diceRolls <= 2}
      >
        {input}
      </button>
    </div>
  );
};

export default DiceInputs;
