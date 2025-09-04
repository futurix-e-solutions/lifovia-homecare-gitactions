import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { phoneNumber } from '../../../../app/config/authority.constants';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="display-6 fw-bold text-primary-green mb-4">Why Choose MediCare Home?</h2>
            <p class="lead text-muted mb-4">
              We are a new-age homecare startup committed to delivering hospital-level medical attention with compassion and care— right
              where you need it most.
            </p>

            <div class="row g-4">
              <div class="col-sm-6" *ngFor="let benefit of benefits">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <div class="bg-light-green rounded-circle p-3">
                      <i [class]="benefit.icon" class="text-primary-green" style="font-size: 1.5rem;"></i>
                    </div>
                  </div>
                  <div class="ms-3">
                    <h5 class="fw-semibold">{{ benefit.title }}</h5>
                    <p class="text-muted small mb-0">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <a [href]="'tel:+91' + phoneNumber" class="btn btn-primary-green me-3">
                <i class="pi pi-phone me-2"></i>
                Contact Us
              </a>
              <a href="/assets/brochure.pdf" class="btn btn-outline-green" download>
                <i class="pi pi-download me-2"></i>
                Download Brochure
              </a>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="position-relative">
              <img
                src="images/scethascope.webp"
                alt="Professional medical team"
                class="img-fluid rounded-4 shadow-lg"
              />

              <!-- Floating cards -->
              <div class="position-absolute top-0 start-0 translate-middle">
                <div class="bg-white rounded-3 shadow p-3 text-center">
                  <h4 class="text-primary-green mb-1">Team</h4>
                  <small class="text-muted">Certified Professionals</small>
                </div>
              </div>

              <div class="position-absolute bottom-0 end-0 translate-middle-y">
                <div class="bg-primary-green text-white rounded-3 shadow p-3 text-center">
                  <h4 class="mb-1">24/7</h4>
                  <small>Emergency Support</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WhyChooseUsComponent {
  phoneNumber = phoneNumber;
  benefits = [
    {
      icon: 'pi pi-verified',
      title: 'Certified Professionals',
      description: 'Licensed and experienced medical staff',
    },
    {
      icon: 'pi pi-clock',
      title: '24/7 Availability',
      description: 'Round-the-clock medical support',
    },
    {
      icon: 'pi pi-home',
      title: 'Home Comfort',
      description: 'Receive care in familiar surroundings',
    },
    {
      icon: 'pi pi-dollar',
      title: 'Cost Effective',
      description: 'Affordable home healthcare plans',
    },
    {
      icon: 'pi pi-heart',
      title: 'Compassionate Service',
      description: 'We treat every patient with empathy and respect',
    },
    {
      icon: 'pi pi-bolt',
      title: 'Quick Response Team',
      description: 'Fast emergency and inquiry handling',
    },
  ];
}
