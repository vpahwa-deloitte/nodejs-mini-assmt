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

module.exports = {
  getAllMatches,
  getMatchById,
};
