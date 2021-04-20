const { moviesMock } = require('../data/movies');

class MovieService {
  getMovies = () => moviesMock;
  getMovie = (id) => moviesMock[0];
  createMovie = () => moviesMock[0].id;
  updateMovie = () => moviesMock[0].id;
  deleteMovie = (id) => moviesMock[0].id;
}


module.exports = MovieService;
