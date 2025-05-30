import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser, CommonModule } from '@angular/common';


@Component({
  selector: 'app-show-pages-based-on-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-pages-based-on-user.component.html',
  styleUrls: ['./show-pages-based-on-user.component.scss']
})
export class ShowPagesBasedOnUserComponent implements OnInit {

  location: any = { latitude: null, longitude: null, city: 'Loading...' };

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object // Inject platformId to check environment
  ) { }

  ngOnInit(): void {
    this.getUserLocation();
  }

  // Use HTML5 Geolocation API to get the user's coordinates, but only in the browser
  getUserLocation() {
    if (isPlatformBrowser(this.platformId)) {
      // The code inside this block will only run in the browser
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.location.latitude = position.coords.latitude;
            this.location.longitude = position.coords.longitude;
            this.getCityFromCoordinates(this.location.latitude, this.location.longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
            this.location.city = 'Error retrieving location';
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        this.location.city = 'Geolocation not supported';
      }
    } else {
      // Code executed during server-side rendering (SSR)
      console.warn('Navigator is not available on the server.');
      this.location.city = 'Server-side rendering';
    }
  }

  // Reverse geocode the latitude and longitude using Nominatim API (OpenStreetMap)
  getCityFromCoordinates(lat: number, lng: number) {
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`;

    this.http.get<any>(nominatimUrl).subscribe(
      (response) => {
        if (response && response.address) {
          this.location.city = response.address.city || response.address.town || response.address.village || response.display_name
          ;
        } else {
          this.location.city = 'Unknown city';
        }
      },
      (error) => {
        console.error('Error retrieving city from coordinates:', error);
        this.location.city = 'Error retrieving city';
      }
    );
  }
}
