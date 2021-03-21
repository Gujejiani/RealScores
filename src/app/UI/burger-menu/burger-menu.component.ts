import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent implements OnInit {
  @Output() onMenuClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  menuClicked() {
    this.onMenuClick.emit();
  }
}
