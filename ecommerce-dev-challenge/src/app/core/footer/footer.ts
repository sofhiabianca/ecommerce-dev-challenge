import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  standalone: true
})
export class FooterComponent {
  public newsletterEmail = '';
  public readonly socialLinks = [
    { icon: 'pi-facebook', url: '#', label: 'Facebook' },
    { icon: 'pi-instagram', url: '#', label: 'Instagram' },
    { icon: 'pi-twitter', url: '#', label: 'Twitter' },
  ];
  public readonly footerColumns = [
    {
      title: 'Shop',
      links: [
        { label: 'All Products', url: '#' },
        { label: 'Best Sellers', url: '#' },
        { label: 'New Arrivals', url: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', url: '#' },
        { label: 'FAQ', url: '#' },
        { label: 'Shipping', url: '#' },
      ],
    },
  ];

  public onNewsletterSubmit(): void {
    if (this.isValidEmail(this.newsletterEmail)) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      // Future implementation: call newsletter service
      this.newsletterEmail = '';
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
