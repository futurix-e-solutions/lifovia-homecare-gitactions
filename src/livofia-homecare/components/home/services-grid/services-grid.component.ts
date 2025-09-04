import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceDataService } from '../../../services/service-data.service';
import { phoneNumber } from '../../../../app/config/authority.constants';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="services" class="py-5" style="background-color: var(--light-gray);">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold text-primary-green mb-3">Our Medical Services</h2>
          <p class="lead text-muted">Comprehensive healthcare solutions prepared for launch</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let service of services.slice(0, 6)">
            <div class="medical-card service-card h-100 d-flex flex-column">
              <div class="service-icon mb-3">
                <i [class]="service.icon"></i>
              </div>
              <h4 class="text-primary-green mb-3">{{ service.title }}</h4>
              <p class="text-muted mb-3">{{ service.description }}</p>

              <ul class="list-unstyled mb-3 flex-grow-1">
                <li *ngFor="let feature of service.features.slice(0, 3)" class="mb-2">
                  <i class="pi pi-check-circle text-primary-green me-2"></i>
                  {{ feature }}
                </li>
              </ul>

              <div class="mt-auto">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span class="badge bg-primary-green">{{ service.availability || 'Coming Soon' }}</span>
                  <button class="btn btn-outline-green btn-sm" [routerLink]="['/service', service.title]">Learn More</button>
                </div>

                <!-- Replace Book Button with Contact Buttons -->
                <div class="d-grid gap-2">
                  <a [href]="'tel:+91' + phoneNumber" class="btn btn-outline-danger w-100">
                    <i class="pi pi-phone me-2"></i>
                    Call to Inquire
                  </a>
                  <a [href]="'https://wa.me/91' + phoneNumber" target="_blank" class="btn btn-outline-success w-100">
                    <i class="pi pi-whatsapp me-2"></i>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <button class="btn btn-primary-green btn-lg" routerLink="/services">
            <i class="pi pi-list me-2"></i>
            View All Services
          </button>
        </div>
      </div>
    </section>
  `,
})
export class ServicesGridComponent {
  phoneNumber = phoneNumber;
  services: any = [];
  constructor(private serviceDataService: ServiceDataService) {
    this.services = this.serviceDataService.getAllServices();
  }


}
