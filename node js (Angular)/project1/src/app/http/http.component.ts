import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { response } from 'express';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent implements OnInit{
  locations:any=[];
  name: string = '';
  item: any;
  constructor(private locationService: LocationService){
    
  }
  
  load(){
    const data ={
      "name": this.name,
      "city": '',
      "state": '',
      "photo": '',
      "availableUnits": 0,
      "wifi": true,
      "laundry": false
      
    }
    this.locationService.addLocation(data).subscribe( (response)=>{})
    this.locations.push(data)
  }
  
  changeWifi(location: any) {
    location.wifi = !location.wifi ;
    this.locationService.changeLocation(location).subscribe((response)=>{})
  }
  delLocation(item: any) {
    this.locationService.delLocation(item)
  .subscribe((data)=>{ 
    console.log(data);
    this.locations = this.locations.filter( (obj: any) => obj.id != item.id); 
  });
  }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe(
      (response)=> {this.locations = response;}
    );
  }
}
