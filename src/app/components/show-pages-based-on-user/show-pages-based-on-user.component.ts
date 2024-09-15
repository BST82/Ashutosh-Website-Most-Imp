import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-pages-based-on-user',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './show-pages-based-on-user.component.html',
  styleUrls: ['./show-pages-based-on-user.component.scss']
})
export class ShowPagesBasedOnUserComponent implements OnInit {

  location: any = { latitude: null, longitude: null, city: 'Loading...' };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUserLocation();
  }

  // Use HTML5 Geolocation API to get the user's coordinates
  getUserLocation() {
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
  }

  // Reverse geocode the latitude and longitude using Nominatim API (OpenStreetMap)
  getCityFromCoordinates(lat: number, lng: number) {
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`;

    this.http.get<any>(nominatimUrl).subscribe(
      (response) => {
        if (response && response.address) {
          this.location.city = response.address.city || response.address.town || response.address.village || 'Unknown city';
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
