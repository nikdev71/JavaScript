import { Component } from '@angular/core';
import { colors } from './color';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrl: './apple.component.css'
})
export class AppleComponent {
  colors = colors;
  currentColor:any = this.colors[0]
  selected:number = 0;
  SelectItem(index:number){
    this.currentColor = this.colors[index];
    this.selected = index;
  }
}
