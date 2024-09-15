import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from '../../services/geo-location.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-show-pages-based-on-user',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './show-pages-based-on-user.component.html',
  styleUrl: './show-pages-based-on-user.component.scss'
})
export class ShowPagesBasedOnUserComponent implements OnInit{

  location: any;

  constructor(private userService: GeoLocationService) {}

  ngOnInit(): void {
    // Call the service and subscribe to the observable
    this.userService.getUserLocation().subscribe(
      (response) => {
        console.log(response);
        this.location = response; // Assign the response to the location variable
      },
      (error) => {
        console.error('Error fetching location', error); // Handle errors here
      }
    );
  }
}
