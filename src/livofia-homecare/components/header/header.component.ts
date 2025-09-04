import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { phoneNumber } from '../../../app/config/authority.constants';
// Update the path below to the correct relative path based on your project structure

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutModule],
  template: `
    <nav class="navbar navbar-expand-md navbar-medical fixed-top">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <a class="navbar-brand" routerLink="/">
          <img src="assets/images/logo.png" alt="Lifovia Homecare" class="logo-img" />
        </a>

        <!-- Navbar links (hidden on small screens) -->
        <div class="" [class.show]="isSmallScreen" id="navbarNav" *ngIf="!isSmallScreen">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" routerLink="/home" routerLinkActive="active">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/services" routerLinkActive="active">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/service', 'Prescribed Medicine Delivery']" routerLinkActive="active">Medical Instruments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/blobs" routerLinkActive="active">Blobs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons d-flex align-items-center">
          <button class="btn btn-primary-green d-flex align-items-center">
            <i class="pi pi-calendar me-1"></i>
            <span>+91 {{ phoneNumber }}</span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        height: 85px;
        padding: 0 1rem;
      }

      .navbar .container {
        height: 100%;
        align-items: center;
      }

      .navbar-brand {
        flex-shrink: 0;
        max-width: 120px;
      }

      .logo-img {
        height: 45px;
        width: auto;
        max-height: 100%;
        object-fit: contain;
        display: block;
      }

      .navbar-toggler {
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        border: 1px solid var(--primary-green) !important;
      }

      .navbar-toggler:focus {
        box-shadow: 0 0 0 0.25rem rgba(34, 197, 94, 0.25);
      }

      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2834, 197, 94, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }

      .nav-link.active {
        color: var(--primary-green) !important;
        font-weight: 600;
      }

      .action-buttons .btn {
        white-space: nowrap;
      }

      @media (max-width: 991px) {
        .navbar-nav {
          margin-top: 1rem;
        }

        .action-buttons {
          flex-direction: row-reverse;
          gap: 0.5rem;
          margin-left: 1rem;
        }

        .action-buttons .btn {
          width: 100%;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  @Output() isMobileView = new EventEmitter<boolean>();
  isMenuOpen = false;
  isSmallScreen = false;
  phoneNumber = phoneNumber;
  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.isMobileView.emit(result.matches);
    });
  }
}
