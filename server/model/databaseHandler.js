var db = require('../database.js');

let checkMovieExists = (query) => {
  return db.moviesTable.findAll({where: query})
  .then((movie) => {
    return movie.length === 0 ? false : true;
  })
}

let addMovieToDatabase = db.moviesTable.create.bind(db.moviesTable);
let pullMoviesFromDatabase = db.moviesTable.findAll.bind(db.moviesTable);
let updateWatchedTag = db.moviesTable.update.bind(db.moviesTable);
let sequelizeLiteral = db.literal;

module.exports = {
  getMovies: (query) => (new Promise((resolve, reject) => {
    db.moviesTable.sync()
      .then(() => {
        searchTerms = {};
        searchTerms.order = [['title', 'ASC']];

        // Build Search Query
        if (Object.keys(query).length === 0) {
          currentQuery = [];

          if (query.title !== undefined) {
            currentQuery.push(`MATCH (title) AGAINST ('${query.title}')`);
          }
          if (query.watched !== undefined) {
            currentQuery.push(`watched = ${Number(query.watched)}`);
          }

          searchTerms.where = sequelizeLiteral(currentQuery.join(' AND '));
        }

        return pullMoviesFromDatabase(searchTerms)
      })
      .then((data) => { resolve(data) })
      .catch((err) => { reject(err) });
  })),

  addMovie: (title) => (new Promise((resolve, reject) => {
    db.moviesTable.sync()
      .then(() => checkMovieExists({title}))
      .then((isMovieExists) => {
        if (isMovieExists) {
          throw 'Title not appended to database. Existing entry already found.';
        }

        return addMovieToDatabase({ title: title, watched: false })
      })
      .then(() => resolve(`${title} added to database`))
      .catch((err) => reject(JSON.stringify(err)));
  })),

  updateWatched: (movieID) => (new Promise((resolve, reject) => {
    db.moviesTable.sync()
      .then(() =>
        checkMovieExists({ movieID: movieID, watched: false }))
      .then((isMovieWatched) =>
        updateWatchedTag({ watched: isMovieWatched }, { where: { movieID: movieID } }))
      .then(() =>
        resolve(JSON.stringify('Successfully updated watch status')))
      .catch((err) => reject(err));
  }))
}
