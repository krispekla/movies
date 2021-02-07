require('dotenv').config();
const express = require('express');
const cors = require('cors');
const movieRoutes = require('./movie-routes');

const app = express();
const PORT = 3000 | process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api/v1', movieRoutes);

app.all('*', (req, res) => {
  res.status(404).send();
});

app.listen(PORT, () => console.log(`Movie API - started on PORT: ${PORT}`));
