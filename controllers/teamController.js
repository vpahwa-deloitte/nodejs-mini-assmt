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

function createTeam(req, res) {
  const { name, players } = req.body;
  const newTeam = new Team(teams.length + 1, name, players);
  teams.push(newTeam);

  res.status(201).json({ message: 'Team created', data: newTeam });
}

function updateTeam(req, res) {
  const teamId = parseInt(req.params.id);
  const { name, players } = req.body;
  const team = teams.find((team) => team.id === teamId);

  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }

  team.name = name;

  for (let i = 0; i < team.players.length; i++) {
    const player = team.players[i].player;
    const updatedPlayer = players[i].player;

    player.name = updatedPlayer.name;
    player.score = updatedPlayer.score;
    player.wickets = updatedPlayer.wickets;
  }

  res.json({ message: 'Team updated', data: team });
}

function deleteTeam(req, res) {
  const teamId = parseInt(req.params.id);
  const teamIndex = teams.findIndex((team) => team.id === teamId);

  if (teamIndex === -1) {
    return res.status(404).json({ message: 'Team not found' });
  }

  teams.splice(teamIndex, 1);

  res.json({ message: 'Team deleted' });
}

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};
