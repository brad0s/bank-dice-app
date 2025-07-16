export const GameStatus = {
  INIT: 'init',
  PLAYING: 'playing',
  END: 'end',
};

export const PlayerInputInit = {
  name: '',
};

export const playerTurnRotator = (players, currentPlayer) => {
  if (players.length === 0) {
    return null;
  }

  // if no currentPlayer, return the first unbanked player
  if (!currentPlayer) {
    return players.find(p => !p.isBanked) || null;
  }

  let currentPlayerIndex = players.findIndex((p) => p.id === currentPlayer.id);
  if (currentPlayerIndex === -1) {
    currentPlayerIndex = 0;
  }

  if (players.every((player) => player.isBanked === true)) {
    return players[currentPlayerIndex];
  }

  // refactor to make sure there is a fail safe to prevent infinite loop 
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
