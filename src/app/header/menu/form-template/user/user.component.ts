import { Component, Input, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  showDropDown: boolean = false;
  user = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedUser.subscribe((user) => {
      this.user = true;
      console.log(this.user);
    });
    this.user = false;
    console.log(this.user);
    console.log('subscribed');
  }
  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  onLogout() {
    console.log('log out');
  }
}
