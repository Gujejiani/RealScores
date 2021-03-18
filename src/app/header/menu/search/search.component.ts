import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}
  showOverlay = false;
  @ViewChild('searchModal') modal: ElementRef;

  ngOnInit(): void {}
  searchClicked() {
    this.modal.nativeElement.classList.toggle('search__modal--show');
    this.showOverlay = !this.showOverlay;
  }

  closeModal() {
    this.searchClicked();
  }
}
