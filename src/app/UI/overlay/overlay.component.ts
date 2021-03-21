import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  @Input() show;
  @Output() onOverlayClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  overlayClick() {
    this.onOverlayClick.emit();
    console.log('clicked');
  }
}
