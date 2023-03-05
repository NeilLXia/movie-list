const serverURL = 'http://localhost:3000/movies';

const databaseAccess = {
  pullMoviesData: (query, callback = () => {}) => {
    clearTimeout(timeout);

    let queryString = '';
    queryString = Object.keys(query).map((key) => {
      return `${key}=${query[key]}`
    }).join('&');

    var timeout = setTimeout(
      fetch(serverURL + '?' + new URLSearchParams(queryString), {
        method: 'GET',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
      }})
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((err) => console.log(err))
    , 500);
  },

  addMovie: (newTitle, callback = () => {}) => {
    clearTimeout(timeout);

    var timeout = setTimeout(
      fetch(serverURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      })
      .then((response) => callback())
      .catch((err) => console.log(err))
    , 500);
  },

  toggleWatched: (movieID, callback = () => {}) => {
    clearTimeout(timeout);

    var timeout = setTimeout(
      fetch(serverURL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieID: movieID })
      })
      .then((response) => response.json())
      .then((response) => {
        callback();
        return response;
      })
      .catch((err) => console.log(err))
    , 500);
  }
}

export default databaseAccess;
