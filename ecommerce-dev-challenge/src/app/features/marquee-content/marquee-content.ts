import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee-content',
  imports: [],
  templateUrl: './marquee-content.html',
  styleUrl: './marquee-content.scss',
  standalone: true
})
export class MarqueeContentComponent {
  public readonly benefitItems: string[] = [
    'ALL-NATURAL INGREDIENTS',
    'FORMULATED BY DOCTORS & PHDS',
    '100% RISK-FREE RETURNS',
    'NO PRESCRIPTION REQUIRED',
  ];
}
