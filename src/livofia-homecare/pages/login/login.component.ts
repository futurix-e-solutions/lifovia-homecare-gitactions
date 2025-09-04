import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section class="py-5 bg-light-green min-vh-100 d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7">
            <div class="medical-card p-5">
              <div class="text-center mb-4">
                <i class="pi pi-heart-fill text-primary-green mb-3" style="font-size: 3rem;"></i>
                <h2 class="text-primary-green fw-bold">Welcome Back</h2>
                <p class="text-muted">Sign in to access your medical dashboard</p>
              </div>

              <form (ngSubmit)="onLogin()" #loginForm="ngForm">
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    [(ngModel)]="loginData.email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    [(ngModel)]="loginData.password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember" [(ngModel)]="loginData.remember" name="remember" />
                    <label class="form-check-label small" for="remember"> Remember me </label>
                  </div>
                  <a href="#" class="text-primary-green small text-decoration-none">Forgot Password?</a>
                </div>

                <button type="submit" class="btn btn-primary-green w-100 mb-3" [disabled]="!loginForm.valid">
                  <i class="pi pi-sign-in me-2"></i>
                  Sign In
                </button>

                <div class="text-center">
                  <p class="small text-muted mb-3">Don't have an account?</p>
                  <button type="button" class="btn btn-outline-green w-100" (click)="showRegister = !showRegister">
                    <i class="pi pi-user-plus me-2"></i>
                    Create New Account
                  </button>
                </div>
              </form>
            </div>

            <!-- Registration Form -->
            <div class="medical-card p-5 mt-4" *ngIf="showRegister">
              <div class="text-center mb-4">
                <h3 class="text-primary-green fw-bold">Create Account</h3>
                <p class="text-muted">Join MediCare Home for personalized healthcare</p>
              </div>

              <form (ngSubmit)="onRegister()" #registerForm="ngForm">
                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" [(ngModel)]="registerData.firstName" name="firstName" required />
                  </div>
                  <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" [(ngModel)]="registerData.lastName" name="lastName" required />
                  </div>
                </div>

                <div class="mb-3">
                  <label for="regEmail" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="regEmail" [(ngModel)]="registerData.email" name="regEmail" required />
                </div>

                <div class="mb-3">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input type="tel" class="form-control" id="phone" [(ngModel)]="registerData.phone" name="phone" required />
                </div>

                <div class="mb-3">
                  <label for="regPassword" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="regPassword"
                    [(ngModel)]="registerData.password"
                    name="regPassword"
                    required
                  />
                </div>

                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" id="terms" [(ngModel)]="registerData.terms" name="terms" required />
                  <label class="form-check-label small" for="terms"> I agree to the Terms of Service and Privacy Policy </label>
                </div>

                <button type="submit" class="btn btn-primary-green w-100" [disabled]="!registerForm.valid">
                  <i class="pi pi-user-plus me-2"></i>
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LoginComponent {
  showRegister = false;

  loginData = {
    email: '',
    password: '',
    remember: false,
  };

  registerData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    terms: false,
  };

  onLogin() {
    console.log('Login attempt:', this.loginData);
    alert('Login successful! Redirecting to dashboard...');
    // Here you would typically handle authentication
  }

  onRegister() {
    console.log('Registration attempt:', this.registerData);
    alert('Account created successfully! Please check your email for verification.');
    this.showRegister = false;
  }
}
