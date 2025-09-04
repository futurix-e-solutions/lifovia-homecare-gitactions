import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceDataService } from '../../services/service-data.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-5 bg-light-green">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 fw-bold text-primary-green mb-4">Book Your Service</h1>
            <p class="lead text-muted">Schedule professional medical care at your convenience</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="medical-card p-4">
              <h3 class="text-primary-green mb-4">Booking Information</h3>

              <form (ngSubmit)="onSubmit()" #bookingForm="ngForm">
                <!-- Patient Information -->
                <div class="mb-4">
                  <h5 class="text-primary-green mb-3">Patient Information</h5>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="patientFirstName" class="form-label">Patient First Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="patientFirstName"
                        [(ngModel)]="bookingData.patient.firstName"
                        name="patientFirstName"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="patientLastName" class="form-label">Patient Last Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="patientLastName"
                        [(ngModel)]="bookingData.patient.lastName"
                        name="patientLastName"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="age" class="form-label">Age *</label>
                      <input
                        type="number"
                        class="form-control"
                        id="age"
                        [(ngModel)]="bookingData.patient.age"
                        name="age"
                        min="1"
                        max="120"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="gender" class="form-label">Gender *</label>
                      <select class="form-select" id="gender" [(ngModel)]="bookingData.patient.gender" name="gender" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Contact Information -->
                <div class="mb-4">
                  <h5 class="text-primary-green mb-3">Contact Information</h5>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="phone" class="form-label">Phone Number *</label>
                      <input type="tel" class="form-control" id="phone" [(ngModel)]="bookingData.contact.phone" name="phone" required />
                    </div>
                    <div class="col-md-6">
                      <label for="email" class="form-label">Email Address</label>
                      <input type="email" class="form-control" id="email" [(ngModel)]="bookingData.contact.email" name="email" />
                    </div>
                    <div class="col-12">
                      <label for="address" class="form-label">Complete Address *</label>
                      <textarea
                        class="form-control"
                        id="address"
                        rows="3"
                        [(ngModel)]="bookingData.contact.address"
                        name="address"
                        placeholder="Enter complete address with landmarks"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <!-- Service Details -->
                <div class="mb-4">
                  <h5 class="text-primary-green mb-3">Service Details</h5>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="service" class="form-label">Service Required *</label>
                      <select class="form-select" id="service" [(ngModel)]="bookingData.service.type" name="service" required>
                        <option value="">Select a service</option>
                        <option *ngFor="let service of services" [value]="service.id">{{ service.title }}</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="urgency" class="form-label">Urgency Level *</label>
                      <select class="form-select" id="urgency" [(ngModel)]="bookingData.service.urgency" name="urgency" required>
                        <option value="">Select urgency</option>
                        <option value="emergency">Emergency (Immediate)</option>
                        <option value="urgent">Urgent (Within 24 hours)</option>
                        <option value="routine">Routine (Within 3-5 days)</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="preferredDate" class="form-label">Preferred Date *</label>
                      <input
                        type="date"
                        class="form-control"
                        id="preferredDate"
                        [(ngModel)]="bookingData.service.preferredDate"
                        name="preferredDate"
                        [min]="today"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="preferredTime" class="form-label">Preferred Time *</label>
                      <select
                        class="form-select"
                        id="preferredTime"
                        [(ngModel)]="bookingData.service.preferredTime"
                        name="preferredTime"
                        required
                      >
                        <option value="">Select time slot</option>
                        <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                        <option value="evening">Evening (5:00 PM - 9:00 PM)</option>
                        <option value="night">Night (9:00 PM - 8:00 AM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Medical Information -->
                <div class="mb-4">
                  <h5 class="text-primary-green mb-3">Medical Information</h5>
                  <div class="mb-3">
                    <label for="medicalHistory" class="form-label">Medical History</label>
                    <textarea
                      class="form-control"
                      id="medicalHistory"
                      rows="3"
                      [(ngModel)]="bookingData.medical.history"
                      name="medicalHistory"
                      placeholder="Please provide relevant medical history, current medications, allergies, etc."
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="currentCondition" class="form-label">Current Condition/Symptoms *</label>
                    <textarea
                      class="form-control"
                      id="currentCondition"
                      rows="3"
                      [(ngModel)]="bookingData.medical.currentCondition"
                      name="currentCondition"
                      placeholder="Describe the current medical condition or symptoms"
                      required
                    ></textarea>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="insurance"
                      [(ngModel)]="bookingData.medical.hasInsurance"
                      name="insurance"
                    />
                    <label class="form-check-label" for="insurance"> I have medical insurance coverage </label>
                  </div>
                </div>

                <!-- Terms and Conditions -->
                <div class="mb-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="consent"
                      [(ngModel)]="bookingData.consent"
                      name="consent"
                      required
                    />
                    <label class="form-check-label small" for="consent">
                      I consent to the medical examination and treatment, and agree to the
                      <a href="#" class="text-primary-green">Terms of Service</a> and
                      <a href="#" class="text-primary-green">Privacy Policy</a>
                    </label>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary-green btn-lg" [disabled]="!bookingForm.valid">
                  <i class="pi pi-calendar me-2"></i>
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="medical-card p-4 mb-4">
              <h5 class="text-primary-green mb-3">Booking Summary</h5>
              <div class="mb-3" *ngIf="selectedService">
                <strong>Service:</strong>
                <p class="mb-1">{{ selectedService.title }}</p>
                <small class="text-muted">{{ selectedService.description }}</small>
              </div>
              <div class="mb-3">
                <strong>Estimated Cost:</strong>
                <p class="text-primary-green fw-semibold mb-0">Starting from ₹2,500</p>
                <small class="text-muted">Final cost depends on specific requirements</small>
              </div>
              <div class="alert alert-info">
                <i class="pi pi-info-circle me-2"></i>
                <small>Our team will contact you within 30 minutes to confirm the booking and provide exact pricing.</small>
              </div>
            </div>

            <div class="medical-card p-4 mb-4">
              <h6 class="text-primary-green mb-3">What to Expect</h6>
              <ul class="list-unstyled small">
                <li class="mb-2"><i class="pi pi-check text-primary-green me-2"></i>Confirmation call within 30 minutes</li>
                <li class="mb-2"><i class="pi pi-check text-primary-green me-2"></i>Professional medical team</li>
                <li class="mb-2"><i class="pi pi-check text-primary-green me-2"></i>All necessary equipment provided</li>
                <li class="mb-2"><i class="pi pi-check text-primary-green me-2"></i>Follow-up care included</li>
              </ul>
            </div>

            <div class="medical-card p-4">
              <h6 class="text-primary-green mb-3">Need Help?</h6>
              <p class="small text-muted mb-3">Our booking specialists are available to assist you.</p>
              <button class="btn btn-outline-green w-100 mb-2">
                <i class="pi pi-phone me-2"></i>
                Call: +1 (234) 567-8900
              </button>
              <button class="btn btn-outline-green w-100">
                <i class="pi pi-whatsapp me-2"></i>
                WhatsApp Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BookingComponent implements OnInit {
  today = new Date().toISOString().split('T')[0];
  services = this.serviceDataService.getAllServices();
  selectedService: any = null;

  bookingData = {
    patient: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
    },
    contact: {
      phone: '',
      email: '',
      address: '',
    },
    service: {
      type: '',
      urgency: '',
      preferredDate: '',
      preferredTime: '',
    },
    medical: {
      history: '',
      currentCondition: '',
      hasInsurance: false,
    },
    consent: false,
  };

  constructor(
    private route: ActivatedRoute,
    private serviceDataService: ServiceDataService,
  ) {}

  ngOnInit() {
    // Pre-select service if coming from service page
    this.route.queryParams.subscribe(params => {
      if (params['service']) {
        this.bookingData.service.type = params['service'];
        this.selectedService = this.serviceDataService.getServiceById(parseInt(params['service']));
      }
    });
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Booking submitted:', this.bookingData);
      alert('Booking confirmed! Our team will contact you within 30 minutes to finalize the details.');
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.bookingData.patient.firstName &&
      this.bookingData.patient.lastName &&
      this.bookingData.patient.age &&
      this.bookingData.patient.gender &&
      this.bookingData.contact.phone &&
      this.bookingData.contact.address &&
      this.bookingData.service.type &&
      this.bookingData.service.urgency &&
      this.bookingData.service.preferredDate &&
      this.bookingData.service.preferredTime &&
      this.bookingData.medical.currentCondition &&
      this.bookingData.consent
    );
  }

  private resetForm() {
    this.bookingData = {
      patient: { firstName: '', lastName: '', age: '', gender: '' },
      contact: { phone: '', email: '', address: '' },
      service: { type: '', urgency: '', preferredDate: '', preferredTime: '' },
      medical: { history: '', currentCondition: '', hasInsurance: false },
      consent: false,
    };
  }
}
