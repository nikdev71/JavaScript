import { Component } from '@angular/core';
import { GoodService } from '../good.service';
import { Good } from '../good';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  constructor( public goodService : GoodService){

  }
  btntext ='Add';
  editIndex:any=null;
  curGood:Good = {
    name: '',
    description: '',
    price: 0,
    discount: 0
  }
  addGood(form:NgForm){
    if(!form.valid) return;
    if (this.editIndex !== null) {
      this.goodService.updateGood(this.editIndex, this.curGood);
      this.editIndex = null; 
      this.btntext ='Add';
    } else {
      this.goodService.addGood(this.curGood);
    }
    this.curGood = { name: '', description: '', price: 0, discount: 0 };
  }
  editGood(index: number) {
    this.curGood = { ...this.goodService.goods[index] };
    this.btntext = 'Edit';
    this.editIndex = index; 
  }
  removeGood(i:number){
    this.goodService.removeGood(i)
  }
}
