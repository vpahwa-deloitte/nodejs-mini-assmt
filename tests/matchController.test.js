const {
  getAllMatches,
  getMatchById,
  createMatch,
  deleteMatch,
} = require("../controllers/matchController");

const Match = require("../models/match");

const { matches } = require("../utils/data");

describe("Match Controller", () => {
  describe("getAllMatches", () => {
    it("should return all matches", () => {
      const req = {};
      const res = {
        json: jest
          .fn()
          .mockReturnValueOnce({ message: "Success", data: matches }),
      };

      getAllMatches(req, res);

      expect(res.json).toHaveBeenCalledWith({
        message: "Success",
        data: matches,
      });
    });
  });

  describe("getMatchById", () => {
    it("should return the match with the given ID if found", () => {
      const matchId = 1;
      const req = { params: { id: matchId } };
      const res = {
        json: jest
          .fn()
          .mockReturnValueOnce({ message: "Success", data: matches[0] }),
        status: jest.fn().mockReturnThis(),
      };

      getMatchById(req, res);

      expect(res.json).toHaveBeenCalledWith({
        message: "Success",
        data: matches[0],
      });
    });

    it("should return a error if match with the given ID is not found", () => {
      const matchId = 30;
      const req = { params: { id: matchId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnValueOnce({ message: "Match not found" }),
      };

      getMatchById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Match not found" });
    });
  });

  describe("deleteMatch", () => {
    it("should delete the match with the given ID", () => {
      const matchId = 1;
      const req = { params: { id: matchId } };
      const res = {
        json: jest.fn(),
      };

      deleteMatch(req, res);

      expect(matches.length).toBe(3);
      expect(res.json).toHaveBeenCalledWith({ message: "Match deleted" });
    });
  });

  describe("createMatch", () => {
    test("should create a new match and return it with status code 201", () => {
      const req = {
        body: {
          team1: "Team A",
          team2: "Team B",
          date: "2023-07-16",
          team1Score: 2,
          team2Score: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      createMatch(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "Match created",
        data: expect.any(Match),
      });
    });
  });

});
