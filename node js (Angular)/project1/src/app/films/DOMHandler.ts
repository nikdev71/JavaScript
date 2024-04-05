import $ from 'jquery';
import { OMDB } from './API';

export class DOMHandler {
    static displayMovies(movies: any[], currentPage=1) {
        let start = (currentPage - 1) * 3;
        let end = start + 3;
        let currentPageMovies = movies.slice(start, end); 
        let movieCards = "";
        currentPageMovies.forEach(movie => {
            movieCards += `
                <div class="mycard" >
                <div class='imgcontainer'><img src="${movie.Poster}" alt="${movie.Title} Poster"></div>
                <div class="info">
                    <h2>${movie.Title}</h2>
                    <p><strong>Type:</strong> ${movie.Type}</p>
                    <p><strong>Year:</strong> ${movie.Year}</p>
                    <button (click)="showMovieDetails(${movie.imdbID})"  data-movie-id="${movie.imdbID}">Details</button>
                </div>
                </div>
            `;
        });
        return movieCards;
    }

    static displayMovieDetails(movie: any): string {
            let movieInfo =`
                <img src='${movie.Poster}'></img>
                <div>
                    <h2>${movie.Title}</h2>
                    <p>${movie.Plot}</p>
                    <p><strong>Year:</strong> ${movie.Year}</p>
                    <p><strong>Rated:</strong> ${movie.Rated}</p>
                    <p><strong>Released:</strong> ${movie.Released}</p>
                    <p><strong>Runtime:</strong> ${movie.Runtime}</p>
                    <p><strong>Genre:</strong> ${movie.Genre}</p>
                    <p><strong>Director:</strong> ${movie.Director}</p>
                    <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
                </div>`;
                return movieInfo 
        }
    }


   