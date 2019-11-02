const movieList = document.querySelector(".movieList");
const searchfield = document.getElementById("searchfield");
const search = document.getElementById("search");

let filteredMovies = () => searchfield.value;

const showMovieInfo = container => {
  const filmInfo = document.createElement("div");
  filmInfo.classList.add("film-info");
  filmInfo.innerHTML = `<div>
      <h4>Click for Details</h4>
    </div>`;
  container.appendChild(filmInfo);
};

const removeMovieInfo = container => {
  console.log(container);
  container.children[1].remove();
};

const showDetailsPage = movie => {
  console.log(movie);
  sessionStorage.setItem("movieID", movie._id);
  window.location = `details.html`;
  return false;
};

const movieItem = movie => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("movie-item");
  movie.Poster !== "N/A"
    ? (itemContainer.innerHTML = `<div><img src='${movie.Poster}'/><p>${movie.Title}</p></div>`)
    : (itemContainer.innerHTML = `<div><div class=placeholder></div><p>${movie.Title}</p></div>`);
  movieList.appendChild(itemContainer);
  itemContainer.addEventListener("mouseenter", () =>
    showMovieInfo(itemContainer)
  );
  itemContainer.addEventListener("mouseleave", () =>
    removeMovieInfo(itemContainer)
  );
  itemContainer.addEventListener("click", () => showDetailsPage(movie));
};

searchfield.addEventListener("keyup", filteredMovies);
search.addEventListener("click", renderFilteredMovies);
makeCallToServer();
