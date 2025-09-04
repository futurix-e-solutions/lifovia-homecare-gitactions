import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { emailValue, phoneNumber } from '../../../app/config/authority.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
  <footer class="footer-medical bg-dark text-white pt-5 pb-3">
  <div class="container">
    <div class="row">
      
      <!-- Brand Info -->
      <div class="col-lg-4 col-md-6 mb-4">
        <h5 class="d-flex align-items-center">
          <i class="pi pi-heart-fill me-2 text-danger"></i>
          Lifovia Homecare
        </h5>
        <p class="mb-3">
          Trusted <strong>home healthcare in Hyderabad</strong> with expert
          <strong>nursing, elder care, ICU setup, physiotherapy, and caretakers</strong>.  
          Compassionate care, right at your doorstep.
        </p>
        <div class="d-flex gap-3">
          <a href="https://www.facebook.com/lifoviahomecare" target="_blank" rel="noopener" class="text-white"><i class="pi pi-facebook fs-5"></i></a>
          <a href="https://twitter.com/lifoviahomecare" target="_blank" rel="noopener" class="text-white"><i class="pi pi-twitter fs-5"></i></a>
          <a href="https://www.linkedin.com/company/lifoviahomecare" target="_blank" rel="noopener" class="text-white"><i class="pi pi-linkedin fs-5"></i></a>
          <a href="https://www.instagram.com/lifoviahomecare" target="_blank" rel="noopener" class="text-white"><i class="pi pi-instagram fs-5"></i></a>
          <a href="https://g.page/r/CfB8yRZ_lifovia" target="_blank" rel="noopener" class="text-white"><i class="pi pi-map-marker fs-5"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="col-lg-2 col-md-6 mb-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/" class="text-white text-decoration-none">Home</a></li>
          <li class="mb-2"><a href="/about-us" class="text-white text-decoration-none">About Us</a></li>
          <li class="mb-2"><a href="/contact" class="text-white text-decoration-none">Contact</a></li>
          <li class="mb-2"><a href="/home-care-jobs-in-hyderabad" class="text-white text-decoration-none">Careers</a></li>
          <li class="mb-2"><a href="/faq" class="text-white text-decoration-none">FAQs</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div class="col-lg-3 col-md-6 mb-4">
        <h5>Our Services</h5>
        <ul class="list-unstyled small">
          <li><a href="/home-care-services-in-hyderabad" class="text-white text-decoration-none">Home Care Services</a></li>
          <li><a href="/elder-care-services-in-hyderabad" class="text-white text-decoration-none">Elder Care</a></li>
          <li><a href="/home-nursing-services-in-hyderabad" class="text-white text-decoration-none">Home Nursing</a></li>
          <li><a href="/icu-at-home-hyderabad" class="text-white text-decoration-none">ICU at Home</a></li>
          <li><a href="/physiotherapy-at-home-hyderabad" class="text-white text-decoration-none">Physiotherapy at Home</a></li>
          <li><a href="/post-surgery-care-hyderabad" class="text-white text-decoration-none">Post-Surgery Care</a></li>
          <li><a href="/palliative-care-at-home-hyderabad" class="text-white text-decoration-none">Palliative Care</a></li>
          <li><a href="/cancer-patient-home-care-hyderabad" class="text-white text-decoration-none">Cancer Care at Home</a></li>
          <li><a href="/stroke-rehabilitation-at-home-hyderabad" class="text-white text-decoration-none">Stroke Care</a></li>
          <li><a href="/dementia-alzheimers-care-hyderabad" class="text-white text-decoration-none">Dementia & Alzheimer’s Care</a></li>
          <li><a href="/female-caretaker-in-hyderabad" class="text-white text-decoration-none">Female Caretaker</a></li>
          <li><a href="/mother-baby-care-hyderabad" class="text-white text-decoration-none">Mother & Baby Care</a></li>
          <li><a href="/orthopedic-care-hyderabad" class="text-white text-decoration-none">Orthopedic Care</a></li>
          <li><a href="/parkinsons-care-hyderabad" class="text-white text-decoration-none">Parkinson’s Care</a></li>
          <li><a href="/diabetes-care-hyderabad" class="text-white text-decoration-none">Diabetes Care</a></li>
        </ul>
      </div>

      <!-- Locations & SEO -->
      <div class="col-lg-3 col-md-6 mb-4">
        <h5>Locations</h5>
        <ul class="list-unstyled small">
          <li><a href="/home-care-services-secunderabad" class="text-white text-decoration-none">Secunderabad</a></li>
          <li><a href="/lifovia-home-health-care-miyapur" class="text-white text-decoration-none">Miyapur</a></li>
          <li><a href="/lifovia-home-health-somerset-kukatpally" class="text-white text-decoration-none">Kukatpally</a></li>
          <li><a href="/jubilee-hills-home-care" class="text-white text-decoration-none">Jubilee Hills</a></li>
          <li><a href="/banjara-hills-home-care" class="text-white text-decoration-none">Banjara Hills</a></li>
          <li><a href="/gachibowli-home-care" class="text-white text-decoration-none">Gachibowli</a></li>
          <li><a href="/ameerpet-home-care" class="text-white text-decoration-none">Ameerpet</a></li>
          <li><a href="/uppal-home-care" class="text-white text-decoration-none">Uppal</a></li>
          <li><a href="/hitech-city-home-care" class="text-white text-decoration-none">Hitech City</a></li>
        </ul>
        <h6 class="mt-3">SEO Pages</h6>
        <ul class="list-unstyled small">
          <li><a href="/top-10-home-care-services-in-hyderabad" class="text-white text-decoration-none">Top 10 Home Care</a></li>
          <li><a href="/best-home-care-services-in-hyderabad" class="text-white text-decoration-none">Best Home Care</a></li>
          <li><a href="/nursing-services-at-home-near-me" class="text-white text-decoration-none">Nursing Near Me</a></li>
          <li><a href="/old-age-home-care-services-in-hyderabad" class="text-white text-decoration-none">Old Age Care</a></li>
          <li><a href="/care-hospital-home-care-services-hyderabad" class="text-white text-decoration-none">Care Hospital Home Care</a></li>
        </ul>
      </div>

    </div>

    <hr style="border-color: rgba(255, 255, 255, 0.2);" />

    <!-- Bottom Links -->
    <div class="row align-items-center">
      <div class="col-md-6">
        <p class="mb-0 small">&copy; 2025 Lifovia Homecare. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-md-end">
        <a href="/privacy-policy" class="me-3 text-white small">Privacy Policy</a>
        <a href="/terms-of-service" class="me-3 text-white small">Terms of Service</a>
        <a href="/cookie-policy" class="text-white small">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>


  `,
})
export class FooterComponent {
  emailValue = emailValue;
  phoneNumber = phoneNumber;
}
