import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '../../components/home/hero-section/hero-section.component';
import { ServicesGridComponent } from '../../components/home/services-grid/services-grid.component';
import { WhyChooseUsComponent } from '../../components/home/why-choose-us/why-choose-us.component';
import { StatsComponent } from '../../components/home/stats/stats.component';
import { TestimonialsComponent } from '../../components/home/testimonials/testimonials.component';
import { ContactSectionComponent } from '../../components/home/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
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
