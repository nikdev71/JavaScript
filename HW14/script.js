$(document).ready(function(){

    $('#searchmovie').click(function(e){
        e.preventDefault();
        let data = $('#form').serialize();
        let apiUrl = "http://www.omdbapi.com/?apikey=88e222e7&"+data+"&s&page=10" ; // Запрос на первую страницу результатов
        getMovies(apiUrl);

        async function getMovies(url) {
          try {
            const response = await fetch(url);
            const responseJSON = await response.json();
            if (responseJSON.Response === "True") {
                let movies = responseJSON.Search;
                let movieCards = "";
                movies.forEach(movie => {
                    movieCards += `
                      <div class="card">
                        <img src="${movie.Poster}" alt="${movie.Title} Poster">
                        <div class="info">
                            <h2>${movie.Title}</h2>
                            <p><strong>Type:</strong> ${movie.Type}</p>
                            <p><strong>Year:</strong> ${movie.Year}</p>
                        </div>
                      </div>
                    `;
                });
                document.getElementById("foundedMovie").innerHTML = movieCards;
              } else {
                console.log("Error:", responseJSON.Error);
              }
          }
          catch (error) {
            console.log(error)
          }
        }
    })
})
