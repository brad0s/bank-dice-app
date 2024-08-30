import DiceInputs from './DiceInputs';
import PlayersList from './PlayerList';
import InfoHeader from './InfoHeader';

function GamePlay() {
  return (
    <>
      <InfoHeader />
      <PlayersList />
      <DiceInputs />
    </>
  );
}

export default GamePlay;
