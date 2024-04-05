import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  changeLocation(location: any) {
    return this.http.put<any[]>('http://localhost:3000/locations',location);
  }

  constructor(private http: HttpClient) { }

  getLocations(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/locations');
  }
  addLocation(data:any){
    
    return this.http.post<any[]>('http://localhost:3000/locations',data);
  }
  delLocation(loc: any){
    return this.http.delete<any[]>(`http://localhost:3000/locations/${loc.id}`);
  }
}
