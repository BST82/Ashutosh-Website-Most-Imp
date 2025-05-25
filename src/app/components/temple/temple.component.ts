import { Component } from '@angular/core';
import { RatingPanelComponent } from '../rating-panel/rating-panel.component';

@Component({
  selector: 'app-temple',
  standalone: true,
  imports: [RatingPanelComponent],
  templateUrl: './temple.component.html',
  styleUrl: './temple.component.scss'
})
export class TempleComponent {

}
