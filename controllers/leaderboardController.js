const { matches, teams } = require('../utils/data');

function getLeaderboard(req, res) {
  const leaderboard = [];

  for (const team of teams) {
    const topScorer = getTopScorer(team);
    const topWicketTaker = getTopWicketTaker(team);

    leaderboard.push({
      teamName: team.name,
      matchesWon: 0,
      topScorer,
      topWicketTaker,
    });
  }

  for (const match of matches) {
    const { team1, team2, team1Score, team2Score } = match;

    if (team1Score > team2Score) {
      leaderboard.find((entry) => entry.teamName === team1).matchesWon++;
    } else if (team2Score > team1Score) {
      leaderboard.find((entry) => entry.teamName === team2).matchesWon++;
    } 
  }

  leaderboard.sort((a, b) => b.matchesWon - a.matchesWon);

  res.json({ message: 'Success', data: leaderboard });
}

function getTopScorer(team) {
    const players = team.players.map((playerObj) => playerObj.player);
    const scores = players.map((player) => player.score);
    const validScores = scores.filter((score) => !isNaN(score));
  
    if (validScores.length === 0) {
      return []; // No valid scores found
    }
  
    const maxScore = Math.max(...validScores);
    const topScorers = players.filter((player) => player.score === maxScore);
    return topScorers;
}

function getTopWicketTaker(team) {
    const players = team.players.map((playerObj) => playerObj.player);
    const wickets = players.map((player) => player.wickets);
    const validWickets = wickets.filter((wicket) => !isNaN(wicket));
  
    if (validWickets.length === 0) {
      return []; // No valid wickets found
    }
  
    const maxWickets = Math.max(...validWickets);
    const topWicketTakers = players.filter((player) => player.wickets === maxWickets);
    return topWicketTakers;
  }
  

module.exports = { getLeaderboard };
