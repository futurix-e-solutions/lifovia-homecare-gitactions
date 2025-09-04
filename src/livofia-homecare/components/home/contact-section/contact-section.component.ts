import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { emailValue, phoneNumber } from '../../../../app/config/authority.constants';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left Column with Info -->
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="display-6 fw-bold text-primary-green mb-4">Get in Touch</h2>
            <p class="lead text-muted mb-4">Our services are now live! Reach out to us for medical assistance, home care, or support.</p>

            <div class="row g-4 mb-4">
              <div class="col-sm-6" *ngFor="let contact of contactInfo">
                <div class="d-flex align-items-center">
                  <div class="bg-light-green rounded-circle p-3 me-3">
                    <i [class]="contact.icon" class="text-primary-green"></i>
                  </div>
                  <div>
                    <h6 class="fw-semibold mb-1">{{ contact.title }}</h6>
                    <p class="text-muted small mb-0">{{ contact.value }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex gap-3 mb-4">
              <a [href]="'tel:+91' + phoneNumber" class="btn btn-primary-green">
                <i class="pi pi-phone me-2"></i>
                Call Now
              </a>
              <a [href]="'https://wa.me/91' + phoneNumber" target="_blank" class="btn btn-outline-green">
                <i class="pi pi-whatsapp me-2"></i>
                WhatsApp
              </a>
            </div>

            <div class="alert alert-success d-flex align-items-center">
              <i class="pi pi-info-circle me-2"></i>
              <small>Emergency services are available 24/7. Reach out immediately if needed.</small>
            </div>
          </div>

          <!-- Right Column with Image or Banner -->
          <div class="col-lg-6 text-center">
            <img
              src="assets/images/nurse-006.jpg"
              alt="Medical team support"
              class="img-fluid rounded-4 shadow-lg"
              style="max-width: 90%;"
            />
            <p class="mt-3 text-muted small">Trusted care, now just a call away.</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  phoneNumber = phoneNumber;
  contactInfo = [
    {
      icon: 'pi pi-phone',
      title: 'Helpline',
      value: '+91 ' + phoneNumber,
    },
    {
      icon: 'pi pi-envelope',
      title: 'Email Support',
      value: emailValue,
    },
    {
      icon: 'pi pi-clock',
      title: 'Availability',
      value: '24/7 Emergency Support',
    },
    {
      icon: 'pi pi-map-marker',
      title: 'Service Area',
      value: 'Citywide & Nearby Towns',
    },
  ];
}
