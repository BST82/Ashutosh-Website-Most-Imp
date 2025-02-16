import { Component } from '@angular/core';
import { AfterBannerContactInfoComponent } from "../../components/after-banner-contact-info/after-banner-contact-info.component";
import { BenefitsComponent } from "../../components/benefits/benefits.component";
import { OurWorkComponent } from "../../components/our-work/our-work.component";
import { TempleComponent } from "../../components/temple/temple.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-bangalore',
  standalone: true,
  imports: [AfterBannerContactInfoComponent, BenefitsComponent, OurWorkComponent, TempleComponent],
  templateUrl: './bangalore.component.html',
  styleUrl: './bangalore.component.scss'
})
export class BangaloreComponent {

  constructor(private router: Router) {}

  navigateToAnotherPage(route: string): void {
    this.router.navigate([`/bangloreplaces/${route}`]);
  }

}
