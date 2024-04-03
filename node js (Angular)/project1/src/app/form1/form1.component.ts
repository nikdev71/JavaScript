import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  answers = [{
    type: 'yes',
    text: 'Да'
  },
  {
    type: 'no',
    text: 'Нет'
  }];
  submitForm(form: NgForm){
    console.log(form)
  }
  onSubmit(){
    
  }
}
