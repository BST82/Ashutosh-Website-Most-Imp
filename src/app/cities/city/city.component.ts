import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent {
  constructor(private router: Router) {}

  navigateToCity(city: string): void {
    this.router.navigate(['/cities', city]); // Dynamically navigates to the specific city route
  }
}
