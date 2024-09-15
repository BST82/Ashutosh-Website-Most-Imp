import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  private apiUrl = 'https://ipapi.co/json/'; // API URL

  constructor(private http: HttpClient) { }

  getUserLocation(): Observable<any> { // Explicitly declare the return type as Observable
    return this.http.get(this.apiUrl); // Use the apiUrl to make the request
  }
}
