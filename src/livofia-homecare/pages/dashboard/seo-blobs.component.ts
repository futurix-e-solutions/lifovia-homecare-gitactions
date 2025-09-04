import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from './seo.service';
import { SEO_DATA } from './seo-data';

@Component({
  selector: 'app-seo-blobs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Banner -->
    <div class="banner-container mb-5">
      <img [src]="bannerImage" alt="Lifovia Homecare Banner" class="img-fluid w-100 banner-image" />
      <div class="banner-text">
        <h1 class="text-white">LIFOVIA HOMECARE</h1>
        <p class="text-white fs-5">Comprehensive Home Health Services Across Hyderabad</p>
      </div>
    </div>
    <div class="container my-5">

  <!-- Hero Section -->
  <section class="text-center mb-5">
    <h1 class="fw-bold text-color">Lifovia Home Care Services in Hyderabad</h1>
    <p class="lead text-muted">
      Trusted and compassionate <strong>home care services in Hyderabad</strong> for elderly care, 
      nursing services, medical assistance, and daily support. 
      Lifovia Home Care ensures comfort, safety, and dignity at home.
    </p>
  </section>

  <!-- Section 1: Top Services -->
  <section class="mb-5">
    <h2 class="fw-semibold mb-4">Top 10 Home Care Services in Hyderabad</h2>
    <div class="row g-4">
      <div class="col-md-4" *ngFor="let service of services">
        <div class="card shadow-sm h-100">
          <div class="card-body text-center">
            <i class="bi bi-house-heart-fill fs-1 text-color mb-3"></i>
            <h5 class="card-title">{{service.title}}</h5>
            <p class="card-text text-muted">{{service.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Elder Care -->
  <section class="mb-5">
    <h2 class="fw-semibold mb-4">Elder Care Services in Hyderabad</h2>
    <p>
      Lifovia Home Care offers professional <strong>elder care services in Hyderabad</strong> including 
      24/7 assistance, medication reminders, health monitoring, companionship, and emotional support. 
      Our caregivers are trained to ensure the safety and dignity of senior citizens.
    </p>
    <ul class="list-group">
      <li class="list-group-item">👩‍⚕️ Trained female & male caretakers</li>
      <li class="list-group-item">🏥 Medical support & home nursing</li>
      <li class="list-group-item">🍲 Nutritional support and meal preparation</li>
      <li class="list-group-item">🚑 Emergency medical care coordination</li>
    </ul>
  </section>

  <!-- Section 3: Jobs & Careers -->
  <section class="mb-5">
    <h2 class="fw-semibold mb-4">Home Care Jobs in Hyderabad</h2>
    <p>
      Looking for a career in home health services? Join <strong>Lifovia Home Care in Hyderabad</strong>. 
      We provide job opportunities for nurses, caretakers, physiotherapists, and support staff. 
      Contact us to build a career in compassionate healthcare.
    </p>
    <div class="alert alert-info">
      📞 Call us today: <a href="tel:+919666799933">+91 9666799933</a>  
      🌐 Visit: <a href="https://lifoviahomecare.in">lifoviahomecare.in</a>
    </div>
  </section>

  <!-- Section 4: Contact -->
  <section class="mb-5">
    <h2 class="fw-semibold mb-4">Contact Lifovia Home Care Hyderabad</h2>
    <p>
      Reach out to our Hyderabad team for <strong>home nursing services, elder care solutions, and daily 
      support care</strong>. We are available 24/7 for bookings and inquiries.
    </p>
    <div class="card p-3 shadow-sm">
      <h5 class="mb-2">📍 Address</h5>
      <p>Miyapur, Hyderabad, Telangana</p>
      <h5 class="mb-2">📞 Phone</h5>
      <p><a href="tel:+919666799933">+91 9666799933</a></p>
      <!-- <h5 class="mb-2">✉️ Email</h5>
      <p><a href="mailto:info "&#64;"lifoviahomecare.in">info@lifoviahomecare.in</a></p> -->
    </div>
  </section>
</div>
 <!-- Quick Navigation -->
   <!-- Quick Navigation -->
<div class="container my-4">
  <h3 class="fw-bold text-center text-color mb-3">Quick Navigation</h3>
  <div class="d-flex flex-wrap justify-content-center gap-3">
    <a *ngFor="let blob of blobs"
       [href]="blob.link"
       class="btn btn-outline-primary px-3 py-2 d-flex align-items-center shadow-sm rounded-pill">
      <i class="bi bi-arrow-right-circle me-2"></i>
      {{ blob.title }}
    </a>
  </div>
</div>


    <!-- SEO Blobs Sections -->
   <div class="container">
  <div class="row">
    <section *ngFor="let blob of blobs" 
             [id]="blob.id" 
             class="col-12 col-md-6 d-flex flex-column align-items-center my-2 text-center">
      
      <h2 class="section-title mb-3">{{ blob.title }}</h2>
      <p class="text-muted" *ngIf="blob.description">{{ blob.description }}</p>

      <!-- Rich HTML content -->
      <div [innerHTML]="blob.html" *ngIf="blob.html"></div>
    </section>
  </div>
</div>

  `,
  styles: [`
  a.btn-outline-primary {
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}
a.btn-outline-primary:hover {
  background-color: #10847e;
  color: #fff !important;
  transform: translateY(-2px);
}

    .banner-container {
      position: relative;
      height: 300px;
      overflow: hidden;
    }
    .banner-image {
      object-fit: cover;
      height: 100%;
    }
    .banner-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .section-title {
      font-weight: bold;
      color: #10847e;
    }
    nav a {
      margin: 0 8px;
    }
    nav a:hover {
      text-decoration: underline;
    }
    .text-color{
      color: #10847e;
    }
  `]
})
export class SeoBlobsComponent {
  bannerImage = 'assets/images/nurse-006.jpg';

  // seo-blobs.data.ts
 blobs = [

  // === CORE SERVICES ===
  { id: 'home-care', title: 'Home Care Services in Hyderabad', description: 'Lifovia provides trusted home care services with professional nurses and caretakers.', link: '/home-care-services-in-hyderabad' },
  { id: 'nursing-home', title: 'Home Nursing Services in Hyderabad', description: '24/7 trained nursing staff for injections, IV, wound care, and medical monitoring.', link: '/home-nursing-services-in-hyderabad' },
  { id: 'elder-care', title: 'Elder Care Services in Hyderabad', description: 'Compassionate elder care with hygiene, mobility support, and companionship.', link: '/elder-care-services-in-hyderabad' },
  { id: 'old-age-home', title: 'Old Age Home Care Services Hyderabad', description: 'Stay at home with dignity – complete old age home alternatives with Lifovia.', link: '/old-age-home-care-services-in-hyderabad' },
  { id: 'best-home-care', title: 'Best Home Care Services in Hyderabad', description: 'Why Lifovia is ranked among the best home healthcare providers in Hyderabad.', link: '/best-home-care-services-in-hyderabad' },

  // === LOCATION BASED ===
  { id: 'secunderabad', title: 'Home Care Services in Secunderabad', description: 'Complete home nursing and elder care services in Secunderabad.', link: '/home-care-services-secunderabad' },
  { id: 'miyapur', title: 'Home Care Services in Miyapur', description: 'Nursing and elderly care services at home in Miyapur and nearby areas.', link: '/lifovia-home-health-care-miyapur' },
  { id: 'kukatpally', title: 'Home Care Services in Kukatpally', description: 'Lifovia Homecare extends services to Kukatpally with 24/7 support.', link: '/lifovia-home-health-somerset-kukatpally' },
  { id: 'jubilee-hills', title: 'Home Care Services in Jubilee Hills', description: 'Luxury elder and nursing care services at home in Jubilee Hills.', link: '/home-care-services-in-jubilee-hills' },
  { id: 'banjara-hills', title: 'Home Care Services in Banjara Hills', description: 'Premium patient care services at home in Banjara Hills.', link: '/home-care-services-in-banjara-hills' },
  { id: 'gachibowli', title: 'Home Care Services in Gachibowli', description: 'Trusted home nursing & elder care services in Gachibowli & Financial District.', link: '/home-care-services-in-gachibowli' },
  { id: 'hitech', title: 'Home Care Services in Hitech City', description: '24/7 home care and nursing solutions in Hitech City and nearby.', link: '/home-care-services-in-hitech-city' },
  { id: 'ameerpet', title: 'Home Care Services in Ameerpet', description: 'Affordable home care & elder support services in Ameerpet.', link: '/home-care-services-in-ameerpet' },
  { id: 'uppal', title: 'Home Care Services in Uppal', description: 'Professional patient care & nursing at home in Uppal.', link: '/home-care-services-in-uppal' },

  // === JOBS ===
  { id: 'jobs', title: 'Home Care Jobs in Hyderabad', description: 'Nursing jobs, caretaker jobs, and attendant careers in Hyderabad with Lifovia.', link: '/home-care-jobs-in-hyderabad' },
  { id: 'female-caretaker', title: 'Female Caretaker Services Hyderabad', description: 'Professional female caretakers for elderly and bedridden patients.', link: '/female-caretaker-in-hyderabad' },

  // === HOSPITAL CARE ===
  { id: 'hospital-home', title: 'Care Hospital Home Care Services Hyderabad', description: 'Partnering with hospitals to extend care at home after discharge.', link: '/care-hospital-home-care-services-hyderabad' },

  // === PRICING & PACKAGES ===
  { id: 'affordable-home-care', title: 'Affordable Home Care Services in Hyderabad', description: 'Budget-friendly home nursing and caretaker services starting from just ₹499/day.', link: '/affordable-home-care-services-in-hyderabad' },
  { id: 'low-cost-nursing', title: 'Low Cost Nursing Services at Home Hyderabad', description: 'Get quality nursing support at home at the lowest prices in Hyderabad.', link: '/low-cost-nursing-services-in-hyderabad' },
  { id: 'premium-home-care', title: 'Premium Home Care Services in Hyderabad', description: 'Exclusive personalized care plans, ICU setup, and luxury elder care packages.', link: '/premium-home-care-services-in-hyderabad' },
  { id: 'home-care-packages', title: 'Home Care Service Packages Hyderabad', description: 'Flexible daily, weekly, and monthly nursing & caretaker packages.', link: '/home-care-service-packages-in-hyderabad' },

  // === BOOKING & COST ===
  { id: 'book-home-nursing', title: 'Book Home Nursing Services Hyderabad', description: 'Easily book professional nurses for injections, IV, wound care, and more.', link: '/book-home-nursing-services-in-hyderabad' },
  { id: 'home-care-cost', title: 'Home Care Services Cost in Hyderabad', description: 'Transparent pricing for nursing, caretaker, and elder care services in Hyderabad.', link: '/home-care-services-cost-in-hyderabad' },
  { id: 'nursing-charges', title: 'Nursing Services at Home Charges Hyderabad', description: 'Daily & monthly nursing service charges with no hidden fees.', link: '/nursing-services-at-home-charges-in-hyderabad' },

  // === COMPARISON & BEST LISTS ===
  { id: 'best-elder-care', title: 'Best Elder Care Services in Hyderabad', description: 'Compare the top-rated elder care providers in Hyderabad for your loved ones.', link: '/best-elder-care-services-in-hyderabad' },
  { id: 'best-nursing', title: 'Best Nursing Services at Home Hyderabad', description: 'Why Lifovia is among the best home nursing service providers in Hyderabad.', link: '/best-nursing-services-at-home-hyderabad' },
  { id: 'top-rated-home-care', title: 'Top Rated Home Care Services Hyderabad', description: 'Customer reviewed and verified top home care providers in Hyderabad.', link: '/top-rated-home-care-services-in-hyderabad' },

  // === NEAR ME ===
  { id: 'home-care-near-me', title: 'Home Care Services Near Me Hyderabad', description: 'Find reliable home care nurses and caretakers near your location in Hyderabad.', link: '/home-care-services-near-me-hyderabad' },
  { id: 'elder-care-near-me', title: 'Elder Care Services Near Me Hyderabad', description: 'Trained elder caretakers available across all Hyderabad localities.', link: '/elder-care-services-near-me-hyderabad' },
  { id: 'nursing-near-me', title: 'Nursing Services at Home Near Me Hyderabad', description: 'Quick nursing support near you – 24/7 coverage across Hyderabad.', link: '/nursing-services-at-home-near-me-hyderabad' },

  // === SPECIALIZED SERVICES ===
  { id: 'icu-home', title: 'ICU Setup at Home Hyderabad', description: 'Ventilators, oxygen concentrators, and ICU-trained nurses for critical patients.', link: '/icu-setup-at-home-hyderabad' },
  { id: 'physiotherapy', title: 'Physiotherapy at Home Hyderabad', description: 'Pain relief, post-surgery recovery, and mobility exercises with expert physiotherapists.', link: '/physiotherapy-at-home-hyderabad' },
  { id: 'post-surgery', title: 'Post Surgery Care at Home Hyderabad', description: 'Wound dressing, mobility aid, and 24/7 monitoring after surgery recovery.', link: '/post-surgery-care-at-home-hyderabad' },
  { id: 'mother-care', title: 'Mother and Baby Care Services Hyderabad', description: 'Postnatal mother care and newborn baby care with certified nurses.', link: '/mother-and-baby-care-services-hyderabad' },
  { id: 'child-care', title: 'Child Care Nursing Services Hyderabad', description: 'Special care for infants, toddlers, and children at home.', link: '/child-care-nursing-services-hyderabad' },

  // === TOP LISTING ===
  { id: 'top-services', title: 'Top 10 Home Care Services in Hyderabad', list: ['Lifovia Homecare','Apollo Homecare','Livia Homecare','Care Hospital Home Care','Portea Homecare','Nightingale Home Health','Max Homecare','Medicover Homecare','KIMS Homecare','Yashoda Homecare'], link: '/top-10-home-care-services-in-hyderabad' },

  // === CONTACT & FAQ ===
  { id: 'contact', title: 'Contact Lifovia Homecare Hyderabad', html: `<p>Call us for immediate nursing and caretaker services at home.</p><h3>📞 +91 98765 43210</h3><p>📍 Locations: Secunderabad, Miyapur, Kukatpally, Jubilee Hills, Hitech City</p>`, link: '/home-care-services-hyderabad-contact-number' },
  { id: 'faq', title: 'Frequently Asked Questions - Home Care Hyderabad', html: `<h5>1. How do I book home nursing in Hyderabad?</h5><p>You can call Lifovia at +91 98765 43210 or fill our online booking form.</p><h5>2. Are female caretakers available?</h5><p>Yes, we provide trained female caretakers for elderly and bedridden patients.</p><h5>3. Do you provide ICU setup at home?</h5><p>Yes, complete ICU setup including ventilator, oxygen, and monitoring is available.</p>`, link: '/faq' }
];


  // home.component.ts
services = [
  { title: 'Lifovia Home Care', description: 'Professional home nursing & elder care in Hyderabad.' },
  { title: 'All time Home Care', description: '24/7 healthcare and nursing services at home.' },
  { title: 'Lifovia Home Care', description: 'Trusted caretakers for elderly and patients.' },
  { title: 'Elderly Parent Care', description: 'Dedicated support for senior citizens at home.' },
  { title: 'Post-Surgery Care', description: 'Medical assistance and recovery support.' },
  { title: 'Palliative Care', description: 'Compassionate care for critical patients.' },
  { title: 'Female Caretakers', description: 'Trained female staff for women patients.' },
  { title: 'Home Nursing Services', description: 'Nursing care and medical monitoring at home.' },
  { title: 'Medical Equipment Support', description: 'Oxygen concentrators, wheelchairs, and more.' },
  { title: 'Personal Hygiene Care', description: 'Daily activities assistance with dignity.' },
];

private route = inject(ActivatedRoute);
  private seo = inject(SeoService);


ngOnInit(){
   const key = this.route.snapshot.data['key'];
    const seoConfig = SEO_DATA[key];

    if (seoConfig) {
      this.seo.updateMetaTags(seoConfig);
    }
}
}
