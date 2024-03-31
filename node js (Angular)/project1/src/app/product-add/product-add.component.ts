import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  name:string='';
  constructor(private productService: ProductService){

  }
  addProduct(){
    this.productService.addProduct(this.name);
  }
}
