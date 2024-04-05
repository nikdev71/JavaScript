import { Component } from '@angular/core';
import { OMDB} from './API'
import $ from 'jquery';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {


apiKey: string = '88e222e7';
movies: any[] = [];
searchData: any;
pageSize: number = 3;
omdb: OMDB = new OMDB(this.apiKey);
currentPage: number = 1;
currentPageNumber:number = 1;
form: FormGroup<any>;
curmovie: any;


constructor(private sanitizer: DomSanitizer){
  this.form = new FormGroup({
    t : new FormControl(''),
    type : new FormControl('movie')

  })
}

async findMovie() {
  const title: string = this.form.get('t')?.value || '';
  const type: string = this.form.get('type')?.value || '';
  let start = (this.currentPage - 1) * 3;
  let end = start + 3;
  this.movies = this.movies.slice(start, end);
    try {
        this.searchData = await OMDB.search(title, type, this.currentPage);
        if (this.searchData.Response === "True") {
            this.movies = this.searchData.Search;
        } 
    } catch (error) {}
  }


async showMovieDetails(movieId: string) {
  try {
    this.curmovie = await OMDB.getMovie(movieId);
  } catch (error) {
    console.error(error);
  }
}



}
