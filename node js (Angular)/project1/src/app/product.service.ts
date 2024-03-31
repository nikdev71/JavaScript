import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      name : 'pr1',
      isBuy: false
    },
    {
      name : 'pr2',
      isBuy: false
    },
    {
      name : 'pr3',
      isBuy: false
    }
  ]
  constructor() { }
  addProduct(name:string){
    this.products.push({name:name,isBuy: false})
  }
}
