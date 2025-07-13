export const GameStatus = {
  INIT: 'init',
  PLAYING: 'playing',
  END: 'end',
};

export const PlayerInputInit = {
  name: '',
};

export const playerTurnRotator = (players, currentPlayer) => {
  console.log(currentPlayer);
  // if (players.length === 0) {
  //   return null;
  // }
  // if (!currentPlayer) {
  //   return players[0];
  // }
  // if no currentPlayer, return the first unbanked player
  if (!currentPlayer) {
    return players.find(p => !p.isBanked) || null;
  }

  let currentPlayerIndex = players.findIndex((p) => p.id === currentPlayer.id);
  if (currentPlayerIndex === -1) {
    currentPlayerIndex = 0;
  }

  // TODO: this should not return the currentplayer if all players are banked
  if (players.every((player) => player.isBanked === true)) {
    return players[currentPlayerIndex];
  }

  // refactor to make sure there is a fail safe to prevent inifinte loop 
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
