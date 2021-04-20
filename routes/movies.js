const express = require('express');
const { moviesMock } = require('../data/movies');

const router = express.Router();

const moviesApi = (app) => {
  app.use('/api/movies', router);
};


router.get('/', (req, res, next) => {
  try {
    const data = moviesMock;
    res.status(200)
      .json({
        data,
        message: 'Movies listed'
      });
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    const data = moviesMock[0];
    res.status(200)
      .json({
        data,
        message: 'Movie by id'
      });
  } catch (e) {
    console.log(e);
  }
});

router.post('/', (req, res, next) => {
  try {
    const createdMovie = moviesMock[0].id;
    res.status(201)
      .json({
        data: createdMovie,
        message: 'Movie created'
      });
  } catch (e) {
    console.log(e);
  }
});

router.put('/:id', (req, res, next) => {
  try {
    const updatedMovie = moviesMock[0].id;
    res.status(200)
      .json({
        data: updatedMovie,
        message: 'Movie updated'
      });
  } catch (e) {
    console.log(e);
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    const deleteddMovie = moviesMock[0].id;
    res.status(200)
      .json({
        data: deleteddMovie,
        message: 'Movie deleted'
      });
  } catch (e) {
    console.log(e);
  }
});

module.exports = moviesApi;
