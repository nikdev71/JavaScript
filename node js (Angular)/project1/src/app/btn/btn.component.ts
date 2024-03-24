import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  isVisible: boolean = true;
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderlined: boolean = false;
  isUpper: boolean = false;

  switchVisible(): void{
    this.isVisible = !this.isVisible
  }
  switchBold(): void{
    this.isBold = !this.isBold
  }
  switchItalic(): void{
    this.isItalic = !this.isItalic
  }
  switchUnderlined(): void{
    this.isUnderlined = !this.isUnderlined
  }
  switchToUpperCase(): void{
    this.isUpper = !this.isUpper
  }
  fontSize: number = 12; 

    changeFontSize(size: string) {
      console.log(size)
        //this.fontSize = parseInt(size); 
    }
}
