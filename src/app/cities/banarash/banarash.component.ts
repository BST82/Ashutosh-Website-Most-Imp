import { Component } from '@angular/core';
import { AfterBannerContactInfoComponent } from "../../components/after-banner-contact-info/after-banner-contact-info.component";
import { BenefitsComponent } from "../../components/benefits/benefits.component";
import { OurWorkComponent } from "../../components/our-work/our-work.component";
import { TempleComponent } from "../../components/temple/temple.component";

@Component({
  selector: 'app-banarash',
  standalone: true,
  imports: [AfterBannerContactInfoComponent, BenefitsComponent, OurWorkComponent, TempleComponent],
  templateUrl: './banarash.component.html',
  styleUrl: './banarash.component.scss'
})
export class BanarashComponent {

}
