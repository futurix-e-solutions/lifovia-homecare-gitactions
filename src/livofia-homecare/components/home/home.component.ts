import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesGridComponent } from './services-grid/services-grid.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { StatsComponent } from './stats/stats.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ServicesGridComponent,
    WhyChooseUsComponent,
    StatsComponent,
    TestimonialsComponent,
    ContactSectionComponent,
  ],
  template: `
    <div id="home">
      <app-hero-section></app-hero-section>
      <app-services-grid></app-services-grid>
      <app-why-choose-us></app-why-choose-us>
      <app-stats></app-stats>
      <app-testimonials></app-testimonials>
      <app-contact-section></app-contact-section>
    </div>
  `,
})
export class HomeComponent {}
