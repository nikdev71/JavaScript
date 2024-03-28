export class DOMHandler {
    static displayMovies(movies, currentPage=1) {
        let start = (currentPage - 1) * 3;
        let end = start + 3;
        let currentPageMovies = movies.slice(start, end); 
        let movieCards = "";
        currentPageMovies.forEach(movie => {
            movieCards += `
                <div class="card">
                <div class='imgcontainer'><img src="${movie.Poster}" alt="${movie.Title} Poster"></div>
                <div class="info">
                    <h2>${movie.Title}</h2>
                    <p><strong>Type:</strong> ${movie.Type}</p>
                    <p><strong>Year:</strong> ${movie.Year}</p>
                    <button class='details' data-movie-id='${movie.imdbID}')'>Details</button>
                </div>
                </div>
            `;
        });
        document.getElementById("foundedMovie").innerHTML = movieCards;
    }

    static displayMovieDetails(movie) {
        const movieInfo = $('#movieInfo');
        movieInfo.css('display', 'flex');
        movieInfo.empty();
        movieInfo.append(`<img src='${movie.Poster}'></img>`)
        movieInfo.append(`<div>
                          <h2>${movie.Title}</h2>
                          <p>${movie.Plot}</p>
                          <p><strong>Year:</strong> ${movie.Year}</p>
                          <p><strong>Rated:</strong> ${movie.Rated}</p>
                          <p><strong>Released:</strong> ${movie.Released}</p>
                          <p><strong>Runtime:</strong> ${movie.Runtime}</p>
                          <p><strong>Genre:</strong> ${movie.Genre}</p>
                          <p><strong>Director:</strong> ${movie.Director}</p>
                          <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
                          </div>`)
    }
}
