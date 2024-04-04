import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getCocktails(){
    return this.http.get<any>('/assets/cocktails.json')
  }
  getAlbums(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }
}
