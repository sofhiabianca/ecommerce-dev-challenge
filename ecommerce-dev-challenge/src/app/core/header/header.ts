import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  standalone: true
})
export class HeaderComponent {

  public cartCount = 1;

  public toggleMenu(): void {
    console.log('Menu clicked!');
   
  }

  public onCartClick(): void {
    console.log('Cart clicked!');
  }

  public onGetStartedClick(): void {
    console.log('Get Started clicked!');
  }
}
