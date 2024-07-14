import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from "./components/home-section/home-section.component";
import { TempleComponent } from "./components/temple/temple.component";
import { SanskarComponent } from "./components/sanskar/sanskar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeSectionComponent, RouterLink, TempleComponent, SanskarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meAndMyPandit';
}
