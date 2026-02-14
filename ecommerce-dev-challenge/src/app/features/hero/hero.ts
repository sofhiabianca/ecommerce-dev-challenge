import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  standalone: true
})
export class HeroComponent {
  public readonly testimonial = {
    stars: 5,
    quote: 'I LOVE THIS STUFF, IT TOTALLY CHANGED THE GAME FOR ME',
    author: {
      initials: 'P.S',
      name: 'PETER S.',
    },
  };

  public readonly ctaButtonText = 'Try today!';
}
