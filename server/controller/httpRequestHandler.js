const databaseHandler = require('../model/databaseHandler.js');

const defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};

let returnResponse = (res, statusCode, contentType, responseBody) => {
  defaultCorsHeaders['Content-Type'] = contentType;
  res.writeHead(statusCode, defaultCorsHeaders)
  res.end(responseBody);
}

module.exports = {
  get: function (req, res) {
    databaseHandler.getMovies(req.query)
    .then((data) => {
      returnResponse(res, 200, 'application/json', JSON.stringify(data))
    })
    .catch((err) => {
      returnResponse(res, 400, 'text/plain', JSON.stringify(err))});
  },

  post: function (req, res) {
    databaseHandler.addMovie(req.body.title)
    .then((response) => (
      returnResponse(res, 201, 'text/plain', response)))
    .catch((err) => (
      returnResponse(res, 400, 'text/plain', err)));
  },

  put: function (req, res) {
    databaseHandler.updateWatched(req.body.movieID)
    .then((response) => (
      returnResponse(res, 201, 'text/plain', response)))
    .catch((err) => (
      returnResponse(res, 400, 'text/plain', err)));
  }
};