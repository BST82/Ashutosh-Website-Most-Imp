import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  constructor(private router: Router) {}

  navigateToPage(): void {
    this.router.navigate(['/cities/cities']); // Redirects to the CityComponent route
  }
  navigateToAnotherPage(): void {
    this.router.navigate(['/cities/cities']); // Redirects to the CityComponent route
  }
}
