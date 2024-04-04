import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css'
})
export class CocktailsComponent implements OnInit{
  cocktails!: Observable<any>;
  albums!: Observable<any>;
  
  constructor(private httpservice : HttpService){
    
  }
  ngOnInit(): void {
    this.cocktails = this.httpservice.getCocktails();
    this.albums = this.httpservice.getAlbums();
  }

}
