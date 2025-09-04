import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ServiceDataService } from '../../services/service-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div *ngIf="service && !medicalEquipment">
      <section class="py-5 bg-light-green">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a routerLink="/home">Home</a></li>
                  <li class="breadcrumb-item"><a routerLink="/services">Services</a></li>
                  <li class="breadcrumb-item active">{{ service.title }}</li>
                </ol>
              </nav>
              <h1 class="display-5 fw-bold text-primary-green mb-3">{{ service.title }}</h1>
              <p class="lead text-muted">{{ service.description }}</p>
            </div>
            <div class="col-lg-4 text-lg-end">
              <div class="service-icon-large">
                <i [class]="service.icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="medical-card p-4 mb-4">
                <h3 class="text-primary-green mb-4">Service Overview</h3>
                <p class="text-muted mb-4">{{ service.detailedDescription }}</p>

                <h4 class="text-primary-green mb-3">What's Included</h4>
                <div class="row g-3 mb-4">
                  <div class="col-md-6" *ngFor="let feature of service.features">
                    <div class="d-flex align-items-start">
                      <i class="pi pi-check-circle text-primary-green me-3 mt-1"></i>
                      <span>{{ feature }}</span>
                    </div>
                  </div>
                </div>

                <h4 class="text-primary-green mb-3">Process & Procedure</h4>
                <div class="row g-3">
                  <div class="col-md-6" *ngFor="let step of service.process; let i = index">
                    <div class="d-flex align-items-start">
                      <div
                        class="bg-primary-green text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style="width: 30px; height: 30px; font-size: 0.9rem;"
                      >
                        {{ i + 1 }}
                      </div>
                      <div>
                        <h6 class="fw-semibold mb-1">{{ step.title }}</h6>
                        <small class="text-muted">{{ step.description }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="medical-card p-4">
                <h4 class="text-primary-green mb-3">Frequently Asked Questions</h4>
                <div class="accordion" id="faqAccordion">
                  <div class="accordion-item" *ngFor="let faq of service.faqs; let i = index">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        [attr.data-bs-toggle]="'collapse'"
                        [attr.data-bs-target]="'#faq' + i"
                      >
                        {{ faq.question }}
                      </button>
                    </h2>
                    <div [id]="'faq' + i" class="accordion-collapse collapse" [attr.data-bs-parent]="'#faqAccordion'">
                      <div class="accordion-body">
                        {{ faq.answer }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="medical-card p-4 mb-4">
                <h5 class="text-primary-green mb-3">Service Details</h5>
                <div class="mb-3">
                  <strong>Availability:</strong>
                  <span class="badge bg-primary-green ms-2">{{ service.availability }}</span>
                </div>
                <div class="mb-3">
                  <strong>Duration:</strong>
                  <span class="ms-2">{{ service.duration }}</span>
                </div>
                <div class="mb-4">
                  <strong>Service Area:</strong>
                  <span class="ms-2">{{ service.serviceArea }}</span>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-outline-green">
                    <i class="pi pi-phone me-2"></i>
                    Call for Consultation
                  </button>
                </div>
              </div>

              <div class="medical-card p-4">
                <h6 class="text-primary-green mb-3">Need Help?</h6>
                <p class="small text-muted mb-3">Our consultants are available 24/7 for guidance and support.</p>
                <div class="d-flex align-items-center mb-2">
                  <i class="pi pi-phone text-primary-green me-2"></i>
                  <span class="small">+91 7995479757</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="pi pi-envelope text-primary-green me-2"></i>
                  <span class="small">lifoviahomecare.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div *ngIf="!service && !medicalEquipment" class="container py-5">
      <div class="text-center">
        <h2 class="text-muted">Service not found</h2>
        <button class="btn btn-primary-green mt-3" routerLink="/services">
          <i class="pi pi-arrow-left me-2"></i>
          Back to Services
        </button>
      </div>
    </div>

    <div *ngIf="medicalEquipment" class="container py-4">
      <!-- Search + Category Filter -->
      <div *ngIf="medicalEquipment" class="container py-4">
        <!-- Search Field -->
        <!-- <div class="row mb-3">
          <div class="col-12 col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Search medical equipment..."
              [(ngModel)]="searchText"
              (ngModelChange)="applyFilters()"
            />
          </div>
        </div> -->

        <!-- Category Filter -->
        <div class="d-flex flex-wrap gap-2 justify-content-start mb-3">
          <button
            *ngFor="let category of categories"
            class="btn px-4 py-2 rounded-pill"
            [ngClass]="{
              'btn-teal text-white': selectedCategory === category,
              'btn-outline-secondary': selectedCategory !== category,
            }"
            (click)="selectedCategory = category; applyFilters()"
          >
            {{ category }}
          </button>
        </div>

        <!-- Equipment List -->
        <div class="row g-4">
          <div class="col-md-3 col-sm-6" *ngFor="let item of filteredEquipments">
            <div class="card h-100 shadow">
              <img [src]="item.imageUrl" class="card-img-top p-3" [alt]="item.name" />
              <div class="card-body">
                <h6 class="card-title">{{ item.name }}</h6>
                <p class="card-text small text-muted">{{ item.description }}</p>
                <strong>₹{{ item.price | number }}</strong>
                <div *ngIf="item.isBestSeller" class="badge bg-danger mt-2">Best Seller</div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div *ngIf="filteredEquipments.length === 0" class="text-center text-muted mt-4">No medical equipment found.</div>
      </div>
    </div>
  `,
  styles: [
    `
      .service-icon-large {
        width: 120px;
        height: 120px;
        background: linear-gradient(135deg, var(--light-green), var(--primary-green));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: var(--accent-green);
        margin-left: auto;
      }

      .breadcrumb-item a {
        color: var(--primary-green);
        text-decoration: none;
      }

      .accordion-button:not(.collapsed) {
        background-color: var(--light-green);
        color: var(--accent-green);
      }
      .btn-teal {
        background-color: #009688;
        border-color: #009688;
      }

      .btn-teal:hover {
        background-color: #00796b;
        border-color: #00796b;
      }
    `,
  ],
})
export class ServiceDetailComponent implements OnInit {
  service: any = null;
  medicalEquipment = false;
  medicalEquipments: any = [];
  allEquipments: any = [];
  filteredEquipments: any = [];
  categories: string[] = [
    'All',
    'Masks',
    'Monitoring',
    'Nimbus Bed',
    'BiPAP/CPAP',
    'Cots & Mattress',
    'Respiratory',
    'Oxygen Concentrator',
    'DVT Pump',
    'Pumps',
    'Suction',
    'Ventilator',
    'Wheel Chair',
    'Accessories',
  ];
  selectedCategory = 'All';
  searchText = '';

  constructor(
    private route: ActivatedRoute,
    private serviceDataService: ServiceDataService,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const serviceId = idParam 
    if (serviceId === 'Prescribed Medicine Delivery') {
      this.medicalEquipment = true;
      this.allEquipments = this.serviceDataService.getAll();
      this.applyFilters();
    } else {
      this.medicalEquipment = false;
      if (serviceId !== null) {
        this.service = this.serviceDataService.getServiceById(serviceId);
      }
    }
  }
  applyFilters() {
    this.filteredEquipments = this.allEquipments.filter((item: any) => {
      const matchesCategory = this.selectedCategory === 'All' || item.category === this.selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(this.searchText.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
}
