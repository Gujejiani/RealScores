import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
export interface User {
  username: string;
  email: string;
  password: string;
  token?: boolean | string;
}

interface Response {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  loggedUser = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}
  SignUp(email: string, password: string) {
    return this.http
      .post<Response>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCM2W6uIpOPRTlbvwTa3fdfUAmZSvVQeX0',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.errorHandling));
  }

  Login(email: string, password: string) {
    return this.http
      .post<Response>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCM2W6uIpOPRTlbvwTa3fdfUAmZSvVQeX0',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.errorHandling));
  }

  errorHandling(errorResponse) {
    let errorMessage = 'An unknown error occurred';
    console.log(errorResponse);
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This Emails is already exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'password is invalid';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'email does not exist';
        break;
    }

    return throwError(errorMessage);
  }

  LogOut() {
    this.loggedUser.value.token = false;
    this.saveUserToLocalStorage(this.loggedUser.value);
    this.loggedUser.next(null);
  }

  saveUserToLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  AutoLogin() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.token) {
      return false;
    }
    this.loggedUser.next(user);
  }
  getUserName(email) {
    const user: User = JSON.parse(localStorage.getItem('user'));
    console.log(user.email === email);
    console.log(user.username);
    console.log(user);
    if (user.email === email) {
      return user.username;
    }

    return 'USER';
  }
}
