const teamController = require('../controllers/teamController');
const { teams } = require('../utils/data');

describe('Team Controller', () => {
  describe('getAllTeams', () => {
    it('should return all teams', () => {
      const req = {};
      const res = {
        json: jest.fn(),
      };

      teamController.getAllTeams(req, res);

      expect(res.json).toHaveBeenCalledWith({
        message: 'Success',
        data: teams,
      });
    });
  });

  describe('getTeamById', () => {
    it('should return the specified team', () => {
      const teamId = 1;
      const req = {
        params: {
          id: teamId,
        },
      };
      const res = {
        json: jest.fn(),
      };

      teamController.getTeamById(req, res);

      const expectedTeam = teams.find((team) => team.id === teamId);

      expect(res.json).toHaveBeenCalledWith({
        message: 'Success',
        data: expectedTeam,
      });
    });

    it('should return an error message if the team is not found', () => {
      const teamId = 100;
      const req = {
        params: {
          id: teamId,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      teamController.getTeamById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Team not found',
      });
    });
  });

  describe('deleteTeam', () => {
    it('should delete the specified team', () => {
      const teamId = 1;
      const req = {
        params: {
          id: teamId,
        },
      };
      const res = {
        json: jest.fn(),
      };

      teamController.deleteTeam(req, res);

      expect(res.json).toHaveBeenCalledWith({
        message: 'Team deleted',
      });
      expect(teams).not.toContainEqual(expect.objectContaining({ id: teamId }));
    });
  });
});
