import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-pets-child',
  templateUrl: './pets-child.component.html',
  styleUrl: './pets-child.component.css'
})
export class PetsChildComponent {
  @Input() pet:any;
  calculateAge(): string {
    const currentDate = new Date();
    const years = currentDate.getFullYear() - this.pet.birthYear;
    const months = currentDate.getMonth();

    if (years === 0) {
      return `${months} month`;
    } else {
      return `${years} year`;
    }
  }
}
