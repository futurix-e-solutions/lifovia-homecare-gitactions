import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceDataService } from '../../services/service-data.service';
import { phoneNumber } from '../../../app/config/authority.constants';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-5 bg-light-green">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 fw-bold text-primary-green mb-4">Our Medical Services</h1>
            <p class="lead text-muted">Comprehensive healthcare solutions delivered to your home with professional excellence</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let service of services">
            <div class="medical-card service-card h-100 d-flex flex-column">
              <div class="service-icon">
                <i [class]="service.icon"></i>
              </div>
              <h4 class="text-primary-green mb-3">{{ service.title }}</h4>
              <p class="text-muted mb-3">{{ service.description }}</p>

              <div class="mb-3">
                <h6 class="fw-semibold text-primary-green">Key Features:</h6>
                <ul class="list-unstyled">
                  <li *ngFor="let feature of service.features.slice(0, 4)" class="mb-1">
                    <i class="pi pi-check-circle text-primary-green me-2"></i>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="mt-auto">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span class="badge bg-primary-green">{{ service.availability }}</span>
                  <span class="text-primary-green fw-semibold">{{ service.duration }}</span>
                </div>
                <div class="d-grid gap-2">
                  <a class="btn btn-outline-green btn-sm" [routerLink]="['/service', service.title]">
                    <i class="pi pi-info-circle me-2"></i>
                    View Details
                  </a>
                  <a class="btn btn-light btn-sm" href="tel:+91{{ phoneNumber }}">
                    <i class="pi pi-phone me-2"></i>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-primary-green text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 class="fw-bold mb-3">Need Emergency Medical Assistance?</h3>
            <p class="mb-0">Our emergency response team is available 24/7 for critical care situations.</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a class="btn btn-light btn-lg" href="tel:+917995479757">
              <i class="pi pi-phone me-2"></i>
              Call Emergency: +91 {{ phoneNumber }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  services:any = []
  phoneNumber = phoneNumber;
  constructor(private serviceDataService: ServiceDataService) {
    this.services = this.serviceDataService.getAllServices();
  }
}
