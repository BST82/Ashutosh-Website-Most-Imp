import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import AOS from "aos";

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [ NgOptimizedImage],
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
}
