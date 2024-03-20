import { Component } from '@angular/core';
import { deals } from '../articles';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  deals = deals;
}
