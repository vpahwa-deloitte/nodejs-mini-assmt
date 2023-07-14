This commit introduces the following changes:
- Implement POST method in the match controller to create new matches
- Implement PATCH method in the match and team controllers to update match and team data
- Implement DELETE methods in the match and team controllers to delete matches and teams
- Add logic in the leaderboard controller to calculate top scorers and wicket takers
- Update routes for matches and teams to handle the new methods
- Add leaderboard route to retrieve leaderboard data