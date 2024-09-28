import { Component } from '@angular/core';
import { AfterBannerContactInfoComponent } from "../../components/after-banner-contact-info/after-banner-contact-info.component";
import { BenefitsComponent } from "../../components/benefits/benefits.component";
import { OurWorkComponent } from "../../components/our-work/our-work.component";
import { TempleComponent } from "../../components/temple/temple.component";

@Component({
  selector: 'app-bangalore',
  standalone: true,
  imports: [AfterBannerContactInfoComponent, BenefitsComponent, OurWorkComponent, TempleComponent],
  templateUrl: './bangalore.component.html',
  styleUrl: './bangalore.component.scss'
})
export class BangaloreComponent {

}
