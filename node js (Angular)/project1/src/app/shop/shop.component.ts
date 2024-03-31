import { Component } from '@angular/core';
import { GoodService } from '../good.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  constructor( public goodService : GoodService){

  }
}
