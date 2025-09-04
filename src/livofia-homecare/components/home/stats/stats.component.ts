import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5 bg-primary-green text-white">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" *ngFor="let stat of stats">
            <div class="stat-item">
              <i [class]="stat.icon" class="display-5 mb-3"></i>
              <h3 class="display-4 fw-bold mb-2">{{ stat.number }}</h3>
              <h5 class="fw-semibold mb-2">{{ stat.title }}</h5>
              <p class="mb-0 opacity-75">{{ stat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .stat-item {
        transition: transform 0.3s ease;
      }

      .stat-item:hover {
        transform: translateY(-5px);
      }

      .display-4 {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class StatsComponent {
  stats = [
    {
      icon: 'pi pi-box',
      number: '20+',
      title: 'Equipment Types',
      description: 'Available for rent or purchase',
    },
    {
      icon: 'pi pi-shopping-cart',
      number: 'Buy & Rent',
      title: 'Flexible Options',
      description: 'Medical equipment as per your need',
    },
    {
      icon: 'pi pi-truck',
      number: 'Delivery & Setup',
      title: 'Hassle-Free Service',
      description: 'Equipment delivered & installed within 5km radius',
    },
    {
      icon: 'pi pi-clock',
      number: '24/7',
      title: 'Emergency Support',
      description: 'Round the clock availability',
    },
  ];
}
