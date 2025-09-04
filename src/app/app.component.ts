import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { FooterNavbarComponent } from '../livofia-homecare/components/footer-navbar';
import { FooterComponent } from '../livofia-homecare/components/footer/footer.component';
import { HeaderComponent } from '../livofia-homecare/components/header/header.component';
import { phoneNumber } from './config/authority.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FooterNavbarComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lifovia-homecare';
  isMobile = false;
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  phoneNumber = phoneNumber;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
  }

  onMobileChange(mobile: any) {
    this.isMobile = mobile;
  }
}
