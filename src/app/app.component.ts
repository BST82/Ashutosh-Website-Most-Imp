import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  title = 'meAndMyPandit';
  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = await import('aos');
      AOS.init({
        duration: 1200,
        once: true,
        easing: 'ease-in-out',
        offset: 100
      });
    }
  }
  
}
