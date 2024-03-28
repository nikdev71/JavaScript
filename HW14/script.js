import { DOMHandler} from './DOMHandler.js'
import { OMDB} from './API.js'

$(document).ready(function(){
  const apiKey = '88e222e7';
  let movies=[];
  let searchData;
  let pageSize = 3; 
  const omdb = new OMDB(apiKey);
  let currentPage = 1;

  $('#searchmovie').click(async function(e){
      e.preventDefault();
      const title = $('#form [name="t"]').val();
      const type = $('#form [name="type"]').val();
      try {
          searchData = await omdb.search(title, type, currentPage);
          if (searchData.Response === "True") {
              movies = searchData.Search;
              DOMHandler.displayMovies(movies);
          } else {
              document.getElementById("foundedMovie").innerHTML = "No results found";
          }
      } catch (error) {
          console.error("Error searching for movies:", error.message);
      }
  });

  $('#previousPage').click(async function(e){
      e.preventDefault();
      if (currentPage > 1) {
          currentPage--;
          currentPageNumber.innerHTML= Number(currentPageNumber.innerHTML)-1;
          DOMHandler.displayMovies(movies, currentPage)

      }
  });

  $('#nextPage').click(async function(e){
      e.preventDefault();
      if ((currentPage * pageSize) < movies.length) { 
        currentPage++;
        currentPageNumber.innerHTML= Number(currentPageNumber.innerHTML)+1;
        DOMHandler.displayMovies(movies, currentPage)
    }
  });

  $(document).on('click', '.details', async function() {
      const movieId = $(this).data('movie-id');
      try {
          const movie = await omdb.getMovie(movieId);
          DOMHandler.displayMovieDetails(movie);
      } catch (error) {
          console.error("Error fetching movie details:", error.message);
      }
  });
})
//старый вариант
// $(document).ready(function(){

//   let api_key = '88e222e7';
//   let movies = []; 
//   let pageSize = 3; 
//   let currentPage = 1; 

//   $('#searchmovie').click(function(e){
//       e.preventDefault();
//       let title = $('#form [name="t"]').val();
//       let type = $('#form [name="type"]').val();
//       let apiUrl = `http://www.omdbapi.com/?apikey=${api_key}&s=${title}&type=${type}`;
//       getMovies(apiUrl);
//   });

//   async function getMovies(url) {
//     try {
//       const response = await fetch(url);
//       const responseJSON = await response.json();
//       if (responseJSON.Response === "True") {
//           movies = responseJSON.Search; 
//           showMovies(); 
//       } else {
//           document.getElementById("foundedMovie").innerHTML = "No results found";
//       }
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }

//   function showMovies() {
//       let start = (currentPage - 1) * pageSize;
//       let end = start + pageSize;
//       let currentPageMovies = movies.slice(start, end); 
//       let movieCards = "";
//       currentPageMovies.forEach(movie => {
//           movieCards += `
//             <div class="card">
//               <div class='imgcontainer'><img src="${movie.Poster}" alt="${movie.Title} Poster"></div>
//               <div class="info">
//                   <h2>${movie.Title}</h2>
//                   <p><strong>Type:</strong> ${movie.Type}</p>
//                   <p><strong>Year:</strong> ${movie.Year}</p>
//                   <button class='details' data-movie-id='${movie.imdbID}')'>Details</button>
//               </div>
//             </div>
//           `;
//       });
//       document.getElementById("foundedMovie").innerHTML = movieCards;
//   }

//   $('#previousPage').click(function(e){
//       e.preventDefault();
//       if (currentPage > 1) {
//           currentPage--;
//           currentPageNumber.innerHTML= Number(currentPageNumber.innerHTML)-1;
//           showMovies();
//       }
//   });

//   $('#nextPage').click(function(e){
//       e.preventDefault();
//       if ((currentPage * pageSize) < movies.length) { 
//           currentPage++;
//           currentPageNumber.innerHTML= Number(currentPageNumber.innerHTML)+1;
//           showMovies();
//       }
//   });

//   async function movieDetail(movieId){
//     try {
//       const url = `http://www.omdbapi.com/?apikey=${api_key}&i=${movieId}`;
//       const response = await fetch(url);
//       const movie = await response.json();
//       let movieInfo = $('#movieInfo')
//       movieInfo.css('display','flex');
//       movieInfo.empty();
//       movieInfo.append(`<img src='${movie.Poster}'></img>`)
//       movieInfo.append(`<div>
//                         <h2>${movie.Title}</h2>
//                         <p>${movie.Plot}</p>
//                         <p><strong>Year:</strong> ${movie.Year}</p>
//                         <p><strong>Rated:</strong> ${movie.Rated}</p>
//                         <p><strong>Released:</strong> ${movie.Released}</p>
//                         <p><strong>Runtime:</strong> ${movie.Runtime}</p>
//                         <p><strong>Genre:</strong> ${movie.Genre}</p>
//                         <p><strong>Director:</strong> ${movie.Director}</p>
//                         <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
//                         </div>`)
//     } catch (error) {
//       console.error("Error fetching movie details:", error);
//     }
//   };


//   $(document).on('click', '.details', function() {
//     let movieId = $(this).data('movie-id');
//     movieDetail(movieId);
// });
// });
