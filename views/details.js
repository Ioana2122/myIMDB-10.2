const displayDetails = movie => {
  console.log(movie);
  const container = document.getElementById("movie");
  let output = `
        <div class="row m-1">
          <div class="col-md-4 m-auto text-center">
            <img src="${movie.Poster}" class="img-thumbnail">
            <div class="butoane">
              <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary m-1">View IMDB</a>
              <a href="#" class="btn btn-success m-1">Edit Movie</a>
              <a href="#" class="btn btn-danger m-1">Delete Movie</a>
            </div>
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Type:</strong> ${movie.Type}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              <li class="list-group-item"><strong>Runtime:</strong> ${movie.Runtime}</li>
              <li class="list-group-item"><strong>Language:</strong> ${movie.Language}</li>
              <li class="list-group-item"><strong>Awards:</strong> ${movie.Awards}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="card card-body">
            <h3 class="card-title">Plot</h3>
            <hr/>
            <p class="card-text">${movie.Plot}</p>
            <hr/>
            <h3 class="card-title">Trailer</h3>
            <hr/>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="aaa" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      `;
  container.innerHTML = output;
};
const displayTrailer = trailer => {
  console.log(trailer);
  const trailerContainer = document.querySelector(".embed-responsive");
  console.log(trailerContainer);
  const trailerSource = document.querySelector(".embed-responsive-item");
  if (trailer.error) {
    trailerContainer.innerHTML = "<p>This item has no trailer</p>";
  } else {
    trailerSource.setAttribute("src", trailer.embed);
  }
  console.log(trailerContainer);
};
getMovie();
getTrailer();
