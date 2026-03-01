import { Component } from '@angular/core';
import { RatingPanelComponent } from '../rating-panel/rating-panel.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-temple',
    standalone:true,
    imports: [RatingPanelComponent, CommonModule],
    templateUrl: './temple.component.html',
    styleUrl: './temple.component.scss'
})
export class TempleComponent {

  blogTitle = 'Shubh Muhurat for Marriage (September – December 2026)';

  muhuratData = [
    {
      month: 'September 2026',
      description: 'No Shubh Muhurat for Marriage in this month.'
    },
    {
      month: 'October 2026',
      description: 'No Shubh Muhurat for Marriage in this month.'
    },
    {
      month: 'November 2026',
      description: 'The following dates are auspicious for marriage:',
      dates: ['2','3','6','7','8','12','13','16','17','18','21','22','23','25','30']
    },
    {
      month: 'December 2026',
      description: 'The following dates are auspicious for marriage:',
      dates: ['1','4','5','6']
    }
  ];

}
