const express = require('express');
const matchRoutes = require('./routes/matchRoutes');
const teamRoutes = require('./routes/teamRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/matches', matchRoutes);
app.use('/teams', teamRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
