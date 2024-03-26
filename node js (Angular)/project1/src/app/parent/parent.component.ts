import { Component, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  products = [
    {name:'Сок', price: 54,quantity:5},
    {name:'Чай', price: 76,quantity:15}
];
getQuantity(){
  return this.products.reduce((sum, item)=>sum+item.quantity,0)
}
getTotal(){
  return this.products.reduce((t, item)=>t+item.quantity*item.price,0)
}
clicks=this.getQuantity();
total = this.getTotal();

  onChanged(plus:boolean, ind:number){
    plus == true? this.products[ind].quantity++ : this.products[ind].quantity--;
    this.clicks=this.getQuantity();
    this.total = this.getTotal();
  }
}
