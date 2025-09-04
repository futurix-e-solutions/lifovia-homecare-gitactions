import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-5 bg-light-green">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="display-5 fw-bold text-primary-green mb-3">Welcome back, John!</h1>
            <p class="lead text-muted">Manage your medical appointments and health records</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <button class="btn btn-primary-green" routerLink="/booking">
              <i class="pi pi-plus me-2"></i>
              New Booking
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row g-4 mb-5">
          <div class="col-lg-3 col-md-6" *ngFor="let stat of dashboardStats">
            <div class="medical-card p-4 text-center">
              <i [class]="stat.icon" class="text-primary-green mb-3" style="font-size: 2.5rem;"></i>
              <h3 class="text-primary-green fw-bold mb-2">{{ stat.value }}</h3>
              <p class="text-muted mb-0">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-8">
            <div class="medical-card p-4 mb-4">
              <h4 class="text-primary-green mb-4">Recent Appointments</h4>
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Service</th>
                      <th>Provider</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let appointment of recentAppointments">
                      <td>{{ appointment.date }}</td>
                      <td>{{ appointment.service }}</td>
                      <td>{{ appointment.provider }}</td>
                      <td>
                        <span [class]="'badge bg-' + appointment.statusColor">
                          {{ appointment.status }}
                        </span>
                      </td>
                      <td>
                        <button class="btn btn-outline-green btn-sm">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="medical-card p-4">
              <h4 class="text-primary-green mb-4">Health Records</h4>
              <div class="row g-3">
                <div class="col-md-6" *ngFor="let record of healthRecords">
                  <div class="border rounded p-3">
                    <div class="d-flex align-items-center mb-2">
                      <i [class]="record.icon" class="text-primary-green me-2"></i>
                      <h6 class="mb-0">{{ record.title }}</h6>
                    </div>
                    <p class="small text-muted mb-2">{{ record.date }}</p>
                    <p class="small mb-0">{{ record.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="medical-card p-4 mb-4">
              <h5 class="text-primary-green mb-3">Upcoming Appointments</h5>
              <div *ngFor="let appointment of upcomingAppointments" class="border-bottom pb-3 mb-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 class="mb-1">{{ appointment.service }}</h6>
                    <p class="small text-muted mb-1">{{ appointment.date }}</p>
                    <p class="small text-muted mb-0">{{ appointment.time }}</p>
                  </div>
                  <span [class]="'badge bg-' + appointment.statusColor">
                    {{ appointment.status }}
                  </span>
                </div>
              </div>
              <button class="btn btn-outline-green w-100">
                <i class="pi pi-calendar me-2"></i>
                View All
              </button>
            </div>

            <div class="medical-card p-4 mb-4">
              <h6 class="text-primary-green mb-3">Quick Actions</h6>
              <div class="d-grid gap-2">
                <button class="btn btn-outline-green" routerLink="/booking">
                  <i class="pi pi-plus me-2"></i>
                  Book New Service
                </button>
                <button class="btn btn-outline-green">
                  <i class="pi pi-file me-2"></i>
                  Download Reports
                </button>
                <button class="btn btn-outline-green">
                  <i class="pi pi-phone me-2"></i>
                  Emergency Call
                </button>
              </div>
            </div>

            <div class="medical-card p-4">
              <h6 class="text-primary-green mb-3">Support</h6>
              <p class="small text-muted mb-3">Need help? Our support team is available 24/7.</p>
              <div class="d-grid gap-2">
                <button class="btn btn-primary-green">
                  <i class="pi pi-comments me-2"></i>
                  Live Chat
                </button>
                <button class="btn btn-outline-green">
                  <i class="pi pi-phone me-2"></i>
                  Call Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class DashboardComponent {
  dashboardStats = [
    {
      icon: 'pi pi-calendar',
      value: '12',
      label: 'Total Appointments',
    },
    {
      icon: 'pi pi-clock',
      value: '3',
      label: 'Upcoming',
    },
    {
      icon: 'pi pi-file',
      value: '8',
      label: 'Health Records',
    },
    {
      icon: 'pi pi-heart',
      value: '95%',
      label: 'Health Score',
    },
  ];

  recentAppointments = [
    {
      date: '2025-01-15',
      service: 'Doctor Consultation',
      provider: 'Dr. Sarah Johnson',
      status: 'Completed',
      statusColor: 'success',
    },
    {
      date: '2025-01-10',
      service: 'Physiotherapy',
      provider: 'Michael Chen',
      status: 'Completed',
      statusColor: 'success',
    },
    {
      date: '2025-01-05',
      service: 'Blood Test',
      provider: 'Lab Technician',
      status: 'Completed',
      statusColor: 'success',
    },
  ];

  upcomingAppointments = [
    {
      service: 'Follow-up Consultation',
      date: 'Tomorrow',
      time: '10:00 AM',
      status: 'Confirmed',
      statusColor: 'primary',
    },
    {
      service: 'Physiotherapy Session',
      date: 'Jan 20, 2025',
      time: '2:00 PM',
      status: 'Scheduled',
      statusColor: 'warning',
    },
  ];

  healthRecords = [
    {
      icon: 'pi pi-file-pdf',
      title: 'Blood Test Report',
      date: 'Jan 15, 2025',
      description: 'Complete blood count and lipid profile',
    },
    {
      icon: 'pi pi-image',
      title: 'X-Ray Report',
      date: 'Jan 10, 2025',
      description: 'Chest X-ray examination',
    },
    {
      icon: 'pi pi-heart',
      title: 'ECG Report',
      date: 'Jan 5, 2025',
      description: 'Electrocardiogram test results',
    },
    {
      icon: 'pi pi-file',
      title: 'Prescription',
      date: 'Jan 1, 2025',
      description: 'Current medication list',
    },
  ];
}
