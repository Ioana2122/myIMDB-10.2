const displayDetails = movie => {
  const title = document.querySelector(".detailsTitle");
  const title1 = document.querySelector(".detailsTitle1");
  const title2 = document.querySelector(".detailsTitle2");
  const title3 = document.querySelector(".detailsTitle3");
  const title4 = document.querySelector(".detailsTitle4");
  const title5 = document.querySelector(".detailsTitle5");

  title.innerText = "Title " + movie.Title;
  title1.innerText = "Actors: " + movie.Actors;
  title2.innerText = movie.Country;
  title3.innerText = movie.Language;
  title4.innerText = movie.Rated;
  title5.innerText = movie.Type;
};

getMovie();
