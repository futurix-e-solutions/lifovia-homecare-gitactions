import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { phoneNumber } from '../../app/config/authority.constants';

@Component({
  selector: 'app-footer-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Main Heading -->

    <!-- Footer Navigation -->
    <div class="footer-navbar">
      <a routerLink="/home" class="nav-item" (click)="closeMenu()"> <i class="pi pi-home"></i><span>Home</span> </a>
      <a [href]="'tel:+91' + phoneNumber" class="nav-item"> <i class="pi pi-phone"></i><span>Call Now</span> </a>
      <a [href]="'https://wa.me/+91' + phoneNumber" target="_blank" class="nav-item">
        <i class="pi pi-whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      <a class="nav-item" (click)="toggleMenu()"> <i class="pi pi-bars"></i><span>Menu</span> </a>
    </div>

    <!-- Overlay Background -->
    <div class="overlay" [class.show]="isMenuOpen" (click)="closeMenu()"></div>

    <!-- Side Navigation -->
    <div class="side-menu" [class.open]="isMenuOpen">
      <div class="side-menu-header d-flex justify-content-between align-items-center px-3 py-2">
        <h5 class="m-0 text-white">LIFOVIA HOMECARE</h5>
        <button class="btn-close-white" (click)="closeMenu()">
          <i class="pi pi-times text-white"></i>
        </button>
      </div>
      <ul class="list-unstyled px-3 py-2">
        <li><a routerLink="/home" (click)="navigate()">Home</a></li>
        <li><a routerLink="/about" (click)="navigate()">About</a></li>
        <li><a routerLink="/services" (click)="navigate()">Services</a></li>
        <li>
          <a [routerLink]="['/service', '14']" (click)="navigate()">Medical Instruments</a>
        </li>
        <li><a routerLink="/blobs" (click)="navigate()">Blobs</a></li>
        <li><a routerLink="/contact" (click)="navigate()">Contact</a></li>
      </ul>
    </div>
  `,
  styles: [
    `
      .lifovia-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #004d40;
        z-index: 1051;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      }

      .footer-navbar {
        position: fixed;
        bottom: 0;
        left: 10px;
        right: 11px;
        height: 55px;
        background-color: #004d40;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
        z-index: 1050;
        border-radius: 20px;
        box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.2);
      }

      .footer-navbar .nav-item {
        flex: 1;
        text-align: center;
        font-size: 12px;
        text-decoration: none;
        color: white;
      }

      .footer-navbar .nav-item i {
        display: block;
        font-size: 18px;
        margin-bottom: 2px;
      }

      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 1040;
      }

      .overlay.show {
        display: block;
      }

      .side-menu {
        position: fixed;
        top: 0;
        right: -250px;
        width: 250px;
        height: 100%;
        background-color: #10847e;
        color: white;
        transition: right 0.3s ease-in-out;
        z-index: 1052;
        padding-top: 60px;
      }

      .side-menu.open {
        right: 0;
      }

      .side-menu-header {
        position: absolute;
        top: 0;
        width: 100%;
        background: #00332d;
        height: 55px;
        padding-top: 12px;
      }

      .btn-close-white {
        background: none;
        border: none;
        font-size: 20px;
      }

      .side-menu ul li {
        padding: 10px 0;
      }

      .side-menu ul li a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        display: block;
      }

      .side-menu ul li a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class FooterNavbarComponent {
  isMenuOpen = false;
  phoneNumber = phoneNumber;
  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  navigate() {
    this.closeMenu();
  }
}
