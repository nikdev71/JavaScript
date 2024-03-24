import { Component } from '@angular/core';
import { books } from './books';

@Component({
  selector: 'app-authots-and-books',
  templateUrl: './authots-and-books.component.html',
  styleUrl: './authots-and-books.component.css'
})
export class AuthotsAndBooksComponent {
  items = books
  currentBook =this.items[0];
  
  onSelect(item:any){
    this.currentBook = item;
  }
}
