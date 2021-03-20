import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss'],
})
export class NavDropdownComponent implements OnInit {
  @Input() showDropdown: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
