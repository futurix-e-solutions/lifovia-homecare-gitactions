import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-5 bg-light-green">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 fw-bold text-primary-green mb-4">About MediCare Home</h1>
            <p class="lead text-muted">Bringing healthcare to your doorstep with compassion and care.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="display-6 fw-bold text-primary-green mb-4">Our Mission</h2>
            <p class="lead text-muted mb-4">
              We aim to transform the healthcare experience by offering reliable, personalized medical care directly at home — starting now.
            </p>
            <div class="row g-3">
              <div class="col-sm-6" *ngFor="let value of coreValues">
                <div class="d-flex align-items-center">
                  <i [class]="value.icon" class="text-primary-green me-3" style="font-size: 1.5rem;"></i>
                  <div>
                    <h6 class="fw-semibold mb-1">{{ value.title }}</h6>
                    <small class="text-muted">{{ value.description }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medical team"
              class="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 mb-4" *ngFor="let milestone of milestones">
            <div class="medical-card p-4 text-center h-100">
              <i [class]="milestone.icon" class="text-primary-green mb-3" style="font-size: 3rem;"></i>
              <h4 class="text-primary-green mb-3">{{ milestone.title }}</h4>
              <p class="text-muted">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-primary-green text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="display-6 fw-bold mb-4">Why Choose Home Healthcare?</h2>
            <div class="row g-4 mt-4">
              <div class="col-md-4" *ngFor="let benefit of benefits">
                <div class="text-center">
                  <i [class]="benefit.icon" class="mb-3" style="font-size: 3rem;"></i>
                  <h5 class="fw-semibold mb-2">{{ benefit.title }}</h5>
                  <p class="mb-0 opacity-75">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-6 fw-bold text-primary-green mb-3">Our Leadership Team</h2>
          <p class="lead text-muted">Led by professionals committed to quality homecare delivery.</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let member of teamMembers">
            <div class="medical-card p-4 text-center">
              <img
                [src]="member.image"
                [alt]="member.name"
                class="rounded-circle mb-3"
                style="width: 120px; height: 120px; object-fit: cover;"
              />
              <h5 class="text-primary-green mb-2">{{ member.name }}</h5>
              <p class="text-muted mb-2">{{ member.position }}</p>
              <p class="small text-muted">{{ member.experience }}</p>
              <div class="d-flex justify-content-center gap-2">
                <a href="#" class="text-primary-green"><i class="pi pi-linkedin"></i></a>
                <a href="#" class="text-primary-green"><i class="pi pi-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  coreValues = [
    {
      icon: 'pi pi-heart',
      title: 'Compassion',
      description: 'Caring with empathy and understanding',
    },
    {
      icon: 'pi pi-shield',
      title: 'Excellence',
      description: 'Highest standards of medical care',
    },
    {
      icon: 'pi pi-users',
      title: 'Integrity',
      description: 'Honest and transparent service',
    },
    {
      icon: 'pi pi-clock',
      title: 'Reliability',
      description: 'Available when you need us',
    },
  ];

  milestones = [
    {
      icon: 'pi pi-rocket',
      title: 'Launched 2025',
      description: 'We recently launched with a passion to make homecare simple, accessible, and compassionate.',
    },
    {
      icon: 'pi pi-cog',
      title: 'Ready to Serve',
      description: 'Fully equipped with professionals and medical tools to begin delivering personalized homecare.',
    },
    {
      icon: 'pi pi-users',
      title: 'Growing Community',
      description: 'Join our early clients and experience trusted healthcare at home.',
    },
  ];

  benefits = [
    {
      icon: 'pi pi-home',
      title: 'Comfort of Home',
      description: 'Receive care in familiar surroundings',
    },
    {
      icon: 'pi pi-dollar',
      title: 'Cost Effective',
      description: 'Save on travel and hospital stays',
    },
    {
      icon: 'pi pi-heart',
      title: 'Personalized Care',
      description: 'Tailored treatment for every individual',
    },
  ];

  teamMembers = [
    {
      name: 'Vijay Reddy',
      position: 'Director of Homecare',
      experience: '—',
      image: 'assets/images/human-logo.jpg',
    },
    {
      name: 'Gowthami',
      position: 'Head of Nursing',
      experience: '5 years',
      image: 'assets/images/human-logo.jpg',
    },
  ];
}
