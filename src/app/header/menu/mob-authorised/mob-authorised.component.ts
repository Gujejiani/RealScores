import { Component, Input, OnInit } from '@angular/core';
import { AuthService, User } from '../form-template/auth.service';

@Component({
  selector: 'app-mob-authorised',
  templateUrl: './mob-authorised.component.html',
  styleUrls: ['./mob-authorised.component.scss'],
})
export class MobAuthorisedComponent implements OnInit {
  @Input() user: User;
  @Input() showLogout: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onLogOut() {
    this.authService.LogOut();
  }
}
