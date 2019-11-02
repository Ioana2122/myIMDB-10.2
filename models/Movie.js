const apiURL = "https://movies-api-siit.herokuapp.com/movies?take=10";

// Function that runs when page loads
const makeCallToServer = () => {
  fetch(apiURL)
    .then(data => data.json())
    .then(response => {
      console.log(response);
      response.results.forEach(movie => {
        movieItem(movie);
      });
    });
};

const renderFilteredMovies = () => {
  const filteredFilms = filteredMovies();
  if (!filteredFilms) {
    return;
  }
  fetch(`https://movies-api-siit.herokuapp.com/movies?Title=${filteredFilms}`)
    .then(data => data.json())
    .then(response => {
      console.log(response);
      const deletedMovies = Array.from(
        document.getElementsByClassName("movie-item")
      );
      deletedMovies.forEach(child => movieList.removeChild(child));
      response.results.forEach(result => movieItem(result));
    });
  searchfield.value = "";
};

const getMovie = () => {
  let movieID = sessionStorage.getItem("movieID");
  fetch(`https://movies-api-siit.herokuapp.com/movies/${movieID}`)
    .then(data => data.json())
    .then(movie => {
      displayDetails(movie);
      console.log(movie);
    });
};
