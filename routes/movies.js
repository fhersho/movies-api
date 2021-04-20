const express = require('express');
const MovieService = require('../services/movies');

const router = express.Router();
const movieService = new MovieService();
const moviesApi = (app) => {
  app.use('/api/movies', router);
};


router.get('/', (req, res, next) => {
  try {
    const { tags } = req.query;
    const data = movieService.getMovies({ tags });
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
    const { id } = req.params;
    const data = movieService.getMovie(id);
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
    const { body: movie } = req;
    const createdMovie = movieService.createMovie({ movie });
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
    const { id } = req.params;
    const { body: movie } = req;
    const updatedMovie = movieService.updateMovie(id, movie);
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
    const { id } = req.params;
    const deletedMovie = movieService.deleteMovie(id);
    res.status(200)
      .json({
        data: deletedMovie,
        message: 'Movie deleted'
      });
  } catch (e) {
    console.log(e);
  }
});

module.exports = moviesApi;
