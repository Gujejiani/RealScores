import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { iif } from 'rxjs';

@Directive({
  selector: '[rotate]',
})
export class RotateDirective {
  @HostBinding('class.rotate') rotate = false;

  constructor(el: ElementRef) {
    const dropDown = el.nativeElement.closest('.dropdown');
    if (dropDown) {
      dropDown.addEventListener('click', () => {
        this.rotate = !this.rotate;
      });
    }
  }
}
