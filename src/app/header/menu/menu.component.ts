import { Component, OnInit } from '@angular/core';
import { AuthService, User } from './form-template/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  showSettingOverlay: boolean = false;
  showFormModal: boolean = false;
  type: string;
  oppositeType: string;
  darkTheme: boolean = false;
  showMobileMenu: boolean = false;
  user = null;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.loggedUser.subscribe((user: User) => {
      this.user = user;
    });
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
}
