const express = require('express');
const moviesApi = require('./routes/movies');
const app = express();
const { config } = require('./config');

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
