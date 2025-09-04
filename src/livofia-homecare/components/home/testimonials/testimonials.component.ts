import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-5" style="background-color: var(--light-gray);">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-6 fw-bold text-primary-green mb-3">What Our Customers Say</h2>
          <p class="lead text-muted">Words from our early supporters and clients</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let testimonial of testimonials">
            <div class="medical-card h-100 p-4">
              <div class="text-center mb-3">
                <img
                  [src]="testimonial.avatar"
                  [alt]="testimonial.name"
                  class="rounded-circle mb-3"
                  style="width: 80px; height: 80px; object-fit: cover;"
                />
                <div class="text-warning mb-2">
                  <i class="pi pi-star-fill" *ngFor="let star of [].constructor(testimonial.rating || 5)"></i>
                </div>
              </div>

              <blockquote class="text-center mb-3">
                <p class="fst-italic text-muted">“{{ testimonial.review }}”</p>
              </blockquote>

              <div class="text-center">
                <h6 class="fw-semibold text-primary-green mb-1">{{ testimonial.name }}</h6>
                <!-- <small class="text-muted">{{ testimonial.service }}</small> -->
                <div class="mt-2">
                  <span class="badge bg-light-green text-accent-green">{{ testimonial.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <button class="btn btn-outline-green">
            <i class="pi pi-comments me-2"></i>
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Anil Reddy',
      service: 'Home ICU Setup',
      location: 'Miyapur',
      rating: 4,
      avatar: 'assets/images/human-logo.jpg',
      review:
        'We needed an ICU setup at home for my uncle. The team delivered the equipment the same day and guided us through everything. Impressive service for a startup!',
    },
    {
      name: 'Divya K',
      service: 'Physiotherapy Equipment Rental',
      location: 'Kukatpally',
      rating: 5,
       avatar: 'assets/images/human-logo.jpg',
      review:
        'Got a CPM machine for post-surgery recovery. Delivered on time, clean, and fully functional. Friendly team and hassle-free rental process.',
    },
    {
      name: 'Manoj Varma',
      service: 'Oxygen Concentrator Hire',
      location: 'Gachibowli',
      rating: 4,
       avatar: 'assets/images/human-logo.jpg',
      review: 'When my father needed oxygen support, they provided a concentrator within hours. We were amazed at the speed and support.',
    },
    {
      name: 'Priya ',
      service: 'Startup Supporter',
      location: 'Begumpet',
      rating: 4,
       avatar: 'assets/images/human-logo.jpg',
      review:
        'As a friend, I’ve seen their journey. They’re building something meaningful with heart and purpose. Rooting for their success!',
    },
    {
      name: 'Rahul K',
      service: 'Medical Bed Installation',
      location: 'Banjara Hills',
      rating: 5,
       avatar: 'assets/images/human-logo.jpg',
      review:
        'The medical bed was delivered and installed in under an hour. They even educated us on safety and handling. Great initiative for in-home care.',
    },
    {
      name: 'Sneha Reddy',
      service: 'Startup Collaborator',
      location: 'HiTech City',
      rating: 4,
       avatar: 'assets/images/human-logo.jpg',
      review:
        'Working with the team on digital setup was smooth. They’re passionate, committed, and focused on solving real-world healthcare needs.',
    },
  ];
}
