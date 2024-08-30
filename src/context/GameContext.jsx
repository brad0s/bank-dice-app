import { createContext, useEffect, useState } from 'react';
import { GameStatus, getCurrentTurnPlayer, playerTurnRotator } from '../utils/helpers';

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [status, setStatus] = useState(GameStatus.INIT);
  const [players, setPlayers] = useState([{ id: 0, name: '', bank: 0, isBanked: false }]);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [currentTurnPlayer, setCurrentTurnPlayer] = useState(null);
  const [totalRounds, setTotalRounds] = useState(20);
  const [currentRound, setCurrentRound] = useState(0);
  const [bank, setBank] = useState(0);
  const [prevBank, setPrevBank] = useState(0);
  const [diceRolls, setDiceRolls] = useState(0);

  const contextValue = {
    status,
    setStatus,
    players,
    setPlayers,
    currentTurnIndex,
    setCurrentTurnIndex,
    currentTurnPlayer,
    setCurrentTurnPlayer,
    totalRounds,
    setTotalRounds,
    currentRound,
    setCurrentRound,
    bank,
    setBank,
    prevBank,
    setPrevBank,
    diceRolls,
    setDiceRolls,
  };

  const roundReset = () => {
    const resetPlayers = players.map((player) => {
      player.isBanked = false;
      return player;
    });
    setPlayers([...resetPlayers]);
    setPrevBank(0);
    setBank(0);
    setDiceRolls(0);
  };

  useEffect(() => {
    if (status === GameStatus.PLAYING) {
      let currentPlayer = playerTurnRotator(players, currentTurnPlayer);
      setCurrentTurnPlayer(currentPlayer);
    }
  }, [currentTurnIndex, status]);

  useEffect(() => {
    roundReset();
  }, [currentRound]);

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

export default GameContext;
