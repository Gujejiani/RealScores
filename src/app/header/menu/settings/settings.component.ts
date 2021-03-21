import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input() showSettingsOverlay: boolean = false;
  @Output() hideModal = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  closeModal() {
    this.hideModal.emit();
    this.showSettingsOverlay = !this.showSettingsOverlay;
  }
}
