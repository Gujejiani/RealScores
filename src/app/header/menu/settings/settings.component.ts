import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input() showSettingsOverlay: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  closeModal() {
    this.showSettingsOverlay = !this.showSettingsOverlay;
  }
}
