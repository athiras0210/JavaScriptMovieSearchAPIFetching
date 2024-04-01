function searchData() {
  var searchText = document.getElementById('search').value;
  console.log(searchText);
  fetch(`https://www.omdbapi.com/?t=${searchText}&apikey=834f5328`)
    .then(res => res.json()) //Array of data
    .then(data => displayData(data)) //function call
    .catch(error => {
      alert("Failed to fetch movie details");
    });
}

function displayData(movie) {
  var resultDiv = document.getElementById('result');
  var card = `<div class="col-md-12 mt-5">
        <div class="card mb-3 bg-dark text-light">
          <div class="row no-gutters">
            <div class="col-md-3">
              <img src="${movie.Poster}" height="330px" class="card-img" alt="...">
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">Title: ${movie.Title}</h5>
                <p class="card-text">Year: ${movie.Year}</p>
                <p class="card-text">Actors: ${movie.Actors}</p>
                <p class="card-text">Ratings: ${movie.Ratings[0].Value}</p>
                <p class="card-text">Description: ${movie.Plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  resultDiv.innerHTML = card;
}