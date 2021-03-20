import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showNavDropdown: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleNavDRopDown() {
    this.showNavDropdown = !this.showNavDropdown;
  }
}
