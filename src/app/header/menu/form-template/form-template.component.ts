import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})
export class FormTemplateComponent implements OnInit {
  @Input() showLogin: boolean = false;
  @Input() type: string;
  @Input() oppositeType: string;
  @Output() hideModal = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  hideLoginOverlay() {
    this.hideModal.emit();
  }
}
