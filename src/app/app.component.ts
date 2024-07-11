import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from "./components/home-section/home-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeSectionComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meAndMyPandit';
}
