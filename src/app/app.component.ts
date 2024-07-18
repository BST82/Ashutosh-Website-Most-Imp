import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from "./components/home-section/home-section.component";
import { TempleComponent } from "./components/temple/temple.component";
import { SanskarComponent } from "./components/sanskar/sanskar.component";
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { SubscriptionComponent } from "./components/subscription/subscription.component";
import { OurWorkComponent } from "./components/our-work/our-work.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeSectionComponent, RouterLink, TempleComponent, SanskarComponent, BenefitsComponent, SubscriptionComponent, OurWorkComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meAndMyPandit';
}
