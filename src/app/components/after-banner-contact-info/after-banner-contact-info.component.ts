import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-banner-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './after-banner-contact-info.component.html',
  styleUrl: './after-banner-contact-info.component.scss'
})
export class AfterBannerContactInfoComponent {

   constructor(private router: Router) {}
  navigateToPage(): void {
    this.router.navigate(['/blog']); // Redirects to the CityComponent route
  }
}
