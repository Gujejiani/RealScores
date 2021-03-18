import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  constructor() {}

  darkTheme: boolean = false;

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
  registrationClicked() {
    this.type = 'Sign Up';
    this.oppositeType = 'Log In';
    this.showFormModal = !this.showFormModal;
  }
  ngOnInit(): void {}
}
