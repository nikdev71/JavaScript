import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { validateHeaderName } from 'node:http';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent implements OnInit{
  answers = [{
    type: 'yes',
    text: 'Да'
  },
  {
    type: 'no',
    text: 'Нет'
  }];
  payment = [{
    type: 'credit',
    text: 'CreditCard'
  },
  {
    type: 'COD',
    text: 'C.O.D'
  }];
form!: FormGroup;

user!: FormGroup;

adress!: FormGroup;
formData={};

  ngOnInit(){
    // this.form = new FormGroup({
    //   user: new FormGroup({
    //     email: new FormControl('',[Validators.email, Validators.required]),
    //     pass: new FormControl(''),
    //   }),
    //   lang: new FormControl('en'),
    //   answ: new FormControl('no')
    // })
     this.form = new FormGroup({
      user: new FormGroup({
        firstname:new FormControl('',[Validators.required]),
        lastname:new FormControl('',[Validators.required])
      }),
      address: new FormGroup({
        country: new FormControl('',[Validators.required]),
        city: new FormControl('',[Validators.required]),
        department: new FormControl('',[Validators.required])
      }),
      contact: new FormGroup({
        email: new FormControl('',[Validators.email, Validators.required]),
        phone: new FormControl('',[Validators.required])
      }),
      paym: new FormControl('credit')
     })
  }

  submitForm(){
    this.formData = this.form.value;
    console.log(this.formData);
  }
}
