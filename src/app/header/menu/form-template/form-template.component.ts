import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from './auth.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})
export class FormTemplateComponent implements OnInit {
  @Input() showLogin: boolean = false;
  @Input() type: string;
  @Input() oppositeType: string;
  @Output() hideModal = new EventEmitter<void>();
  user: User | null = null;
  errorMessage: string = '';
  constructor(private authService: AuthService) {}
  inputs: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {}
  onSubmit() {
    const { email, password } = this.inputs.value;
    if (this.type === 'Sign Up') {
      this.authService.SignUp(email, password).subscribe(
        (response) => {
          this.authService.loggedUser.next(this.inputs.value);
        },
        (message: string) => {
          this.errorMessage = message;
        }
      );
    }
    if (this.type === 'Login') {
      this.authService.Login(email, password).subscribe(
        (response) => {
          this.authService.loggedUser.next(this.inputs.value);
        },
        (message: string) => {
          this.errorMessage = message;
        }
      );
    }
    console.log(this.type);
  }
  hideLoginOverlay() {
    this.hideModal.emit();
  }
  changeAuthenticationMethod() {
    if (this.type === 'Sign Up') {
      this.type = 'Login';
      this.oppositeType = 'Sign Up';
    } else {
      this.type = 'Sign Up';
      this.oppositeType = 'Login';
    }
  }
}
