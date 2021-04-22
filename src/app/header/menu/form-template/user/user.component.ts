import { Component, Input, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  showDropDown: boolean = false;
  @Input() user: User | boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  toggleDropdown() {
    console.log('why dis have to work');
    this.showDropDown = !this.showDropDown;
  }
  onLogout() {
    this.showDropDown = false;
    this.authService.LogOut();
  }
}
