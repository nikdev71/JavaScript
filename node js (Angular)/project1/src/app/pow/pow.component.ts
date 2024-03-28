import { Component } from '@angular/core';
import { retry } from 'rxjs';
import { Auditorium, Group} from './university'

@Component({
  selector: 'app-pow',  
  templateUrl: './pow.component.html',
  styleUrl: './pow.component.css'
})


export class PowComponent {
  auditoriums: Auditorium[] = [
    { name: "101", seats: 15, faculty: "IT" },
    { name: "102", seats: 20, faculty: "Engineering" },
    { name: "103", seats: 12, faculty: "IT" },
    { name: "104", seats: 18, faculty: "Engineering" },
    { name: "105", seats: 10, faculty: "Mathematics" }
  ];

  faculties: string[] = [...new Set(this.auditoriums.map(auditorium => auditorium.faculty))];
  selectedFaculty: string = 'all';
  isFilterByGroup:boolean = false;

  group: Group = { name: "Group A", studentsCount: 15, faculty: "IT" };

  get filteredAuditoriums(): Auditorium[] {
    if (this.isFilterByGroup) {
      return this.auditoriums.filter(auditorium =>  this.isSuitableForGroup(auditorium));
    }else if(this.selectedFaculty === 'all'){
      return this.auditoriums;
    } else {
      return this.auditoriums.filter(auditorium => auditorium.faculty === this.selectedFaculty);
    }
  }

  isSuitableForGroup(auditorium: Auditorium): boolean {
    return auditorium.faculty === this.group.faculty && auditorium.seats >= this.group.studentsCount;
  }

  sortAuditoriumsBySeats(): void {
    this.auditoriums.sort((a, b) => a.seats - b.seats);
  }

  sortAuditoriumsByName(): void {
    this.auditoriums.sort((a, b) => a.name.localeCompare(b.name));
  }
  filterByGroup(){
    this.isFilterByGroup = !this.isFilterByGroup;
  }
  // someSort(val:string){
  //   return this.users.sort((a:any,b:any)=> a[val] > b[val]? 1: 0)   
  // }
}
