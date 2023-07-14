const Match = require('../models/match');
const Team = require('../models/team');

const teams = [
  new Team(1, 'CSK', [
    { name: 'MSD', score: 10, wickets: 0 },
    { name: 'S Raina', score: 0, wickets: 2 },
  ]),
  new Team(2, 'RCB', [
    { name: 'V Kohli', score: 90, wickets: 0 },
    { name: 'ABD', score: 10, wickets: 3 },
  ]),
  new Team(3, 'GT', [
    { name: 'H Pandya', score: 50, wickets: 0 },
    { name: 'S Gill', score: 0, wickets: 1 },
  ]),
  new Team(4, 'MI', [
    { name: 'R Sharma', score: 44, wickets: 0 },
    { name: 'J Bumrah', score: 0, wickets: 3 },
  ]),
];

const matches = [
  new Match(1, 'CSK', 'RCB', '2023-07-14', 150, 120),
  new Match(2, 'GT', 'MI', '2023-07-15', 180, 160),
  new Match(3, 'CSK', 'GT', '2023-07-16', 170, 190),
  new Match(4, 'RCB', 'MI', '2023-07-17', 140, 130),
];

module.exports = { matches, teams };
