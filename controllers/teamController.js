const { teams } = require('../utils/data');
const Team = require('../models/team');

function getAllTeams(req, res) {
  res.json({ message: 'Success', data: teams });
}

function getTeamById(req, res) {
  const teamId = parseInt(req.params.id);
  const team = teams.find((team) => team.id === teamId);

  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }

  res.json({ message: 'Success', data: team });
}

module.exports = {
  getAllTeams,
  getTeamById,
};
