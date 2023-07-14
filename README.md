## Endpoints
**Matches**
- GET /matches - Retrieve all matches
- GET /matches/:id - Retrieve a specific match by ID
- GET /matches/:year/:month/:day - Retrieve a specific match by date
- POST /matches - Create a new match
- PATCH /matches/:id - Update a match by ID
- DELETE /matches/:id - Delete a match by ID

**Teams**
- GET /teams - Retrieve all teams
- GET /teams/:id - Retrieve a specific team by ID
- POST /teams - Create a new team
- PATCH /teams/:id - Update a team by ID
- DELETE /teams/:id - Delete a team by ID

**Leaderboard**
- GET /leaderboard - Retrieve the leaderboard (matchesWon, topScorers, topWickerTakers)
