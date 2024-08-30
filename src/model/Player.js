class Player {
  constructor(name) {
    this.name = name;
    this.isBanked = false;
    this.bank = 0;
  }

  setName = (name) => {
    this.name = name;
  };
  getName = () => {
    return this.name;
  };
  setIsBanked = (isBanked) => {
    this.isBanked = isBanked;
  };
  getIsBanked = () => {
    return this.isBanked;
  };
  setBank = (bank) => {
    this.bank += bank;
  };
  getBank = () => {
    return this.bank;
  };
}

export default Player;
