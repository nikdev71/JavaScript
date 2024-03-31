import { Injectable } from '@angular/core';
import {Good} from './good'

@Injectable({
  providedIn: 'root'
})
export class GoodService {
  goods:Good[]=[
    {
      name: "Ноутбук Lenovo IdeaPad",
      description: "Мощный ноутбук для работы и развлечений",
      price: 549.99,
      discount: 10
    },
    {
      name: "Смартфон Samsung Galaxy",
      description: "Современный смартфон с высоким разрешением экрана",
      price: 699.99,
      discount: 5
    },
    {
      name: "Наушники Sony",
      description: "Беспроводные наушники с шумоподавлением",
      price: 199.99,
      discount: 0
    }
]

  constructor() { }
  addGood(item: Good){
    this.goods.push(item)
  }
  updateGood(index: number, item: Good) {
    this.goods[index] = item;
  }
  removeGood(i: number){
    this.goods.splice(i,1)
  }
}
