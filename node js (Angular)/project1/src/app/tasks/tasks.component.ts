import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  names: string[] = [];
  name = "placeholder";
  salaries: number[] =[];
  salary = 0.00;
  date: Date = new Date();
  dates: Date[] = [];
  addName() {
    this.names.push(this.name);
    this.salaries.push(this.salary);
    this.dates.push(this.date);
  }
  remove(index:number){
    this.names.splice(index, 1);
    this.salaries.splice(index, 1);
    this.dates.splice(index,1);
  }
}