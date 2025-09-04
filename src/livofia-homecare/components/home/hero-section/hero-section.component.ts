import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { emailValue, phoneNumber } from '../../../../app/config/authority.constants';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero-section bg-dark text-white py-5">
      <div class="container hero-content">
        <div class="row align-items-center min-vh-100">
          <!-- Text Column -->
          <div class="col-lg-6">
            <div class="fade-in">
              <h1 class="display-4 fw-bold mb-4">Bringing <span class="text-primary-green">Professional Homecare</span> to Life</h1>
              <p class="lead mb-4">
                We are a passionate startup dedicated to providing hospital-quality medical care at your doorstep. Our services are
                launching soon with certified professionals and 24/7 emergency support.
              </p>

              <div class="d-flex flex-column flex-sm-row gap-3 mb-5">
                <a [href]="'tel:+91' + phoneNumber" class="btn btn-danger btn-lg">
                  <i class="pi pi-phone me-2"></i>
                  Call Now
                </a>
                <a [href]="'https://wa.me/91' + phoneNumber" target="_blank" class="btn btn-success btn-lg">
                  <i class="pi pi-whatsapp me-2"></i>
                  WhatsApp Chat
                </a>
              </div>

              <div class="alert alert-light text-dark small">
                🚀 <strong>Now Accepting Pre-Bookings!</strong><br />
                Be the first to experience personalized care at home.
              </div>
            </div>
          </div>

          <!-- Image Column -->
          <div class="col-lg-6">
            <div class="fade-in text-center">
              <div class="hero-image-container">
                <img
                  src="assets/images/pexels-photo-5998512.webp"
                  alt="Medical professional at home"
                  class="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-section {
        background-color: #0c1f2c;
        position: relative;
      }

      .text-primary-green {
        color: var(--primary-green);
      }

      .hero-image-container {
        position: relative;
        margin-top: 2rem;
      }

      .hero-image-container::before {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        right: 20px;
        bottom: 20px;
        background: linear-gradient(135deg, var(--primary-green), var(--secondary-green));
        border-radius: 1.5rem;
        z-index: -1;
        opacity: 0.3;
      }

      @media (max-width: 768px) {
        .display-4 {
          font-size: 2rem;
        }

        .lead {
          font-size: 1.1rem;
        }

        .hero-image-container {
          margin-top: 1rem;
        }
      }
    `,
  ],
})
export class HeroSectionComponent {
  emailValue = emailValue;
  phoneNumber = phoneNumber;
}
