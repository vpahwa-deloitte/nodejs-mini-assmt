class Team {
    constructor(id, name, players) {
      this.id = id;
      this.name = name;
      this.players = players.map((player) => ({
        player: player,
      }));
    }
  }
  
  module.exports = Team;
  