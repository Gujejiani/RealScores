import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService, User } from './form-template/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  showSettingOverlay: boolean = false;
  showFormModal: boolean = false;
  type: string;
  oppositeType: string;
  darkTheme: boolean = false;
  showMobileMenu: boolean = false;
  user = null;
  subscription: Subscription;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.subscription = this.authService.loggedUser.subscribe((user: User) => {
      this.user = user;
    });
    this.authService.AutoLogin();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  menuClicked() {
    this.showMobileMenu = !this.showMobileMenu;
  }
  themeChanged() {
    this.darkTheme = !this.darkTheme;
  }

  onSettingsClick() {
    this.showSettingOverlay = !this.showSettingOverlay;
  }
  loginClicked() {
    this.type = 'Login';
    this.oppositeType = 'Sign Up';
    this.showFormModal = !this.showFormModal;
  }
  hideRegistrationModal() {
    console.log('sd');
    this.showFormModal = false;
  }
  registrationClicked() {
    this.type = 'Sign Up';
    this.oppositeType = 'Log In';
    console.log(this.showFormModal);
    this.showFormModal = !this.showFormModal;
  }
  changeAuthenticationMethod(type: string) {
    console.log(type);
    if (type === 'Sign Up') {
      this.type = 'Sign Up';
      this.oppositeType = 'Login';
    }
    if (type === 'Login') {
      this.type = 'Login';
      this.oppositeType = 'Sign Up';
    }
    console.log(this.type);
  }
}
