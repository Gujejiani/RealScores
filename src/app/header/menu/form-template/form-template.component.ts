import { Component, Input, OnInit } from '@angular/core';
import { RegistrationService } from 'registration.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})
export class FormTemplateComponent implements OnInit {
  @Input() showLogin: boolean = false;
  @Input() type: string;
  @Input() oppositeType: string;
  constructor() {}

  ngOnInit(): void {}

  hideLoginOverlay() {
    this.showLogin = false;
  }
}
