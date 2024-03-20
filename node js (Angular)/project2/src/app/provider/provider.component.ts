import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css'
})
export class ProviderComponent implements OnInit {
  names: string[];

  constructor() {
      this.names = [' Матрица ', ' Elektron ', ' Sofportal ', ' VELLOPT '];
  }
  
  ngOnInit() {
    
  }
}

