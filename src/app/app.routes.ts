import { Routes } from '@angular/router';
import { HomeComponent } from '../livofia-homecare/components/home/home.component';
import { AboutComponent } from '../livofia-homecare/pages/about/about.component';
import { ContactComponent } from '../livofia-homecare/pages/contact/contact.component';
import { DashboardComponent } from '../livofia-homecare/pages/dashboard/dashboard.component';
import { SeoBlobsComponent } from '../livofia-homecare/pages/dashboard/seo-blobs.component';
import { ServiceDetailComponent } from '../livofia-homecare/pages/service-detail/service-detail.component';
import { ServicesComponent } from '../livofia-homecare/pages/services/services.component';

export const routes: Routes = [
      { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home-care-services-in-hyderabad', pathMatch: 'full' },

  // core
  { path: 'home-care-services-in-hyderabad', component: HomeComponent, data: { key: 'home-care' } },
  { path: 'home-nursing-services-in-hyderabad', component: HomeComponent, data: { key: 'nursing-home' } },
  { path: 'elder-care-services-in-hyderabad', component: HomeComponent, data: { key: 'elder-care' } },
  { path: 'old-age-home-care-services-in-hyderabad', component: HomeComponent, data: { key: 'old-age-home' } },
  { path: 'best-home-care-services-in-hyderabad', component: HomeComponent, data: { key: 'best-home-care' } },

  // locations
  { path: 'home-care-services-secunderabad', component: HomeComponent, data: { key: 'secunderabad' } },
  { path: 'lifovia-home-health-care-miyapur', component: HomeComponent, data: { key: 'miyapur' } },
  { path: 'lifovia-home-health-somerset-kukatpally', component: HomeComponent, data: { key: 'kukatpally' } },
  { path: 'home-care-services-in-jubilee-hills', component: HomeComponent, data: { key: 'jubilee-hills' } },
  { path: 'home-care-services-in-banjara-hills', component: HomeComponent, data: { key: 'banjara-hills' } },
  { path: 'home-care-services-in-gachibowli', component: HomeComponent, data: { key: 'gachibowli' } },
  { path: 'home-care-services-in-hitech-city', component: HomeComponent, data: { key: 'hitech' } },
  { path: 'home-care-services-in-ameerpet', component: HomeComponent, data: { key: 'ameerpet' } },
  { path: 'home-care-services-in-uppal', component: HomeComponent, data: { key: 'uppal' } },

  // jobs
  { path: 'home-care-jobs-in-hyderabad', component: HomeComponent, data: { key: 'jobs' } },
  { path: 'female-caretaker-in-hyderabad', component: HomeComponent, data: { key: 'female-caretaker' } },

  // pricing
  { path: 'affordable-home-care-services-in-hyderabad', component: HomeComponent, data: { key: 'affordable-home-care' } },
  { path: 'low-cost-nursing-services-in-hyderabad', component: HomeComponent, data: { key: 'low-cost-nursing' } },
  { path: 'premium-home-care-services-in-hyderabad', component: HomeComponent, data: { key: 'premium-home-care' } },
  { path: 'home-care-service-packages-in-hyderabad', component: HomeComponent, data: { key: 'home-care-packages' } },
  { path: 'book-home-nursing-services-in-hyderabad', component: HomeComponent, data: { key: 'book-home-nursing' } },
  { path: 'home-care-services-cost-in-hyderabad', component: HomeComponent, data: { key: 'home-care-cost' } },
  { path: 'nursing-services-at-home-charges-in-hyderabad', component: HomeComponent, data: { key: 'nursing-charges' } },

  // comparisons
  { path: 'best-elder-care-services-in-hyderabad', component: HomeComponent, data: { key: 'best-elder-care' } },
  { path: 'best-nursing-services-at-home-hyderabad', component: HomeComponent, data: { key: 'best-nursing' } },
  { path: 'top-rated-home-care-services-in-hyderabad', component: HomeComponent, data: { key: 'top-rated-home-care' } },

  // near me
  { path: 'home-care-services-near-me-hyderabad', component: HomeComponent, data: { key: 'home-care-near-me' } },
  { path: 'elder-care-services-near-me-hyderabad', component: HomeComponent, data: { key: 'elder-care-near-me' } },
  { path: 'nursing-services-at-home-near-me-hyderabad', component: HomeComponent, data: { key: 'nursing-near-me' } },

  // specialized
  { path: 'icu-setup-at-home-hyderabad', component: HomeComponent, data: { key: 'icu-home' } },
  { path: 'physiotherapy-at-home-hyderabad', component: HomeComponent, data: { key: 'physiotherapy' } },
  { path: 'post-surgery-care-at-home-hyderabad', component: HomeComponent, data: { key: 'post-surgery' } },
  { path: 'mother-and-baby-care-services-hyderabad', component: HomeComponent, data: { key: 'mother-care' } },
  { path: 'child-care-nursing-services-hyderabad', component: HomeComponent, data: { key: 'child-care' } },

  // top lists
  { path: 'top-10-home-care-services-in-hyderabad', component: HomeComponent, data: { key: 'top-services' } },
  { path: 'top-10-home-care-services-in-hyderabad/lifovia-homecare', component: HomeComponent, data: { key: 'home-care' } },
  { path: 'top-10-home-care-services-in-hyderabad/apollo-homecare', component: HomeComponent, data: { key: 'hospital-home' } },
  { path: 'top-10-home-care-services-in-hyderabad/livia', component: HomeComponent, data: { key: 'best-home-care' } },

  // contact / faq
  { path: 'home-care-services-hyderabad-contact-number', component: HomeComponent, data: { key: 'contact' } },
  { path: 'faq', component: HomeComponent, data: { key: 'faq' } },

  // redirects
  { path: 'home-care-services-in-hyderabd', redirectTo: 'home-care-services-in-hyderabad', pathMatch: 'full' },
  { path: 'home-care-in-hyderabd', redirectTo: 'home-care-services-in-hyderabad', pathMatch: 'full' },
  { path: 'appolo-homecare', redirectTo: 'top-10-home-care-services-in-hyderabad/apollo-homecare', pathMatch: 'full' },
  // { path: 'services', component: ServicesComponent },
  // Main service pages (SEO friendly)
  { path: 'home-care-services-in-hyderabad', component: HomeComponent, data: { key: 'homeCare' } },
  { path: 'elder-care-services-in-hyderabad', component: HomeComponent, data: { key: 'elderCare' } },
  { path: 'home-nursing-services-in-hyderabad', component: HomeComponent, data: { key: 'homeNursing' } },
  { path: 'icu-at-home-hyderabad', component: HomeComponent, data: { key: 'icuAtHome' } },
  { path: 'physiotherapy-at-home-hyderabad', component: ServicesComponent, data: { key: 'physiotherapy' } },
  { path: 'post-surgery-care-hyderabad', component: ServicesComponent, data: { key: 'postSurgery' } },
  { path: 'palliative-care-at-home-hyderabad', component: ServicesComponent, data: { key: 'palliativeCare' } },
  { path: 'cancer-patient-home-care-hyderabad', component: ServicesComponent, data: { key: 'cancerCare' } },
  { path: 'stroke-rehabilitation-at-home-hyderabad', component: ServicesComponent, data: { key: 'strokeCare' } },
  { path: 'dementia-alzheimers-care-hyderabad', component: ServicesComponent, data: { key: 'dementiaCare' } },
  { path: 'female-caretaker-in-hyderabad', component: ServicesComponent, data: { key: 'femaleCaretaker' } },
  { path: 'mother-baby-care-hyderabad', component: ServicesComponent, data: { key: 'motherBabyCare' } },
  { path: 'orthopedic-care-hyderabad', component: ServicesComponent, data: { key: 'orthopedicCare' } },
  { path: 'parkinsons-care-hyderabad', component: ServicesComponent, data: { key: 'parkinsonsCare' } },
  { path: 'diabetes-care-hyderabad', component: ServicesComponent, data: { key: 'diabetesCare' } },


  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service/:id', component: ServiceDetailComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'booking', component: BookingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blobs', component: SeoBlobsComponent },
  { path: '**', redirectTo: '' },
];
