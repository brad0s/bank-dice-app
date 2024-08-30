class Game {
  constructor() {
    this.players = [];
    this.rounds = null;
    this.currentRound = 0;
    this.bank = 0;
  }

  setPlayers = (players) => {
    this.players = players;
  };
}
