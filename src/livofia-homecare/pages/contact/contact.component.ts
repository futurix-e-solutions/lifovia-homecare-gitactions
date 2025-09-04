import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { phoneNumber } from '../../../app/config/authority.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5 bg-light-green">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 fw-bold text-primary-green mb-4">Contact Us</h1>
            <p class="lead text-muted">Reach out to our medical team for consultations, service inquiries, or emergency assistance</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Info -->
          <div class="col-lg-6">
            <div class="medical-card p-4 mb-4">
              <h5 class="text-primary-green mb-3">Contact Information</h5>
              <div class="mb-4" *ngFor="let contact of contactInfo">
                <div class="d-flex align-items-start">
                  <div class="bg-light-green rounded-circle p-2 me-3">
                    <i [class]="contact.icon" class="text-primary-green"></i>
                  </div>
                  <div>
                    <h6 class="fw-semibold mb-1">{{ contact.title }}</h6>
                    <p class="text-muted small mb-0">{{ contact.value }}</p>
                    <p class="text-muted small mb-0" *ngIf="contact.hours">{{ contact.hours }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="medical-card p-4 mb-4">
              <h6 class="text-primary-green mb-3">Emergency Services</h6>
              <div class="alert alert-danger">
                <i class="pi pi-exclamation-triangle me-2"></i>
                <strong>Medical Emergency:</strong><br />
                Call <a [href]="'tel:+91' + phoneNumber" class="text-danger">+91 {{ phoneNumber }}</a
                ><br />
                Available 24/7
              </div>
            </div>

            <div class="medical-card p-4">
              <h6 class="text-primary-green mb-3">Office Hours</h6>
              <div class="small">
                <div class="d-flex justify-content-between mb-1">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <span>Saturday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <span>Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Emergency:</span>
                  <span class="text-primary-green fw-semibold">24/7</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Extra Info -->
          <div class="col-lg-6">
            <div class="medical-card p-4 mb-4">
              <h5 class="text-primary-green mb-3">Book a Home Visit or Consultation</h5>
              <p class="text-muted">
                Our doctors and nurses are available for scheduled home visits. To schedule a visit or consultation, call us directly or
                message us on WhatsApp.
              </p>
              <ul class="list-unstyled">
                <li><i class="pi pi-phone text-primary-green me-2"></i> +91 {{ phoneNumber }}</li>
                <li><i class="pi pi-whatsapp text-primary-green me-2"></i> +91 {{ phoneNumber }}</li>
              </ul>
            </div>

            <div class="medical-card p-4 mb-4">
              <h5 class="text-primary-green mb-3">Service Area Map</h5>
              <div class="ratio ratio-16x9">
                <!-- <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387142.84005947685!2d-74.2581944516326!3d40.70583164778221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzIxLjAiTiA3NMKwMTUnMTUuOCJX!5e0!3m2!1sen!2sin!4v1678956427890"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe> -->
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.2316473554575!2d78.3833305552345!3d17.48700923275715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753780730032!5m2!1sen!2sin"
                 width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div class="medical-card p-4">
              <h5 class="text-primary-green mb-3">What Our Patients Say</h5>
              <blockquote class="blockquote">
                <p class="mb-2">"The home visit by your team saved our time and gave us peace of mind. Highly professional and caring."</p>
                <footer class="blockquote-footer">Mrs. Anjali R.</footer>
              </blockquote>
              <blockquote class="blockquote mt-3">
                <p class="mb-2">"Immediate response during our emergency call. Thank you for being there!"</p>
                <footer class="blockquote-footer">Mr. Prasad K.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  phoneNumber = phoneNumber;
  contactInfo = [
    {
      icon: 'pi pi-phone',
      title: '24/7 Helpline',
      value: '+91 ' + this.phoneNumber,
      hours: 'Always available',
    },
    {
      icon: 'pi pi-envelope',
      title: 'Email Support',
      value: 'care@medicarehome.com',
      hours: 'Replies within 2 hours',
    },
    {
      icon: 'pi pi-map-marker',
      title: 'Service Area',
      value: 'Across Hyderabad & Secunderabad',
      hours: 'Urban & suburban zones',
    },
    {
      icon: 'pi pi-whatsapp',
      title: 'WhatsApp',
      value: '+91 ' + this.phoneNumber,
      hours: 'Quick response guaranteed',
    },
  ];
}
