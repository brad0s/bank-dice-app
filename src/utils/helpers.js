export const GameStatus = {
  INIT: 'init',
  PLAYING: 'playing',
  END: 'end',
};

export const PlayerInputInit = {
  name: '',
};

// TODO
export const getCurrentTurnPlayer = (players, currentTurn) => {
  const availablePlayers = players.filter((player) => player.isBanked === false);
  const current = currentTurn % availablePlayers.length;
  const currentPlayer = availablePlayers[current];
  return currentPlayer;
};

export const playerTurnRotator = (players, currentPlayer) => {
  let currentPlayerIndex = players.findIndex((p) => p.id === currentPlayer.id) ?? 0;

  if (players.every((player) => player.isBanked === true)) {
    return players[currentPlayerIndex];
  }

  while (true) {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    const newCurrentPlayer = players[currentPlayerIndex];
    if (newCurrentPlayer.isBanked === false) {
      return newCurrentPlayer;
    }
  }
};

export const checkIfAllPlayersAreBanked = (players) => {
  const allPlayersAreBanked = players.every((player) => player.isBanked === true);
  return allPlayersAreBanked;
};
