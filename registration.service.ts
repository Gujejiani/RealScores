import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  showFrom = new EventEmitter<void>();
  showLoginForm: boolean = false;
  showRegistrationForm: boolean = false;

  onShowLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }
  onShowRegistrationForm() {
    this.showRegistrationForm = !this.showRegistrationForm;
  }
}
