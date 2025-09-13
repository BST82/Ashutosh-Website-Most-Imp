import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import AOS from "aos";
import { RouterOutlet } from '@angular/router';
import { SanskarComponent } from "../sanskar/sanskar.component";
import { SubscriptionComponent } from "../subscription/subscription.component";
import { OurWorkComponent } from "../our-work/our-work.component";
import { BenefitsComponent } from "../benefits/benefits.component";
import { TempleComponent } from "../temple/temple.component";
import { WhatWeOfferServicesComponent } from "../what-we-offer-services/what-we-offer-services.component";
import { AfterBannerContactInfoComponent } from "../after-banner-contact-info/after-banner-contact-info.component";
import { ShowPagesBasedOnUserComponent } from "../show-pages-based-on-user/show-pages-based-on-user.component";
@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, SanskarComponent, SubscriptionComponent, OurWorkComponent, BenefitsComponent, TempleComponent, WhatWeOfferServicesComponent, AfterBannerContactInfoComponent, ShowPagesBasedOnUserComponent],
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'] // corrected 'styleUrl' to 'styleUrls'
})
export class HomeSectionComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(
        {
          duration: 2000, 
        }
      );
    }
  }
  // ngAfterViewInit(): void {
  //   AOS.init();
  // }
}
