import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  @Output() onOverlayClick = new EventEmitter<void>();
  @ViewChild('overlay') overlay: ElementRef;
  constructor() {}
  @Input() show = false;
  ngOnInit(): void {}
  overlayClicked() {
    this.overlay.nativeElement.classList.toggle('overlay--show');
    console.log(this.overlay.nativeElement);
    this.onOverlayClick.emit();
  }
}
