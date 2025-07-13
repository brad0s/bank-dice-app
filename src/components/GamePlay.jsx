import DiceInputs from './DiceInputs';
import PlayersList from './PlayerList';
import InfoHeader from './InfoHeader';
import DiceRoll from './DiceRoll';

function GamePlay() {
  return (
    <>
      <InfoHeader />
      <PlayersList />
      <DiceInputs />
      <DiceRoll />
    </>
  );
}

export default GamePlay;
