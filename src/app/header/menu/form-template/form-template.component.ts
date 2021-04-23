import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { AuthService, User } from './auth.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})
export class FormTemplateComponent implements OnInit, OnDestroy {
  @Input() showLogin: boolean = false;
  @Input() type: string;
  @Input() oppositeType: string;
  @Output() hideModal = new EventEmitter<void>();
  @Output() changeLoginMethod = new EventEmitter<string>();
  user: User | null = null;
  errorMessage: string = '';

  subs = new SubSink();
  constructor(private authService: AuthService) {}
  inputs: FormGroup;

  ngOnInit(): void {
    this.inputs = new FormGroup({
      username: new FormControl('', [
        this.type === 'Sign Up'
          ? Validators.required
          : Validators.maxLength(10),
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  onSubmit() {
    const { email, password } = this.inputs.value;
    let userName = '';
    if (this.type === 'Sign Up') {
      this.subs.sink = this.authService
        .SignUp(email, password)

        .subscribe(
          (response) => {
            this.authService.loggedUser.next(this.inputs.value);
            this.authService.saveUserToLocalStorage({
              ...this.inputs.value,
              token: response.idToken,
            });
            this.resetForm();
          },
          (message: string) => {
            this.errorMessage = message;
          }
        );
    }
    if (this.type === 'Login') {
      this.subs.sink = this.authService
        .Login(email, password)
        .pipe(
          tap((res) => {
            const username = this.authService.getUserName(res.email);
            userName = username;
          })
        )
        .subscribe(
          (response) => {
            this.authService.loggedUser.next({
              ...this.inputs.value,
              username: userName,
            });
            this.authService.saveUserToLocalStorage({
              ...this.inputs.value,
              token: response.idToken,
              username: userName,
            });
            this.resetForm();
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
  resetForm() {
    this.inputs.reset();
    this.showLogin = false;
    this.errorMessage = '';
  }
  changeAuthenticationMethod() {
    let type: string = '';
    this.errorMessage = '';
    switch (this.type) {
      case 'Sign Up':
        type = 'Login';
        break;
      case 'Login':
        type = 'Sign Up';
        break;

      default:
        break;
    }
    this.changeLoginMethod.emit(type);
  }
}
