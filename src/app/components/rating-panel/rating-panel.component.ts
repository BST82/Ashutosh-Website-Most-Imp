import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this

@Component({
  selector: 'app-rating-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-panel.component.html',
  styleUrl: './rating-panel.component.scss'
})
export class RatingPanelComponent {



  reviews = [
    { title: 'Amazing Service!', content: 'The pandit performed the puja in a very authentic Vedic way. It was a seamless experience from booking to completion.', rating: 5 },
    { title: 'Highly Recommend!', content: 'The booking process was easy, and the pandit was very professional. I will definitely use this service again.', rating: 5 },
    { title: 'Good Experience!', content: 'The pandit was knowledgeable, and the puja was conducted smoothly. A great platform for booking online services.', rating: 4 }
    // Add more reviews as needed
  ];

    overallRating = this.calculateOverallRating();

    calculateOverallRating(): number {
      const total = this.reviews.reduce((acc, review) => acc + review.rating, 0);
      return parseFloat((total / this.reviews.length).toFixed(1));
    }
    

  getOverallRating() {
    return Array(Math.floor(this.overallRating)).fill(0);
  }

  getRemainingRating() {
    return Array(5 - Math.floor(this.overallRating)).fill(0);
  }

  getStars(rating:any) {
    return Array(rating).fill(0);
  }
  getRemainingStars(rating:any) {
    return Array(5 - rating).fill(0);
  }

}
