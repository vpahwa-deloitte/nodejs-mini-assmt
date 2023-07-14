const { matches } = require("../utils/data");
const Match = require("../models/match");

function getAllMatches(req, res) {
  res.json({ message: "Success", data: matches });
}

function getMatchById(req, res) {
  const matchId = parseInt(req.params.id);
  const match = matches.find((match) => match.id === matchId);

  if (!match) {
    return res.status(404).json({ message: "Match not found" });
  }

  res.json({ message: "Success", data: match });
}

function createMatch(req, res) {
  const { team1, team2, date, team1Score, team2Score } = req.body;
  const newMatch = new Match(
    matches.length + 1,
    team1,
    team2,
    date,
    team1Score,
    team2Score
  );
  matches.push(newMatch);

  res.status(201).json({ message: "Match created", data: newMatch });
}

function updateMatch(req, res) {
  const matchId = parseInt(req.params.id);
  const { team1, team2, date, team1Score, team2Score } = req.body;
  const match = matches.find((match) => match.id === matchId);

  if (!match) {
    return res.status(404).json({ message: "Match not found" });
  }

  match.team1 = team1;
  match.team2 = team2;
  match.date = date;
  match.team1Score = team1Score;
  match.team2Score = team2Score;

  res.json({ message: "Match updated", data: match });
}

function deleteMatch(req, res) {
  const matchId = parseInt(req.params.id);
  const matchIndex = matches.findIndex((match) => match.id === matchId);

  if (matchIndex === -1) {
    return res.status(404).json({ message: "Match not found" });
  }

  matches.splice(matchIndex, 1);

  res.json({ message: "Match deleted" });
}

function getMatchesByDate(req, res) {
  const { year, month, day } = req.params;
  let date;

  date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

  const filteredMatches = matches.filter((match) => {
    const matchDate = new Date(match.date);

    return (
      matchDate.getFullYear() === date.getFullYear() &&
      matchDate.getMonth() === date.getMonth() &&
      matchDate.getDate() === date.getDate()
    );
  });

  res.json({ message: "Success", data: filteredMatches });
}

module.exports = {
  getAllMatches,
  getMatchById,
  createMatch,
  updateMatch,
  deleteMatch,
  getMatchesByDate,
};
