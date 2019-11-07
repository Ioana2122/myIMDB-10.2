let next = null; //nextPage
let prev = null; //previousPage

class Movie {
  constructor(movieDetails) {
    Object.assign(this, movieDetails);
  }
  createMovieItem() {
    console.log("FROM MOVIE ClASS: ", this.Country);
  }
}
// Used to handle servercalls for movies
const makeCallToServer = async apiURL => {
  movieList.innerHTML = "";
  const request = await fetch(apiURL);
  const data = await request.json();
  console.log(data);
  const results = data.results;
  const page = data.pagination.links;
  const pageNumber = data.pagination.currentPage;
  pageNr.innerText = ` - ${pageNumber} - `;
  next = page.next;
  prev = page.prev;
  results.forEach(result => {
    let movie = new Movie(result);
    console.log("Instanciated Movie: ", movie);
    createMovieItem(movie);
    movie.createMovieItem();
  });
};

//Search functionality function
const renderFilteredMovies = async () => {
  const filteredFilms = filteredMovies();
  if (!filteredFilms) {
    return;
  }
  movieList.innerHTML = "";
  const request = await fetch(
    `https://movies-api-siit.herokuapp.com/movies?Title=${filteredFilms}`
  );
  const data = await request.json();
  const results = await data.results;
  const page = await data.pagination.links;
  next = page.next;
  prev = page.prev;
  results.forEach(result => createMovieItem(result));
  searchfield.value = "";
};

// make call to server for details page
const getMovie = async () => {
  let movieID = sessionStorage.getItem("movieID");
  try {
    const response = await fetch(
      `https://movies-api-siit.herokuapp.com/movies/${movieID}`
    );
    const movie = await response.json();
    displayDetails(movie);
  } catch (error) {
    console.log("Error getting movie: ", error);
  }
};

const getTrailer = async () => {
  let movieID = sessionStorage.getItem("imdbID");
  try {
    const trailerResonse = await fetch(
      `https://imdb-extras.herokuapp.com/${movieID}/trailer`
    );
    const trailer = await trailerResonse.json();
    displayTrailer(trailer);
  } catch (error) {
    console.log("Error getting trailer", error);
  }
};
